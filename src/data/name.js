import fetcher from './_fetcher';
import useSWR from 'swr';

export default function useName(name) {
  const { data, error, isLoading } = useSWR(
    `https://pokeapi.co/api/v2/pokemon/${name}`,
    fetcher,
  );

  return {
    data,
    isLoading,
    isError: error,
  };
}
