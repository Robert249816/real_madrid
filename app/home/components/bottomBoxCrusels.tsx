"use client";
import React, { useState, useRef, useEffect } from "react";
import styles from "../style/bottomBoxCarusels.module.scss";

const array = [
  {
    text: "Fixtures of the madridistas called up for their national teams",
    img: "https://assets.realmadrid.com/is/image/realmadrid/ND-MONTAJE_SELECIONES_FIFA-WC26-QUALIFIERS_10_11_25_16x9-1?$Desktop$&fit=wrap&wid=400",
  },
  {
    text: "1-1: Weir salvages a point for Madrid in the dying seconds",
    img: "https://assets.realmadrid.com/is/image/realmadrid/ND-WCL-J03-RM-PARIS-ALEGRIA-WEIR-GRUPO_JT18516?$Desktop$&fit=wrap&wid=400",
  },
  {
    text: "Scariolo: We need to reset because we have another game in 48 hours",
    img: "https://assets.realmadrid.com/is/image/realmadrid/ND-EUROLIGA-J10-VALENCIA-BASKET-RM-SCARIOLO_SG10915?$Desktop$&fit=wrap&wid=400",
  },
  {
    text: "89-76: Madrid defeated in Valencia",
    img: "https://assets.realmadrid.com/is/image/realmadrid/ND-EUROLIGA-J10-VALENCIA-BASKET-RM-LYLES_SG12563?$Desktop$&fit=wrap&wid=400",
  },
];

const BottomBoxCarusels = () => {
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

export default BottomBoxCarusels;
