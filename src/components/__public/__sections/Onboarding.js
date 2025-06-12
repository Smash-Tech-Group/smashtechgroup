import { useEffect } from 'react';
import Banner_otherpages from '../../__public/__sections/_Banner_otherpages';
import image from '../../../assets/images/otherpages/onboarding.jpg';
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
    <Banner_otherpages title="Onboarding" image={image} />

    <div className="sections pt-0" id="blog">
        <div className="search-div">
            <input type="text" placeholder="Search using the brand name" /> 
            <Link to="/" className="smashtech-button swipe-button"><UilSearch /> Search</Link>
        </div>

        <div className="flex tabs">
            <Link to="/" className="smashtech-button swipe-button">All</Link>
            <Link to="/" className="smashtech-button swipe-button transparent noborder">Smash Travels</Link>
            <Link to="/" className="smashtech-button swipe-button transparent noborder">Ride Smash</Link>
            <Link to="/" className="smashtech-button swipe-button transparent noborder">Qiimeet</Link>
            <Link to="/" className="smashtech-button swipe-button transparent noborder">Smash Remmit</Link>
            <Link to="/" className="smashtech-button swipe-button transparent noborder">Qiimeet</Link>
            <Link to="/" className="smashtech-button swipe-button transparent noborder">Smash Remmit</Link>
            <Link to="/" className="smashtech-button swipe-button transparent noborder">SmashWise</Link>
            <Link to="/" className="smashtech-button swipe-button transparent noborder">Smash Apartments</Link>
             <Link to="/" className="smashtech-button swipe-button transparent noborder">Smash Chat</Link>
        </div>
    </div>
    
    <div className="sections section2" id="blog">
        
        <div className="c2_1 c1-sm c1-xs blog-wrap">
            <div className="c1">
                <h2>All Onboarding Videos Avalible on YouTube</h2>
                
                <div className="careers-cards">
                    <div className="flex">
                        <h3>Smash Travaels</h3>
                    </div>
                    {/* <div>
                        <span><UilBriefcase /> November 6, 2024</span> &nbsp; &nbsp; 
                        <span><UilComment /> 520 Comments</span> &nbsp; &nbsp; 
                        <span><UilEye /> 1,282 Views</span> 
                    </div> */}
                    <div>
                        <p>
                            As a dynamic and growing company looking for talented individuals to join our team,
                            We have Provided Onboarding Video to Help you Understand what we stand for and help you align
                            with our goals and vision, Click the button to learn more... 
                            {/* <Link to="/" className="">Read more </Link>  */}
                        </p>
                        {/* <Link to="/" className="smashtech-button swipe-button">Comment</Link> &nbsp; &nbsp;  */}
                        <Link to="/" className="smashtech-button swipe-button transparent">Watch On YouTube</Link>
                    </div>
                </div>

                <div className="careers-cards">
                    <div className="flex">
                        <h3>Ridesmash</h3>
                    </div>
                    {/* <div>
                        <span><UilBriefcase /> November 6, 2024</span> &nbsp; &nbsp; 
                        <span><UilComment /> 520 Comments</span> &nbsp; &nbsp; 
                        <span><UilEye /> 1,282 Views</span> 
                    </div> */}
                    <div>
                        <p>
                            As a dynamic and growing company looking for talented individuals to join our team,
                            We have Provided Onboarding Video to Help you Understand what we stand for and help you align
                            with our goals and vision, Click the button to learn more... 
                            {/* <Link to="/" className="">Read more </Link>  */}
                        </p>
                        {/* <Link to="/" className="smashtech-button swipe-button">Comment</Link> &nbsp; &nbsp;  */}
                        <Link to="/" className="smashtech-button swipe-button transparent">Watch On YouTube</Link>
                    </div>
                </div>

                <div className="careers-cards">
                    <div className="flex">
                        <h3>Qiimeet</h3>
                    </div>
                    {/* <div>
                        <span><UilBriefcase /> November 6, 2024</span> &nbsp; &nbsp; 
                        <span><UilComment /> 520 Comments</span> &nbsp; &nbsp; 
                        <span><UilEye /> 1,282 Views</span> 
                    </div> */}
                    <div>
                        <p>
                            As a dynamic and growing company looking for talented individuals to join our team,
                            We have Provided Onboarding Video to Help you Understand what we stand for and help you align
                            with our goals and vision, Click the button to learn more... 
                            {/* <Link to="/" className="">Read more </Link>  */}
                        </p>
                        {/* <Link to="/" className="smashtech-button swipe-button">Comment</Link> &nbsp; &nbsp;  */}
                        <Link to="/" className="smashtech-button swipe-button transparent">Watch On YouTube</Link>
                    </div>
                </div>

                <div className="careers-cards">
                    <div className="flex">
                        <h3>SmashWise</h3>
                    </div>
                    {/* <div>
                        <span><UilBriefcase /> November 6, 2024</span> &nbsp; &nbsp; 
                        <span><UilComment /> 520 Comments</span> &nbsp; &nbsp; 
                        <span><UilEye /> 1,282 Views</span> 
                    </div> */}
                    <div>
                        <p>
                            As a dynamic and growing company looking for talented individuals to join our team,
                            We have Provided Onboarding Video to Help you Understand what we stand for and help you align
                            with our goals and vision, Click the button to learn more... 
                            {/* <Link to="/" className="">Read more </Link>  */}
                        </p>
                        {/* <Link to="/" className="smashtech-button swipe-button">Comment</Link> &nbsp; &nbsp;  */}
                        <Link to="/" className="smashtech-button swipe-button transparent">Watch On YouTube</Link>
                    </div>
                </div>

                <div className="careers-cards">
                    <div className="flex">
                        <h3>Smash Remmit</h3>
                    </div>
                    {/* <div>
                        <span><UilBriefcase /> November 6, 2024</span> &nbsp; &nbsp; 
                        <span><UilComment /> 520 Comments</span> &nbsp; &nbsp; 
                        <span><UilEye /> 1,282 Views</span> 
                    </div> */}
                    <div>
                        <p>
                            As a dynamic and growing company looking for talented individuals to join our team,
                            We have Provided Onboarding Video to Help you Understand what we stand for and help you align
                            with our goals and vision, Click the button to learn more... 
                            {/* <Link to="/" className="">Read more </Link>  */}
                        </p>
                        {/* <Link to="/" className="smashtech-button swipe-button">Comment</Link> &nbsp; &nbsp;  */}
                        <Link to="/" className="smashtech-button swipe-button transparent">Watch On YouTube</Link>
                    </div>
                </div>
            </div>

            <div>
                <h2>Test</h2><br />
                <h4>Read and Answer Carefully</h4><br />
                <div>
                    <div className="careers-cards">                       
                        <p>Smash Technology...........</p>
                        <p>Ridesmash..................</p>
                        <p>Technology, ..............</p>
                        <p>Smash Technology...........</p>
                        <p>Ridesmash..................</p>
                        <p>Technology, ..............</p>
                        <p>Smash Technology...........</p>
                        <p>Ridesmash..................</p>
                        <p>Technology, ..............</p> 
                        <small>All Answer shold be send via email to the H.R. Manager</small>                       
                    </div>

                    {/* <img src={cocacola} title="" alt="" /> */}
                </div>
            </div>
                
        </div>        
    </div>

    {/* <div className="sections pt-0" id="blog">
        <h2>Archives</h2><br /><br />

        <div className="flex archives">
            <Link to="/" className="smashtech-button swipe-button transparent">2024</Link>
            <Link to="/" className="smashtech-button swipe-button transparent">2023</Link>
            <Link to="/" className="smashtech-button swipe-button transparent">2022</Link>
            <Link to="/" className="smashtech-button swipe-button transparent">2021</Link>
            <Link to="/" className="smashtech-button swipe-button transparent">2020</Link>
            <Link to="/" className="smashtech-button swipe-button transparent">2019</Link>
            <Link to="/" className="smashtech-button swipe-button transparent">2018</Link>
            <Link to="/" className="smashtech-button swipe-button transparent">2017</Link>
            <Link to="/" className="smashtech-button swipe-button transparent">2016</Link>
            <Link to="/" className="smashtech-button swipe-button transparent">2015</Link>
        </div>
    </div> */}

    <Map />
    </>
  )
}
export default Blog;