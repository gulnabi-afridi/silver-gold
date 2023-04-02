import React, { useState } from "react";
import styles from "./header.module.css";
import Image from "next/image";
import Link from "next/link";
import { FiDownload } from "react-icons/fi";
import { IoIosCall } from "react-icons/io";
import { Spin as Hamburger } from "hamburger-react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { RxCross2 } from "react-icons/rx";
import {Data} from "../../../../Data/data";


function Header() {
  const [openHumburger, setOpenHumburger] = useState(false);

  return (
    <div className={styles.headerMain}>
      <div className={styles.header}>
        {/* =====> logo */}
        <div className={styles.logo}>
          <Image
            src="/Assets/logo.png"
            fill
            className="object-contain"
            alt="logo-image"
          />
        </div>
        {/* =====> Links */}
        <div className={styles.mainLink}>
          {/* ===> download kit + mobile number */}
          <div className={styles.topLinkSec}>
            {/* ===> download kit */}
            <Link className={styles.downloadKit} href="#">
              <FiDownload className={styles.icon} />
              Download the Kit
            </Link>
            {/* ====> mobile number */}
            <p className={styles.contact}>
              <IoIosCall /> 1-800-602-0240
            </p>
          </div>
          {/* =======>  */}
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

        {/* ====> Hamburger and drawer for small screen */}
        <div className={styles.hamburger}>
          <Hamburger
            color="white"
            rounded
            size={34}
            toggled={openHumburger}
            toggle={setOpenHumburger}
          />
          <Drawer
            open={openHumburger}
            onClose={() => setOpenHumburger(false)}
            direction="right"
            className={styles.drawer}
          >
            <div className={styles.drawerMain}>
              <div className={styles.crossIconDiv}>
                <RxCross2
                  onClick={() => setOpenHumburger(false)}
                  className={styles.crossIcon}
                />
              </div>
              {/* ===> download kit + mobile number */}
              <div className={`${styles.topLinkSec} ${styles.mobTopLinkSec}`}>
                {/* ===> download kit */}
                <Link
                  className={`${styles.downloadKit} ${styles.mobDownloadKit}`}
                  href="#"
                >
                  <FiDownload className={`${styles.icon} ${styles.mobIcon}`} />
                  Download the Kit
                </Link>
                {/* ====> mobile number */}
                <p className={styles.contact}>
                  <IoIosCall /> 1-800-602-0240
                </p>
              </div>
              {/* =====> links */}
              <div className={`${styles.navLink} ${styles.mobNavLink}`}>
                {Data.navLinks.map((nav: any, index: number) => {
                  return (
                    <Link
                      key={index}
                      className={`${styles.link} ${styles.mobLink}`}
                      href={nav.path}
                    >
                      {nav.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          </Drawer>
        </div>
      </div>
    </div>
  );
}



export default Header;
