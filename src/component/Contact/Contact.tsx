import React from "react";
import Image from "next/image";
import styles from "./Contact.module.css";
import { IoIosCall } from "react-icons/io";

function Contact() {
  return (
    <div className={styles.checkSectionMain}>
      {/* ======> left portion */}
      <div className={styles.leftMainPortion}>
        <div className={styles.leftPortion}>
          <p className={styles.title}>Contact us</p>
          {/* ==> contact number */}
          <p className={styles.contact}>
            <IoIosCall /> 1-800-602-0240
          </p>
          {/* ===> award image */}
          <div className={styles.awardImage}>
            <Image src="/Assets/Award.png" fill alt="award-image"></Image>
          </div>
          <p className={styles.text}>
            {" "}
            Motivation also involves factors that direct and maintain
            goal-directed actions. Although, such motives are rarely directly
            observable. As a result, we must often infer the reasons why people
            do the things that they do based on observable behaviors
          </p>
        </div>
      </div>
      {/* =====> right portion */}
      <div className={styles.rightMainSection}>
        <div className={styles.rightPortion}>
          <p className={styles.rightPTitle}>
            Buy Gold and Silver Coins & Bullion
          </p>
          <p className={styles.text}>
            {" "}
            Motivation also involves factors that direct and maintain
            goal-directed actions. Although, such motives are rarely directly
            observable. As a result, we must often infer the reasons why people
            do the things that they do based on observable behaviors Motivation
            also involves factors
          </p>
          <p className={styles.text}>
            {" "}
            Motivation also involves factors that direct and maintain
            goal-directed actions. Although, such motives are rarely directly
            observable. As a result, we must often infer the
          </p>
          <p className={styles.rightPContact}>
            To get started ,just pick up the phone and call Toll-Free{" "}
            <span className={styles.rightIContact}>1-800-602-0240</span>{" "}
          </p>
          {/* ======> card */}
          {[0, 1, 2].map((card, index) => {
            return (
              <div key={index} className={styles.cardMain}>
                {/* ====>image */}
                <div className={styles.cardImage}></div>
                {/* ===>  */}
                <div className={styles.cardContent}>
                  <p className={styles.cardTitle}>American Eagle Gold Coin</p>
                  <p className={styles.cardText}>
                    {" "}
                    Motivation also involves factors that direct and maintain
                    goal-directed actions. Although, such motives are rarely
                    directly observable. As a result, we must often infer the
                  </p>
                  <p className={styles.cardText}>
                    {" "}
                    Motivation also involves factors that direct and maintain
                    goal-directed actions. Although, such motives are rarely
                    directly observable. As a result, we must often infer the
                  </p>
                  <p className={styles.cardText}>
                    {" "}
                    Motivation also involves factors that direct and maintain
                    goal-directed actions. Although, such motives are rarely
                    directly
                  </p>
                  <p className={styles.cardText}>
                    {" "}
                    Motivation also involves factors that direct and maintain
                    goal-directed actions. Although, such motives are rarely
                    directly observable. As a result, we must often infer the
                    such motives are rarely directly
                  </p>
                  {/* ====> bottom line */}
                  <div className={styles.border}></div>
                  {/* ====> bullets */}
                  <ul className={styles.bulletsMain}>
                    <li className={styles.listItem}>Approved for IRs: Yes</li>
                    <li className={styles.listItem}>Weight 1 queue</li>
                    <li className={styles.listItem}>
                      Grade:Brilliant Uncirculated
                    </li>
                    <li className={styles.listItem}>
                      Year:Random, Based upon stack on Hand
                    </li>
                    <li className={styles.listItem}>Purity: 9167</li>
                    <li className={styles.listItem}>Face Value: $50</li>
                    <li className={styles.listItem}>Minted by: U.S.Mint</li>
                    <li className={styles.listItem}>
                      Fractional Denominations U.S Mint
                    </li>
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Contact;
