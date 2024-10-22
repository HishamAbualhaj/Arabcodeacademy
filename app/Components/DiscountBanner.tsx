"use client";
import React, { useEffect, useState } from 'react';
import styles from "./DiscountBanner.module.css";

interface Props {
  startTime: Date; 
  endTime: Date;
  announcementText: string;   
}

const DiscountBanner: React.FC<Props> = ({ startTime, endTime, announcementText }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const checkVisibility = () => {
      const now = new Date();
    
      if (now >= startTime && now <= endTime) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    checkVisibility(); 

    const interval = setInterval(checkVisibility, 60000); 

    return () => clearInterval(interval);
  }, [startTime, endTime]);

  if (!isVisible) {
    return null;
  }

  return (
    <div className={styles.banner}>
      <div className={styles.bannerContent}>
        <span className={styles.announcementText}>{announcementText}</span>
      </div>
    </div>
  );
};

export default DiscountBanner;
