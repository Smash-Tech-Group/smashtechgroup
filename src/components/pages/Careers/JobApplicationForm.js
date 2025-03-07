import {useState, useEffect} from 'react';
import { baseUrl } from '../../configs/Config';
import axios from 'axios';
import Header from '../../__public/__layouts/Header';
import { Helmet } from 'react-helmet';
import frame from '../../../assets/images/icons/Frame269.png';
// import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const JobApplicationForm = () => {
  const[data, setData] = useState({
    'fname': '',
    'mname': '',
    'sname': '',
    'gender': '',
    'phone': '',
    'email': '',
    'address': '',
    'origin': '',
    'position': '',
    'cv': null  // Ensure this is initialized as null for the file
});
const [jobApplication, setJobApplication] = useState([]);

// change element value
const handleChange = (e) => {
    if (e.target.name === 'cv') {
        setData({
            ...data, 
            [e.target.name]: e.target.files[0]  // Use files[0] for the file input
        });
    } else {
        setData({
            ...data, 
            [e.target.name]: e.target.value
        });
    }
};

const submitForm = (e) => {
    e.preventDefault();

    // Validate the form
    if (e.target.checkValidity()) {
        const formData = new FormData();

        formData.append('fname', data.fname)
        formData.append('mname', data.mname)
        formData.append('sname', data.sname)
        formData.append('gender', data.gender)
        formData.append('phone', data.phone)
        formData.append('email', data.email)
        formData.append('address', data.address)
        formData.append('origin', data.origin)
        formData.append('position', data.position)

        // Only append the image if it's provided
        if (data.cv && data.cv !== 'null') {
            formData.append('image', data.cv);
        }

        axios.post(`${baseUrl}/job_application/`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'  // Required for file uploads
            }
        })            
        .then((response) => {
            setData({
              'fname': '',
              'mname': '',
              'sname': '',
              'gender': '',
              'phone': '',
              'email': '',
              'address': '',
              'origin': '',
              'position': '',
            });
            console.log(response.data)
            successAlert();
        })
        .catch(error => {
            setData({
                // 'status': 'error'
            });
            errorAlert(error);
        });
    } else {
        e.target.reportValidity();  // Triggers browser's built-in validation
    }
}

const successAlert = (response) => {
    return(
        Swal.fire({        
            position: "center",
            icon: "success",
            title: "Your Job Application has been submitted successfully! Thank you",
            showConfirmButton: true
            // timer: 1500
      }).then(function() {            
        window.location.href = '/'
      })           
    )
}
const errorAlert = (error) => {
    Swal.fire({
        position: "center",
        icon: "error",
        title: "An error occurred!",
        text: error.message,
        showConfirmButton: false,
        timer: 1500
    });              
}

const printForm = () => {
    window.print(); // This triggers the browser's print dialog
};

return (
    <>
    <Helmet>
      <script src="/js/bootstrap.min.js"></script>
    </Helmet>

    <Header />

    <div className="banner_persondetail">
      <div className="smash-light-bg">
        <a href="javascript:history.back()"><img src={frame} /></a>
      </div>
    </div> 

    <div className="form-wrapper" id="about_people">
      <h1>Job Application</h1>
      <div className="form-header">
        <span className="dot"></span>
      </div>
      
      <form onSubmit={submitForm}>
        <div className="row g-3 text-left">
            <div className="col-12 col-sm-6">
              <h4 className="small font-weight-bold">First Name <span className="asterisk">*</span></h4>
              <input name="fname" onChange={handleChange} maxLength="30" 
                  className="form-control border-0" placeholder="Your First Name" 
                  style={{ height:'55px' }} required />
            </div>
            <div className="col-12 col-sm-6">
              <h4 className="small font-weight-bold">Middle Name </h4>
              <input name="mname" onChange={handleChange} maxLength="30" 
                  className="form-control border-0" placeholder="Middle Name" 
                  style={{ height:'55px' }} required />
            </div>
            <div className="col-12 col-sm-6">
                <h4 className="small font-weight-bold">Surname <span className="asterisk">*</span></h4>
                <input name="sname" onChange={handleChange} maxLength="30" 
                    className="form-control border-0" placeholder="Surname" 
                    style={{ height:'55px' }} required />
            </div>
            <div className="col-12 col-sm-6">
                <h4 className="small font-weight-bold">Gender</h4>
                <select name="gender" className="form-select border-0" style={{ height:'55px' }} 
                    onChange={handleChange}>
                    <option value="">Select</option>
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
                </select>
            </div>
            <div className="col-12 col-sm-6">
                <h4 className="small font-weight-bold">Phone No. <span className="asterisk">*</span></h4>
                <input type="number" name="phone" onChange={handleChange} maxLength="16" 
                    className="form-control border-0" placeholder="E.g. 08098765432" 
                    style={{ height:'55px' }} required />
            </div>
            <div className="col-12 col-sm-6">
                <h4 className="small font-weight-bold">Email Address <span className="asterisk">*</span></h4>
                <input type="email" name="email" onChange={handleChange} maxLength="50" 
                    className="form-control border-0" placeholder="E.g. myname@mail.com" 
                    style={{ height:'55px' }} required />
            </div>

            <div className="col-12 col-sm-6">
                <h4 className="small font-weight-bold">Residential Address (City and State)</h4>
                <input name="address" onChange={handleChange} maxLength="40" 
                    className="form-control border-0" placeholder="E.g. Ikeja, Lagos" 
                    style={{ height:'55px' }} />
            </div>
            <div className="col-12 col-sm-6">
                <h4 className="small font-weight-bold">State of Origin</h4>
                <select name="origin" className="form-select border-0" style={{ height:'55px' }} 
                    onChange={handleChange}>
                    <option value="">- Select Your Origin -</option>                                        
                    <option value="Abia">Abia</option>
                    <option value="Abuja (FCT)">Abuja (FCT)</option>
                    <option value="Adamawa">Adamawa</option>
                    <option value="Akwa Ibom">Akwa Ibom</option>
                    <option value="Anambra">Anambra</option>
                    <option value="Bauchi">Bauchi</option>
                    <option value="Bayelsa">Bayelsa</option>
                    <option value="Benue">Benue</option>
                    <option value="Borno">Borno</option>
                    <option value="Cross River">Cross River</option>
                    <option value="Delta">Delta</option>
                    <option value="Ebonyi">Ebonyi</option>
                    <option value="Edo">Edo</option>
                    <option value="Ekiti">Ekiti</option>
                    <option value="Enugu">Enugu</option>
                    <option value="Gombe">Gombe</option>
                    <option value="Imo">Imo</option>
                    <option value="Jigawa">Jigawa</option>
                    <option value="Kaduna">Kaduna</option>
                    <option value="Kano">Kano</option>
                    <option value="Katsina">Katsina</option>
                    <option value="Kebbi">Kebbi</option>
                    <option value="Kogi">Kogi</option>
                    <option value="Kwara">Kwara</option>
                    <option value="Lagos">Lagos</option>
                    <option value="Nasarawa">Nasarawa</option>
                    <option value="Niger">Niger</option>
                    <option value="Ogun">Ogun</option>
                    <option value="Ondo">Ondo</option>
                    <option value="Osun">Osun</option>
                    <option value="Oyo">Oyo</option>
                    <option value="Plateau">Plateau</option>
                    <option value="Rivers">Rivers</option>
                    <option value="Sokoto">Sokoto</option>
                    <option value="Taraba">Taraba</option>
                    <option value="Yobe">Yobe</option>
                    <option value="Zamfara">Zamfara</option>
                </select> 
            </div>
            <div className="col-12 col-sm-6">
                <h4 className="small font-weight-bold">Upload your CV</h4>
                <input 
                    type="file" 
                    name="cv" 
                    onChange={handleChange} 
                    className="" 
                    accept="image/*"
                    // accept="pdf/*"
                />
                <br /><br />
                <button type="button" className="btn btn-info btn-sm" onClick={printForm}>
                    Print Form
                </button>
            </div>
            
            <div className="col-12">
                <button type="submit" className="btn btn-success w-100 py-3">
                    Submit
                </button>
            </div>
        </div>
    </form>
    
    </div>
    </>
  )
}
export default JobApplicationForm;