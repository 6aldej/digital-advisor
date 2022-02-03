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
  // eslint-disable-next-line jsx-a11y/no-static-element-interactions
  return (
    <>
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
          <div>
            <li className={styles.support_service}>
              <a href="#служба_поддержки">
                <FontAwesomeIcon className={styles.sidebar_icon} icon={faQuestionCircle} />
                <span className={styles.links_name}>Служба поддержки</span>
              </a>
              <span className={styles.tooltip}>Служба поддержки</span>
            </li>
            <li>
              <div className={styles.profile}>
                <FontAwesomeIcon className={styles.sidebar_icon} icon={faUser} />
                <span className={styles.links_name}>Иванов Иван Иванович</span>
              </div>
              <span className={styles.tooltip}>Иванов Иван Иванович</span>
            </li>
          </div>
        </ul>
      </div>
      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
      <div
        className={classnames(styles.backdrop, { [styles.backdropShow]: sidebarOpen })}
        onClick={() => setSidebarOpen(false)}
        onKeyPress={() => setSidebarOpen(false)}
      />
    </>
  );
};

export default Sidebar;
