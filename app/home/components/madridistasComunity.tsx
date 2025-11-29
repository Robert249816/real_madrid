import React from "react";
import styles from "../style/madridistatComunity.module.scss";
const MadridistasComunity = () => {
  return (
    <div className={styles.block}>
      <div>
        <h2>Madridista Community</h2>
      </div>
      <div className={styles.container}>
        <div className={styles.imgDiv}>
          <img
            src="https://assets.realmadrid.com/is/image/realmadrid/MADRIDISTA_PREMIUM_HeroBanner_1x1_en?$Desktop$&fit=wrap&wid=752"
            alt=""
          />
        </div>
        <div className={styles.box}>
          <p>Join the Madridista Community</p>
          <button> Become Premium now </button>
        </div>
      </div>
    </div>
  );
};

export default MadridistasComunity;
