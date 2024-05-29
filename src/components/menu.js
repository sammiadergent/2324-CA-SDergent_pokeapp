import styles from '@/styles/Menu.module.css';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Button from '@/buttons/pokeball.svg';
import Home from '@/buttons/home.svg';
import Terug from '@/buttons/terug.svg';

const Menu = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [animate, setAnimate] = useState(false);

  const toggleButtons = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 2000); // Reset animation state after 2 seconds
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div
      className={`${styles.button} ${animate ? styles.buttonSpin : ''}`}
      onClick={toggleButtons}
    >
      <Button />
      {isOpen && (
        <>
          <div
            onClick={() => {
              router.push(`/`);
              closeMenu();
            }}
            className={`${styles.rondje_1} ${animate ? styles.rondjePopOut : ''}`}
          >
            <Home className={styles.home} />
          </div>
          <div
            onClick={() => {
              router.back();
              closeMenu();
            }}
            className={`${styles.rondje_2} ${animate ? styles.rondjePopOut : ''}`}
          >
            <Terug className={styles.terug} />
          </div>
        </>
      )}
    </div>
  );
};

export default Menu;
