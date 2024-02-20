import React, { useState } from 'react';
import Topbar from './Topbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Content from './Content';
import './Main.css';
import Chat from './Chat';
import MyPage from './MyPage';
import Write from './Write';

export default function Main() {
    // 데이터를 상태로 관리
    const [topics, setTopics] = useState([
      {
        id: 1,
        profile: '',
        name: '장성은',
        image: "./image/laptop.jpg",
        item: '노트북',
        price: '1,500,000',
        title: '삼성노트북 팝니다',
        content: '삼성노트북 Plus2 39.6 cm NT550XDA-KG03G 싸게 팔아요',
        like: false
      },
      {
        id: 2,
        profile: '',
        name: '정의범',
        image: "./image/airpods.jpg",
        item: '에어팟',
        price: '150,000',
        title: '에어팟 3세대 팔아요',
        content: '에어팟 케이스도 함께 드려요',
        like: false
      },
      {
        id: 3,
        profile: '',
        name: '최원준',
        image: "./image/mouse.jpg",
        item: '마우스',
        price: '120,000',
        title: '로지텍 마우스 필요하신분',
        content: '로지텍 MX 마스터 3, 정가보다 싸게 팝니다.',
        like: false
      },
      {
        id: 4,
        profile: '',
        name: '조보미',
        image: "./image/carrot.jpg",
        item: '당근',
        price: '10,000',
        title: '당근 1kg 팔고있습니다',
        content: '당근이 너무 많아서 팔고있습니다. 당근당근',
        like: false
      },
    ]);
   
    

    const handleLike = (id) => {
      setTopics(prevTopics =>
        prevTopics.map(topic =>
          topic.id === id ? { ...topic, like: !topic.like } : topic
        )
      );
    };

    const [filteredTopics, setFilteredTopics] = useState(topics);

    const handleSearch = (searchInput) => {
        if (searchInput.trim() === '') {
            setFilteredTopics(topics); // 모든 항목을 보여줍니다.
        } else {
            const filteredTopics = topics.filter((topic) =>
                topic.title.toLowerCase().includes(searchInput.toLowerCase())
            );
            setFilteredTopics(filteredTopics); // 검색 결과를 업데이트합니다.
        }
    };

    return (
        <Router>
            <div>
                <Topbar className='topbar' onSearch={handleSearch}/>
                <Routes>
                    <Route className='content' path='/Content' element={<Content topics={topics} handleLike={handleLike} />} />
                    <Route path='/Chat' element={<Chat />} />
                    <Route path='/MyPage' element={<MyPage topics={topics} setTopics={setTopics} handleLike={handleLike} />} />
                    <Route path='/Write' element={<Write topics={topics} setTopics={setTopics} />} />
                </Routes>
            </div>
        </Router>
    );
}
