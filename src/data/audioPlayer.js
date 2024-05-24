export const playPokemonCry = (pokemonId) => {
  const audio = new Audio(
    `https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/${pokemonId}.ogg`,
  );
  audio.play();
};
