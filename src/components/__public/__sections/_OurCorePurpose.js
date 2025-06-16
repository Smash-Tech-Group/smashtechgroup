import core_purpose from './../../../assets/images/corepurpose/core_purpose.jpeg';

const OurCorePurpose = () => {
  return (
    <>
    <div className="sections" id="ourcorepurpose">
      <h2 className='text-[32px] font-semibold'>Our Core Purpose</h2>

      <div className="c1_2 c1-sm c1-xs main !mt-[3rem] ">
<div className="relative left-[-30px] inline-block">
  <div className="relative overflow-hidden rounded-r-full md:w-[450px] md:h-[602px] sm:w-[300px] sm:h-[300px] md:w-[300px] md:h-[300px]" 
       style={{
         background: 'linear-gradient(45deg,rgba(179,178,209,1), rgba(250,183,153,1))',
         padding: '8px',
         paddingLeft: '0'
       }}>
    <div className="overflow-hidden rounded-r-full bg-white h-full" style={{ marginLeft: '0' }}>
      <img src={core_purpose} className="object-fit" title="Core Purpose" alt="Core Purpose" 
         style={{ width: '100%', height: '100%'}}/>
    </div>
  </div>
</div>

        <div class="ourcorepurpose-right-div">
       
<div className="relative max-w-4xl mx-auto py-8">
  {/* Step 1 */}
  <div className="flex items-start">
    <div className="flex flex-col items-center mr-6">
      <div className="w-[3rem] h-[3rem] md:w-[5rem] md:h-[5rem] border-2 text-gray-500 rounded-full flex items-center justify-center font-bold text-lg">
        1
      </div>
      <div className="w-0.5 h-[16rem] md:h-[9rem] bg-gray-300"></div>
    </div>
    <div className="flex-1 pt-2 md:!pt-7">
      <h3 className="text-xl font-semibold mb-2">Make Life Easy</h3>
      <p className="text-gray-600 text-base mb-8 leading-[30px]">
        Our core purpose is to ensure you live an easy and stress-free life. We are breaking down those difficult-to-achieve tasks into a single press of a button 
        so you can have a wonderful experience in the comfort of your home or office space.
      </p>
    </div>
  </div>

  {/* Step 2 */}
  <div className="flex items-start">
    <div className="flex flex-col items-center mr-6">
      <div className="w-[3rem] h-[3rem] md:w-[5rem] md:h-[5rem] border-2 text-gray-500 rounded-full flex items-center justify-center font-bold text-lg">
        2

      </div>
      <div className="w-0.5 h-[14rem] md:h-[9rem] bg-gray-300"></div>
    </div>
    <div className="flex-1 pt-2 md:!pt-7">
      <h3 className="text-xl font-semibold text-base mb-2">Make A Difference</h3>
      <p className="text-gray-600 mb-8 text-base leading-[30px]">
        We want you to be unique and different. You don't have to wait under the sun for a cab or bus or struggle to meet your team or investors as others do. 
        We offer services that will help you make a difference and stand out.
      </p>
    </div>
  </div>

  {/* Step 3 */}
  <div className="flex items-start">
    <div className="flex flex-col items-center mr-6">
      <div className="w-[3rem] h-[3rem] md:w-[5rem] md:h-[5rem] border-2 text-gray-500  rounded-full flex items-center justify-center font-bold text-lg">
        3
      </div>
    </div>
    <div className="flex-1 pt-2 md:!pt-7">
      <h3 className="text-xl font-semibold mb-2">Get 100% Enjoyment</h3>
      <p className="text-gray-600 text-base leading-[30px]">
        We won't only ease your stress but also ensure you get 100% satisfaction and first-rate customer service. Our customer support is always available 
        24/7 to attend to your needs.
      </p>
    </div>
  </div>
</div>
         
        </div>
      </div>

    </div>
    </>
  )
}
export default OurCorePurpose;