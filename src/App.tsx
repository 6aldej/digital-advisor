import { Routes, Route } from 'react-router-dom';
import OperationalScreen from 'Pages/OperationalScreen/OperationalScreen';

import MonitorIMG from 'Assets/Images/monitor.png';
import ChartIMG from 'Assets/Images/chart.png';
import UserIMG from 'Assets/Images/user.png';
import Question from 'Assets/Images/question.png';

import styles from './App.module.css';

const App = () => (
  <div className={styles.main}>
    <div className={styles.sidebar}>
      <div>
        <div style={{ borderLeft: '5px solid #000' }}>
          <img src={MonitorIMG} width={50} alt="" />
          Оперативный экран
        </div>
        <div>
          <img src={ChartIMG} width={50} alt="" />
          Диаграмма CH4
        </div>
      </div>
      <div>
        <div>
          <img src={UserIMG} width={40} alt="" />
          Иванов Иван Иванович
        </div>
        <div>
          <img src={Question} width={40} alt="" />
          Служба поддержки
        </div>
      </div>
    </div>
    <div className={styles.content}>
      <div className={styles.page_content}>
        <Routes>
          <Route path="/" element={<OperationalScreen />} />
        </Routes>
      </div>
    </div>
  </div>
);

export default App;
