import ChartCurrentCh4Level from "components/charts/currentCh4Level";
import Table from "components/Table";

import MonitorIMG from 'img/monitor.png';
import ChartIMG from 'img/chart.png';
import UserIMG from 'img/user.png';
import Question from 'img/question.png';

import styles from "styles/App.module.css";

const App= () => {
  return (
    <div className={styles.main}>
      <div className={styles.sidebar}>
        <div>
          <div style={{borderLeft: '5px solid #000'}}>
            <img src={MonitorIMG} width={50} alt=""/>
            Оперативный экран
          </div>
          <div>
            <img src={ChartIMG} width={50} alt=""/>
            Диаграмма CH4
          </div>
        </div>
        <div>
          <div>
            <img src={UserIMG} width={40} alt=""/>
            Иванов Иван Иванович
          </div>
          <div>
            <img src={Question} width={40} alt=""/>
            Служба поддержки
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.page_content}>
          <ChartCurrentCh4Level/>
          <Table
            tableBody={[
              ['12:30:12', 'Возможно превышение аварийной границы через 5 мин'],
              ['11:05:12', 'Возможно превышение аварийной границы через 5 мин'],
              ['10:42:12', 'Возможно превышение аварийной границы через 5 мин']
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
