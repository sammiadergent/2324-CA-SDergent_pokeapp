import fetcher from './_fetcher';
import useSWR from 'swr';

export default function useType(type) {
  const { data, error, isLoading } = useSWR(
    `https://pokeapi.co/api/v2/type/${type}`,
    fetcher,
  );

  return {
    data,
    isLoading,
    isError: error,
  };
}
