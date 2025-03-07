import { useState, useEffect } from "react";
import Header from "../../__public/__layouts/Header";
import { Helmet } from "react-helmet";
import { baseUrl } from "../../configs/Config";
import axios from "axios";
import Swal from "sweetalert2";

const InvestmentForm = (props) => {
  // Initial form state
  const initialData = {
    title: "",
    fname: "",
    mname: "",
    sname: "",
    phone: "",
    email: "",
    password: "",
    gender: "",
    address: "",
    means_of_id: "",
    id_number: "",
    nok_fullname: "",
    nok_address: "",
    nok_phone: "",
  };

  const [data, setData] = useState(initialData);

  useEffect(() => {
    document.title = `${props.company} — Investor Signup`;
  }, [props.company]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setData({
      ...data,
      [name]: files ? files[0] : value,
    });
  };

  // Submit the form
  const submitForm = async (e) => {
    e.preventDefault();

    if (e.target.checkValidity()) {
      const formData = new FormData();
      Object.keys(data).forEach((key) => {
        formData.append(key, data[key]);
      });

      try {
        const response = await axios.post(`${baseUrl}/investor_signup/`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        setData(initialData);
        successAlert();
      } catch (error) {
        errorAlert(error);
      }
    } else {
      e.target.reportValidity();
    }
  };

  // Success alert
  const successAlert = () => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Investor sign-up is successful!",
      showConfirmButton: true,
    }).then(() => {
      window.location.href = "/login";
    });
  };

  // Error alert
  const errorAlert = (error) => {
    Swal.fire({
      position: "center",
      icon: "error",
      title: "An error occurred!",
      text: error.message,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  // Redirect logged-in users
  const loggedInStatus = localStorage.getItem("loggedInStatus");
  if (loggedInStatus === "true") {
    window.location.href = "/dashboard";
  }

  return (
    <>
      <Helmet>
        <script src="/js/bootstrap.min.js"></script>
      </Helmet>

      <Header />

      <div className="banner_persondetail">
        <div
          className="smash-light-bg"
          style={{ paddingBlock: "1rem", marginBottom: 0 }}
        >
          <button
            type="button"
            className="btn btn-link"
            onClick={() => window.history.back()}
          >
            Back
          </button>
        </div>
      </div>

      <div className="sections" style={{ marginInline: "10rem" }}>
        {/* <h2>Investor Signup</h2>
        <div className="form-header">
          <span className="dot"></span>
        </div>

        <p className="text-center small mb-4">
          Required fields are marked with Asterisk *
        </p> */}

        {/* <form onSubmit={submitForm}>
          <div className="c3 c2-sm c1-xs form">
            <div>
              <label>First Name *</label>
              <input
                type="text"
                name="fname"
                onChange={handleChange}
                maxLength="30"
                placeholder="Enter your first name ..."
                required
              />
            </div>
            <div>
              <label>Middle Name</label>
              <input
                type="text"
                name="mname"
                onChange={handleChange}
                maxLength="30"
              />
            </div>
            <div>
              <label>Surname *</label>
              <input
                type="text"
                name="sname"
                onChange={handleChange}
                maxLength="30"
                required
              />
            </div>
            <div>
              <label>Title</label>
              <input
                type="text"
                name="title"
                onChange={handleChange}
                maxLength="10"
                placeholder="Your title e.g. Mr, Mrs, Dr, Prof ..."
              />
            </div>
            <div>
              <label>Phone No. *</label>
              <input
                type="tel"
                name="phone"
                onChange={handleChange}
                // pattern="\d{10,16}"
                placeholder="e.g. 08098765432"
                required
              />
            </div>
            <div>
              <label>Email Address *</label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                maxLength="50"
                placeholder="e.g. youremail@mail.com"
                required
              />
            </div>
            <div>
              <label>Create a Password *</label>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                maxLength="100"
                placeholder="A secret code you can remember ..."
                required
              />
            </div>
            <div>
              <label>Gender *</label>
              <select name="gender" onChange={handleChange} required>
                <option value="">- Select your Gender -</option>
                <option value="Female">Female</option>
                <option value="Male">Male</option>
              </select>
            </div>
            <div>
              <label>Address *</label>
              <textarea
                name="address"
                onChange={handleChange}
                maxLength="100"
                required
              ></textarea>
            </div>
            <div>
              <label>Means of Identification *</label>
              <select name="means_of_id" onChange={handleChange} required>
                <option value="">- Select Type of ID -</option>
                <option value="NIN">NIN</option>
                <option value="Driver's License">Driver's License</option>
                <option value="International Passport">
                  International Passport
                </option>
              </select>
            </div>
            <div>
              <label>ID Number *</label>
              <input
                type="text"
                name="id_number"
                onChange={handleChange}
                maxLength="20"
                required
              />
            </div>
            <div>
              <label>Full Name of your Next of Kin *</label>
              <input
                type="text"
                name="nok_fullname"
                onChange={handleChange}
                maxLength="80"
                required
              />
            </div>
            <div>
              <label>Address of Next of Kin</label>
              <textarea
                name="nok_address"
                onChange={handleChange}
                maxLength="100"
              ></textarea>
            </div>
            <div>
              <label>Phone No. of Next of Kin *</label>
              <input
                type="tel"
                name="nok_phone"
                onChange={handleChange}
                // pattern="\d{10,16}"
                placeholder="e.g. 08098765432"
                required
              />
            </div>

            <div className="col-12">
              <input
                type="submit"
                className="smashtech-button swipe-button mt-5"
                value="Sign Up as Investor"
              />
            </div>
          </div>
        </form> */}
      </div>
    </>
  );
};
export default InvestmentForm;