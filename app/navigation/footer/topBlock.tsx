import React from "react";
import styles from "../footer/topBlock.module.scss";
const TopBlock = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.items}>
          <h3 className={styles.items_title}>Football</h3>
          <p>First Team</p>
          <p>Academy</p>
          <p>Women's Team</p>
        </div>
        <div className={styles.items}>
          <h3 className={styles.items_title}>Basketball</h3>
          <p>First Team</p>
        </div>
        <div className={styles.items}>
          <h3 className={styles.items_title}>The Club</h3>
          <p>Schedule</p>
          <p>Transparency and Sustainability</p>
          <p>Sponsors </p>
          <p>Values</p>
          <p>Honours</p>
          <p>History</p>
          <p>Fan clubs</p>
          <p>Bernabéu Stadium </p>
          <p>Real Madrid City</p>
          <p>Movistar Arena</p>
          <p>Contact</p>
        </div>

        <div className={styles.titleItems}>
          <h3>Bernabéu Stadium</h3>
          <h3>RMTV live</h3>
          <h3>News</h3>
          <h3>Foundation Real Madrid</h3>
          <h3>RM Next</h3>
          <h3>RM Graduate School</h3>
        </div>
        <div className={styles.titleItems}>
          <h3>Madridistas</h3>
          <h3>Hospitality</h3>
          <h3>Shop</h3>
          <h3>Tour</h3>
          <h3>Tickets</h3>
          <h3>RM Play</h3>
        </div>
      </div>
    </div>
  );
};

export default TopBlock;
