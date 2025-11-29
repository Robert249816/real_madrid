import React from "react";
import styles from "../style/training.module.scss";

const Training = () => {
  return (
    <div className={styles.training}>
      <div className={styles.training__wrapper}>
        <div className={styles.imgDiv}>
          <img
            src="https://assets.realmadrid.com/is/image/realmadrid/ND-ENTRENAMIENTO-02_MJ14299?$Desktop$&fit=wrap&wid=1440"
            alt="Real Madrid Training"
            className={styles.training__image}
          />
        </div>

        <div className={styles.training__content}>
          <h1 className={styles.training__title}>
            Real Madrid begin preparations for Rayo clash
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Training;
