import React from 'react';
import styles from '@/styles/StyledPokemonList.module.css';

const styledPokemonsList = ({ pokemons }) => {
  return (
    <div>
      <ul>
        {pokemons.map((pokemon) => {
          const id = pokemon.url.split('/')[6];
          console.log(pokemon); // Logs everything related to each Pokemon
          return (
            <li
              key={id}
              style={
                {
                  /* Add your custom styles here */
                }
              }
            >
              {pokemon.name} ({id})
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default styledPokemonsList;
