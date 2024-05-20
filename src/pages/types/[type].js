import useType from '@/data/type';
import StyledPokemonsList from '@/components/styledPokemonList';
import { useRouter } from 'next/router';

const Type = () => {
  const router = useRouter();
  const { type } = router.query;

  const { data, isLoading, isError } = useType(type);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;

  const pokemons = data.pokemon.map((p) => p.pokemon);

  return (
    <div>
      <StyledPokemonsList pokemons={pokemons} />
    </div>
  );
};

export default Type;
