import { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../__public/__layouts/Header';
import Banner_otherpages from '../../__public/__sections/_Banner_otherpages';
import image from '../../../assets/images/otherpages/investmentwithroi.jpg';

const BuySharesForm = () => {
  const [unit, setUnit] = useState(0); // State to track units of shares
  const publicKey = 'pk_live_cc0fa3d91c2856306b7a146d81e8e64479427e60'; // Replace with your Paystack public key

  const handleUnitChange = (e) => setUnit(Number(e.target.value)); // Handle user input

  const amount = unit * 1000 * 100; // Calculate total amount in kobo

  // Redirect to Paystack payment
  const handlePaystackRedirect = () => {
    const handler = window.PaystackPop.setup({
      key: publicKey, // Paystack public key
      email: 'akpabot.it@gmail.com', // Customer email
      amount: amount, // Total amount in kobo
      currency: 'NGN', // Currency
      callback: function (response) {
        alert(`Payment successful! Reference: ${response.reference}`);
        console.log(response);
      },
      onClose: function () {
        alert('Transaction was not completed, window closed.');
      },
    });
    handler.openIframe();
  };

  return (
    <>
      {/* Include Paystack's script */}
      <Helmet>
        <script src="https://js.paystack.co/v1/inline.js"></script>
      </Helmet>

      {/* Header and Banner */}
      <Header />
      <Banner_otherpages title="Buy Shares" image={image} />

      {/* Main Form */}
      <div className="sections" id="ourcorepurpose">
        <h2>Smash Technology Shares</h2>

        <div className="sections" id="about_people">
          <form>
            <div>
              <label>Unit of Shares:</label>
              <input
                type="number"
                value={unit}
                onChange={handleUnitChange}
                placeholder="Enter the units of shares you wish to buy ..."
              />
            </div>

            <div>
              <label>Calculated Amount (in Naira):</label>
              <input
                type="text"
                value={Intl.NumberFormat().format(unit * 1000)}
                readOnly
                placeholder="Amount to pay ..."
              />
            </div>

            <div>
              <button
                type="button"
                onClick={handlePaystackRedirect}
                className="smashtech-button swipe-button"
              >
                Pay with Paystack
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default BuySharesForm;


// import { useState, useEffect } from 'react';
// import { Helmet } from 'react-helmet';
// import Header from '../../__public/__layouts/Header';
// import Banner_otherpages from '../../__public/__sections/_Banner_otherpages';
// import image from '../../../assets/images/otherpages/investmentwithroi.jpg';

// const BuySharesForm = () => {
//   const [unit, setUnit] = useState(0);
//   const [serviceType, setServiceType] = useState('');

//   const handleUnitChange = (e) => setUnit(Number(e.target.value));
//   const handleServiceTypeChange = (e) => setServiceType(e.target.value);

//   const publicKey = "pk_live_cc0fa3d91c2856306b7a146d81e8e64479427e60"; // Replace with your public key
//   const amount = unit * 1000 * 100; // Amount in kobo (e.g., 10000 kobo = ₦100)
//   const email = "akpabot.it@gmail.com"; // Replace with the user's email

//   const handlePaystackRedirect = () => {
//     const paymentUrl = `https://paystack.com/pay/${publicKey}?amount=${amount}&email=${email}`;
//     window.location.href = paymentUrl; // Redirects to Paystack
//   };



  
//   // const [unit, setUnit] = useState(0); // State to track units of shares
//   // const [formData, setFormData] = useState({
//   //   firstName: '',
//   //   surname: '',
//   //   title: '',
//   //   phone: '',
//   //   email: '',
//   //   address: '',
//   // });

//   // const publicKey = 'pk_live_cc0fa3d91c2856306b7a146d81e8e64479427e60';

//   // const handleInputChange = (e) => {
//   //   const { name, value } = e.target;
//   //   setFormData({ ...formData, [name]: value });
//   // };

//   // const handleUnitChange = (e) => setUnit(Number(e.target.value)); 

//   // const amount = unit * 1000 * 100;

//   // useEffect(() => {
//   //   const script = document.createElement('script');
//   //   script.src = 'https://js.paystack.co/v1/inline.js';
//   //   script.async = true;
//   //   script.onload = () => {
//   //     console.log('Paystack script loaded successfully');
//   //   };
//   //   script.onerror = () => {
//   //     console.error('Error loading Paystack script');
//   //   };
//   //   document.body.appendChild(script);

//   //   return () => {
//   //     document.body.removeChild(script);
//   //   };
//   // }, []);

//   // const handlePaystackRedirect = () => {
//   //   const handler = window.PaystackPop.setup({
//   //     key: publicKey,
//   //     email: formData.email,
//   //     amount: amount,
//   //     currency: 'NGN',
//   //     callback: function (response) {
//   //       alert(`Payment successful! Reference: ${response.reference}`);


//   //       fetch('http://127.0.0.1:8000/api/save-payment/', {
//   //         method: 'POST',
//   //         headers: {
//   //           'Content-Type': 'application/json',
//   //         },
//   //         body: JSON.stringify({
//   //           ...formData,
//   //           reference: response.reference,
//   //           amount: amount / 100, 
//   //           unit: unit,
//   //           paymentDate: new Date().toISOString(),
//   //         }),
//   //       })
//   //         .then((res) => res.json())
//   //         .then((data) => {
//   //           console.log('Payment saved successfully:', data);
//   //         })
//   //         .catch((err) => {
//   //           console.error('Error saving payment:', err);
//   //         });
//   //     },
//   //     onClose: function () {
//   //       alert('Transaction was not completed, window closed.');
//   //     },
//   //   });
//   //   handler.openIframe();
//   // };
  
//   return (
//     <>
//       <Helmet>
//         <script src="/js/bootstrap.min.js"></script>
//       </Helmet>

//       {/* Header and Banner */}
//       <Header />
//       {/* <Banner_otherpages title="Buy Shares" image={image} /> */}

//       {/* Main Form */}
//       <div className="sections bg-white" id="ourcorepurpose">
//         {/* <h2>Smash Technology Shares</h2> */}

//         <div className="sections" id="about_people">
//           <form className="form">            
//             <h3>Smash Technology Shares</h3>

//             <br />
//             <h6>Shares You Wish To Buy</h6>
//             <div>
//               <label>Unit of Shares:</label>
//               <select value={unit} onChange={handleUnitChange} required>
//                 <option value="">- Please select -</option>
//                 <option value="0.1">1</option>
//                 <option value="100">100</option>
//                 <option value="250">250</option>
//                 <option value="500">500</option>
//                 <option value="1000">1,000</option>
//                 <option value="1500">1,500</option>
//                 <option value="2000">2,000</option>
//                 <option value="3000">3,000</option>
//                 <option value="4000">4,000</option>
//                 <option value="5000">5,000</option>
//                 <option value="6000">6,000</option>
//                 <option value="7000">7,000</option>
//                 <option value="8000">8,000</option>
//                 <option value="9000">9,000</option>
//                 <option value="10000">10,000</option>
//                 <option value="20000">20,000</option>
//                 <option value="50000">50,000</option>
//                 <option value="100000">100,000</option>
//               </select>
//               {/* <input
//                 type="number"
//                 value={unit}
//                 onChange={handleUnitChange}
//                 placeholder="Enter the units of shares you wish to buy ..."
//               /> */}
//             </div>

//             <div>
//               <label>Calculated Amount (in Naira):</label>
//               <input
//                 type="text"
//                 value={Intl.NumberFormat().format(unit * 1000)}
//                 readOnly
//                 placeholder="Amount to pay ..." className="form-control"
//               />
//             </div>
            
//             {/* <br />
//             <h6>Personal Information</h6>
//             <div>
//               <label>First Name:</label>
//               <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} className="form-control" required />
//             </div>
//             <div>
//               <label>Surname:</label>
//               <input type="text" name="surname" value={formData.surname} onChange={handleInputChange} className="form-control" required />
//             </div>
//             <div>
//               <label>Title:</label>
//               <input type="text" name="title" value={formData.title} onChange={handleInputChange} className="form-control" />
//             </div>
//             <div>
//               <label>Phone No:</label>
//               <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required className="form-control" />
//             </div>
//             <div>
//               <label>Email:</label>
//               <input type="email" name="email" value={formData.email} onChange={handleInputChange} required className="form-control" />
//             </div>
//             <div>
//               <label>Contact Address:</label>
//               <input type="text" name="address" value={formData.address} onChange={handleInputChange} className="form-control" required />
//             </div> */}

//             <div className="pt-3">
//               <button
//                 type="button"
//                 onClick={handlePaystackRedirect}
//                 className="smashtech-button swipe-button"
//               >
//                 Proceed to Payment
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default BuySharesForm;
