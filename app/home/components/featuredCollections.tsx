"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "../style/featuredCollections.module.scss";
import { FaArrowRightLong } from "react-icons/fa6";

interface Props {
  title: string;
  description?: string;
  img: string;
  buttonText?: string;
}

const array: Props[] = [
  {
    title: "All Kits 25/26",
    description: "Free player printing until November 16",
    img: "https://assets.realmadrid.com/is/image/realmadrid/MODULO-DE-NOTICIAS-N%20N?$Desktop$&fit=wrap&wid=480",
    buttonText: "Shop now",
  },
  {
    title: "Real Madrid x NFL",
    img: "https://assets.realmadrid.com/is/image/realmadrid/MODULO-DE-NOTICIAS-NFL?$Desktop$&fit=wrap&wid=480",
    buttonText: "Shop now",
  },
  {
    title: "LFSTLR Collection",
    img: "https://assets.realmadrid.com/is/image/realmadrid/LFSTR?$Desktop$&fit=wrap&wid=480",
    buttonText: "Shop now",
  },
  {
    title: "Official Mbappé #10 Jersey",
    img: "https://assets.realmadrid.com/is/image/realmadrid/Mbappe_10?$Desktop$&fit=wrap&wid=480",
    buttonText: "Shop now",
  },
  {
    title: "Terrace Icons",
    img: "https://assets.realmadrid.com/is/image/realmadrid/Terrace%20Icons?$Mobile$&fit=wrap&wid=312",
    buttonText: "Shop now",
  },
  {
    title: "Official training collection",
    img: "https://assets.realmadrid.com/is/image/realmadrid/TRAINING-MODULO-NOTICIAS-?$Mobile$&fit=wrap&wid=312",
    buttonText: "Shop now",
  },
];

const FeaturedCollections = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [prevTranslate, setPrevTranslate] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1200) setItemsPerView(3);
      else if (window.innerWidth >= 900) setItemsPerView(3);
      else if (window.innerWidth >= 600) setItemsPerView(2);
      else setItemsPerView(1);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, array.length - itemsPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const getPositionX = (e: React.MouseEvent | React.TouchEvent): number =>
    "touches" in e ? e.touches[0].clientX : e.pageX;

  const handleStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    setStartX(getPositionX(e));
    setPrevTranslate(currentIndex * -(100 / itemsPerView));
  };

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging || !containerRef.current) return;

    const currentPosition = getPositionX(e);
    const diff = currentPosition - startX;
    const containerWidth = containerRef.current.offsetWidth;
    const movePercentage = (diff / containerWidth) * 100;

    setCurrentTranslate(prevTranslate + movePercentage);
  };

  const handleEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    const movedBy = currentTranslate - prevTranslate;
    let newIndex = currentIndex;

    if (movedBy < -10 && currentIndex < maxIndex) newIndex = currentIndex + 1;
    else if (movedBy > 10 && currentIndex > 0) newIndex = currentIndex - 1;

    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const newTranslate = currentIndex * -(100 / itemsPerView);
    setCurrentTranslate(newTranslate);
    setPrevTranslate(newTranslate);
  }, [currentIndex, itemsPerView]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {currentIndex > 0 && (
          <button
            className={`${styles.navBtn} ${styles.left}`}
            onClick={prevSlide}
          >
            ‹
          </button>
        )}

        <div className={styles.header}>
          <h2 className={styles.title}>Official Store</h2>
          <div className={styles.seeAll}>
            <a href="">See all news</a>
            <FaArrowRightLong />
          </div>
        </div>

        <h3 className={styles.sectionTitle}>Featured Collections</h3>

        <div
          ref={containerRef}
          className={styles.trackContainer}
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
            {array.map((el, idx) => (
              <div key={idx} className={styles.carousel_item}>
                <div className={styles.item_img_container}>
                  <img
                    src={el.img}
                    alt={el.title}
                    className={styles.item_img}
                    draggable="false"
                  />
                </div>

                <h3
                  className={`${styles.item_text} ${
                    !el.description ? styles.nodesc : ""
                  }`}
                >
                  {el.title}
                </h3>

                {el.description && (
                  <p className={styles.item_description}>{el.description}</p>
                )}

                {el.buttonText && (
                  <button className={styles.item_button}>
                    {el.buttonText}
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        {currentIndex < maxIndex && (
          <button
            className={`${styles.navBtn} ${styles.right}`}
            onClick={nextSlide}
          >
            ›
          </button>
        )}
      </div>
    </div>
  );
};

export default FeaturedCollections;
