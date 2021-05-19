import React from "react";
import Link from "next/link";
import { range } from "../utilities/functions";
import styles from "../styles/Pages.module.scss";

export default function Pages({ pageNo, pages, numEntries }) {
  var totalPages = range(1, Math.ceil(pages));

  //   var totalPages = [1, 2, 3, 4, 5];

  return (
    <div className={styles.pagesContainer}>
      {totalPages.map((page) =>
        page == pageNo ? (
          <Link href={`/?page=${page}&numEntries=${numEntries}`}>
            <div className={`${styles.pageButton} ${styles.activePagebutton}`}>
              {page}
            </div>
          </Link>
        ) : (
          <Link href={`/?page=${page}&numEntries=${numEntries}`}>
            <div className={styles.pageButton}>{page}</div>
          </Link>
        )
      )}
    </div>
  );
}
