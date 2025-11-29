"use client";
import React, { useState } from "react";
import styles from "../style/hospitalityMatches.module.scss";
import { SlOptionsVertical } from "react-icons/sl";

interface Props {
  matchday: string;
  stadium: string;
  uhr: string;
  data: string;
  home: string;
  away: string;
  home_name: string;
  away_name: string;
  from: string;
  button_text: string;
}

const HospitalityMatches = () => {
  const arr: Props[] = [
    {
      matchday: "Matchday 15",
      stadium: "Bernabéu",
      uhr: "00:00",
      data: "Mon, Dec 08",
      home: "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--b05ba79b-d2fc-4155-b958-210c4694a6de/_kq9cckrnlogidldtdie2fkbl.app.webp?preferwebp=true",
      away: "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--d6e43164-3950-4ec9-a32c-5bd5ed910fbb/_f27yvbqcngegwsg2ozxxdj4.app.webp?preferwebp=true",
      home_name: "Real Madrid",
      away_name: "Celta de Vigo",
      from: "from 390€",
      button_text: "BUY VIP TICKETS",
    },
    {
      matchday: "Matchday 17",
      stadium: "Bernabéu",
      uhr: "00:00",
      data: "Sun, Dec 21",
      home: "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--b05ba79b-d2fc-4155-b958-210c4694a6de/_kq9cckrnlogidldtdie2fkbl.app.webp?preferwebp=true",
      away: "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--d6a9a52d-ec6a-4f5c-b6b1-2fd7e79d1c83/_0eyb18v5puw4ez03ocaug09m.app.webp?preferwebp=true",
      home_name: "Real Madrid",
      away_name: "Sevilla",
      from: "from 390€",
      button_text: "BUY VIP TICKETS",
    },
    {
      matchday: "Matchday 18",
      stadium: "Bernabéu",
      uhr: "00:00",
      data: "Sun, Dec 24",
      home: "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--b05ba79b-d2fc-4155-b958-210c4694a6de/_kq9cckrnlogidldtdie2fkbl.app.webp?preferwebp=true",
      away: "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--67beb433-44d6-47e3-9fe9-78b582a08220/ah8dala7suqqkj04n2l8xz4zd.app.webp?preferwebp=true",
      home_name: "Real Madrid",
      away_name: "Real Betis",
      from: "from 390€",
      button_text: "BUY VIP TICKETS",
    },
    {
      matchday: "Matchday 20",
      stadium: "Bernabéu",
      uhr: "00:00",
      data: "Sun, Dec 24",
      home: "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--b05ba79b-d2fc-4155-b958-210c4694a6de/_kq9cckrnlogidldtdie2fkbl.app.webp?preferwebp=true",
      away: "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--4127fd3c-2ac0-4d2c-aeac-0a790e34f4eb/_grc9qgcvusllap8h5j6gc5h5.app.webp?preferwebp=true",
      home_name: "Real Madrid",
      away_name: "Levante",
      from: "from 390€",
      button_text: "BUY VIP TICKETS",
    },
    {
      matchday: "Matchday 21",
      stadium: "Bernabéu",
      uhr: "00:00",
      data: "Wed, Jan 21",
      home: "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--b05ba79b-d2fc-4155-b958-210c4694a6de/_kq9cckrnlogidldtdie2fkbl.app.webp?preferwebp=true",
      away: "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--d29cfb42-bb23-4871-a633-48a2c9ccd0e7/_t4hod56fsj7utpjdor8so5q6.app.webp?preferwebp=true",
      home_name: "Real Madrid",
      away_name: "Mónaco",
      from: "from 390€",
      button_text: "BUY VIP TICKETS",
    },
  ];

  const months = ["All", "Dec", "Jan"];

  const [visibleCount, setVisibleCount] = useState(3);
  const [expanded, setExpanded] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState("All");

  const handleShowMore = () => {
    if (!expanded) {
      setVisibleCount(filteredArr.length);
    } else {
      setVisibleCount(3);
    }
    setExpanded(!expanded);
  };

  const filteredArr =
    selectedMonth === "All"
      ? arr
      : arr.filter((el) => el.data.includes(selectedMonth));

  return (
    <div className={styles.block}>
      <div className={styles.container}>
        <div className={styles.container_title}>
          <p>HOSPITALITY UPCOMING MATCHES</p>
        </div>

        <div className={styles.container_matchesCalendar}>
          <div className={styles.matches}>
            <p>Matches on sale</p>
          </div>
          <div className={styles.calendar}>
            {months.map((month) => (
              <button
                key={month}
                className={selectedMonth === month ? styles.activeMonth : ""}
                onClick={() => {
                  setSelectedMonth(month);
                  setVisibleCount(3);
                  setExpanded(false);
                }}
              >
                {month}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.matchdayBlock}>
        {filteredArr.slice(0, visibleCount).map((el, idx) => (
          <div className={styles.matchdays} key={idx}>
            <div className={styles.matchday_leftBlock}>
              <div className={styles.matchadyStadium}>
                <p>{el.matchday}</p>
                <p>{el.stadium}</p>
              </div>
              <div className={styles.uhrData}>
                <p>{el.uhr}</p>
                <p>{el.data}</p>
              </div>
            </div>

            <div className={styles.matchday_centerBlock}>
              <img src={el.home} alt="" />
              <img src={el.away} alt="" />
              <div>
                <p>{el.home_name}</p>
                <p>{el.away_name}</p>
              </div>
            </div>

            <div className={styles.matchday_rightBlock}>
              <p>{el.from}</p>
              <button>{el.button_text}</button>
              <div>
                <SlOptionsVertical />
              </div>
            </div>
          </div>
        ))}

        {filteredArr.length > 3 && (
          <div className={styles.showMore} onClick={handleShowMore}>
            <p>{expanded ? "SHOW LESS" : "SHOW MORE GAMES WITH VIP ACCESS"}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HospitalityMatches;
