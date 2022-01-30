import React from 'react';
import styles from './Table.module.css';

const Table: React.FC<{
  tableBody: Array<{ id: number; items: Array<string | number> }>;
}> = ({ tableBody }) => {
  const returnTableBody = tableBody.map((row) => {
    const returnRow = row.items.map((item) => {
      return <td key={item}>{item}</td>;
    });
    return <tr key={row.id}>{returnRow}</tr>;
  });

  return (
    <table className={styles.table}>
      <thead className={styles.thead}>
        <tr>
          <th>Время</th>
          <th>Сообщение</th>
          <th>Рекомендация</th>
        </tr>
      </thead>
      <tbody className={styles.tbody}>{returnTableBody}</tbody>
    </table>
  );
};

export default Table;
