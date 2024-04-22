import styles from '@/styles/Home.module.css';
import { useState } from 'react';
import useNetwork from '@/data/network';
import Link from 'next/link';

export default function Home() {
  const [filter, setFilter] = useState('');
  const { data, isLoading, isError } = useNetwork();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;

  console.log(data);

  const pokemons = data;

  return <div></div>;
}
