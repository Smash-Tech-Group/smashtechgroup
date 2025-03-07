import { useEffect } from 'react';
import { Link } from 'react-router-dom';
// import Header_Dashboard from '../../layouts/Header_Dashboard';
import PgContent_Dash from './contents/PgContent_Dash';
import Logout_Modal from './contents/Logout_Modal';

const Dashboard = (props) => {
  useEffect(() => {
    const loggedInStatus = localStorage.getItem('loggedInStatus');
    if (loggedInStatus !== 'true') {
      window.location.href = '/login';
    }
  }, []);

  return (
    <>
      {/* <Header_Dashboard /> */}
    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
      {/* Other navigation items */}
      
      <ul className="navbar-nav ml-auto">
        {/* Logout Link */}
        <li className="nav-item">
          <a
            href="#"
            className="nav-link"
            data-toggle="modal"
            data-target="#logoutModal"
          >
            <i className="fas fa-sign-out-alt"></i> Logout
          </a>
        </li>
      </ul>
    </nav>


      <div id="page-top">
        <div id="wrapper">
          {/* Uncomment and provide a sidebar if needed */}
          {/* <Sidebar project={props.project} /> */}

          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <PgContent_Dash />
            </div>
          </div>
        </div>
        <Logout_Modal />
      </div>
    </>
  );
};
export default Dashboard;