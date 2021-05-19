import React from "react";
import styles from "../styles/Table.module.scss";

import { unique_key } from "../utilities/functions";

export default function HoverTable({ data }) {
  return (
    <div className={styles.hoverTable}>
      &nbsp;
      <table className={styles.hoverTableContent}>
        <thead>
          <tr>
            {Object.entries(data[0]).map(([key, i]) => {
              return <th key={unique_key()}>{key}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {Object.entries(data).map(([ikey]) => {
            return (
              <tr key={unique_key()}>
                {Object.entries(data[ikey]).map(([key]) => {
                  return (
                    <td key={unique_key()}>
                      {Array.isArray(data[ikey][key])
                        ? "hover"
                        : data[ikey][key]}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
