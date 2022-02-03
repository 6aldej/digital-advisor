import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import chartLang from 'Configs/chartsConfig';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

import classnames from 'classnames';
import styles from './ChartCurrentCh4Level.module.css';

Highcharts.setOptions({ ...chartLang });

const ChartCurrentCh4Level: React.FC<{
  data: {
    series: { data: (number | null)[][]; color: string; name: string }[];
    plotLines: number[];
  };
  title: string;
  status: string;
  info: string;
}> = ({ data, title, status, info }) => {
  const options = {
    chart: {
      type: 'line',
      marginRight: 50,
    },
    credits: {
      enabled: false,
    },
    title: {
      text: title,
      margin: 0,
      style: {
        fontSize: '16px',
      },
    },
    legend: {
      enabled: false,
    },
    xAxis: {
      type: 'datetime',
      gridLineWidth: 1,
      crosshair: {
        color: '#1ac0c69c',
      },
      plotLines: [
        {
          color: '#b30000',
          value: 1642161850000,
          width: 4,
          zIndex: 3,
          label: {
            text: 'Сейчас',
            rotation: 0,
            verticalAlign: 'bottom',
            textAlign: 'left',
            y: -5,
            x: 5,
            style: {
              color: '#b30000',
              fontSize: '14px',
              fontWeight: 'bold',
            },
          },
        },
      ],
      plotBands: [
        {
          zIndex: 2,
          color: '#fbc64338',
          borderWidth: 1,
          borderColor: '#2c698d',
          from: 1642161850000,
          to: 1642161880000,
        },
      ],
    },
    yAxis: {
      lineWidth: 2,
      // tickPositions: [0, 0.2, 0.4, 0.6, 0.8, 1, 1.2, 1.4, 1.6, 1.8, 2, 2.2, 2.4, 2.5],
      min: 0,
      max: 2.5,
      endOnTick: false,
      tickInterval: 0.25,
      title: {
        text: '',
      },
      plotLines: [
        {
          color: '#e74645',
          value: Math.max.apply(null, [...data.plotLines]),
          width: 2,
          zIndex: 5,
          label: {
            useHTML: true,
            text: `<div title="Аварийная граница" class="plot-lines-value">${Math.max.apply(null, [
              ...data.plotLines,
            ])}%</div>`,
            align: 'right',
            textAlign: 'left',
            y:
              Math.max.apply(null, [...data.plotLines]) -
                Math.min.apply(null, [...data.plotLines]) <
              0.25
                ? -10
                : -5,
            style: {
              minWidth: '30px',
              background: '#ffbaba',
              fontSize: '10px',
              fontWeight: 'bold',
              padding: '2px',
              textAlign: 'center',
              marginBottom: '10px',
            },
          },
        },
        {
          color: '#facd60',
          value: Math.min.apply(null, [...data.plotLines]),
          width: 2,
          zIndex: 5,
          label: {
            useHTML: true,
            text: `<div title="Предупредительная граница" class="plot-lines-value">${Math.min.apply(
              null,
              [...data.plotLines]
            )}%</div>`,
            align: 'right',
            textAlign: 'left',
            y:
              Math.max.apply(null, [...data.plotLines]) -
                Math.min.apply(null, [...data.plotLines]) <
              0.25
                ? 10
                : 5,
            style: {
              minWidth: '30px',
              background: '#ffd18c',
              fontSize: '10px',
              fontWeight: 'bold',
              padding: '2px',
              textAlign: 'center',
              marginBottom: '10px',
            },
          },
        },
      ],
    },
    tooltip: {
      shared: true,
      crosshairs: true,
    },
    plotOptions: {
      line: {
        dataLabels: {
          enabled: false,
        },
      },
      series: {
        marker: {
          enabled: true,
        },
      },
    },
    series: [...data.series],
  };

  return (
    <div
      className={
        status
          ? classnames(styles.chart_wrapper, styles[status])
          : classnames(styles.chart_wrapper, styles.chart_border_default)
      }
    >
      <div className={styles.chart_info} title={info}>
        <FontAwesomeIcon icon={faInfoCircle} size="lg" />
      </div>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        containerProps={{ style: { height: '100%', width: '100%', position: 'absolute' } }}
      />
    </div>
  );
};

export default ChartCurrentCh4Level;
