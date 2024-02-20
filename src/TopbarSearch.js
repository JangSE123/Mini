import React, { useState } from 'react';
import search from './image/search.jpg';

export default function TopbarSearch({ onSearch }) {
  const [searchInput, setSearchInput] = useState('');

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchInput);
  };

  return (
    <div className="search-container">
      <input
        className="search-input"
        placeholder="검색"
        value={searchInput}
        onChange={handleSearchInputChange}
      />
      <img
        src={search}
        alt='검색'
        className="search-icon"
        onClick={handleSearch}
      />
    </div>
  );
}