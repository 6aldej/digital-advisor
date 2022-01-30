import ChartCurrentCh4Level from 'Components/ChartCurrentCh4Level/ChartCurrentCh4Level';
import Table from 'Components/Table/Table';
import { M241, M243, M245 } from './dataChart';

import styles from './OperationalScreen.module.css';

const OperationalScreen = () => (
  <>
    <div className={styles.explanation_wrapper}>
      <div className={styles.forecast_wrapper}>
        <div className={styles.forecast_block} />
        <p>Прогноз будущих значений</p>
      </div>
    </div>
    <ChartCurrentCh4Level data={M241} />
    <ChartCurrentCh4Level data={M243} />
    <ChartCurrentCh4Level data={M245} />

    <Table
      tableBody={[
        {
          id: 1,
          items: ['12:30:12', 'Возможно превышение аварийной границы через 5 мин', 'Рекомендация'],
        },
        {
          id: 2,
          items: ['12:30:12', 'Возможно превышение аварийной границы через 5 мин', 'Рекомендация'],
        },
        {
          id: 3,
          items: ['12:30:12', 'Возможно превышение аварийной границы через 5 мин', 'Рекомендация'],
        },
      ]}
    />
  </>
);

export default OperationalScreen;
