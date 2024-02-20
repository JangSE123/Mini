import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './MyPage.css';
import Detail from './Detail';
import Write from './Write';  // 추가
import { FcLike, FcLikePlaceholder } from "react-icons/fc";

export default function MyPage({ topics, setTopics, handleLike }) {
  const { id } = useParams();
  const [selectedItem, setSelectedItem] = useState(null);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [userName, setUserName] = useState('');
  const [writeData, setWriteData] = useState(null);  // 추가
  const [showWrite, setShowWrite] = useState(false);  // 추가

  useEffect(() => {
    if (id && !selectedItem) {
      const selected = topics.find(topic => topic.id === parseInt(id));
      setSelectedItem(selected);
      setShowDetailModal(true);
    }
  }, [id, selectedItem, topics]);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setShowDetailModal(true);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
    setShowDetailModal(false);
  };

  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handleUpdate = (id) => {
    const selectedItem = topics.find((topic) => topic.id === id);
    setSelectedItem(selectedItem);
    setShowDetailModal(false); // 상세 모달 닫기
    // Write 컴포넌트로 선택된 아이템 정보 전달
    setWriteData(selectedItem);
    // Write 컴포넌트 보이기
    setShowWrite(true);
  };

  const handleDelete = (id) => {
    // 해당 id를 가진 항목을 삭제하고 topics를 업데이트
    const updatedTopics = topics.filter(topic => topic.id !== id);
    setTopics(updatedTopics);
    // 선택된 아이템과 모달을 닫기
    setSelectedItem(null);
    setShowDetailModal(false);
  };

  const handleWriteClose = () => {
    setShowWrite(false);
    setWriteData(null); // 데이터 초기화
  };

  return (
    <div>
      <div>
        <label htmlFor="userName">사용자 이름: </label>
        <input
          type="text"
          id="userName"
          value={userName}
          onChange={handleUserNameChange}
        />
      </div>

      {showDetailModal && selectedItem && <Detail item={selectedItem} onClose={handleCloseModal} />}
      {!showDetailModal && (
        <div>
          {topics && topics.length > 0 ? (
            topics
              .filter((t) => t.name === userName)
              .map((t, index) => (
                <div key={index}>
                  <div className='item' >
                    <div>
                      <div className='profile-image'>{t.profile}</div>
                      <div className='profile-name'>{t.name}</div>
                    </div>
                    <div>
                      <div className='product-image' onClick={() => handleItemClick(t)}><img src={t.image} alt={t.title} /></div>
                      <div onClick={() => handleLike(t.id)}>{t.like ? <FcLike /> : <FcLikePlaceholder />}</div>
                    </div>
                    <div>{t.title}<br />{t.item}<br />가격: {t.price}</div>
                    <div>
                      <button className='updatebtn' onClick={() => handleUpdate(t.id)}>수정</button>
                      <button className='delbtn' onClick={() => handleDelete(t.id)}>삭제</button>
                    </div>
                  </div>
                </div>
              ))
          ) : (
            <p>No topics available.</p>
          )}
        </div>
      )}

      {showWrite && (
        <Write
          topics={topics}
          setTopics={setTopics}
          initialData={writeData} // Write 컴포넌트에 전달할 초기값
          onClose={handleWriteClose}
        />
      )}
    </div>
  );
}