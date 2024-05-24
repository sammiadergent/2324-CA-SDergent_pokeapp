import React from 'react';
import styles from '@/styles/Pokemon.module.css';
import Wittekader from '../achtergrond/wittekader.svg';
import getSpriteUrl from '@/data/spritesPokemonData.js';
import Geluid from '@/components/volume.svg';
import { playPokemonCry } from '@/data/audioPlayer';

const pokemonData = ({ pokemon }) => {
  const handleClick = () => {
    playPokemonCry(pokemon.id);
  };
  return (
    <div>
      <div className={styles.pokemonnaam}>{pokemon.name}</div>
      <div className={styles.pokemontype}>
        {pokemon.types.map((typeObj, index) => (
          <div key={index}>{typeObj.type.name}</div>
        ))}
      </div>
      <div className={styles.fotovierkant}>
        <img
          src={getSpriteUrl(pokemon.id)}
          alt={pokemon.name}
          className={styles.pokemonfoto}
        />
        <Geluid
          className={styles.geluid}
          id={pokemon.id}
          onClick={handleClick}
        />
      </div>

      <div className={styles.wittekader}>
        <Wittekader width="100%" />
      </div>
    </div>
  );
};

export default pokemonData;
