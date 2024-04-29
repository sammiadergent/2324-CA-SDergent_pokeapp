import fetcher from './_fetcher';
import useSWR from 'swr';

export default function useTypes() {
  const { data, error, isLoading } = useSWR(
    'https://pokeapi.co/api/v2/type/',
    fetcher,
  );

  return {
    data,
    isLoading,
    isError: error,
  };
}
