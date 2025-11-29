"use client";
import React, { useEffect, useRef, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import styles from "../style/specialFeatures.module.scss"; // Փոփոխված import

interface Props {
  text: string;
  img: string;
}
const array: Props[] = [
  {
    text: " Special: World champions for 9th time ",
    img: "https://assets.realmadrid.com/is/image/realmadrid/ND-FINAL-INTERCONTINENTAL-RM-PACHUCA-GRUPO-LEVANTA-COPA-03_3PC6634?$Desktop$&fit=wrap&wid=350",
  },
  {
    text: " Special: The club's sixth Uefa Super Cup ",
    img: "https://assets.realmadrid.com/is/image/realmadrid/ND_SUPERCOPA_FOTO_CAMPEONES_02_2PC7886?$Desktop$&fit=wrap&wid=350",
  },
  {
    text: "  La Decimoquinta!    ",
    img: "https://assets.realmadrid.com/is/image/realmadrid/ND-PORTADA-Y-POSTER-DECIMOQUINTA-GRUPO-COPA-OK_1PC1645?$Desktop$&fit=wrap&wid=350",
  },
  {
    text: ` La Undécima! `,
    img: "https://assets.realmadrid.com/is/image/realmadrid/1330829928553-2?$Desktop$&fit=wrap&wid=350",
  },
];
const SpecialFeatures = () => {
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
        {/* Title and See All News section */}
        <div className={styles.header}>
          <h2 className={styles.title}>Special features</h2>
          <div className={styles.seeAll}>
            <a href="">See all news</a>
            <FaArrowRightLong />
          </div>
        </div>
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

export default SpecialFeatures;
