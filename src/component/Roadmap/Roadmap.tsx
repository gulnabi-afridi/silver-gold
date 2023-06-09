import React from "react";
import styles from "./Roadmap.module.css";
import Image from "next/image";

function Roadmap() {
  return (
    <div className={styles.roadmapMain}>
      <div className={styles.roadmap}>
        {/* =====> leftPortion */}
        <div className={styles.leftPortion}>
          {/* ==> title */}
          <div className={styles.title}>
            <h1 className={styles.number}>3</h1>
            <h1 className={styles.text}>Easy Steps to Own Precious Metals</h1>
          </div>
          {/* text */}
          <p className={styles.text2}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s
          </p>
          <p className={styles.text2}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s
          </p>
          <button className={styles.freeGold}>
            Get a Free Gold & <br /> Sliver Info Kit
          </button>
        </div>
        {/* ======> right portion */}
        <div className={styles.rightPortion}>
          {roadmapData.map((item, index) => {
            return (
              <div key={index} className={styles.portion}>
                {/* => ist portion */}
                <div className={styles.firstPortion}>
                  <p>{item.number}</p>
                  <Image
                    src={item.img}
                    alt="lock-image"
                    width={80}
                    height={80}
                  ></Image>
                </div>
                {/* ==> 2nd portion */}
                <div className={styles.secPortion}>
                  <p className={styles.secPortionIst}>Open Your Account</p>
                  <p className={styles.secPortionText}>{item.text}</p>
                </div>
              </div>
            );
          })}
        </div>
        {/* =======>  */}
        <div className={styles.weOffer}>
          <p className={styles.weOfferTitle}>
            You will find a List of Everything We Offer Bellow
          </p>
          <p className={styles.weOfferText}>
            However if you are intrested in something that you do not see listed
            let us know and we can try get it for you. <br /> To get started
            just pick up the phone and call Toll-Free 1-800-604-0240.{" "}
          </p>
        </div>
      </div>
      {/* =====>  */}
      <div className={styles.shape}></div>
    </div>
  );
}

const roadmapData = [
  {
    number: "1",
    img: "/Assets/lock.png",
    title: "Open Your Account",
    text: "Call us Toll-Free 1-800-604-0240 to let us know you are ready to open an account. we will email your standard customer agreement Review it Sign it and send it back and you will be ready to work with a precious Metals Advisor to fund your account and start investing",
  },
  {
    number: "2",
    img: "/Assets/coin.png",
    title: "Open Your Account",
    text: "  Motivation also involves factors that direct and maintaingoal-directed actions. Although such motives are rarelydirectly observable. As a result we must often infer the reasons why people do the things that they do based on observable behaviors ",
  },
  {
    number: "3",
    img: "/Assets/box.png",
    title: "Choce precious metal",
    text: "  Motivation also involves factors that direct and maintaingoal-directed actions. Although such motives are rarelydirectly observable. As a result we must often infer the reasons why people do the things that they do based on observable behaviors ",
  },
];

export default Roadmap;
