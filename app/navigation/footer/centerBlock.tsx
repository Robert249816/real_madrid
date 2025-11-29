import React from "react";
import styles from "../footer/centerBlock.module.scss";
const CenterBlock = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.header}>
          <span>Download Now</span>
          <p>Official App Fan</p>
        </div>
        <div className={styles.installApp}>
          <img
            src="https://assets.realmadrid.com/is/content/realmadrid/Google%20Play%20Badge_en?$Mobile$&fit=wrap"
            alt=""
          />
          <img
            src="https://assets.realmadrid.com/is/content/realmadrid/App%20Store%20Badge_en?$Mobile$&fit=wrap"
            alt=""
            className={styles.centerImg}
          />
          <img
            src="https://assets.realmadrid.com/is/content/realmadrid/Huawei%20Store%20Badge_en?$Mobile$&fit=wrap"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default CenterBlock;
