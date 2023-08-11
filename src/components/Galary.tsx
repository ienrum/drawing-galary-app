import React from "react";

import styles from "./Galary.module.css";

const imageData = [
  {
    url: "./images/cartoon cat running.png",
    alt: "카툰 고양이 뛰다",
    style: styles.bigImage,
  },
  {
    url: "./images/cat sleeping.jpeg",
    alt: "고양이 잠",
    style: styles.longImage,
  },
  {
    url: "./images/cartoon cat loving.png",
    alt: "카툰 고양이 사랑",
    style: styles.tallImage,
  },
  {
    url: "./images/cartoon cat basic.png",
    alt: "카툰 고양이 기본",
    style: styles.bigImage,
  },
  {
    url: "./images/cartoon cat thinking.png",
    alt: "카툰 고양이 생각",
    style: styles.smallImage,
  },
  { url: "./images/cats.jpg", alt: "고양이들", style: styles.smallImage },
  { url: "./images/cats.jpg", alt: "고양이들", style: styles.smallImage },
  { url: "./images/cats.jpg", alt: "고양이들", style: styles.smallImage },
  { url: "./images/cats.jpg", alt: "고양이들", style: styles.smallImage },
  { url: "./images/cats.jpg", alt: "고양이들", style: styles.smallImage },
  { url: "./images/cats.jpg", alt: "고양이들", style: styles.smallImage },
  { url: "./images/cats.jpg", alt: "고양이들", style: styles.smallImage },
  {
    url: "./images/cat sleeping.jpeg",
    alt: "고양이 잠",
    style: styles.longImage,
  },
  { url: "./images/cats.jpg", alt: "고양이들", style: styles.smallImage },
  { url: "./images/cats.jpg", alt: "고양이들", style: styles.smallImage },
  { url: "./images/cats.jpg", alt: "고양이들", style: styles.smallImage },
  { url: "./images/cats.jpg", alt: "고양이들", style: styles.smallImage },
  {
    url: "./images/cat sleeping.jpeg",
    alt: "고양이 잠",
    style: styles.longImage,
  },
  { url: "./images/cats.jpg", alt: "고양이들", style: styles.smallImage },
  { url: "./images/cats.jpg", alt: "고양이들", style: styles.smallImage },
  {
    url: "./images/cat sleeping.jpeg",
    alt: "고양이 잠",
    style: styles.longImage,
  },
  { url: "./images/cats.jpg", alt: "고양이들", style: styles.smallImage },
  { url: "./images/cats.jpg", alt: "고양이들", style: styles.smallImage },
  { url: "./images/cats.jpg", alt: "고양이들", style: styles.smallImage },
  { url: "./images/cats.jpg", alt: "고양이들", style: styles.smallImage },
  {
    url: "./images/cat sleeping.jpeg",
    alt: "고양이 잠",
    style: styles.longImage,
  },
  { url: "./images/cats.jpg", alt: "고양이들", style: styles.smallImage },
];

const Galary = () => {
  return (
    <div className={styles.container}>
      {imageData.map((image) => (
        <img
          key={image.url}
          src={image.url}
          alt={image.alt}
          className={image.style}
        />
      ))}
    </div>
  );
};

export default Galary;
