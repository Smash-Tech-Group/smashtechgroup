import { useState, useEffect } from "react";
import { baseUrl } from "../../configs/Config";
import axios from "axios";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Header from "../../__public/__layouts/Header";
// import Nav from "../../__public/__layouts/Nav";
import Swal from "sweetalert2";

const Login = (props) => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    document.title = `${props.project} | Member Login`;

    const loggedInStatus = localStorage.getItem("loggedInStatus");
    if (loggedInStatus === "true") {
      window.location.href = `${window.location.origin}/dashboard`;
    }
  }, [props.project]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const submitForm = async (e) => {
    e.preventDefault();

    if (!data.email || !data.password) {
      alert("Please fill in all required fields.");
      return;
    }

    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("password", data.password);

    try {
      const response = await axios.post(`${baseUrl}/login/`, formData);

      if (response.data.bool === true) {
        // Save user details in localStorage
        localStorage.setItem("loggedInStatus", true);
        localStorage.setItem("memberId", response.data.member_id);
        localStorage.setItem("fname", response.data.fname);
        localStorage.setItem("sname", response.data.sname);
        localStorage.setItem("isAdmin", response.data.is_admin);

        // Redirect to dashboard
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Login successful!",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          window.location.href = `${window.location.origin}/dashboard`;
        });
      } else {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Invalid credentials!",
          text: "Please check your email and password.",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      console.error("There was an error!", error);
      Swal.fire({
        position: "center",
        icon: "error",
        title: "An error occurred!",
        text: "Please try again later.",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const loggedInStatus = localStorage.getItem("loggedInStatus");
  if (loggedInStatus === "true") {
    window.location.href = `${window.location.origin}/dashboard`;
  }

  return (
    <>
      <Header />
      {/* <Nav /> */}

      <Helmet>
        <link href="/reg/css/bootstrap.min.css" rel="stylesheet" />
        <link href="/reg/css/style.css" rel="stylesheet" />
      </Helmet>

      <div
        className="video wow fadeInUp bg-primary2"
        data-wow-delay="0.1s"
        style={{ height: "75vh" }}
      >
        <br />
        <p className="text-center small mb-2 text-white">
          Click a link of your choice below to register or login.
        </p>
        <h1 className="mb-2 text-warning text-center reglogin">
          <Link to="/conference-registration" className="reglogin_headerlinks">
            Conference Registration (GOTE 2024)
          </Link>
        </h1>
        <h1 className="mb-2 text-center reglogin">
          <Link to="/registration" className="reglogin_headerlinks">
            Membership Registration
          </Link>
        </h1>
        <h3 className="text-white mb-1 reglogin text-center">
          <Link to="/login" className="reglogin_headerlinks active">
            Member Login
          </Link>
        </h3>
      </div>

      <div
        className="container position-relative wow fadeInUp"
        data-wow-delay="0.1s"
        style={{ marginTop: "-6rem" }}
      >
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="bg-light p-5">
              <h1 className="text-center m-0">Login as Member</h1>
              <p className="text-center small mb-4">
                Required fields are marked with Asterisk *
              </p>

              <form onSubmit={submitForm}>
                <div className="row g-3 text-left">
                  <div className="col-12">
                    <h4 className="small font-weight-bold">
                      Your Email Address <span className="asterisk">*</span>
                    </h4>
                    <input
                      type="email"
                      name="email"
                      onChange={handleChange}
                      value={data.email}
                      maxLength="50"
                      className="form-control border-0"
                      placeholder="E.g. myname@mail.com"
                      style={{ height: "55px" }}
                      required
                    />
                  </div>
                  <div className="col-12">
                    <h4 className="small font-weight-bold">
                      Your Password <span className="asterisk">*</span>
                    </h4>
                    <input
                      type="password"
                      name="password"
                      onChange={handleChange}
                      value={data.password}
                      maxLength="100"
                      className="form-control border-0"
                      placeholder="A secret code you can remember ..."
                      style={{ height: "55px" }}
                      required
                    />
                  </div>

                  <div className="col-12">
                    <button
                      type="submit"
                      className="btn btn-success w-100 py-3"
                    >
                      Log into User Dashboard
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;