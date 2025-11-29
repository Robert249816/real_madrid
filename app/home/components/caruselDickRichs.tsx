"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "../style/caruselDickRichs.module.scss";

interface Props {
  text: string;
  img: string;
}
const array: Props[] = [
  {
    text: "Deck reaches 400 games with Real Madrid",
    img: "https://assets.realmadrid.com/is/image/realmadrid/ND-EUROLEAGUE-J11-RM-PANATHINAIKOS-DECK_1VC3432?$Desktop$&fit=wrap&wid=350",
  },
  {
    text: "Thirteen games unbeaten",
    img: "https://assets.realmadrid.com/is/image/realmadrid/ND-UWCL-PSG-FEMENINO-GRUPO_MJ16840?$Desktop$&fit=wrap&wid=350",
  },
  {
    text: "Ordinary General Assembly of Representative Members to be held on Sunday, 23 November",
    img: "https://assets.realmadrid.com/is/image/realmadrid/ND-ASAMBLEA-01_1PC0665?$Desktop$&fit=wrap&wid=350",
  },
  {
    text: `Honorary president José Martínez ‘Pirri’ enters the Football Hall of Fame`,
    img: "https://assets.realmadrid.com/is/image/realmadrid/ND-FOTO-OFICIAL-PIRRI-_3VC3424-copia?$Desktop$&fit=wrap&wid=350",
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [prevTranslate, setPrevTranslate] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const resize = () => {
      if (window.innerWidth >= 1200) setItemsPerView(4);
      else if (window.innerWidth >= 900) setItemsPerView(3);
      else if (window.innerWidth >= 600) setItemsPerView(2);
      else setItemsPerView(1);
    };

    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  const maxIndex = Math.max(0, array.length - itemsPerView);

  const next = () => setCurrentIndex((p) => Math.min(p + 1, maxIndex));
  const prev = () => setCurrentIndex((p) => Math.max(p - 1, 0));

  const getX = (e: React.MouseEvent | React.TouchEvent) =>
    "touches" in e ? e.touches[0].clientX : e.pageX;

  const handleStart = (e: any) => {
    setIsDragging(true);
    setStartX(getX(e));
    setPrevTranslate(currentIndex * -(100 / itemsPerView));
  };

  const handleMove = (e: any) => {
    if (!isDragging || !containerRef.current) return;

    if (maxIndex === 0) return;

    const diff = getX(e) - startX;
    const width = containerRef.current.offsetWidth;
    setCurrentTranslate(prevTranslate + (diff / width) * 100);
  };

  const handleEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    if (maxIndex === 0) {
      setCurrentTranslate(0);
      setPrevTranslate(0);
      return;
    }

    const moved = currentTranslate - prevTranslate;
    if (moved < -10 && currentIndex < maxIndex)
      setCurrentIndex(currentIndex + 1);
    else if (moved > 10 && currentIndex > 0) setCurrentIndex(currentIndex - 1);

    setCurrentTranslate(currentIndex * -(100 / itemsPerView));
  };

  useEffect(() => {
    const newMaxIndex = Math.max(0, array.length - itemsPerView);
    if (currentIndex > newMaxIndex) {
      setCurrentIndex(newMaxIndex);
    }

    const t = currentIndex * -(100 / itemsPerView);
    setCurrentTranslate(t);
    setPrevTranslate(t);
  }, [currentIndex, itemsPerView]);

  return (
    <div className={styles.carouselWrapper}>
      <div className={styles.carouselContainer}>
        {currentIndex > 0 && (
          <button className={`${styles.navBtn} ${styles.left}`} onClick={prev}>
            ‹
          </button>
        )}

        <div
          ref={containerRef}
          className={styles.trackContainer}
          data-all-visible={maxIndex === 0}
          style={{
            cursor: maxIndex === 0 ? "pointer" : "grab",
          }}
          onMouseDown={handleStart}
          onMouseMove={handleMove}
          onMouseUp={handleEnd}
          onMouseLeave={handleEnd}
          onTouchStart={handleStart}
          onTouchMove={handleMove}
          onTouchEnd={handleEnd}
        >
          <div
            className={styles.track}
            style={{
              transform: `translateX(${
                isDragging
                  ? currentTranslate
                  : currentIndex * -(100 / itemsPerView)
              }%)`,
            }}
          >
            {array.map((el, i) => (
              <div key={i} className={styles.item}>
                <div className={styles.imgContainer}>
                  <img src={el.img} className={styles.img} />
                </div>
                <p className={styles.text}>
                  <strong>{el.text}</strong>
                </p>
              </div>
            ))}
          </div>
        </div>

        {currentIndex < maxIndex && (
          <button className={`${styles.navBtn} ${styles.right}`} onClick={next}>
            ›
          </button>
        )}
      </div>
    </div>
  );
};

export default Carousel; // Export the renamed component
