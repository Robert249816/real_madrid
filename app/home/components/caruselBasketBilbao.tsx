"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "../style/caruselBasketBilbao.module.scss";
interface Props {
  text: string;
  img: string;
}
const array: Props[] = [
  {
    text: " Real Madrid take on Surne Bilbao Basket on Sunday ",
    img: "https://assets.realmadrid.com/is/image/realmadrid/ND-ACB-J06-JOVENTUT-BADALONA-RM-LEN_SG17626?$Desktop$&fit=wrap&wid=350",
  },
  {
    text: "  Mbappé nominated for The Best FIFA Men's Player Award 2025   ",
    img: "https://assets.realmadrid.com/is/image/realmadrid/MONTAJE_BEST11_FIFA_16x9_GANADORES_mbappe_1%201?$Mobile$&fit=wrap&wid=350",
  },
  {
    text: "  Courtois, nominee for the 2025 Best FIFA Goalkeeper Award    ",
    img: "https://assets.realmadrid.com/is/image/realmadrid/MONTAJE_BEST11_FIFA_16x9_GANADORES_2%201%20(1)?$Mobile$&fit=wrap&wid=350",
  },
  {
    text: `  Mbappé, Courtois, Vini Jr., Bellingham, Valverde, Rüdiger and Huijsen contenders for The Best FIFA Men's 11  `,
    img: "https://assets.realmadrid.com/is/image/realmadrid/MONTAJE_BEST11_FIFA_16x9_v2?$Mobile$&fit=wrap&wid=350",
  },
];

const CaruselBasketBilbao = () => {
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

export default CaruselBasketBilbao;
