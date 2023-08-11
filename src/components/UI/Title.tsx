import React from "react";

import styles from "./Title.module.css";

interface Props {
  title: string;
  subTitle: string;
}

const Title = ({ title, subTitle }: Props) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <h1 className={styles.subTitle}>{subTitle}</h1>
    </div>
  );
};

export default Title;
