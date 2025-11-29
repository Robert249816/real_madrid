import React from "react";
import { FaTrophy } from "react-icons/fa";

import styles from "../style/legendaryTrack.module.scss";
const LegendaryTrack = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <p>
          <strong>A legendary track record</strong>
        </p>
      </div>
      <div className={styles.block}>
        <div className={styles.leftBlock}>
          <img
            src="https://assets.realmadrid.com/is/image/realmadrid/ND_SALA_JUNTAS_HE02463Thumb?$Desktop$&fit=wrap&wid=700"
            alt=""
          />
        </div>
        <div className={styles.rightBlock}>
          <div className={styles.rightBlock_title}>
            <div className={styles.footballBasket}>
              <div className={styles.football}>Football</div>
              <div className={styles.basket}>Basketball</div>
            </div>
            <a href="">See all honours</a>
          </div>
          <div className={styles.trophies}>
            <div className={styles.trophiesleft}>
              <div className={styles.cup}>
                <div>
                  <div>
                    <FaTrophy />
                  </div>
                  <span>1</span>
                </div>
                <div className={styles.sup_text}>
                  <p>
                    The Best Club of the 20th Century <br /> FIFA Trophy
                  </p>
                </div>
              </div>
              <div className={styles.cup}>
                <div>
                  <div>
                    <FaTrophy />
                  </div>
                  <span>15</span>
                </div>
                <div className={styles.sup_text}>
                  <p>Europen Cups</p>
                </div>
              </div>
              <div className={styles.cup}>
                <div>
                  <div>
                    <FaTrophy />
                  </div>
                  <span>9</span>
                </div>
                <div className={styles.sup_text}>
                  <p>FIFA Club World Cups</p>
                </div>
              </div>
              <div className={styles.cup}>
                <div>
                  <div>
                    <FaTrophy />
                  </div>
                  <span>6</span>
                </div>
                <div className={styles.sup_text}>
                  <p>European Supper Cups</p>
                </div>
              </div>
              <div className={styles.cup}>
                <div>
                  <div>
                    <FaTrophy />
                  </div>
                  <span>2</span>
                </div>
                <div className={styles.sup_text}>
                  <p>UEFA Cups</p>
                </div>
              </div>
            </div>
            <div className={styles.trophiesright}>
              <div className={styles.cup}>
                <div>
                  <div>
                    <FaTrophy />
                  </div>
                  <span>36</span>
                </div>
                <div className={styles.sup_text}>
                  <p>National Leagues</p>
                </div>
              </div>
              <div className={styles.cup}>
                <div>
                  <div>
                    <FaTrophy />
                  </div>
                  <span>20</span>
                </div>
                <div className={styles.sup_text}>
                  <p>Spanish Cups</p>
                </div>
              </div>
              <div className={styles.cup}>
                <div>
                  <div>
                    <FaTrophy />
                  </div>
                  <span>13</span>
                </div>
                <div className={styles.sup_text}>
                  <p>Spanish Super Cups</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegendaryTrack;
