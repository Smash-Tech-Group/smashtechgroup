import { useEffect } from 'react';
import Banner_otherpages from '../../__public/__sections/_Banner_otherpages';
import image from '../../../assets/images/otherpages/blog.jpg';
import cocacola from '../../../assets/images/careers_and_blog/cocacola.jpg';
import { Link } from 'react-router-dom';
import Header from '../../__public/__layouts/Header';
import { UilBriefcase, UilComment, UilEye, UilSearch } from '@iconscout/react-unicons';
import Map from '../../__public/__sections/_Map';

const Blog = (props) => {
    useEffect(() => {
        document.title = `${props.company} — Blog`;
    }, []);

    return (
    <>      
    <Header />    
    <Banner_otherpages title="Blog" image={image} />

    <div className="sections pt-0" id="blog">
        <div className="search-div">
            <input type="text" placeholder="Search blog for updates" /> 
            <Link to="/" className="smashtech-button swipe-button"><UilSearch /> Search</Link>
        </div>

        <div className="flex tabs">
            <Link to="/" className="smashtech-button swipe-button">All</Link>
            <Link to="/" className="smashtech-button swipe-button transparent noborder">Business</Link>
            <Link to="/" className="smashtech-button swipe-button transparent noborder">News Updates</Link>
            <Link to="/" className="smashtech-button swipe-button transparent noborder">Smash New Releases</Link>
            <Link to="/" className="smashtech-button swipe-button transparent noborder">Smash #Project10Billion</Link>
        </div>
    </div>
    
    <div className="sections section2" id="blog">
        
        <div className="c2_1 c1-sm c1-xs blog-wrap">
            <div className="c1">
                <h2>All Blogs</h2>
                
                <div className="careers-cards">
                    <div className="flex">
                        <h3>Smash Technology Hits The Streets of Abuja</h3>
                    </div>
                    <div>
                        <span><UilBriefcase /> November 6, 2024</span> &nbsp; &nbsp; 
                        <span><UilComment /> 520 Comments</span> &nbsp; &nbsp; 
                        <span><UilEye /> 1,282 Views</span> 
                    </div>
                    <div>
                        <p>As a dynamic and growing company looking for talented individuals to join our team,
                            we offer a unique opportunity to work on cutting-edge technologies and shape the future of 
                            app-based services we offer a unique opportunity to work on cutting-edge technologies and shape the future of 
                            app-based services. <Link to="/" className="">Read more </Link> 
                        </p>
                        <Link to="/" className="smashtech-button swipe-button">Comment</Link> &nbsp; &nbsp; 
                        <Link to="/" className="smashtech-button swipe-button transparent">View Comments</Link>
                    </div>
                </div>

                <div className="careers-cards">
                    <div className="flex">
                        <h3>Ridesmash- The Way To Make Big Bucks</h3>
                    </div>
                    <div>
                        <span><UilBriefcase /> November 6, 2024</span> &nbsp; &nbsp; 
                        <span><UilComment /> 520 Comments</span> &nbsp; &nbsp; 
                        <span><UilEye /> 1,282 Views</span> 
                    </div>
                    <div>
                        <p>As a dynamic and growing company looking for talented individuals to join our team,
                            we offer a unique opportunity to work on cutting-edge technologies and shape the future of 
                            app-based services we offer a unique opportunity to work on cutting-edge technologies and shape the future of 
                            app-based services. <Link to="/" className="">Read more </Link> 
                        </p>
                        <Link to="/" className="smashtech-button swipe-button">Comment</Link> &nbsp; &nbsp; 
                        <Link to="/" className="smashtech-button swipe-button transparent">View Comments</Link>
                    </div>
                </div>

                <div className="careers-cards">
                    <div className="flex">
                        <h3>Technology, The Fast Route to Business Growth</h3>
                    </div>
                    <div>
                        <span><UilBriefcase /> November 6, 2024</span> &nbsp; &nbsp; 
                        <span><UilComment /> 520 Comments</span> &nbsp; &nbsp; 
                        <span><UilEye /> 1,282 Views</span> 
                    </div>
                    <div>
                        <p>As a dynamic and growing company looking for talented individuals to join our team,
                            we offer a unique opportunity to work on cutting-edge technologies and shape the future of 
                            app-based services we offer a unique opportunity to work on cutting-edge technologies and shape the future of 
                            app-based services. <Link to="/" className="">Read more </Link> 
                        </p>
                        <Link to="/" className="smashtech-button swipe-button">Comment</Link> &nbsp; &nbsp; 
                        <Link to="/" className="smashtech-button swipe-button transparent">View Comments</Link>
                    </div>
                </div>
            </div>

            <div>
                <h2>Recent Posts</h2><br />

                <div>
                    <div className="careers-cards">                       
                        <p>Smash Technology Hits The Streets of Abuja</p>
                        <p>Ridesmash- The Way To Make Big Bucks</p>
                        <p>Technology, The Fast Route to Business Growth</p>                        
                    </div>

                    <img src={cocacola} title="" alt="" />
                </div>
            </div>
                
        </div>        
    </div>

    <div className="sections pt-0" id="blog">
        <h2>Archives</h2><br /><br />

        <div className="flex archives">
            <Link to="/" className="smashtech-button swipe-button transparent">2024</Link>
            <Link to="/" className="smashtech-button swipe-button transparent">2023</Link>
            <Link to="/" className="smashtech-button swipe-button transparent">2022</Link>
            <Link to="/" className="smashtech-button swipe-button transparent">2021</Link>
            <Link to="/" className="smashtech-button swipe-button transparent">2020</Link>
            <Link to="/" className="smashtech-button swipe-button transparent">2019</Link>
            <Link to="/" className="smashtech-button swipe-button transparent">2018</Link>
        </div>
    </div>

    <Map />
    </>
  )
}
export default Blog;