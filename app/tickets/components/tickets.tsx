import React, { FC } from "react";
import styles from "../style/tickets.module.scss";
const Tickets: FC = () => {
  return (
    <div>
      <div className={styles.tickets}>
        <p>
          <strong>Tickets</strong>{" "}
        </p>
      </div>
    </div>
  );
};

export default Tickets;
