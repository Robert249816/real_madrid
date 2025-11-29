import React from "react";
import styles from "../style/informationBooking.module.scss";
import { BsFillTelephoneFill } from "react-icons/bs";

const InformatinBooking = () => {
  return (
    <div className={styles.div}>
      <div className={styles.container}>
        <div className={styles.information_container}>
          <div className={styles.information_container_text}>
            <p>
              Experience the emotion of Real Madrid from an exceptional location
              at the Santiago Bernabéu Stadium or Movistar Arena while enjoying
              all of the unique and exclusive services provided by Área
              VIP-Corporate Hospitality.
            </p>
            <p>
              Hospitality tickets to any game of the season include gourmet
              catering, hostess services and cloakroom in annexed hospitality
              areas. Book your seasonal or matchday tickets now.
            </p>
          </div>
        </div>
        <div className={styles.imgDiv}>
          <div>
            <img
              src="https://www.realmadrid.com/sites/en/media_1adc19118187429d896c4b9f0c4217742e55ed0f2.jpeg?width=600&format=webply&optimize=medium"
              alt=""
            />
            <div>
              <h2>SESONAL</h2>
              <p>Purchase individual seats or boxes for the entire season.</p>
            </div>
          </div>
          <div>
            <img
              src="https://www.realmadrid.com/sites/en/media_10bbb38be7dc1b0fdb958e05d42a6258326069764.jpeg?width=600&format=webply&optimize=medium"
              alt=""
            />
            <div>
              <h2>MATCHDAY</h2>
              <p>Purchase tickets for individual games of your choosing.</p>
            </div>
          </div>
          <div>
            <img
              src="https://www.realmadrid.com/sites/en/media_10bbb38be7dc1b0fdb958e05d42a6258326069764.jpeg?width=600&format=webply&optimize=medium"
              alt=""
            />
            <div>
              <h2>BASKETBALL</h2>
              <p>
                Area VIP-Corporate Hospitality offers the most select areas at
                the emblematic WiZink Center.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.information_container_booking}>
        <div className={styles.imformation_infobook}>
          <div className={styles.book}>
            <p>
              <strong>INFORMATION & BOOKING</strong>
            </p>
            <a href="">areavip@realmadrid.es</a>
          </div>
          <div className={styles.telephon}>
            <div>
              <BsFillTelephoneFill />
            </div>
            <p>+34 913 984 377</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformatinBooking;
