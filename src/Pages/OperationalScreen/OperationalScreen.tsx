import { useEffect, useState } from 'react';
import ChartCurrentCh4Level from 'Components/ChartCurrentCh4Level/ChartCurrentCh4Level';
import Table from 'Components/Table/Table';
import { ReactComponent as WarningImg } from 'Assets/Images/warning.svg';
import { chartData } from './dataChart';

import styles from './OperationalScreen.module.css';

const OperationalScreen = () => {
  const [alerts, setAlerts] = useState<{
    priorityStatus: string;
    events: { name: string; status: string }[];
  }>({
    priorityStatus: '',
    events: [],
  });

  useEffect(() => {
    const events: { name: string; status: string }[] = [];
    let status: string = '';
    for (let i = 0; i < Object.keys(chartData).length; i += 1) {
      const currentKey = Object.keys(chartData)[i];
      const currentData = chartData[currentKey].series[0].data.map((item) => {
        return item[1];
      });
      if (
        currentData.some(
          (item) => item >= Math.min.apply(null, [...chartData[currentKey].plotLines])
        )
      ) {
        events.push({ name: Object.keys(chartData)[i], status: 'warning' });
      }
      if (
        currentData.some(
          (item) => item >= Math.max.apply(null, [...chartData[currentKey].plotLines])
        )
      ) {
        events.push({ name: Object.keys(chartData)[i], status: 'danger' });
      }
    }
    if (events.length) {
      events.sort((a) => (a.status === 'danger' ? -1 : 1));
      if (events.some((item) => item.status === 'warning')) {
        status = 'warning';
      }
      if (events.some((item) => item.status === 'danger')) {
        status = 'danger';
      }

      setAlerts({
        priorityStatus: status,
        events,
      });
    }
  }, [chartData]);

  const returnStatus = (array: { name: string; status: string }[], name: string): string => {
    if (array.length) {
      const arrayFiltered = array.filter((item) => item.name === name);
      if (arrayFiltered.some((item) => item.status === 'danger')) {
        return 'danger';
      }
      if (arrayFiltered.some((item) => item.status === 'warning')) {
        return 'warning';
      }
      return '';
    }
    return '';
  };

  const returnEventList = alerts.events.map((item) => (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div className={item.status === 'danger' ? styles.danger_event : styles.warning_event} />
      {item.name}
    </div>
  ));

  return (
    <div className={styles.page_operational_screen}>
      <div className={styles.explanation_wrapper}>
        <div className={styles.forecast_wrapper}>
          <div className={styles.forecast_block} />
          <p>Прогноз будущих значений</p>
        </div>

        <div className={styles.alert_icon}>
          <WarningImg
            className={
              alerts.priorityStatus && alerts.priorityStatus === 'danger'
                ? styles.danger_blink
                : styles.warning_blink
            }
          />
          <div className={styles.events_list}>{returnEventList}</div>
        </div>
      </div>

      <div className={styles.charts_wrapper}>
        <ChartCurrentCh4Level
          data={chartData.M241}
          title="М241 - Текущий уровень CH4, %"
          info="М241 - Датчик метана ВШ, над приводом главного конвейера"
          status={returnStatus(alerts.events, 'M241')}
        />
        <ChartCurrentCh4Level
          data={chartData.M243}
          title="М243 - Текущий уровень CH4, %"
          info="М243 - Датчик метана ВШ, в тупике вентиляционной выработки, погашаемой за очистным забоем"
          status={returnStatus(alerts.events, 'M243')}
        />
        <ChartCurrentCh4Level
          data={chartData.M245}
          title="М245 - Текущий уровень CH4, %"
          info="М245 - Датчик метана ВШ, на исходящей струе очистной выработки"
          status={returnStatus(alerts.events, 'M245')}
        />
      </div>

      <div className={styles.table_wrapper}>
        <Table
          tableBody={[
            {
              id: 1,
              items: [
                '12:30:12',
                'Возможно превышение аварийной границы через 5 мин',
                'Рекомендация',
              ],
            },
            {
              id: 2,
              items: [
                '12:30:12',
                'Возможно превышение аварийной границы через 5 мин',
                'Рекомендация',
              ],
            },
            {
              id: 3,
              items: [
                '12:30:12',
                'Возможно превышение аварийной границы через 5 мин',
                'Рекомендация',
              ],
            },
          ]}
        />
      </div>
    </div>
  );
};

export default OperationalScreen;
