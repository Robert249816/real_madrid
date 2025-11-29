"use client";
import React, { useState, useRef } from "react";
import styles from "../style/nextEvents.module.scss";
import { CiCalendar, CiLocationOn } from "react-icons/ci";
import { IoMdMore } from "react-icons/io";
import {
  FaArrowRightArrowLeft,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa6";

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
  },
];

const NextEvents: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const containerWidth = scrollContainerRef.current.clientWidth;
      const scrollAmount = containerWidth * 0.8; // Scroll 80% of visible width

      const newScrollLeft =
        direction === "left"
          ? scrollContainerRef.current.scrollLeft - scrollAmount
          : scrollContainerRef.current.scrollLeft + scrollAmount;

      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });

      setTimeout(checkScrollButtons, 300);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.topBox}>
        <h2>Next Events</h2>
        <div className={styles.teamsSubscribe}>
          <button className={styles.item} aria-label="Filter teams">
            <FaArrowRightArrowLeft aria-hidden="true" />
            <span>Teams (1)</span>
          </button>
          <button className={styles.item} aria-label="Subscribe to calendar">
            <CiCalendar aria-hidden="true" />
            <span>Subscribe</span>
          </button>
        </div>
      </div>

      <div className={styles.carouselWrapper}>
        <button
          className={`${styles.carouselButton} ${styles.carouselButtonLeft}`}
          onClick={() => scroll("left")}
          disabled={!canScrollLeft}
          aria-label="Previous matches"
        >
          <FaChevronLeft />
        </button>

        <div
          className={styles.bottomBox}
          ref={scrollContainerRef}
          onScroll={checkScrollButtons}
        >
          {matchEvents.map((event) => (
            <article key={event.id} className={styles.matchday}>
              <div className={styles.imgDiv}>
                <div className={styles.imgbox}>
                  <img src={event.img1} alt={`${event.img1text} logo`} />
                  <p>{event.img1text}</p>
                </div>
                <div className={styles.centerBoximg}>
                  <img src={event.centerImg} alt={`${event.liga} logo`} />
                </div>
                <div className={styles.imgbox}>
                  <img src={event.img3} alt={`${event.img3text} logo`} />
                  <p>{event.img3text}</p>
                </div>
              </div>

              <div className={styles.aboutMatch}>
                <p className={styles.footballteam}>{event.team}</p>
                <h3>{event.liga}</h3>
                <h4>{event.matchday}</h4>

                <div className={styles.itemDiv}>
                  <div className={styles.item}>
                    <CiCalendar
                      aria-hidden="true"
                      style={{ fontWeight: "bold" }}
                    />
                    <span>{event.calendar}</span>
                  </div>
                  <div className={styles.item}>
                    <CiLocationOn
                      aria-hidden="true"
                      style={{ fontWeight: "bold" }}
                    />
                    <span>{event.stadium}</span>
                  </div>
                </div>

                <button
                  className={styles.moreButton}
                  aria-label={`More details about ${event.img1text} vs ${event.img3text}`}
                >
                  <IoMdMore aria-hidden="true" />
                  <span>{event.more}</span>
                </button>
              </div>
            </article>
          ))}
        </div>

        <button
          className={`${styles.carouselButton} ${styles.carouselButtonRight}`}
          onClick={() => scroll("right")}
          disabled={!canScrollRight}
          aria-label="Next matches"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default NextEvents;
