import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Sidebar({ isOpen, toggleSidebar }) {
  const [incidentSubmenuOpen, setIncidentSubmenuOpen] = useState(false);

  const toggleIncidentSubmenu = () => {
    setIncidentSubmenuOpen(!incidentSubmenuOpen);
  };

  return (
    <ul className={`navbar-nav bg-gradient-primary sidebar sidebar-dark accordion ${isOpen ? 'toggled' : ''}`} id="accordionSidebar">
      {/* Sidebar Brand */}
      <Link to="/" className="sidebar-brand d-flex align-items-center justify-content-center">
        <div className="sidebar-brand-icon rotate-n-15">
          <FaBars onClick={toggleSidebar} className="text-white" />
        </div>
        <div className="sidebar-brand-text mx-3">Pothole Oracle</div>
      </Link>

      <hr className="sidebar-divider my-0" />

      {/* Sidebar Menu Items */}
      <li className="nav-item">
        <Link to="/map-a" className="nav-link" onClick={toggleSidebar}>
          <span>A</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/map-b" className="nav-link" onClick={toggleSidebar}>
          <span>B</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/map-c" className="nav-link" onClick={toggleSidebar}>
          <span>C</span>
        </Link>
      </li>
      <li className="nav-item">
        <div className="nav-link" onClick={toggleIncidentSubmenu}>
          <span>사건 목록</span>
        </div>
        {incidentSubmenuOpen && (
          <ul className="navbar-nav ml-3">
            <li className="nav-item">
              <Link to="/incident-list" className="nav-link" onClick={toggleSidebar}>
                <span>확인</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/incident-register" className="nav-link" onClick={toggleSidebar}>
                <span>등록</span>
              </Link>
            </li>
          </ul>
        )}
      </li>

      <hr className="sidebar-divider d-none d-md-block" />

      {/* Sidebar Toggler */}
      <div className="text-center d-none d-md-inline">
        <button className="rounded-circle border-0" onClick={toggleSidebar} id="sidebarToggle"></button>
      </div>
    </ul>
  );
}

export default Sidebar;





