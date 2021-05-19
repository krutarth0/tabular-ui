import React from "react";
import styles from "../styles/Table.module.scss";
import { unique_key } from "../utilities/functions";
import HoverTable from "./HoverTable";

export default function Table({ data }) {
  return (
    <div className={styles.wrapper}>
      <table>
        <thead>
          <tr key={unique_key()}>
            {Object.entries(data[0]).map(([key, i]) => {
              return <th key={unique_key()}>{key}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {Object.entries(data).map(([ikey, i]) => {
            return (
              <tr key={unique_key()}>
                {Object.entries(data[ikey]).map(([key]) => {
                  return (
                    <td key={unique_key()}>
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
        </tbody>
      </table>
    </div>
  );
}
