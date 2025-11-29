import React from "react";
import styles from "../style/redevelopmentWork.module.scss";
import { FaPlay } from "react-icons/fa";

const RedevelopmentWork = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div>
          <h3 className={styles.title}>View the Stadium redevelopment work</h3>
        </div>
        <div className={styles.imgDiv}>
          <img
            src="https://assets.realmadrid.com/is/image/realmadrid/Bernabeu?$Desktop$&fit=wrap&wid=1440"
            alt=""
          />
          <div className={styles.topRight}>
            <div className={styles.item}>
              <FaPlay />
            </div>
            <span>3</span>
            <p>
              3 - Corner of <br /> Castellana and Rafael <br /> Salgado{" "}
            </p>
          </div>
          <div className={styles.topLeft}>
            <div className={styles.item}>
              <FaPlay />
            </div>
            <span>1</span>
            <p>1 - Main façade Castellana</p>
          </div>
          <div className={styles.bottomRight}>
            <div className={styles.item}>
              <FaPlay />
            </div>
            <span>4</span>
            <p>
              {" "}
              4 - Corner of Padre Damián <br /> and Rafael Salgado
            </p>
          </div>
          <div className={styles.bottomLeft}>
            <div className={styles.item}>
              <FaPlay />
            </div>
            <span>2</span>
            <p> 2 - Plaza Sagrados Corazones </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RedevelopmentWork;
