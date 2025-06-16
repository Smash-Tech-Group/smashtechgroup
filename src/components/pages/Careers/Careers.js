import { useEffect, useState } from 'react';
import { baseUrl } from '../../configs/Config';
import axios from 'axios';
import Banner_otherpages from '../../__public/__sections/_Banner_otherpages';
import image from '../../../assets/images/_about/about_banner.jpg';
import icon from '../../../assets/images/icons/rocket.png';
import recommend from '../../../assets/images/careers_and_blog/recommend.JPG';
import { Link } from 'react-router-dom';
import Header from '../../__public/__layouts/Header';
import { UilBriefcase, UilLocationPoint, UilCalendarAlt } from '@iconscout/react-unicons';
import Map from '../../__public/__sections/_Map';

const Careers = (props) => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [expandedDescriptions, setExpandedDescriptions] = useState({});
    const [expandedRequirements, setExpandedRequirements] = useState({});

    useEffect(() => {
        document.title = `${props.company} — Careers`;
        fetchJobs();
    }, []);

    const fetchJobs = async () => {
        try {
            setLoading(true);
            const response = await axios.get(`${baseUrl}/jobs/`);
            setJobs(response.data);
        } catch (error) {
            console.error('Error fetching jobs:', error);
            setError('Failed to load job listings');
        } finally {
            setLoading(false);
        }
    };

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const getJobTypeIcon = (type) => {
        return type === 'Full Time' ? <UilBriefcase /> : <UilBriefcase />;
    };

    const toggleDescriptionExpansion = (jobId) => {
        setExpandedDescriptions(prev => ({
            ...prev,
            [jobId]: !prev[jobId]
        }));
    };

    const toggleRequirementsExpansion = (jobId) => {
        setExpandedRequirements(prev => ({
            ...prev,
            [jobId]: !prev[jobId]
        }));
    };

    const truncateText = (text, maxLength = 150) => {
        if (!text) return '';
        if (text.length <= maxLength) return text;
        return text.substring(0, maxLength) + '...';
    };

    const shouldShowReadMore = (text, maxLength = 150) => {
        return text && text.length > maxLength;
    };

    // Custom Naira Icon Component
    const NairaIcon = ({ size = 16 }) => (
        <span 
            style={{ 
                fontSize: `${size}px`, 
                fontWeight: 'bold',
                display: 'inline-flex',
                alignItems: 'center',
                marginRight: '4px'
            }}
        >
            ₦
        </span>
    );

    return (
        <>      
            <Header />    
            <Banner_otherpages title="Careers" image={image} />

            <div className="flex gap-3 mt-[2rem] mb-[5rem] px-[25.9px]" id="">
                <div className="flex">
                    <img src={icon} className="h-[45px] md:h-[60px] w-[350px] md:w-[130px]" alt="Career icon" /> 
                </div>

                <div className="">
                    <h2 className="text-black font-bold text-[32px] md:text-[40px] mb-3" id="bigText ">Launch Your <span className='text-[#f34b02] bg-[rgba(243,75,2,0.3)] p-2 md:p-3'>Career</span> With Us</h2>
                    <p>Are you passionate about technology and innovation? Do you thrive in a fast-paced environment? &nbsp;
                    <b>Smash Technology</b> is a dynamic and growing company looking for talented individuals to join our team. 
                    We offer a unique opportunity to work on cutting-edge technologies and shape the future of app-based services.</p>
                </div>
            </div>
            
            <div className="px-[25.9px] !py-[3.5rem] bg-[#F3F5FC]">
                <div className='!pb-[5rem]'>
            <h2 className='text-[32px] font-semibold text-center'>Current Openings</h2>
                <p className="text-center">We are currently seeking qualified candidates for these positions</p>


                </div>
    
                {loading && (
                    <div className="text-center py-5">
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <p className="mt-2">Loading available positions...</p>
                    </div>
                )}

                {error && (
                    <div className="alert alert-danger text-center" role="alert">
                        {error}
                        <button 
                            className="btn btn-outline-danger btn-sm ms-2" 
                            onClick={fetchJobs}
                        >
                            Try Again
                        </button>
                    </div>
                )}

                {!loading && !error && (
                    <>
                        <h5 className='font-semibold text-[18px] pb-3'>Vacant Positions: <span className='text-[#f34b02]'> {jobs.length} </span></h5>
                        
                        <div className="c2_1 c1-sm c1-xs">
                            <div className="c1">
                                {jobs.length === 0 ? (
                                    <div className="text-center py-5">
                                        <h4>No Current Openings</h4>
                                        <p>We don't have any open positions at the moment, but we're always growing! 
                                        Check back soon or send us your resume at <strong>hr@smashtechgroup.com</strong></p>
                                    </div>
                                ) : (
                                    jobs.map((job) => (
                                        <div key={job.id}>
                                            <div className="object-fit bg-white p-4 rounded-2xl mb-3">
                                                <div className="flex items-center w-full justify-between">
                                                    <div className='mb-3'>
                                                        <h3 className='text-lg md:text-2xl font-semibold'>{job.title}</h3>
                                                    </div>
                                                    <div className='mb-3'>
                                                        <span className={`badge ${job.is_active ? 'bg-success' : 'bg-warning'} rounded-2xl`}>
                                                            {job.is_active ? 'Active' : 'Closed'}
                                                        </span>
                                                    </div>
                                                </div>
                                                
                                                <div className="flex flex-wrap item-center mb-3">
                                                    <span className="flex items-center md:mr-4 text-base">
                                                        {getJobTypeIcon(job.job_type)} {job.job_type}
                                                    </span>
                                                    <span className="flex items-center md:mr-4 text-base">
                                                        <UilLocationPoint /> {job.location}
                                                    </span>
                                                    {job.salary_range && (
                                                        <span className="flex items-center md:mr-4 text-base">
                                                            <NairaIcon size={16} /> {job.salary_range}
                                                        </span>
                                                    )}
                                                    <span className='flex items-center text-base'>
                                                        <UilCalendarAlt /> Posted {formatDate(job.created_at)}
                                                    </span>
                                                </div>

                                                <div>
                                                    <div className="mb-3">
                                                        <h6 className='font-semibold mb-2'>Job Description:</h6>
                                                        <p>
                                                            {expandedDescriptions[job.id] 
                                                                ? job.description 
                                                                : truncateText(job.description)
                                                            }
                                                        </p>
                                                        {shouldShowReadMore(job.description) && (
                                                            <button
                                                                onClick={() => toggleDescriptionExpansion(job.id)}
                                                                className="btn btn-link p-0 text-primary text-decoration-none"
                                                                style={{ fontSize: '0.9rem' }}
                                                            >
                                                                {expandedDescriptions[job.id] ? 'Read Less' : 'Read More'}
                                                            </button>
                                                        )}
                                                    </div>

                                                    {job.requirements && (
                                                        <div className="mb-3">
                                                            <h6 className='font-semibold mb-2'>Requirements:</h6>
                                                            <div>
                                                                {expandedRequirements[job.id] ? (
                                                                    <div 
                                                                        dangerouslySetInnerHTML={{ 
                                                                            __html: job.requirements.replace(/\n/g, '<br>') 
                                                                        }} 
                                                                    />
                                                                ) : (
                                                                    <div 
                                                                        dangerouslySetInnerHTML={{ 
                                                                            __html: truncateText(job.requirements).replace(/\n/g, '<br>') 
                                                                        }} 
                                                                    />
                                                                )}
                                                            </div>
                                                            {shouldShowReadMore(job.requirements) && (
                                                                <button
                                                                    onClick={() => toggleRequirementsExpansion(job.id)}
                                                                    className="btn btn-link p-0 text-primary text-decoration-none mt-1"
                                                                    style={{ fontSize: '0.9rem' }}
                                                                >
                                                                    {expandedRequirements[job.id] ? 'Read Less' : 'Read More'}
                                                                </button>
                                                            )}
                                                        </div>
                                                    )}

                                                    {job.application_deadline && (
                                                        <div className="mb-3">
                                                            <h6 className="text-danger">
                                                                Application Deadline: {formatDate(job.application_deadline)}
                                                            </h6>
                                                        </div>
                                                    )}

                                                    <div className="d-flex justify-content-between align-items-center">
                                                        {job.is_active ? (
                                                            <Link 
                                                                to={`/job-application/${job.id}`} 
                                                                className="smashtech-button swipe-button"
                                                            >
                                                                Apply Now
                                                            </Link>
                                                        ) : (
                                                            <span className="text-muted">Applications Closed</span>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>

                            <div id="recommend">
                                <img src={recommend} title="Recommendation" alt="Recommendation" />
                                <img src={recommend} title="Recommendation" alt="Recommendation" />
                            </div>
                        </div>
                    </>
                )}
            </div>

            <Map />
        </>
    );
};

export default Careers;