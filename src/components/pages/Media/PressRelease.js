import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Banner_otherpages from '../../__public/__sections/_Banner_otherpages';
import image from '../../../assets/images/otherpages/faq.jpg';
import Header from '../../__public/__layouts/Header';
import Map from '../../__public/__sections/_Map';

const PressRelease = (props) => {
    useEffect(() => {
        document.title = `${props.company} — Press Release`;
    }, []);

    return (
    <>  
    <Helmet>
      <script src="/js/bootstrap.min.js"></script>
    </Helmet>
    
    <Header />
    <Banner_otherpages title="Press Release" image={image} />
    
    <div className="sections c2_1 c1-sm c1-xs faq" id="pressrelease">
        <div>
            <h2 style={{ lineHeight: '120%' }}>CEO's 2025 New Fiscal Year's Message</h2>

            <p>As we step into 2025, I can’t help but reflect on the incredible journey we’ve shared over the past decade. Smash Technology has grown from an ambitious startup to a Group with subsidiaries. We’ve pushed the boundaries of what’s possible across different industries ranging from E-hailing, E-commerce,  food delivery, ride-sharing, car, hotels and shortlet rentals,  and travel solutions, we’re contributing to a global cause by crafting smarter and more efficient ways for people to live and work.</p>

            <p className="bg-grey">But 2025 is not just another fiscal year, it marks a new chapter for us as a global ecosystem of endless possibilities to seamlessly connect people and services to just the needed solutions in ways that were once unimaginable. Every step we take, every product we launch, every service we offer, is a reflection of our commitment to making life easier and more meaningful through technology.</p>

            <p>Our success isn’t just about the technology we develop—it’s about the unwavering support and trust we’ve earned from our clients, the loyalty of our esteemed customers, and the passion of our employees. Together, we’ve built a company that’s not only diverse and inclusive but also adaptable to the ever-changing demands of the world around us. And for that, I am truly grateful.</p>

            <p className="bg-grey">Looking forward, our mission remains clear: locally and globally, we will continue to simplify life through all our offerings by embracing the power of innovation and emerging technologies to create meaningful experiences that will help us stay ahead of life's dynamics.</p>

            <p>Our goal is to stand out—constantly putting value on your table, constantly innovating, and always delivering excellent service, ONLY.</p>

            <p className="bg-grey">To our incredible team, thank you for your relentless hard work, creativity, and unwavering dedication. You are the heart of everything we do. </p>

            <p>To our partners and clients, thank you for sticking with us through and true, your unending support and invaluable trust makes all the difference. Together, we will shape a future where technology not only drives progress but also brings us closer together, making the world a better place for all.</p>

            <p className="bg-grey">Here’s to a remarkable 2025—let’s continue to innovate, be solution-oriented, and grow as we work together to build a brighter, more connected world.</p>

            <p><b>CEO.</b></p>    
        </div>

        <div className="pie-div">
            <div className="pie"></div>
            <div className="pie"></div>
            <div className="pie"></div>
            <div className="pie"></div>
            <div className="pie"></div>
            <div className="pie"></div>
        </div>
    </div>

    <Map />
    </>
  )
}
export default PressRelease;