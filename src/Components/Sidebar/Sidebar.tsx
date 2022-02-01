import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDesktop,
  faChartLine,
  faQuestionCircle,
  faBars,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
// import styles from './Sidebar.module.css';
import './style.css';

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className={sidebarOpen ? 'sidebar open' : 'sidebar'}>
      <div className="logo-details">
        <div className="logo_name">Digital Advisor</div>
        <FontAwesomeIcon
          className="sidebar-menu"
          icon={sidebarOpen ? faTimes : faBars}
          id="btn"
          style={{ marginLeft: 0 }}
          onClick={() => setSidebarOpen((prev) => !prev)}
        />
      </div>
      <ul className="nav-list">
        <div>
          <li>
            <a href="#оперативный_экран">
              <FontAwesomeIcon className="sidebar-icon" icon={faDesktop} />
              <span className="links_name">Оперативный экран</span>
            </a>
            <span className="tooltip">Оперативный экран</span>
          </li>
          <li>
            <a href="#диаграмма_CH4">
              <FontAwesomeIcon className="sidebar-icon" icon={faChartLine} />
              <span className="links_name">Диаграмма CH4</span>
            </a>
            <span className="tooltip">Диаграмма CH4</span>
          </li>
        </div>
        <li className="support_service">
          <a href="#служба_поддержки">
            <FontAwesomeIcon className="sidebar-icon" icon={faQuestionCircle} />
            <span className="links_name">Служба поддержки</span>
          </a>
          <span className="tooltip">Служба поддержки</span>
        </li>
        <li className="profile">
          <div className="profile-details">
            <div className="name_job">
              <div className="name">Иванов Иван Иванович</div>
              <div className="job">Инженер</div>
            </div>
          </div>
          <FontAwesomeIcon className="sidebar-icon" icon={faUser} id="log_out" />
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
