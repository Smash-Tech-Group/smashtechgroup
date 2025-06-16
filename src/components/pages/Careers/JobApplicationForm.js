import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { baseUrl } from '../../configs/Config';
import axios from 'axios';
import Header from '../../__public/__layouts/Header';
import Banner_otherpages from '../../__public/__sections/_Banner_otherpages';

import image from '../../../assets/images/_about/about_banner.jpg';
import { Upload, FileText, X, CheckCircle, Briefcase, User, Mail, Phone, MapPin, Globe, Award } from 'lucide-react';

const JobApplicationForm = (props) => {
    const { jobId } = useParams();
    const navigate = useNavigate();
    const [job, setJob] = useState(null);
    const [loading, setLoading] = useState(true);
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState(null);
    const [uploadProgress, setUploadProgress] = useState(0);
    const [showSuccess, setShowSuccess] = useState(false);

    const [formData, setFormData] = useState({
        first_name: '',
        middle_name: '',
        last_name: '',
        dob: '',
        state_of_origin: '',
        address: '',
        email: '',
        phone: '',
        portfolio: '',
        social_link: '',
        experience: '',
        cover_letter: '',
        cv_file: null
    });

    const [errors, setErrors] = useState({});

    useEffect(() => {
        document.title = `${props.company} — Job Application`;
        if (jobId) {
            fetchJob();
        }
    }, [jobId]);

    const fetchJob = async () => {
        try {
            setLoading(true);
            const response = await axios.get(`${baseUrl}/jobs/${jobId}`);
            setJob(response.data);
        } catch (error) {
            console.error('Error fetching job:', error);
            setError('Failed to load job details');
        } finally {
            setLoading(false);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            // Validate file type (PDF, DOC, DOCX)
            const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
            if (!allowedTypes.includes(file.type)) {
                setErrors(prev => ({
                    ...prev,
                    cv_file: 'Please upload a PDF, DOC, or DOCX file'
                }));
                return;
            }
            
            // Validate file size (max 5MB)
            if (file.size > 5 * 1024 * 1024) {
                setErrors(prev => ({
                    ...prev,
                    cv_file: 'File size must be less than 5MB'
                }));
                return;
            }
            
            setFormData(prev => ({
                ...prev,
                cv_file: file
            }));
            
            if (errors.cv_file) {
                setErrors(prev => ({
                    ...prev,
                    cv_file: ''
                }));
            }
        }
    };

    const removeFile = () => {
        setFormData(prev => ({
            ...prev,
            cv_file: null
        }));
        // Clear the file input
        const fileInput = document.getElementById('cv_file');
        if (fileInput) {
            fileInput.value = '';
        }
    };

    const validateForm = () => {
        const newErrors = {};
        
        // Required fields validation
        const requiredFields = [
            'first_name', 'last_name', 'dob', 'state_of_origin', 
            'address', 'email', 'phone', 'social_link', 'experience', 'cover_letter'
        ];
        
        requiredFields.forEach(field => {
            if (!formData[field] || formData[field].toString().trim() === '') {
                newErrors[field] = 'This field is required';
            }
        });
        
        // Email validation
        if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }
        
        // Phone validation
        if (formData.phone && !/^\+?[\d\s\-\(\)]{10,}$/.test(formData.phone)) {
            newErrors.phone = 'Please enter a valid phone number';
        }
        
        // URL validation for social link and portfolio
        const urlPattern = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
        if (formData.social_link && !urlPattern.test(formData.social_link)) {
            newErrors.social_link = 'Please enter a valid URL';
        }
        
        if (formData.portfolio && !urlPattern.test(formData.portfolio)) {
            newErrors.portfolio = 'Please enter a valid URL';
        }
        
        // CV file validation
        if (!formData.cv_file) {
            newErrors.cv_file = 'Please upload your CV/Resume';
        }
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!validateForm()) {
            return;
        }
        
        setSubmitting(true);
        setUploadProgress(0);
        
        try {
            const submitData = new FormData();
            
            // Append all form data
            Object.keys(formData).forEach(key => {
                if (key === 'cv_file' && formData[key]) {
                    submitData.append('cv_file', formData[key]);
                } else if (key !== 'cv_file') {
                    submitData.append(key, formData[key]);
                }
            });
            
            const response = await axios.post(
                `${baseUrl}/jobs/${jobId}/apply`,
                submitData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                    onUploadProgress: (progressEvent) => {
                        const percentCompleted = Math.round(
                            (progressEvent.loaded * 100) / progressEvent.total
                        );
                        setUploadProgress(percentCompleted);
                    },
                }
            );
            
            if (response.status === 201 || response.status === 200) {
                setShowSuccess(true);
            }
        } catch (error) {
            console.error('Error submitting application:', error);
            if (error.response?.data?.detail) {
                setError(error.response.data.detail);
            } else {
                setError('Failed to submit application. Please try again.');
            }
        } finally {
            setSubmitting(false);
            setUploadProgress(0);
        }
    };

    if (loading) {
        return (
            <>
                <Header />
                <Banner_otherpages title="Job Application" image={image} />
                <div className="tech-loading-container">
                    <div className="tech-spinner">
                        <div className="spinner-ring"></div>
                        <div className="spinner-ring"></div>
                        <div className="spinner-ring"></div>
                    </div>
                    <h4>Loading Position Details...</h4>
                    <p>Please wait while we prepare your application form</p>
                </div>
            </>
        );
    }

    if (error && !job) {
        return (
            <>
                <Header />
                <Banner_otherpages title="Job Application" image={image} />
                <div className="tech-error-container">
                    <div className="error-content">
                        <div className="error-icon">⚠️</div>
                        <h3>Unable to Load Position</h3>
                        <p>{error}</p>
                        <button 
                            className="tech-button tech-button-primary"
                            onClick={() => navigate('/careers')}
                        >
                            Back to Careers
                        </button>
                    </div>
                </div>
            </>
        );
    }

    if (showSuccess) {
        return (
            <>
                <Header />
                <Banner_otherpages title="Application Submitted" image={image} />
               <div className="w-full min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Success Header */}
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 px-8 py-12 text-center text-white">
          <div className="flex flex-col items-center space-y-6">
            <div className="relative">
              <CheckCircle 
                size={64} 
                className="text-white drop-shadow-lg animate-pulse"
              />
              <div className="absolute -inset-4 bg-white/20 rounded-full animate-ping"></div>
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl md:text-4xl !text-white font-bold whitespace-nowrap">
                Application Submitted Successfully!
              </h2>
              <p className="text-green-100 text-lg">
                Your journey with us begins now
              </p>
            </div>
          </div>
        </div>

        {/* Success Content */}
        <div className="px-8 py-12">
          <div className="space-y-8">
            {/* Thank you message */}
            <div className="text-center space-y-4">
              <h4 className="text-2xl font-semibold text-gray-800">
                Thank you for your interest in joining our team
              </h4>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Your application for <strong className="text-green-600">{job?.title || 'Senior Full Stack Developer'}</strong> has been successfully submitted and is now under review by our hiring team.
              </p>
            </div>

            {/* Application Details Card */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="font-medium text-green-800">Application Status: Received</span>
                </div>
                <div className="text-sm text-green-600 font-mono">
                  ID: #{Math.random().toString(36).substr(2, 9).toUpperCase()}
                </div>
              </div>
            </div>

            {/* Next Steps */}
            <div className="space-y-6">
              <div className="text-center">
                <h5 className="text-xl font-semibold text-gray-800 mb-2">
                  What happens next?
                </h5>
                <div className="w-24 h-1 bg-green-500 mx-auto rounded-full"></div>
              </div>
              
              <div className="grid gap-6 md:grid-cols-3">
                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      1
                    </div>
                    <div className="flex-1 space-y-2">
                      <h6 className="font-semibold text-gray-800 whitespace-nowrap">
                        Application Review
                      </h6>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Our HR team will review your application within 3-5 business days
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      2
                    </div>
                    <div className="flex-1 space-y-2">
                      <h6 className="font-semibold text-gray-800 whitespace-nowrap">
                        Initial Screening
                      </h6>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Qualified candidates will be contacted for an initial phone/video screening
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      3
                    </div>
                    <div className="flex-1 space-y-2">
                      <h6 className="font-semibold text-gray-800 whitespace-nowrap">
                        Interview Process
                      </h6>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Technical and cultural fit interviews with our team
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-center">
              <p className="text-gray-700">
                <strong className="text-gray-800">Questions?</strong> Feel free to reach out to our HR team at{' '}
                <a 
                  href="mailto:careers@company.com" 
                  className="text-blue-600 hover:text-blue-800 font-medium underline decoration-2 underline-offset-2 hover:decoration-blue-800 transition-colors duration-200"
                >
                  careers@company.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="bg-gray-50 px-8 py-6 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg shadow-lg hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-200 whitespace-nowrap"
              onClick={() => navigate('/careers')}
            >
              Browse More Positions
            </button>
            <button 
              className="w-full sm:w-auto px-8 py-3 bg-white text-gray-700 font-semibold border-2 border-gray-300 rounded-lg hover:bg-gray-50 hover:border-gray-400 transform hover:scale-105 transition-all duration-200 whitespace-nowrap"
              onClick={() => navigate('/')}
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
            </>
        );
    }

    return (
        <>
            <Header />
            <Banner_otherpages title="Job Application Portal" image={image} />
            
            <div className="tech-form-container">
                {job && (
                    <div className="position-info-card">
                        <div className="position-header">
                            <Briefcase className="position-icon" size={32} />
                            <div className="position-details">
                                <h3 className='!text-[#F34B02]'>{job.title}</h3>
                                <div className="position-meta">
                                    <span className="position-location">
                                        <MapPin size={16} />
                                        {job.location}
                                    </span>
                                    {job.salary_range && (
                                        <span className="position-salary !text-white">
                                            <Award size={16} />
                                            {job.salary_range}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {error && (
                    <div className="tech-alert tech-alert-error">
                        <X size={20} />
                        <span>{error}</span>
                    </div>
                )}

                <div className="application-form-card">
                    <div className="form-header">
                        <h2 className='!text-white'>Submit Your Application</h2>
                        <p className='text-white'>Please fill out all required fields to complete your application</p>
                    </div>

                    <form onSubmit={handleSubmit} className="tech-form">
                        {/* Personal Information Section */}
                        <div className="form-section">
                            <div className="section-header">
                                <User className="section-icon" size={24} />
                                <h4>Personal Information</h4>
                            </div>
                            <div className="form-grid">
                                <div className="form-group col-lg-12 col-md-6 col-12">
                                    <label className="form-label">First Name *</label>
                                    <input
                                        type="text"
                                        className={`tech-input ${errors.first_name ? 'error' : ''}`}
                                        name="first_name"
                                        value={formData.first_name}
                                        onChange={handleInputChange}
                                        placeholder="Enter your first name"
                                    />
                                    {errors.first_name && <div className="error-message">{errors.first_name}</div>}
                                </div>
                                
                                <div className="form-group col-lg-12 col-md-6 col-12">
                                    <label className="form-label">Middle Name</label>
                                    <input
                                        type="text"
                                        className="tech-input"
                                        name="middle_name"
                                        value={formData.middle_name}
                                        onChange={handleInputChange}
                                        placeholder="Enter your middle name (optional)"
                                    />
                                </div>
                                
                                <div className="form-group col-lg-12 col-md-6 col-12">
                                    <label className="form-label">Last Name *</label>
                                    <input
                                        type="text"
                                        className={`tech-input ${errors.last_name ? 'error' : ''}`}
                                        name="last_name"
                                        value={formData.last_name}
                                        onChange={handleInputChange}
                                        placeholder="Enter your last name"
                                    />
                                    {errors.last_name && <div className="error-message">{errors.last_name}</div>}
                                </div>
                                
                                <div className="form-group col-lg-12 col-md-6 col-12">
                                    <label className="form-label">Date of Birth *</label>
                                    <input
                                        type="date"
                                        className={`tech-input ${errors.dob ? 'error' : ''}`}
                                        name="dob"
                                        value={formData.dob}
                                        onChange={handleInputChange}
                                    />
                                    {errors.dob && <div className="error-message">{errors.dob}</div>}
                                </div>
                                
                                <div className="form-group col-lg-12 col-md-6 col-12">
                                    <label className="form-label">State of Origin *</label>
                                    <input
                                        type="text"
                                        className={`tech-input ${errors.state_of_origin ? 'error' : ''}`}
                                        name="state_of_origin"
                                        value={formData.state_of_origin}
                                        onChange={handleInputChange}
                                        placeholder="Enter your state of origin"
                                    />
                                    {errors.state_of_origin && <div className="error-message">{errors.state_of_origin}</div>}
                                </div>
                                
                                <div className="form-group col-lg-12 col-md-6 col-12">
                                    <label className="form-label">Address *</label>
                                    <input
                                        type="text"
                                        className={`tech-input ${errors.address ? 'error' : ''}`}
                                        name="address"
                                        value={formData.address}
                                        onChange={handleInputChange}
                                        placeholder="Enter your full address"
                                    />
                                    {errors.address && <div className="error-message">{errors.address}</div>}
                                </div>
                            </div>
                        </div>

                        {/* Contact Information Section */}
                        <div className="form-section">
                            <div className="section-header">
                                <Mail className="section-icon" size={24} />
                                <h4>Contact Information</h4>
                            </div>
                            <div className="form-grid">
                                <div className="form-group col-lg-12 col-md-6 col-12">
                                    <label className="form-label">Email Address *</label>
                                    <input
                                        type="email"
                                        className={`tech-input ${errors.email ? 'error' : ''}`}
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="Enter your email address"
                                    />
                                    {errors.email && <div className="error-message">{errors.email}</div>}
                                </div>
                                
                                <div className="form-group col-lg-12 col-md-6 col-12">
                                    <label className="form-label">Phone Number *</label>
                                    <input
                                        type="tel"
                                        className={`tech-input ${errors.phone ? 'error' : ''}`}
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        placeholder="Enter your phone number"
                                    />
                                    {errors.phone && <div className="error-message">{errors.phone}</div>}
                                </div>
                                
                                <div className="form-group col-lg-12 col-md-6 col-12">
                                    <label className="form-label">LinkedIn Profile *</label>
                                    <input
                                        type="url"
                                        className={`tech-input ${errors.social_link ? 'error' : ''}`}
                                        name="social_link"
                                        value={formData.social_link}
                                        onChange={handleInputChange}
                                        placeholder="https://linkedin.com/in/yourprofile"
                                    />
                                    {errors.social_link && <div className="error-message">{errors.social_link}</div>}
                                </div>
                                
                                <div className="form-group col-lg-12 col-md-6 col-12">
                                    <label className="form-label">Portfolio Link</label>
                                    <input
                                        type="url"
                                        className={`tech-input ${errors.portfolio ? 'error' : ''}`}
                                        name="portfolio"
                                        value={formData.portfolio}
                                        onChange={handleInputChange}
                                        placeholder="https://yourportfolio.com (optional)"
                                    />
                                    {errors.portfolio && <div className="error-message">{errors.portfolio}</div>}
                                </div>
                            </div>
                        </div>

                        {/* Professional Information Section */}
                        <div className="form-section">
                            <div className="section-header">
                                <Globe className="section-icon" size={24} />
                                <h4>Professional Information</h4>
                            </div>
                            <div className="form-grid">
                                <div className="form-group col-12">
                                    <label className="form-label">Work Experience *</label>
                                    <textarea
                                        className={`tech-textarea ${errors.experience ? 'error' : ''}`}
                                        name="experience"
                                        rows="4"
                                        value={formData.experience}
                                        onChange={handleInputChange}
                                        placeholder="Describe your relevant work experience, skills, and achievements..."
                                    />
                                    {errors.experience && <div className="error-message">{errors.experience}</div>}
                                </div>
                                
                                <div className="form-group col-12">
                                    <label className="form-label">Cover Letter *</label>
                                    <textarea
                                        className={`tech-textarea ${errors.cover_letter ? 'error' : ''}`}
                                        name="cover_letter"
                                        rows="5"
                                        value={formData.cover_letter}
                                        onChange={handleInputChange}
                                        placeholder="Tell us why you're interested in this position and why you'd be a great fit..."
                                    />
                                    {errors.cover_letter && <div className="error-message">{errors.cover_letter}</div>}
                                </div>
                            </div>
                        </div>

                        {/* File Upload Section */}
                        <div className="form-section">
                            <div className="section-header">
                                <FileText className="section-icon" size={24} />
                                <h4>Resume Upload</h4>
                            </div>
                            <div className="form-grid">
                                <div className="form-group col-12">
                                    <label className="form-label">CV/Resume *</label>
                                    <div className={`tech-upload-area ${errors.cv_file ? 'error' : ''}`}>
                                        {!formData.cv_file ? (
                                            <label htmlFor="cv_file" className="upload-zone">
                                                <div className="upload-content">
                                                    <Upload className="upload-icon" size={48} />
                                                    <h5>Upload your CV/Resume</h5>
                                                    <p>Drag and drop your file here or <span className="upload-link">click to browse</span></p>
                                                    <div className="upload-formats">
                                                        <span className="format-badge">PDF</span>
                                                        <span className="format-badge">DOC</span>
                                                        <span className="format-badge">DOCX</span>
                                                        <span className="size-limit">Max 5MB</span>
                                                    </div>
                                                </div>
                                                <input
                                                    type="file"
                                                    id="cv_file"
                                                    name="cv_file"
                                                    accept=".pdf,.doc,.docx"
                                                    onChange={handleFileChange}
                                                    className="upload-input"
                                                />
                                            </label>
                                        ) : (
                                            <div className="uploaded-file">
                                                <div className="file-preview">
                                                    <FileText className="file-icon" size={24} />
                                                    <div className="file-details">
                                                        <h6>{formData.cv_file.name}</h6>
                                                        <span className="file-size">{(formData.cv_file.size / 1024 / 1024).toFixed(2)} MB</span>
                                                    </div>
                                                </div>
                                                <button
                                                    type="button"
                                                    onClick={removeFile}
                                                    className="remove-file-btn"
                                                >
                                                    <X size={16} />
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                    {errors.cv_file && <div className="error-message">{errors.cv_file}</div>}
                                </div>
                            </div>
                        </div>

                        {/* Upload Progress */}
                        {submitting && uploadProgress > 0 && (
                            <div className="upload-progress">
                                <div className="progress-info">
                                    <span>Uploading Application...</span>
                                    <span>{uploadProgress}%</span>
                                </div>
                                <div className="progress-bar">
                                    <div 
                                        className="progress-fill" 
                                        style={{width: `${uploadProgress}%`}}
                                    />
                                </div>
                            </div>
                        )}

                        {/* Submit Actions */}
                        <div className="form-actions">
                            <button
                                type="submit"
                                disabled={submitting}
                                className="tech-button tech-button-primary tech-button-large"
                            >
                                {submitting ? (
                                    <>
                                        <div className="button-spinner"></div>
                                        Submitting Application...
                                    </>
                                ) : (
                                    <>
                                        <CheckCircle size={20} />
                                        Submit Application
                                    </>
                                )}
                            </button>
                            
                            <button
                                type="button"
                                onClick={() => navigate('/careers')}
                                className="tech-button tech-button-secondary"
                                disabled={submitting}
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <style jsx>{`
                /* Tech Container Styles */
                .tech-form-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 2rem;
                    min-height: 100vh;
                }

                .tech-loading-container, .tech-error-container, .tech-success-container {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    min-height: 60vh;
                    padding: 2rem;
                }

                /* Loading Styles */
                .tech-spinner {
                    position: relative;
                    width: 80px;
                    height: 80px;
                    margin-bottom: 2rem;
                }

                .spinner-ring {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    border: 3px solid transparent;
                    border-top: 3px solid #3b82f6;
                    border-radius: 100%;
                    animation: spin 1s linear infinite;
                }

                .spinner-ring:nth-child(2) {
                    animation-delay: -0.3s;
                    border-top-color: #6366f1;
                }

                .spinner-ring:nth-child(3) {
                    animation-delay: -0.6s;
                    border-top-color: #8b5cf6;
                }

                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }

                /* Error Styles */
                .tech-error-container .error-content {
                    text-align: center;
                    padding: 3rem;
                    background: white;
                    border-radius: 16px;
                    box-shadow: 0 10px 25px rgba(0,0,0,0.1);
                }

                .error-icon {
                    font-size: 4rem;
                    margin-bottom: 1rem;
                }

                /* Success Modal Styles */
                .success-modal {
                    background: white;
                    border-radius: 20px;
                    box-shadow: 0 25px 50px rgba(0,0,0,0.15);
                    overflow: hidden;
                    max-width: 800px;
                    width: 100%;
                    animation: slideUp 0.5s ease-out;
                }

                @keyframes slideUp {
                    from { transform: translateY(50px); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }

                .success-header {
                    background: linear-gradient(135deg, #10b981 0%, #059669 100%);
                    color: white;
                    padding: 3rem 2rem;
                    text-align: center;
                }

                .success-icon {
                    margin-bottom: 1rem;
                    filter: drop-shadow(0 4px 8px rgba(0,0,0,0.2));
                }

                .success-content {
                    padding: 2rem;
                }

                .next-steps {
                    margin: 2rem 0;
                    padding: 1.5rem;
                    background: #f8fafc;
                    border-radius: 12px;
                }

                .steps-grid {
                    display: grid;
                    gap: 1.5rem;
                    margin-top: 1rem;
                }

                .step-item {
                    display: flex;
                    align-items: flex-start;
                    gap: 1rem;
                }

                .step-number {
                    background: #3b82f6;
                    color: white;
                    width: 32px;
                    height: 32px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-weight: bold;
                    font-size: 0.9rem;
                    flex-shrink: 0;
                }

                .step-content h6 {
                    margin: 0 0 0.5rem 0;
                    color: #1f2937;
                    font-weight: 600;
                }

                .step-content p {
                    margin: 0;
                    color: #6b7280;
                    font-size: 0.9rem;
                }

                .contact-info {
                    margin-top: 2rem;
                    padding: 1rem;
                    background: #e0f2fe;
                    border-radius: 8px;
                    text-align: center;
                }

                .contact-info a {
                    color: #0369a1;
                    text-decoration: none;
                    font-weight: 500;
                }

                .success-actions {
                    padding: 2rem;
                    background: #f8fafc;
                    display: flex;
                    gap: 1rem;
                    justify-content: center;
                    flex-wrap: wrap;
                }

                /* Position Info Card */
                .position-info-card {
                    background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
                    color: white;
                    padding: 2rem;
                    border-radius: 16px;
                    margin-bottom: 2rem;
                    box-shadow: 0 10px 25px rgba(0,0,0,0.1);
                }

                .position-header {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                }

                .position-icon {
                    background: rgba(255,255,255,0.2);
                    padding: 0.75rem;
                    border-radius: 12px;
                    flex-shrink: 0;
                }

                .position-details h3 {
                    margin: 0 0 0.5rem 0;
                    font-size: 1.5rem;
                    font-weight: 600;
                }

                .position-meta {
                    display: flex;
                    gap: 1.5rem;
                    flex-wrap: wrap;
                }

                .position-location, .position-salary {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    font-size: 0.9rem;
                    opacity: 0.9;
                }

                /* Alert Styles */
                .tech-alert {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    padding: 1rem 1.5rem;
                    border-radius: 12px;
                    margin-bottom: 2rem;
                    font-weight: 500;
                }

                .tech-alert-error {
                    background: #fef2f2;
                    color: #dc2626;
                    border: 1px solid #fecaca;
                }

                /* Application Form Card */
                .application-form-card {
                    background: white;
                    border-radius: 20px;
                    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
                    overflow: hidden;
                }

                .form-header {
                    background: linear-gradient(135deg, #f34b02 0%, #6366f1 100%);
                    color: white;
                    padding: 2.5rem 2rem;
                    text-align: center;
                }

                .form-header h2 {
                    margin: 0 0 0.5rem 0;
                    font-size: 2rem;
                    font-weight: 700;
                }

                .form-header p {
                    margin: 0;
                    opacity: 0.9;
                    font-size: 1.1rem;
                }

                /* Form Styles */
                .tech-form {
                    padding: 2rem;
                }

                .form-section {
                    margin-bottom: 3rem;
                }

                .section-header {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    margin-bottom: 2rem;
                    padding-bottom: 1rem;
                    border-bottom: 2px solid #e2e8f0;
                }

                .section-icon {
                    background: linear-gradient(135deg, #f34b02 0%, #6366f1 100%);
                    color: white;
                    padding: 0.5rem;
                    border-radius: 8px;
                }

                .section-header h4 {
                    margin: 0;
                    color: #1f2937;
                    font-size: 1.25rem;
                    font-weight: 600;
                }

                .form-grid {
                    display: grid;
                    gap: 1.5rem;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                }

                .form-group {
                    display: flex;
                    flex-direction: column;
                }

                .form-label {
                    font-weight: 600;
                    color: #374151;
                    margin-bottom: 0.5rem;
                    font-size: 0.95rem;
                }

                .tech-input, .tech-textarea {
                    padding: 0.875rem 1rem;
                    border: 2px solid #e5e7eb;
                    border-radius: 12px;
                    font-size: 1rem;
                    transition: all 0.3s ease;
                    background: #fafafa;
                    color: #1f2937;
                }

                .tech-input:focus, .tech-textarea:focus {
                    outline: none;
                    border-color: #3b82f6;
                    background: white;
                    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
                }

                .tech-input.error, .tech-textarea.error {
                    border-color: #ef4444;
                    background: #fef2f2;
                }

                .tech-textarea {
                    resize: vertical;
                    min-height: 120px;
                    font-family: inherit;
                }

                .error-message {
                    color: #ef4444;
                    font-size: 0.875rem;
                    margin-top: 0.5rem;
                    font-weight: 500;
                }

                /* Upload Area Styles */
                .tech-upload-area {
                    border: 2px dashed #d1d5db;
                    border-radius: 16px;
                    background: #f9fafb;
                    transition: all 0.3s ease;
                    overflow: hidden;
                }

                .tech-upload-area:hover {
                    border-color: #ef4444;
                    background: #eff6ff;
                }

                .tech-upload-area.error {
                    border-color: red;
                    background: #fef2f2;
                }

                .upload-zone {
                    display: block;
                    cursor: pointer;
                    padding: 3rem 2rem;
                    text-align: center;
                    margin: 0;
                    width: 100%;
                }

                .upload-content {
                    color: #6b7280;
                }

                .upload-icon {
                    color: #ef4444;
                    margin-bottom: 1rem;
                }

                .upload-content h5 {
                    margin: 0 0 0.5rem 0;
                    color: #1f2937;
                    font-size: 1.25rem;
                    font-weight: 600;
                }

                .upload-content p {
                    margin: 0 0 1.5rem 0;
                    font-size: 1rem;
                }

                .upload-link {
                    color: #3b82f6;
                    font-weight: 500;
                    text-decoration: underline;
                }

                .upload-formats {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.5rem;
                    flex-wrap: wrap;
                }

                .format-badge {
                    background: #e0f2fe;
                    color: #0369a1;
                    padding: 0.25rem 0.75rem;
                    border-radius: 20px;
                    font-size: 0.8rem;
                    font-weight: 500;
                }

                .size-limit {
                    color: #6b7280;
                    font-size: 0.8rem;
                    margin-left: 0.5rem;
                }

                .upload-input {
                    display: none;
                }

                .uploaded-file {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 1.5rem;
                    background: #f0f9ff;
                    border: 1px solid #bae6fd;
                    margin: 1rem;
                    border-radius: 12px;
                }

                .file-preview {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                }

                .file-icon {
                    color: #0369a1;
                    background: #e0f2fe;
                    padding: 0.5rem;
                    border-radius: 8px;
                }

                .file-details h6 {
                    margin: 0 0 0.25rem 0;
                    color: #1f2937;
                    font-weight: 600;
                }

                .file-size {
                    color: #6b7280;
                    font-size: 0.875rem;
                }

                .remove-file-btn {
                    background: #fee2e2;
                    color: #dc2626;
                    border: none;
                    padding: 0.5rem;
                    border-radius: 8px;
                    cursor: pointer;
                    transition: all 0.2s ease;
                }

                .remove-file-btn:hover {
                    background: #fecaca;
                }

                /* Progress Styles */
                .upload-progress {
                    margin: 2rem 0;
                    padding: 1.5rem;
                    background: #f8fafc;
                    border-radius: 12px;
                    border: 1px solid #e2e8f0;
                }

                .progress-info {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 0.75rem;
                    font-weight: 500;
                    color: #374151;
                }

                .progress-bar {
                    height: 8px;
                    background: #e5e7eb;
                    border-radius: 4px;
                    overflow: hidden;
                }

                .progress-fill {
                    height: 100%;
                    background: linear-gradient(90deg, #3b82f6 0%, #6366f1 100%);
                    transition: width 0.3s ease;
                }

                /* Button Styles */
                .tech-button {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    padding: 0.875rem 1.5rem;
                    border: none;
                    border-radius: 40px;
                    font-weight: 600;
                    font-size: 1rem;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    text-decoration: none;
                    justify-content: center;
                    position: relative;
                    overflow: hidden;
                }

                .tech-button:disabled {
                    opacity: 0.6;
                    cursor: not-allowed;
                }

                .tech-button-primary {
                    background: linear-gradient(135deg, #f34b02 0%, #f34b02 100%);
                    color: white;
                    box-shadow: 0 4px 12px rgba(243, 75, 2, 0.3);
                }

                .tech-button-primary:hover:not(:disabled) {
                    transform: translateY(-1px);
                    box-shadow: 0 8px 20px rgba(243, 75, 2, 0.3);
                }

                .tech-button-secondary {
                    background: #f8fafc;
                    color: #475569;
                    border: 2px solid #e2e8f0;
                }

                .tech-button-secondary:hover:not(:disabled) {
                    background: #f1f5f9;
                    border-color: #cbd5e1;
                }

                .tech-button-large {
                    padding: 1rem 2rem;
                    font-size: 1.1rem;
                }

                .button-spinner {
                    width: 20px;
                    height: 20px;
                    border: 2px solid rgba(255,255,255,0.3);
                    border-top: 2px solid white;
                    border-radius: 50%;
                    animation: spin 1s linear infinite;
                }

                .form-actions {
                    display: flex;
                    gap: 1rem;
                    justify-content: center;
                    margin-top: 3rem;
                    padding-top: 2rem;
                    border-top: 1px solid #e2e8f0;
                    flex-wrap: wrap;
                }

                /* Responsive Design */
                @media (max-width: 1024px) {
                    .form-grid {
                        grid-template-columns: 1fr 1fr;
                    }
                }

                @media (max-width: 768px) {
                    .tech-form-container {
                        padding: 1rem;
                    }

                    .form-grid {
                        grid-template-columns: 1fr;
                    }

                    .position-header {
                        flex-direction: column;
                        text-align: center;
                        gap: 1rem;
                    }

                    .position-meta {
                        justify-content: center;
                    }

                    .form-header {
                        padding: 2rem 1rem;
                    }

                    .form-header h2 {
                        font-size: 1.5rem;
                    }

                    .tech-form {
                        padding: 1.5rem;
                    }

                    .section-header {
                        flex-direction: column;
                        text-align: center;
                        gap: 0.5rem;
                    }

                    .upload-zone {
                        padding: 2rem 1rem;
                    }

                    .upload-content h5 {
                        font-size: 1.1rem;
                    }

                    .form-actions {
                        flex-direction: column;
                    }

                    .tech-button {
                        width: 100%;
                    }

                    .steps-grid {
                        gap: 1rem;
                    }

                    .step-item {
                        flex-direction: column;
                        text-align: center;
                    }

                    .success-actions {
                        flex-direction: column;
                    }
                }

                @media (max-width: 480px) {
                    .form-header h2 {
                        font-size: 1.25rem;
                    }

                    .form-header p {
                        font-size: 1rem;
                    }

                    .section-header h4 {
                        font-size: 1.1rem;
                    }

                    .upload-formats {
                        flex-direction: column;
                        gap: 0.25rem;
                    }

                    .uploaded-file {
                        flex-direction: column;
                        gap: 1rem;
                        text-align: center;
                    }
                }

                /* Animation keyframes */
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                .form-section {
                    animation: fadeIn 0.6s ease-out;
                }

                .form-section:nth-child(2) { animation-delay: 0.1s; }
                .form-section:nth-child(3) { animation-delay: 0.2s; }
                .form-section:nth-child(4) { animation-delay: 0.3s; }
                .form-section:nth-child(5) { animation-delay: 0.4s; }

                /* Custom scrollbar for textareas */
                .tech-textarea::-webkit-scrollbar {
                    width: 8px;
                }

                .tech-textarea::-webkit-scrollbar-track {
                    background: #f1f5f9;
                    border-radius: 4px;
                }

                .tech-textarea::-webkit-scrollbar-thumb {
                    background: #cbd5e1;
                    border-radius: 4px;
                }

                .tech-textarea::-webkit-scrollbar-thumb:hover {
                    background: #94a3b8;
                }
            `}</style>
        </>
    );
};

export default JobApplicationForm;