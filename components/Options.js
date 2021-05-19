import Link from "next/link";
import React from "react";
import styles from "../styles/Options.module.scss";
import { range, unique_key } from "../utilities/functions";

export default function Options() {
  var totalPagesOption = range(1, Math.ceil(10));

  return (
    <div className={styles.optionContainer}>
      <div className={styles.option}>
        <div className={styles.dropdown}>
          <button className={styles.dropbtn}>Page Size</button>
          <div className={styles.dropdownContent}>
            {totalPagesOption.map((e) => (
              <Link key={unique_key()} href={`/?numEntries=${e}`}>
                <p key={unique_key()}>{e}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
