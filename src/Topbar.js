import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import market from './image/market.png';
import './Topbar.css'

export default function Topbar() {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="topbar">
      <header className="header">
        <Link to="/" className="logo-link">
          <img src={market} alt='당근마켓' className="logo" />
        </Link>
        {/* <div className="search-container">
          <input
            className="search-input"
            placeholder="검색어를 입력하세요"
            type='text'
          />
          <img src={search} alt="검색" className="search-icon"/>
        </div> */}
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
