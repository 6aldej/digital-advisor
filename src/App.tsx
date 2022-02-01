import { Routes, Route } from 'react-router-dom';
import Sidebar from 'Components/Sidebar/Sidebar';
import OperationalScreen from 'Pages/OperationalScreen/OperationalScreen';

import styles from './App.module.css';

const App = () => (
  <div className={styles.main}>
    <Sidebar />
    <div className={styles.content}>
      <div className={styles.page_content}>
        <Routes>
          <Route path="/digital-advisor" element={<OperationalScreen />} />
        </Routes>
      </div>
    </div>
  </div>
);

export default App;
