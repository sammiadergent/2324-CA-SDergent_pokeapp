import React from 'react';
import styles from '@/styles/StyledPokemonList.module.css';

const styledPokemonsList = ({ pokemons }) => {
  return (
    <div>
      <div className={styles.vierkant}>
        {pokemons.map((pokemon) => {
          const id = pokemon.url.split('/')[6];
          console.log(pokemon); // Logs everything related to each Pokemon
          return (
            <div key={id} className={styles.pokemon}>
              <div className={styles.pokemonnaam}>{pokemon.name}</div>
              <div className={styles.pokemoncijfer}>#{id}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default styledPokemonsList;
