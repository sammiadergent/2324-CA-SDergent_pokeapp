import useType from '@/data/type';
import StyledPokemonsList from '@/components/styledPokemonList';
import { useRouter } from 'next/router';
import Loading from '@/components/loading';

const Type = () => {
  const router = useRouter();
  const { type } = router.query;

  const { data, isLoading, isError } = useType(type);

  if (isLoading) return <Loading />;
  if (isError) return <div>Error...</div>;

  const pokemons = data.pokemon.map((p) => p.pokemon);

  return (
    <div>
      <StyledPokemonsList pokemons={pokemons} />
    </div>
  );
};

export default Type;
