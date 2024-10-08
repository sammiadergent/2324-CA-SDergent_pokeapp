import useName from '@/data/name';
import PokemonData from '@/components/pokemonData'; // Assuming PokemonData is a React component
import { useRouter } from 'next/router';
import Loading from '@/components/loading';

const Name = () => {
  const router = useRouter();
  const { name } = router.query;

  const { data, isLoading, isError } = useName(name);

  if (isLoading) return <Loading />;
  if (isError) return <div>Error loading data...</div>;
  console.log(data);
  return (
    <div>
      <PokemonData pokemon={data} />
    </div>
  );
};

export default Name;
