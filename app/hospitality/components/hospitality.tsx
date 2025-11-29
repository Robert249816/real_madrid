import React from "react";
import styles from "../style/hospitality.module.scss";
const Hospitality = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.sesonalHospitality}>
          <div>
            <strong>SEASONAL HOSPITALITY</strong>
          </div>
          <div>
            <strong>MATCHDAY</strong>
          </div>
          <div>
            <strong>BASKETBALL</strong>
          </div>
          <div>
            <strong>VIP CONTACT</strong>
          </div>
          <div>
            <strong>FAQS</strong>
          </div>
        </div>
        <div className={styles.hospitality}>
          <h1>HOSPITALITY</h1>
          <h2>
            WHERE HISTORY TAKES SHAPE IN AN EXCLUSIVE AND SPECIAL ATMOSPHERE
          </h2>
          <button>BUY HOSPITALITY TICKETS</button>
          <p>Purchase Seasonal Hospitality</p>
        </div>
      </div>
    </div>
  );
};

export default Hospitality;
