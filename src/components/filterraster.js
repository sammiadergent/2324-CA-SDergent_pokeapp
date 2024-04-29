import React from 'react';
import styles from '@/styles/Filterraster.module.css';
import { useRouter } from 'next/router';

const Filterraster = ({ types, filterPokemonsByType }) => {
  const router = useRouter();
  // Ensure there are 20 types
  const fullTypes = [...types];
  while (fullTypes.length < 20) {
    fullTypes.push('default');
  }

  return (
    <div className={styles['grid-container']}>
      {fullTypes.map((type, index) => (
        <button
          key={index}
          onClick={() => {
            router.push(`/types/${type}`);
          }}
          className={`${styles['type-' + type]} ${styles.vierkant}`} // Correctly interpolate the type variable into the class name
        >
          {type}
        </button>
      ))}
    </div>
  );
};

export default Filterraster;
