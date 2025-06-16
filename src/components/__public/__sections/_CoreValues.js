import leadership from './../../../assets/images/corevalues//Leadership.jpg';
import entrepreneurship from './../../../assets/images/corevalues/Entrepreneurship.jpg';
import customer_service_experience from './../../../assets/images/corevalues/Customer Service Experience.jpg';
import excellence_through_teamwork from './../../../assets/images/corevalues/Excellence through teamwork.jpg';

const CoreValues = () => {
  return (
    <>
    <div className="sections" id="ourcorevalues">
      <h2 className='text-[32px] font-semibold'>Our Core Values</h2>
        
      <div>
        <div className="c2 c2-sm c1-xs val">
          <img src={customer_service_experience} title="" alt="" />
          <div>
            <h3 className='text-xl font-semibold'>Customer Service Experience</h3>
            <p className='text-base leading-[28px]'>As a world-class organization, we understand that we exist to serve and satisfy our customers. 
                Accordingly, our customer orientation reflects intimacy, integrity and learning.</p>
          </div>
        </div>
        
        <div className="c2 c2-sm c1-xs val reverse">
          <div>
            <h3 className='text-xl font-semibold'>Entrepreneurship</h3>
            <p className='text-base leading-[28px]'>We continuously seek and develop new business in tech, employing state-of-the-art methods to retain our market leadership.</p>
          </div>
          <img src={entrepreneurship} title="" alt="" />
        </div>

        <div className="c2 c2-sm c1-xs val">
          <img src={excellence_through_teamwork} title="" alt="" />
          <div>
            <h3 className='text-xl font-semibold'>Excellence through teamwork</h3>
            <p className='text-base leading-[28px]'>We are a large organization, working together to deliver the best products and services to our valuable customers and stakeholders. 
              To achieve this, we demonstrate teamwork, respect, and meritocracy.</p>
          </div>
        </div>
        
        <div className="c2 c2-sm c1-xs val reverse last">
          <div>
            <h3 className='text-xl font-semibold'>Leadership</h3>
            <p className='text-base leading-[28px]'>We thrive to be leaders in our various businesses, markets and communities. 
              To drive this, we focus on continuous improvement, partnership and professionalism.</p>
          </div>
          <img src={leadership} title="" alt="" />
        </div>

      </div>
    </div>
    </>
  )
}
export default CoreValues;