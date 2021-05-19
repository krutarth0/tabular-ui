import Link from "next/link";
import React from "react";
import styles from "../styles/Options.module.scss";
import { range } from "../utilities/functions";

export default function Options() {
  var totalPagesOption = range(1, Math.ceil(10));

  return (
    <div className={styles.optionContainer}>
      <div className={styles.option}>
        <div className={styles.dropdown}>
          <button className={styles.dropbtn}>Page Size</button>
          <div className={styles.dropdownContent}>
            {totalPagesOption.map((e) => (
              <Link key={e} href={`/?numEntries=${e}`}>
                <p>{e}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
