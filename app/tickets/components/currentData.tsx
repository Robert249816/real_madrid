"use client";
import React, { useState, useRef } from "react";
import { CiCalendar, CiLocationOn } from "react-icons/ci";
import { IoMdMore } from "react-icons/io";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import styles from "../style/currentData.module.scss";

interface MatchEvent {
  id: string;
  img1: string;
  img1text: string;
  centerImg: string;
  img3: string;
  img3text: string;
  team: string;
  liga: string;
  matchday: string;
  calendar: string;
  stadium: string;
  more: string;
  date: Date;
}

const matchEvents: MatchEvent[] = [
  {
    id: "match-1",
    img1: "https://assets.realmadrid.com/is/image/realmadrid/4yg9ttzw0m51048doksv8uq5r?$Mobile$&fit=wrap&wid=144&hei=144",
    img1text: "Elche",
    centerImg:
      "https://assets.realmadrid.com/is/content/realmadrid/34pl8szyvrbwcmfkuocjm3r6t-logo?$Mobile$&fit=wrap&wid=144&hei=144",
    img3: "https://assets.realmadrid.com/is/image/realmadrid/3kq9cckrnlogidldtdie2fkbl?$Mobile$&fit=wrap&wid=144&hei=144",
    img3text: "Real Madrid",
    team: "Football First Team",
    liga: "La Liga",
    matchday: "Matchday 13",
    calendar: "Sunday, Nov 23, 9:00 PM h",
    stadium: "Estadio Manuel Martínez Valero",
    more: "More",
    date: new Date(2024, 10, 23),
  },
  {
    id: "match-2",
    img1: "https://assets.realmadrid.com/is/image/realmadrid/9ghx7vbghs3628n5chm9r8ig3?$Mobile$&fit=wrap&wid=144&hei=144",
    img1text: "Olympiakos",
    centerImg:
      "https://assets.realmadrid.com/is/content/realmadrid/4oogyu6o156iphvdvphwpck10-logo-2?$Mobile$&fit=wrap&wid=144&hei=144",
    img3: "https://assets.realmadrid.com/is/image/realmadrid/3kq9cckrnlogidldtdie2fkbl?$Mobile$&fit=wrap&wid=144&hei=144",
    img3text: "Real Madrid",
    team: "Football First Team",
    liga: "Champions League",
    matchday: "Matchday 5",
    calendar: "Wednesday, Nov 26, 9:00 PM h",
    stadium: "Stadio Georgios Karaiskáki",
    more: "More",
    date: new Date(2024, 10, 26),
  },
  {
    id: "match-3",
    img1: "https://assets.realmadrid.com/is/image/realmadrid/7h7eg7q7dbwvzww78h9d5eh0h?$Mobile$&fit=wrap&wid=144&hei=144",
    img1text: "Girona",
    centerImg:
      "https://assets.realmadrid.com/is/content/realmadrid/34pl8szyvrbwcmfkuocjm3r6t-logo?$Mobile$&fit=wrap&wid=144&hei=144",
    img3: "https://assets.realmadrid.com/is/image/realmadrid/3kq9cckrnlogidldtdie2fkbl?$Mobile$&fit=wrap&wid=144&hei=144",
    img3text: "Real Madrid",
    team: "Football First Team",
    liga: "La Liga",
    matchday: "Matchday 14",
    calendar: "Sunday, Nov 30, 9:00 PM h",
    stadium: "Estadi Municipal de Montilivi",
    more: "More",
    date: new Date(2024, 10, 30),
  },
  {
    id: "match-4",
    img1: "https://assets.realmadrid.com/is/image/realmadrid/3czravw89omgc9o4s0w3l1bg5?$Mobile$&fit=wrap&wid=144&hei=144",
    img1text: "Athletic Club",
    centerImg:
      "https://assets.realmadrid.com/is/content/realmadrid/34pl8szyvrbwcmfkuocjm3r6t-logo?$Mobile$&fit=wrap&wid=144&hei=144",
    img3: "https://assets.realmadrid.com/is/image/realmadrid/3kq9cckrnlogidldtdie2fkbl?$Mobile$&fit=wrap&wid=144&hei=144",
    img3text: "Real Madrid",
    team: "Football First Team",
    liga: "La Liga",
    matchday: "Matchday 19",
    calendar: "Wednesday, Dec 3, 7:00 PM h",
    stadium: "Estadio de San Mamés",
    more: "More",
    date: new Date(2024, 11, 3),
  },
  {
    id: "match-5",
    img1: "https://assets.realmadrid.com/is/image/realmadrid/3kq9cckrnlogidldtdie2fkbl?$Mobile$&fit=wrap&wid=144&hei=144",
    img1text: "Real Madrid",
    centerImg:
      "https://assets.realmadrid.com/is/content/realmadrid/34pl8szyvrbwcmfkuocjm3r6t-logo?$Mobile$&fit=wrap&wid=144&hei=144",
    img3: "https://assets.realmadrid.com/is/image/realmadrid/6f27yvbqcngegwsg2ozxxdj4?$Mobile$&fit=wrap&wid=144&hei=144",
    img3text: "Celta de Vigo",
    team: "Football First Team",
    liga: "La Liga",
    matchday: "Matchday 15",
    calendar: "Sunday, Dec 7, 9:00 PM h",
    stadium: "Estadio Santiago Bernabéu",
    more: "More",
    date: new Date(2024, 11, 7),
  },
  {
    id: "match-6",
    img1: "https://assets.realmadrid.com/is/image/realmadrid/3kq9cckrnlogidldtdie2fkbl?$Mobile$&fit=wrap&wid=144&hei=144",
    img1text: "Real Madrid",
    centerImg:
      "https://assets.realmadrid.com/is/content/realmadrid/4oogyu6o156iphvdvphwpck10-logo-2?$Mobile$&fit=wrap&wid=144&hei=144",
    img3: "https://assets.realmadrid.com/is/image/realmadrid/a3nyxabgsqlnqfkeg41m6tnpp?$Mobile$&fit=wrap&wid=144&hei=144",
    img3text: "Manchester City",
    team: "Football First Team",
    liga: "Champions League",
    matchday: "Matchday 6",
    calendar: "Wednesday, Dec 10, 9:00 PM h",
    stadium: "Estadio Santiago Bernabéu",
    more: "More",
    date: new Date(2024, 11, 10),
  },
];

const months = [
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
];

const CurrentData = () => {
  const [selectedMonth, setSelectedMonth] = useState<number | null>(0);

  const realMonthIndex = (i: number) => (i + 6) % 12;

  const filteredEvents =
    selectedMonth !== null
      ? matchEvents.filter(
          (event) => event.date.getMonth() === realMonthIndex(selectedMonth)
        )
      : matchEvents;

  return (
    <div className={styles.eventsWrapper}>
      <div className={styles.filterHeader}>
        <button className={styles.filterButton}>
          <FaArrowRightArrowLeft />
          <span>Filters</span>
        </button>

        <div className={styles.monthsContainer}>
          {months.map((month, index) => (
            <div
              key={index}
              onClick={() =>
                setSelectedMonth(selectedMonth === index ? null : index)
              }
              className={`${styles.monthItem} ${
                selectedMonth === index ? styles.active : ""
              }`}
            >
              {month}
            </div>
          ))}
        </div>
      </div>

      <div className={styles.currentDateWrapper}>
        <button
          onClick={() => setSelectedMonth(0)}
          className={`${styles.currentDateButton} ${
            selectedMonth !== null ? styles.active : ""
          }`}
        >
          Go to July
        </button>
      </div>

      <div className={styles.nextEventsContainer}>
        <div className={styles.carouselWrapper}>
          <div className={styles.carouselScroll}>
            {filteredEvents.length > 0 ? (
              filteredEvents.map((event) => (
                <article key={event.id} className={styles.matchCard}>
                  <div className={styles.matchCardHeader}>
                    <div className={styles.teamBox}>
                      <img src={event.img1} alt="" />
                      <p>{event.img1text}</p>
                    </div>
                    <div className={styles.centerLogo}>
                      <img src={event.centerImg} alt="" />
                    </div>
                    <div className={styles.teamBox}>
                      <img src={event.img3} alt="" />
                      <p>{event.img3text}</p>
                    </div>
                  </div>

                  <div className={styles.matchCardBody}>
                    <p className={styles.footballTeam}>{event.team}</p>
                    <h3>{event.liga}</h3>
                    <h4>{event.matchday}</h4>

                    <div className={styles.matchInfo}>
                      <div className={styles.infoItem}>
                        <CiCalendar />
                        <span>{event.calendar}</span>
                      </div>
                      <div className={styles.infoItem}>
                        <CiLocationOn />
                        <span>{event.stadium}</span>
                      </div>
                    </div>

                    <button className={styles.moreButton}>
                      <IoMdMore />
                      <span>{event.more}</span>
                    </button>
                  </div>
                </article>
              ))
            ) : (
              <div className={styles.emptyState}>
                <img
                  src="https://publish.realmadrid.com/content/dam/common/statics/public-content/internet/web/rm-spa-web/images/empty-match.app.png?$Desktop$&fit=wrap&wid=165"
                  alt="No matches"
                />
                <p className={styles.emptyTitle}>
                  There are no tickets matching the selected filters or dates
                </p>
                <span className={styles.emptySubtitle}>
                  Try changing your selection
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentData;
