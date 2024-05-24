{
  /* import useSWR from 'swr';

export default function useId(id) {
  const { data, error, isLoading } = useSWR(
    `https://pokeapi.co/api/v2/evolution-chain/${id}/`,
    fetcher,
  );

  if (data && data.chain) {
    data.chain.evolves_to.forEach((evolution) => {
      console.log(evolution);
    });
  }

  return {
    data,
    isLoading,
    isError: error,
  };
}
*/
}
