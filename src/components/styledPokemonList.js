import React from 'react';
import styles from '@/styles/StyledPokemonList.module.css';
import { getSpriteUrl } from '@/data/sprites.js';

const styledPokemonsList = ({ pokemons }) => {
  return (
    <div>
      <div className={styles.vierkant}>
        {pokemons.map((pokemon) => {
          const id = pokemon.url.split('/')[6];
          console.log(pokemon); // Logs everything related to each Pokemon
          return (
            <div key={id} className={styles.pokemon}>
              <div className={styles.pokemonnaam}>
                {pokemon.name} #{id}
              </div>
              <img
                src={getSpriteUrl(id)}
                alt={pokemon.name}
                className={styles.pokemonfoto}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default styledPokemonsList;
