import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function TopbarMenu() {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path)
  }
  return (
    <div>
        <button onClick={() => handleNavigate('/Content')}>게시글</button>
        <button onClick={() => handleNavigate('/Chat')}>채팅</button>          
        <button onClick={() => handleNavigate('/MyPage')}>마이페이지</button>  
        <button onClick={() => handleNavigate('/Write')}>글쓰기</button>
    </div>
  )
}
