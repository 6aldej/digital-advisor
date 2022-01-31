import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import chartLang from 'Configs/chartsConfig';

import classnames from 'classnames';
import styles from './ChartCurrentCh4Level.module.css';

Highcharts.setOptions({ ...chartLang });

const ChartCurrentCh4Level: React.FC<{
  data: {
    series: { data: (number | null)[][]; color: string; name: string }[];
    plotLines: number[];
    danger: boolean;
  };
}> = ({ data }) => {
  const options = {
    chart: {
      type: 'line',
      height: 250,
      marginRight: 80,
    },
    credits: {
      enabled: false,
    },
    title: {
      text: 'Текущий уровень CH4, %',
    },
    legend: {
      enabled: true,
      margin: 33,
      align: 'center',
      padding: 0,
      alignColumns: true,
      symbolRadius: 0,
      symbolPadding: 15,
      symbolWidth: 18,
      symbolHeight: 7,
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
          zIndex: 5,
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
      lineWidth: 1,
      title: {
        text: '',
      },
      tickInterval: 0.1,
      plotLines: [
        {
          color: '#e74645',
          value: Math.max.apply(null, [...data.plotLines]),
          width: 2,
          zIndex: 5,
          label: {
            useHTML: true,
            text: `<div class="plot-lines-value">${Math.max.apply(null, [
              ...data.plotLines,
            ])}%</div>`,
            align: 'right',
            textAlign: 'left',
            style: {
              minWidth: '30px',
              background: '#ffbaba',
              fontSize: '10px',
              fontWeight: 'bold',
              padding: '2px',
              textAlign: 'center',
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
            text: `<div class="plot-lines-value">${Math.min.apply(null, [
              ...data.plotLines,
            ])}%</div>`,
            align: 'right',
            textAlign: 'left',
            style: {
              minWidth: '30px',
              background: '#ffd18c',
              fontSize: '10px',
              fontWeight: 'bold',
              padding: '2px',
              textAlign: 'center',
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
        !data.danger
          ? classnames(styles.chart_wrapper, styles.chart_border_default)
          : classnames(styles.chart_wrapper, styles.chart_border_danger)
      }
    >
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        containerProps={{ style: { width: '100%' } }}
      />
    </div>
  );
};

export default ChartCurrentCh4Level;
