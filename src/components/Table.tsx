import React from "react";
import styles from 'styles/components/Table.module.css';

const Table:React.FC<{
  tableBody: Array<Array<string|number>>   
}> = ({tableBody}) => {

  const returnTableBody = tableBody.map((row,index) => {
    const returnRow = row.map((item, index) => {
      return <td key={index}>{item}</td>
    })
    return <tr key={index}>{returnRow}</tr>
  })

  return (
    <table className={styles.table}>
      <thead className={styles.thead}>
        <tr><th>Время</th>
        <th>Сообщение</th></tr>
      </thead>
      <tbody className={styles.tbody}>
        {returnTableBody}
      </tbody>
    </table>
  )
};

export default Table;
