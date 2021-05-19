import React from "react";
import styles from "../styles/Table.module.scss";
import HoverTable from "./HoverTable";

export default function Table({ data }) {
  return (
    <div className={styles.wrapper}>
      <table>
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
                    {Array.isArray(data[ikey][key]) ? (
                      <HoverTable data={data[ikey][key]} />
                    ) : (
                      data[ikey][key]
                    )}
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
