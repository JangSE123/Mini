import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import market from './image/market.png';
import search from './image/search.jpg';
import './Topbar.css'

export default function Topbar({onSearch}) {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState('');

  const handleNavigate = (path) => {
    navigate(path);
  };

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchInput);
  };

  return (
    <div className="topbar">
      <header className="header">
        <Link to="/" className="logo-link">
                    <img src={market} alt='당근마켓' className="logo" />
        </Link>
        <div className="search-container">
          <input
            className="search-input"
            placeholder="검색"
            value={searchInput}
            onChange={handleSearchInputChange}
          />
          <img
            src={search}
            alt="검색"
            className="search-icon"
            onClick={handleSearch}
          />
        </div>
      </header>
      <div className="top">
        <div>
          <button onClick={() => handleNavigate('/Content')}>게시글</button>
          <button onClick={() => handleNavigate('/Chat')}>채팅</button>
          <button onClick={() => handleNavigate('/MyPage')}>마이페이지</button>
          <button onClick={() => handleNavigate('/Write')}>글쓰기</button>
        </div>
      </div>
    </div>
  );
}
