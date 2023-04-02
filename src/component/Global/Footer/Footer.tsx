import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";
import { RxDividerVertical } from "react-icons/rx";
import {Data} from "../../../../Data/data";

function Footer() {
  return (
    <div className={styles.footerMain}>
      <div className={styles.footer}>
        {/* ====> top portion*/}
        <div className={styles.topSec}>
          {/* => logo */}
          <div className={styles.logo}>
            <Image
              src="/Assets/logo.png"
              fill
              className="object-contain"
              alt="logo-image"
            />
          </div>
          {/* ====> links */}
          <div className={styles.navLink}>
            {Data.navLinks.map((nav: any, index: number) => {
              return (
                <Link key={index} className={styles.link} href={nav.path}>
                  {nav.name}
                </Link>
              );
            })}
          </div>
        </div>
        {/* ===> bottom portion */}
        <div className={styles.bottomPor}>
          {/* ==>llc + privacy policy + terms + ..... links */}
          <div className={styles.llcAndLinks}>
            <p className={styles.llc}>@2008-2023 gold gate capital, llc</p>
            <div className={styles.bottmPLinks}>
              {Data.footerNaviLink.map((nav, index) => {
                return (
                  <div key={index} className={styles.linkMain}>
                    <Link className={styles.link} href="#">
                      privacy policy
                    </Link>
                    {index === footerNaviLink.length - 1 ? (
                      ""
                    ) : (
                      <RxDividerVertical className={styles.verticalLine} />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          <p className={styles.text}>
            Metals such as steel aluminum and copper are widely used in the
            construction industry for building structures bridges and other
            infrastructure. They are strong, durable, and can withstand harsh
            weather conditions Metals are used in the production of vehicles,
            including cars, trucks, airplanes and trains. They provide strength
            and stability while being lightweight which increases fuel
            efficiency.
          </p>
        </div>
      </div>
    </div>
  );
}


const footerNaviLink = [
  {
    name: "privacy policy",
    path: "#",
  },
  {
    name: "terms",
    path: "#",
  },
  {
    name: "risk disclosures",
    path: "#",
  },
  {
    name: "transaction agreement",
    path: "#",
  },
];
export default Footer;
