import { useEffect, useState } from 'react';
import { baseUrl } from '../../../configs/Config';

const PgContent_Dash = () => {
  const [fname, setFname] = useState('');
  const [sname, setSname] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [count, setCount] = useState({ members: 0, zones: 0, activities: 0 });

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const response = await fetch(`${baseUrl}/counts/`);
        const data = await response.json();
        setCount({
          members: data.members || 0,
          zones: data.zones || 0,
          activities: data.activities || 0,
        });
      } catch (error) {
        console.error('Error fetching counts:', error);
      }
    };

    fetchCounts();
  }, []);

  useEffect(() => {
    const firstName = localStorage.getItem('fname') || '';
    const lastName = localStorage.getItem('sname') || '';
    const adminStatus = localStorage.getItem('isAdmin') === 'true';
    setFname(firstName);
    setSname(lastName);
    setIsAdmin(adminStatus);
  }, []);

  return (
    <div className="container-fluid">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">
          Hello, {isAdmin ? `Admin (${fname})` : `${fname} ${sname}`}!
        </h1>
      </div>

      <div className="row">
        {[
          { title: 'No. of Members', value: count.members, icon: 'fas fa-users', color: 'primary' },
          { title: 'No. of Zones', value: count.zones, icon: 'fas fa-map-marker-alt', color: 'success' },
          { title: 'No. of Activities', value: count.activities, icon: 'fas fa-tasks', color: 'info' },
          { title: 'Growth', value: '78%', icon: 'fas fa-chart-line', color: 'warning' },
        ].map((card, idx) => (
          <div className="col-xl-3 col-md-6 mb-4" key={idx}>
            <div className={`card border-left-${card.color} shadow h-100 py-2`}>
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className={`text-xs font-weight-bold text-${card.color} text-uppercase mb-1`}>
                      {card.title}
                    </div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">{card.value}</div>
                  </div>
                  <div className="col-auto">
                    <i className={`${card.icon} fa-2x text-gray-300`}></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="row">
        <div className="col-xl-8 col-lg-7">
          <div className="card shadow mb-4">
            <div className="card-header bg-info text-white py-3">
              <h6 className="m-0 font-weight-bold">National Messages</h6>
            </div>
            <div className="card-body">
              <ul>
                <li>Recent announcement sent internally from the Eagles of Zion to all registered and verified members.</li>
              </ul>
            </div>
          </div>

          <div className="card shadow mb-4">
            <div className="card-header bg-warning text-white py-3">
              <h6 className="m-0 font-weight-bold">Zonal Messages</h6>
            </div>
            <div className="card-body">
              <ul>
                <li>The most recent announcement sent internally from your Zone to all registered and verified members.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-xl-4 col-lg-5">
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">Projects</h6>
            </div>
            <div className="card-body">
              {[
                { title: 'Server Migration', progress: 20, color: 'danger' },
                { title: 'Sales Tracking', progress: 40, color: 'warning' },
                { title: 'Customer Database', progress: 60, color: 'info' },
                { title: 'Payout Details', progress: 80, color: 'info' },
                { title: 'Account Setup', progress: 100, color: 'success' },
              ].map((proj, idx) => (
                <div key={idx}>
                  <h4 className="small font-weight-bold">
                    {proj.title} <span className="float-right">{proj.progress}%</span>
                  </h4>
                  <div className="progress mb-4">
                    <div
                      className={`progress-bar bg-${proj.color}`}
                      role="progressbar"
                      style={{ width: `${proj.progress}%` }}
                      aria-valuenow={proj.progress}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PgContent_Dash;