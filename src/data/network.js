import fetcher from './_fetcher';
import useSWR from 'swr';

export default function useNetwork() {
  const { data, error, isLoading } = useSWR(
    'https://pokeapi.co/api/v2/',
    fetcher,
  );

  return {
    data,
    isLoading,
    isError: error,
  };
}
