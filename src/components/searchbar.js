import React, { useState } from 'react';
import styles from '@/styles/Searchbar.module.css';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <input
      className={styles.searchbar}
      type="text"
      placeholder="Search..."
      value={searchTerm}
      onChange={handleChange}
    />
  );
}

export default SearchBar;
