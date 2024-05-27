import styles from '@/styles/Menu.module.css';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Button from '@/buttons/pokeball.svg';
import Home from '@/buttons/home.svg';
import Terug from '@/buttons/terug.svg';

const Menu = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const toggleButtons = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.button}>
      <Button onClick={toggleButtons} />
      {isOpen && (
        <>
          <div
            onClick={() => {
              router.push(`/`);
            }}
            className={styles.rondje_1}
          >
            <Home className={styles.home} />
          </div>
          <div
            onClick={() => console.log('Second button clicked')}
            className={styles.rondje_2}
          >
            <Terug className={styles.terug} />
          </div>
        </>
      )}
    </div>
  );
};

export default Menu;
