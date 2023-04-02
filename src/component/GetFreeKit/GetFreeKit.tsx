import React from "react";
import styles from "./GetFreeKit.module.css";
import Image from "next/image";

function GetFreeKit() {
  return (
    <div className={styles.freeKitMain}>
      <div className={styles.freeKit}>
        {/* ===> left portion */}
        <div className={styles.leftPortion}>
          <p className={styles.title}>
            Learn How <br/> Precious Metals<br/> Can Protect Your Wealth
          </p>
          <button className={styles.button}>
            Get Your <span className={styles.boldBtn}>Free</span> Kit
          </button>
        </div>
        {/* ======> right portion */}
        <div className={styles.rightPortion}>
          <Image
            src="/Assets/book.png"
            alt="book-image"
            fill
            className="object-fil"
          ></Image>
        </div>
      </div>
    </div>
  );
}

export default GetFreeKit;
