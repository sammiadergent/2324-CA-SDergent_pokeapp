import React from 'react';
import Button from '@/buttons/home.svg';
import { useRouter } from 'next/router';

const HomeButton = () => {
  const router = useRouter();
  const handleClick = () => {
    console.log('Home button clicked');
    router.push(`/`);
  };

  return <Button onClick={handleClick} />;
};

export default HomeButton;
