import React, { useState, useEffect } from 'react';
import { Briefcase, MapPin, Plus, Edit2, Trash2, Users, Eye, LogOut, Calendar } from 'lucide-react';

const JobDashboard = () => {
  const [jobs, setJobs] = useState([]);
  const [applications, setApplications] = useState([]);
  const [showJobForm, setShowJobForm] = useState(false);
  const [showApplications, setShowApplications] = useState(false);
  const [showLogin, setShowLogin] = useState(true);
  const [editingJob, setEditingJob] = useState(null);
  const [selectedJobApplications, setSelectedJobApplications] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [token, setToken] = useState('');
  
  const [loginForm, setLoginForm] = useState({
    username: '',
    password: ''
  });
  
  const [jobForm, setJobForm] = useState({
    title: '',
    description: '',
    requirements: '',
    location: '',
    job_type: 'Full Time',
    salary_range: '',
    application_deadline: '',
    is_active: true
  });

  const API_BASE = 'http://localhost:8000';

  // Check if user is authenticated on mount
  useEffect(() => {
    if (token) {
      setShowLogin(false);
      fetchJobs();
      fetchApplications();
    }
  }, [token]);

  const apiRequest = async (url, options = {}) => {
    const headers = {
      'Content-Type': 'application/json',
      ...options.headers
    };

    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    const response = await fetch(`${API_BASE}${url}`, {
      ...options,
      headers
    });

    if (response.status === 401) {
      // Token expired or invalid
      setToken('');
      setShowLogin(true);
      throw new Error('Authentication required');
    }

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.detail || `HTTP error! status: ${response.status}`);
    }

    return response.json();
  };

  const handleLogin = async () => {
    if (!loginForm.username || !loginForm.password) {
      setError('Please fill in all fields');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await fetch(`${API_BASE}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginForm)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || 'Login failed');
      }

      const data = await response.json();
      setToken(data.access_token);
      setShowLogin(false);
      setLoginForm({ username: '', password: '' });
      
      // Fetch data after successful login
      await fetchJobs();
      await fetchApplications();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    setToken('');
    setShowLogin(true);
    setJobs([]);
    setApplications([]);
  };

  const fetchJobs = async () => {
    try {
      const data = await apiRequest('/jobs/');
      setJobs(data);
    } catch (err) {
      console.error('Failed to fetch jobs:', err);
      if (err.message !== 'Authentication required') {
        setError('Failed to fetch jobs');
      }
    }
  };

  const fetchApplications = async () => {
    try {
      const data = await apiRequest('/applications/');
      setApplications(data);
    } catch (err) {
      console.error('Failed to fetch applications:', err);
      if (err.message !== 'Authentication required') {
        setError('Failed to fetch applications');
      }
    }
  };

  const handleJobSubmit = async () => {
    if (!jobForm.title || !jobForm.description || !jobForm.location || !jobForm.job_type) {
      setError('Please fill in all required fields');
      return;
    }

    setLoading(true);
    setError('');

    try {
      // Prepare job data
      const jobData = {
        title: jobForm.title,
        description: jobForm.description,
        requirements: jobForm.requirements || null,
        location: jobForm.location,
        job_type: jobForm.job_type,
        salary_range: jobForm.salary_range || null,
        application_deadline: jobForm.application_deadline ? new Date(jobForm.application_deadline).toISOString() : null,
        is_active: jobForm.is_active
      };

      if (editingJob) {
        // Update existing job
        await apiRequest(`/jobs/${editingJob.id}`, {
          method: 'PUT',
          body: JSON.stringify(jobData)
        });
      } else {
        // Create new job
        await apiRequest('/jobs/', {
          method: 'POST',
          body: JSON.stringify(jobData)
        });
      }

      // Reset form and refresh data
      setJobForm({
        title: '',
        description: '',
        requirements: '',
        location: '',
        job_type: 'Full Time',
        salary_range: '',
        application_deadline: '',
        is_active: true
      });
      setEditingJob(null);
      setShowJobForm(false);
      await fetchJobs();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleEditJob = (job) => {
    setJobForm({
      title: job.title,
      description: job.description,
      requirements: job.requirements || '',
      location: job.location,
      job_type: job.job_type,
      salary_range: job.salary_range || '',
      application_deadline: job.application_deadline ? 
        new Date(job.application_deadline).toISOString().slice(0, 16) : '',
      is_active: job.is_active
    });
    setEditingJob(job);
    setShowJobForm(true);
  };

  const handleDeleteJob = async (jobId) => {
    if (!window.confirm('Are you sure you want to delete this job?')) return;

    setLoading(true);
    try {
      await apiRequest(`/jobs/${jobId}`, {
        method: 'DELETE'
      });
      await fetchJobs();
      await fetchApplications(); // Refresh applications too
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const viewJobApplications = async (jobId) => {
    try {
      const jobApplications = await apiRequest(`/applications/?job_id=${jobId}`);
      setSelectedJobApplications(jobApplications);
      setShowApplications(true);
    } catch (err) {
      setError(err.message);
    }
  };

  const getApplicationCount = (jobId) => {
    return applications.filter(app => app.job_id === jobId).length;
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString();
  };

  // Login screen
  if (showLogin) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
        <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
          <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">Admin Login</h1>
          
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4">
              {error}
            </div>
          )}

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Username
              </label>
              <input
                type="text"
                value={loginForm.username}
                onChange={(e) => setLoginForm({...loginForm, username: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your username"
                disabled={loading}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                value={loginForm.password}
                onChange={(e) => setLoginForm({...loginForm, password: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your password"
                disabled={loading}
                onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
              />
            </div>

            <button
              onClick={handleLogin}
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white py-2 rounded-lg transition-colors"
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Job Management Dashboard</h1>
              <p className="text-gray-600 mt-2">Manage job postings and track applications</p>
            </div>
            <div className="flex items-center gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">{jobs.length}</div>
                <div className="text-sm text-gray-500">Active Jobs</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">{applications.length}</div>
                <div className="text-sm text-gray-500">Total Applications</div>
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
              >
                <LogOut size={20} />
                Logout
              </button>
            </div>
          </div>
        </div>

        {/* Error display */}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4">
            {error}
            <button
              onClick={() => setError('')}
              className="float-right text-red-500 hover:text-red-700"
            >
              ✕
            </button>
          </div>
        )}

        {/* Main content */}
        {!showJobForm && !showApplications && (
          <>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Job Postings</h2>
              <button
                onClick={() => setShowJobForm(true)}
                disabled={loading}
                className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
              >
                <Plus size={20} />
                Post New Job
              </button>
            </div>

            <div className="grid gap-6">
              {jobs.map((job) => (
                <div key={job.id} className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{job.title}</h3>
                      <div className="flex items-center gap-4 text-gray-600 mb-2">
                        <span className="flex items-center gap-1">
                          <Briefcase size={16} />
                          {job.job_type}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin size={16} />
                          {job.location}
                        </span>
                        {job.salary_range && (
                          <span className="text-green-600 font-medium">
                            {job.salary_range}
                          </span>
                        )}
                      </div>
                      {job.application_deadline && (
                        <div className="flex items-center gap-1 text-sm text-orange-600">
                          <Calendar size={14} />
                          Deadline: {formatDate(job.application_deadline)}
                        </div>
                      )}
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => viewJobApplications(job.id)}
                        className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                        title="View Applications"
                      >
                        <Eye size={18} />
                      </button>
                      <button
                        onClick={() => handleEditJob(job)}
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                        title="Edit Job"
                      >
                        <Edit2 size={18} />
                      </button>
                      <button
                        onClick={() => handleDeleteJob(job.id)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        title="Delete Job"
                        disabled={loading}
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-900 mb-2">Description:</h4>
                    <p className="text-gray-700">{job.description}</p>
                  </div>
                  
                  {job.requirements && (
                    <div className="mb-4">
                      <h4 className="font-medium text-gray-900 mb-2">Requirements:</h4>
                      <p className="text-gray-700">{job.requirements}</p>
                    </div>
                  )}

                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">
                      Posted: {formatDate(job.created_at)}
                    </span>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <Users size={16} className="text-gray-400" />
                        <span className="text-sm font-medium text-gray-700">
                          {getApplicationCount(job.id)} Applications
                        </span>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        job.is_active 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {job.is_active ? 'Active' : 'Inactive'}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Job Form */}
        {showJobForm && (
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-900">
                {editingJob ? 'Edit Job' : 'Post New Job'}
              </h2>
              <button
                onClick={() => {
                  setShowJobForm(false);
                  setEditingJob(null);
                  setJobForm({
                    title: '',
                    description: '',
                    requirements: '',
                    location: '',
                    job_type: 'Full Time',
                    salary_range: '',
                    application_deadline: '',
                    is_active: true
                  });
                }}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Job Title *
                  </label>
                  <input
                    type="text"
                    required
                    value={jobForm.title}
                    onChange={(e) => setJobForm({...jobForm, title: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g. Frontend Developer"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Location *
                  </label>
                  <input
                    type="text"
                    required
                    value={jobForm.location}
                    onChange={(e) => setJobForm({...jobForm, location: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g. Abuja"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Salary Range
                  </label>
                  <input
                    type="text"
                    value={jobForm.salary_range}
                    onChange={(e) => setJobForm({...jobForm, salary_range: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g. 300k - 500k"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Job Type *
                  </label>
                  <select
                    required
                    value={jobForm.job_type}
                    onChange={(e) => setJobForm({...jobForm, job_type: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="Full Time">Full Time</option>
                    <option value="Part Time">Part Time</option>
                    <option value="Contract">Contract</option>
                    <option value="Remote">Remote</option>
                    <option value="Hybrid">Hybrid</option>
                    <option value="Internship">Internship</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Application Deadline
                  </label>
                  <input
                    type="datetime-local"
                    value={jobForm.application_deadline}
                    onChange={(e) => setJobForm({...jobForm, application_deadline: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="is_active"
                    checked={jobForm.is_active}
                    onChange={(e) => setJobForm({...jobForm, is_active: e.target.checked})}
                    className="w-4 h-4 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                  />
                  <label htmlFor="is_active" className="text-sm font-medium text-gray-700">
                    Job is Active
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Job Description *
                </label>
                <textarea
                  required
                  rows={4}
                  value={jobForm.description}
                  onChange={(e) => setJobForm({...jobForm, description: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Describe the role and responsibilities..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Requirements
                </label>
                <textarea
                  rows={4}
                  value={jobForm.requirements}
                  onChange={(e) => setJobForm({...jobForm, requirements: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="List the required skills and qualifications..."
                />
              </div>

              <div className="flex gap-4">
                <button
                  onClick={handleJobSubmit}
                  disabled={loading}
                  className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-6 py-2 rounded-lg transition-colors"
                >
                  {loading ? 'Saving...' : (editingJob ? 'Update Job' : 'Post Job')}
                </button>
                <button
                  onClick={() => {
                    setShowJobForm(false);
                    setEditingJob(null);
                  }}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-2 rounded-lg transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Applications View */}
        {showApplications && (
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-900">
                Job Applications ({selectedJobApplications.length})
              </h2>
              <button
                onClick={() => setShowApplications(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>

            {selectedJobApplications.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-gray-500">No applications yet for this job.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {selectedJobApplications.map((application) => (
                  <div key={application.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="font-semibold text-gray-900">{application.name}</h3>
                        <p className="text-gray-600">{application.email}</p>
                        <p className="text-gray-600">{application.phone}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-500">Experience: {application.experience}</p>
                        <p className="text-sm text-gray-500">
                          Applied: {formatDate(application.applied_at)}
                        </p>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          application.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                          application.status === 'reviewed' ? 'bg-blue-100 text-blue-800' :
                          application.status === 'hired' ? 'bg-green-100 text-green-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {application.status}
                        </span>
                      </div>
                    </div>
                    
                    <div className="mb-3">
                      <h4 className="font-medium text-gray-900 mb-1">Cover Letter:</h4>
                      <p className="text-gray-700 text-sm">{application.cover_letter}</p>
                    </div>
                    
                    <div className="flex gap-2">
                      {application.cv_filename && (
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm transition-colors">
                          View Resume
                        </button>
                      )}
                      <button className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-sm transition-colors">
                        Contact
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default JobDashboard;