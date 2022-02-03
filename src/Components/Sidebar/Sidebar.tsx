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

import classnames from 'classnames';
import styles from './Sidebar.module.css';

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className={sidebarOpen ? classnames(styles.sidebar, styles.open) : styles.sidebar}>
      <div className={styles.logo_details}>
        <div className={styles.logo_name}>Digital Advisor</div>
        <FontAwesomeIcon
          className={styles.sidebar_menu}
          icon={sidebarOpen ? faTimes : faBars}
          id="btn"
          style={{ marginLeft: 0 }}
          onClick={() => setSidebarOpen((prev) => !prev)}
        />
      </div>
      <ul className={styles.nav_list}>
        <div>
          <li>
            <a href="#оперативный_экран">
              <FontAwesomeIcon className={styles.sidebar_icon} icon={faDesktop} />
              <span className={styles.links_name}>Оперативный экран</span>
            </a>
            <span className={styles.tooltip}>Оперативный экран</span>
          </li>
          <li>
            <a href="#диаграмма_CH4">
              <FontAwesomeIcon className={styles.sidebar_icon} icon={faChartLine} />
              <span className={styles.links_name}>Диаграмма CH4</span>
            </a>
            <span className={styles.tooltip}>Диаграмма CH4</span>
          </li>
        </div>
        <li className={styles.support_service}>
          <a href="#служба_поддержки">
            <FontAwesomeIcon className={styles.sidebar_icon} icon={faQuestionCircle} />
            <span className={styles.links_name}>Служба поддержки</span>
          </a>
          <span className={styles.tooltip}>Служба поддержки</span>
        </li>
        <li className={styles.profile}>
          <div className={styles.profile_details}>
            <div className={styles.name_job}>
              <div className={styles.name}>Иванов Иван Иванович</div>
              <div className={styles.job}>Инженер</div>
            </div>
          </div>
          <FontAwesomeIcon
            className={classnames(styles.sidebar_icon, styles.log_out)}
            icon={faUser}
          />
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
