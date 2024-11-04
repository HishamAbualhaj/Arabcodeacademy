"use client";
import React, { useEffect, useState } from 'react';
import styles from "../styles/DiscountBanner.module.css";

interface Props {
  announcementText: string;   
}

const DiscountBanner: React.FC<Props> = ({announcementText }) => {
  return (
    <div className={styles.banner}>
      <div className={styles.bannerContent}>
        <span className={styles.announcementText}>{announcementText}</span>
      </div>
    </div>
  );
};

export default DiscountBanner;
