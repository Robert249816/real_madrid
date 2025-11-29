"use client";
import React, { useEffect, useRef, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import styles from "../style/madridistasNews.module.scss";

interface Props {
  text: string;
  img: string;
}

const array: Props[] = [
  {
    text: " A very special proposal… at the Santiago Bernabéu ",
    img: "https://assets.realmadrid.com/is/image/realmadrid/1920-1?$Desktop$&fit=wrap&wid=400",
  },
  {
    text: " Enjoy Madridismo in Dubai in style with an exclusive 50% discount ",
    img: "https://assets.realmadrid.com/is/image/realmadrid/Dubai%20madridistas?$Mobile$&fit=wrap&wid=400",
  },
  {
    text: "  Experience the excitement of Real Madrid World in Dubai with an exclusive 20% discount for Socios and Madridista Premium or Junior members  ",
    img: "https://assets.realmadrid.com/is/image/realmadrid/rm-world?$Mobile$&fit=wrap&wid=400",
  },
];

const MadridistasNews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [prevTranslate, setPrevTranslate] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1200) {
        setItemsPerView(3);
      } else if (window.innerWidth >= 900) {
        setItemsPerView(3);
      } else if (window.innerWidth >= 600) {
        setItemsPerView(2);
      } else {
        setItemsPerView(1);
      }
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

  const getPositionX = (e: React.MouseEvent | React.TouchEvent): number => {
    return "touches" in e ? e.touches[0].clientX : e.pageX;
  };

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

    if (movedBy < -10 && currentIndex < maxIndex) {
      newIndex = currentIndex + 1;
    } else if (movedBy > 10 && currentIndex > 0) {
      newIndex = currentIndex - 1;
    }

    setCurrentIndex(newIndex);
    setCurrentTranslate(newIndex * -(100 / itemsPerView));
    setPrevTranslate(newIndex * -(100 / itemsPerView));
  };

  useEffect(() => {
    const newMaxIndex = Math.max(0, array.length - itemsPerView);
    if (currentIndex > newMaxIndex) {
      setCurrentIndex(newMaxIndex);
    }

    setCurrentTranslate(currentIndex * -(100 / itemsPerView));
    setPrevTranslate(currentIndex * -(100 / itemsPerView));
  }, [currentIndex, itemsPerView]);

  const trackStyle = {
    transform: `translateX(${
      isDragging ? currentTranslate : currentIndex * -(100 / itemsPerView)
    }%)`,
    transition: isDragging
      ? "none"
      : "transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    willChange: "transform" as const,
  };

  return (
    <div className={styles.carouselWrapper}>
      <div className={styles.carouselContainer}>
        {currentIndex > 0 && (
          <button
            className={`${styles.navBtn} ${styles.navBtnLeft}`}
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            ‹
          </button>
        )}
        <div className={styles.header}>
          <h2 className={styles.title}>Madridistas news</h2>
          <div className={styles.seeAll}>
            <a href="">See all news</a>
            <FaArrowRightLong />
          </div>
        </div>
        <div
          ref={containerRef}
          className={styles.carouselTrackContainer}
          style={{
            cursor:
              maxIndex === 0 ? "pointer" : isDragging ? "grabbing" : "grab",
          }}
          onMouseDown={maxIndex === 0 ? undefined : handleStart}
          onMouseMove={maxIndex === 0 ? undefined : handleMove}
          onMouseUp={maxIndex === 0 ? undefined : handleEnd}
          onMouseLeave={maxIndex === 0 ? undefined : handleEnd}
          onTouchStart={handleStart}
          onTouchMove={handleMove}
          onTouchEnd={handleEnd}
        >
          <div className={styles.carouselTrack} style={trackStyle}>
            {array.map((el, idx) => (
              <div key={idx} className={styles.carouselItem}>
                <div className={styles.itemImgContainer}>
                  <img
                    src={el.img}
                    alt={el.text}
                    className={styles.itemImg}
                    draggable="false"
                  />
                </div>
                <p className={styles.itemText}>
                  <strong>{el.text}</strong>
                </p>
              </div>
            ))}
          </div>
        </div>

        {currentIndex < maxIndex && (
          <button
            className={`${styles.navBtn} ${styles.navBtnRight}`}
            onClick={nextSlide}
            aria-label="Next slide"
          >
            ›
          </button>
        )}
      </div>
    </div>
  );
};

export default MadridistasNews;
