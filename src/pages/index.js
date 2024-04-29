import useTypes from '@/data/types';
import Filterraster from '@/components/filterraster';

const Home = () => {
  const { data, isLoading, isError } = useTypes();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;

  const types = data.results.map((item) => item.name);

  return (
    <div>
      <Filterraster types={types} />
    </div>
  );
};

export default Home;
