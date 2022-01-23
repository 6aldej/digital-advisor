import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import { options } from "./chartOptions";

import styles from 'styles/components/ChartCurrentCh4Level.module.css';
import classnames from 'classnames';

Highcharts.setOptions({
  lang: {
      loading: 'Загрузка...',
      months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
      weekdays: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
      shortMonths: ['Янв', 'Фев', 'Март', 'Апр', 'Май', 'Июнь', 'Июль', 'Авг', 'Сент', 'Окт', 'Нояб', 'Дек'],
      rangeSelectorFrom: "С",
      rangeSelectorTo: "По",
      rangeSelectorZoom: "Период"
  }
});

const ChartCurrentCh4Level = () => {
  return (
    <div className={styles.component_wrapper}>
      <div className={styles.explanation_wrapper}>
        <div className={styles.explanation_item}>
          <div className={classnames(styles.color_line, styles.danger_border)}></div>
          <p>Аварийная граница</p>
          <div className={styles.lower_value}>0.9%</div>
          <p>Нижний порог</p>
        </div>

        <div className={styles.explanation_item}>
          <div className={classnames(styles.color_line, styles.warning_border)}></div>
          <p>Предупредительная граница</p>
          <div className={styles.lower_value}>0.8%</div>
          <p>Нижний порог</p>
        </div>

        <div className={styles.forecast_wrapper}>
          <div className={styles.forecast_block}></div>
          <p>Прогноз будущих значений</p>
        </div>
      </div>


      <div className={styles.chart_wrapper}>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>


    </div>
  )
};

export default ChartCurrentCh4Level;
