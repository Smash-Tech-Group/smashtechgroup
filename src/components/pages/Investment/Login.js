import React, { useState, useEffect } from 'react';
import { Plus, Eye, Edit, Trash2, Users, Briefcase, Clock, CheckCircle, XCircle, BarChart3, Download, Search, Filter, Calendar, MapPin, DollarSign } from 'lucide-react';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [jobs, setJobs] = useState([]);
  const [applications, setApplications] = useState([]);
  const [statistics, setStatistics] = useState({});
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [jobFilter, setJobFilter] = useState('');

  // Mock data - replace with actual API calls
  useEffect(() => {
    loadDashboardData();
  }, []);

  const loadDashboardData = async () => {
    setLoading(true);
    try {
      // Mock data - replace with actual API calls to your FastAPI backend
      setJobs([
        {
          id: 1,
          title: 'Senior Frontend Developer',
          description: 'We are looking for a skilled frontend developer...',
          location: 'Abuja',
          job_type: 'Full Time',
          salary_range: '₦800,000 - ₦1,200,000',
          application_deadline: '2025-07-15T00:00:00',
          is_active: true,
          created_at: '2025-06-01T10:00:00',
          application_count: 15
        },
        {
          id: 2,
          title: 'Backend Developer',
          description: 'Join our backend team to build scalable solutions...',
          location: 'Lagos',
          job_type: 'Remote',
          salary_range: '₦600,000 - ₦1,000,000',
          application_deadline: '2025-08-01T00:00:00',
          is_active: true,
          created_at: '2025-06-05T14:30:00',
          application_count: 8
        }
      ]);

      setApplications([
        {
          id: 1,
          job_id: 1,
          first_name: 'John',
          last_name: 'Doe',
          email: 'john.doe@email.com',
          phone: '+234-123-456-7890',
          status: 'pending',
          applied_at: '2025-06-10T09:15:00',
          job: { title: 'Senior Frontend Developer' }
        },
        {
          id: 2,
          job_id: 1,
          first_name: 'Jane',
          last_name: 'Smith',
          email: 'jane.smith@email.com',
          phone: '+234-987-654-3210',
          status: 'reviewed',
          applied_at: '2025-06-12T11:30:00',
          job: { title: 'Senior Frontend Developer' }
        }
      ]);

      setStatistics({
        total_jobs: 2,
        active_jobs: 2,
        total_applications: 23,
        applications_by_status: {
          pending: 15,
          reviewed: 5,
          interviewed: 2,
          hired: 1,
          rejected: 0
        }
      });
    } catch (error) {
      console.error('Error loading dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  const JobForm = ({ job = null, onClose, onSave }) => {
    const [formData, setFormData] = useState({
      title: job?.title || '',
      description: job?.description || '',
      requirements: job?.requirements || '',
      responsibility: job?.responsibility || '',
      location: job?.location || 'Abuja',
      job_type: job?.job_type || 'Full Time',
      salary_range: job?.salary_range || '',
      application_deadline: job?.application_deadline?.split('T')[0] || '',
      is_active: job?.is_active ?? true
    });

    const handleSubmit = (e) => {
      e.preventDefault();
      onSave({ ...formData, id: job?.id });
      onClose();
    };

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">{job ? 'Edit Job' : 'Create New Job'}</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">×</button>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Job Title *</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({...formData, title: e.target.value})}
                className="w-full p-2 border rounded-lg"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Description *</label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                className="w-full p-2 border rounded-lg h-24"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Requirements</label>
              <textarea
                value={formData.requirements}
                onChange={(e) => setFormData({...formData, requirements: e.target.value})}
                className="w-full p-2 border rounded-lg h-20"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Responsibilities</label>
              <textarea
                value={formData.responsibility}
                onChange={(e) => setFormData({...formData, responsibility: e.target.value})}
                className="w-full p-2 border rounded-lg h-20"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Location *</label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => setFormData({...formData, location: e.target.value})}
                  className="w-full p-2 border rounded-lg"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Job Type *</label>
                <select
                  value={formData.job_type}
                  onChange={(e) => setFormData({...formData, job_type: e.target.value})}
                  className="w-full p-2 border rounded-lg"
                  required
                >
                  <option value="Full Time">Full Time</option>
                  <option value="Part Time">Part Time</option>
                  <option value="Contract">Contract</option>
                  <option value="Remote">Remote</option>
                  <option value="Hybrid">Hybrid</option>
                  <option value="Internship">Internship</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Salary Range</label>
                <input
                  type="text"
                  value={formData.salary_range}
                  onChange={(e) => setFormData({...formData, salary_range: e.target.value})}
                  className="w-full p-2 border rounded-lg"
                  placeholder="e.g., ₦500,000 - ₦800,000"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Application Deadline</label>
                <input
                  type="date"
                  value={formData.application_deadline}
                  onChange={(e) => setFormData({...formData, application_deadline: e.target.value})}
                  className="w-full p-2 border rounded-lg"
                />
              </div>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="is_active"
                checked={formData.is_active}
                onChange={(e) => setFormData({...formData, is_active: e.target.checked})}
                className="mr-2"
              />
              <label htmlFor="is_active" className="text-sm font-medium">Active Job Posting</label>
            </div>

            <div className="flex gap-2 pt-4">
              <button
                type="submit"
                className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
              >
                {job ? 'Update Job' : 'Create Job'}
              </button>
              <button
                type="button"
                onClick={onClose}
                className="flex-1 bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  const DashboardStats = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">Total Jobs</p>
            <p className="text-2xl font-bold text-gray-900">{statistics.total_jobs || 0}</p>
          </div>
          <Briefcase className="h-8 w-8 text-blue-600" />
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">Active Jobs</p>
            <p className="text-2xl font-bold text-green-600">{statistics.active_jobs || 0}</p>
          </div>
          <CheckCircle className="h-8 w-8 text-green-600" />
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">Total Applications</p>
            <p className="text-2xl font-bold text-purple-600">{statistics.total_applications || 0}</p>
          </div>
          <Users className="h-8 w-8 text-purple-600" />
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">Pending Review</p>
            <p className="text-2xl font-bold text-orange-600">{statistics.applications_by_status?.pending || 0}</p>
          </div>
          <Clock className="h-8 w-8 text-orange-600" />
        </div>
      </div>
    </div>
  );

  const JobsTable = () => {
    const [showJobForm, setShowJobForm] = useState(false);
    const [editingJob, setEditingJob] = useState(null);

    const handleJobSave = (jobData) => {
      if (editingJob) {
        setJobs(jobs.map(job => job.id === editingJob.id ? {...job, ...jobData} : job));
      } else {
        setJobs([...jobs, {...jobData, id: Date.now(), created_at: new Date().toISOString()}]);
      }
      setEditingJob(null);
    };

    const handleDeleteJob = (jobId) => {
      if (window.confirm('Are you sure you want to delete this job?')) {
        setJobs(jobs.filter(job => job.id !== jobId));
      }
    };

    return (
      <div className="bg-white rounded-lg shadow-md">
        <div className="p-6 border-b">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">Job Postings</h2>
            <button
              onClick={() => setShowJobForm(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2"
            >
              <Plus className="h-4 w-4" />
              New Job
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Title</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Location</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Applications</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {jobs.map(job => (
                <tr key={job.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div>
                      <div className="font-medium text-gray-900">{job.title}</div>
                      <div className="text-sm text-gray-500">{job.salary_range}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">{job.location}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{job.job_type}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{job.application_count || 0}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      job.is_active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {job.is_active ? 'Active' : 'Inactive'}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium">
                    <div className="flex gap-2">
                      <button className="text-blue-600 hover:text-blue-900">
                        <Eye className="h-4 w-4" />
                      </button>
                      <button 
                        onClick={() => {
                          setEditingJob(job);
                          setShowJobForm(true);
                        }}
                        className="text-green-600 hover:text-green-900"
                      >
                        <Edit className="h-4 w-4" />
                      </button>
                      <button 
                        onClick={() => handleDeleteJob(job.id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {showJobForm && (
          <JobForm
            job={editingJob}
            onClose={() => {
              setShowJobForm(false);
              setEditingJob(null);
            }}
            onSave={handleJobSave}
          />
        )}
      </div>
    );
  };

  const ApplicationsTable = () => {
    const filteredApplications = applications.filter(app => {
      const matchesSearch = app.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           app.last_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           app.email.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus = !statusFilter || app.status === statusFilter;
      const matchesJob = !jobFilter || app.job_id.toString() === jobFilter;
      return matchesSearch && matchesStatus && matchesJob;
    });

    const handleStatusUpdate = (applicationId, newStatus) => {
      setApplications(applications.map(app => 
        app.id === applicationId ? {...app, status: newStatus} : app
      ));
    };

    return (
      <div className="bg-white rounded-lg shadow-md">
        <div className="p-6 border-b">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Applications</h2>
            <div className="flex gap-2">
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 flex items-center gap-2">
                <Download className="h-4 w-4" />
                Export
              </button>
            </div>
          </div>

          <div className="flex gap-4 mb-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search applicants..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border rounded-lg w-full"
                />
              </div>
            </div>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-4 py-2 border rounded-lg"
            >
              <option value="">All Status</option>
              <option value="pending">Pending</option>
              <option value="reviewed">Reviewed</option>
              <option value="interviewed">Interviewed</option>
              <option value="hired">Hired</option>
              <option value="rejected">Rejected</option>
            </select>
            <select
              value={jobFilter}
              onChange={(e) => setJobFilter(e.target.value)}
              className="px-4 py-2 border rounded-lg"
            >
              <option value="">All Jobs</option>
              {jobs.map(job => (
                <option key={job.id} value={job.id}>{job.title}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Applicant</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Job</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Contact</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Applied</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredApplications.map(application => (
                <tr key={application.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="font-medium text-gray-900">
                      {application.first_name} {application.last_name}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">{application.job.title}</td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900">{application.email}</div>
                    <div className="text-sm text-gray-500">{application.phone}</div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {new Date(application.applied_at).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4">
                    <select
                      value={application.status}
                      onChange={(e) => handleStatusUpdate(application.id, e.target.value)}
                      className={`text-xs font-semibold rounded-full px-2 py-1 border-0 ${
                        application.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                        application.status === 'reviewed' ? 'bg-blue-100 text-blue-800' :
                        application.status === 'interviewed' ? 'bg-purple-100 text-purple-800' :
                        application.status === 'hired' ? 'bg-green-100 text-green-800' :
                        'bg-red-100 text-red-800'
                      }`}
                    >
                      <option value="pending">Pending</option>
                      <option value="reviewed">Reviewed</option>
                      <option value="interviewed">Interviewed</option>
                      <option value="hired">Hired</option>
                      <option value="rejected">Rejected</option>
                    </select>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium">
                    <div className="flex gap-2">
                      <button className="text-blue-600 hover:text-blue-900">
                        <Eye className="h-4 w-4" />
                      </button>
                      <button className="text-green-600 hover:text-green-900">
                        <Download className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  const AnalyticsView = () => (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Application Status Distribution</h2>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
          {Object.entries(statistics.applications_by_status || {}).map(([status, count]) => (
            <div key={status} className="text-center">
              <div className={`text-2xl font-bold ${
                status === 'pending' ? 'text-yellow-600' :
                status === 'reviewed' ? 'text-blue-600' :
                status === 'interviewed' ? 'text-purple-600' :
                status === 'hired' ? 'text-green-600' :
                'text-red-600'
              }`}>
                {count}
              </div>
              <div className="text-sm text-gray-600 capitalize">{status}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Recent Job Performance</h2>
        <div className="space-y-4">
          {jobs.map(job => (
            <div key={job.id} className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <div className="font-medium">{job.title}</div>
                <div className="text-sm text-gray-500">{job.location} • {job.job_type}</div>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold">{job.application_count || 0}</div>
                <div className="text-sm text-gray-500">Applications</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="text-sm text-gray-600">Job Management System</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">Welcome, Admin</span>
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">A</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-white rounded-lg shadow-sm mb-6">
          <nav className="flex space-x-8 px-6">
            {[
              { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
              { id: 'jobs', label: 'Jobs', icon: Briefcase },
              { id: 'applications', label: 'Applications', icon: Users },
              { id: 'analytics', label: 'Analytics', icon: BarChart3 }
            ].map(tab => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 py-4 px-2 border-b-2 font-medium text-sm ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Content */}
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        ) : (
          <>
            {activeTab === 'dashboard' && (
              <div>
                <DashboardStats />
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold mb-4">Recent Applications</h3>
                    <div className="space-y-3">
                      {applications.slice(0, 5).map(app => (
                        <div key={app.id} className="flex justify-between items-center">
                          <div>
                            <div className="font-medium">{app.first_name} {app.last_name}</div>
                            <div className="text-sm text-gray-500">{app.job.title}</div>
                          </div>
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            app.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                            app.status === 'reviewed' ? 'bg-blue-100 text-blue-800' :
                            'bg-green-100 text-green-800'
                          }`}>
                            {app.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold mb-4">Active Jobs</h3>
                    <div className="space-y-3">
                      {jobs.filter(job => job.is_active).map(job => (
                        <div key={job.id} className="flex justify-between items-center">
                          <div>
                            <div className="font-medium">{job.title}</div>
                            <div className="text-sm text-gray-500">{job.location}</div>
                          </div>
                          <div className="text-right">
                            <div className="font-medium">{job.application_count || 0}</div>
                            <div className="text-xs text-gray-500">applications</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'jobs' && <JobsTable />}
            {activeTab === 'applications' && <ApplicationsTable />}
            {activeTab === 'analytics' && <AnalyticsView />}
          </>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;