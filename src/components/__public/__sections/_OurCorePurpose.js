import core_purpose from './../../../assets/images/corepurpose/core_purpose.jpeg';

const OurCorePurpose = () => {
  return (
    <>
    <div className="sections" id="ourcorepurpose">
      <h2>Our Core Purpose</h2>

      <div className="c1_2 c1-sm c1-xs main">
        <div className="half-circle-div">
          <div>
            <img src={core_purpose} className="half-circle" title="Core Purpose" alt="Core Purpose" 
               style={{ width: '100%'}}/>
          </div>
        </div>

        <div class="ourcorepurpose-right-div">
          <div className="flex content">
            <h1>1</h1>
            <h3>&nbsp;Ease Your Stress</h3>
          </div>

          <div className="flex num">
            <div class="line-div">
              <div class="line"></div>
            </div>
            <p>Our core purpose is to ensure you live an easy and stress-free life. We are breaking down those difficult-to-achieve tasks into a single press of a button 
            so you can have a wonderful experience in the comfort of your home or office space.</p>
          </div>

          <div className="flex content">
            <h1>2</h1>
            <h3>Make A Difference</h3>
          </div>

          <div className="flex num">
            <div class="line-div">
              <div class="line"></div>
            </div>
            <p>We want you to be unique and different. You don’t have to wait under the sun for a cab or bus or struggle to meet your team or investors as others do. 
            We offer services that will help you make a difference and stand out.</p>
          </div>

          <div className="flex content">
            <h1>3</h1>
            <h3>Get 100% Enjoyment</h3>
          </div>

          <div className="flex num">
            <div class="line-div">
              <div class="line hidden"></div>
            </div>
            <p>We won’t only ease your stress but also ensure you get 100% satisfaction and first-rate customer service. Our customer support is always available 
            24/7 to attend to your needs.</p>
          </div>

        </div>
      </div>

    </div>
    </>
  )
}
export default OurCorePurpose;