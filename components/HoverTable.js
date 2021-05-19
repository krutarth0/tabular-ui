import React from "react";
import styles from "../styles/Table.module.scss";

export default function HoverTable({ data }) {
  return (
    <div className={styles.hoverTable}>
      &nbsp;
      <table className={styles.hoverTableContent}>
        <tr>
          {Object.entries(data[0]).map(([key, i]) => {
            return <th>{key}</th>;
          })}
        </tr>
        {Object.entries(data).map(([ikey]) => {
          return (
            <tr>
              {Object.entries(data[ikey]).map(([key]) => {
                return (
                  <td>
                    {Array.isArray(data[ikey][key]) ? "hover" : data[ikey][key]}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </table>
    </div>
  );
}
