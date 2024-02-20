import React, { useState } from 'react';
import './Write.css';

export default function Write({ topics, setTopics, initialData, onClose }) {
  const [newPost, setNewPost] = useState({
    name: initialData?.name || "",
    profile: initialData?.profile || "",
    title: initialData?.title || "",
    content: initialData?.content || "",
    price: initialData?.price || "",
    image: initialData?.image || "",
    item: initialData?.item || ""

  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPost({
      ...newPost,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    if (initialData) {
      // 수정 모드에서는 기존 항목을 업데이트
      const updatedTopics = topics.map(topic =>
        topic.id === initialData.id ? { ...topic, ...newPost } : topic
      );
      setTopics(updatedTopics);
      alert("수정 완료 !");
    } else {
      const newTopic = {
        id: topics.length + 1,
        profile: newPost.profile,
        name: newPost.name,
        image: newPost.image,
        item: newPost.item, 
        price: newPost.price,
        title: newPost.title,
        content: newPost.content,
        like: false 
      };

      setTopics(prevTopics => [...prevTopics, newTopic]);
      alert("작성 완료 !");
      setNewPost({  
        name: "",
        profile: '',
        image: "",
        item: "",
        price: "",
        title: "",
        content: "",
      });
      if (onClose) {
        onClose(); // onClose 함수가 존재하는 경우에만 호출
      }
    }
  };

  return (
    <div className='Writeback'>
      <div className='image'>
        <input type="file" name="image" onChange={handleInputChange} />
      </div>
      <div className='input1'>
        <table>
          <tr>
            <td>이름</td>
            <td><input className='input1td' type="text" placeholder="이름" name="name" value={newPost.name} onChange={handleInputChange}/></td>
          </tr>
          <tr>
            <td>상품</td>
            <td><input className='input1td' type="text" placeholder="상품" name="item" value={newPost.item} onChange={handleInputChange}/></td>
          </tr>
          <tr>
            <td>가격</td>
            <td><input className='input1td' type="text" placeholder="가격" name="price" value={newPost.price} onChange={handleInputChange}/></td>
          </tr>
        </table>
      </div>
      <div className='input2'>
        <table>
          <tr>
            <td>제목</td>
            <td><input className='input2td-1' type="text" placeholder="제목" name="title" value={newPost.title} onChange={handleInputChange}/></td>
          </tr>
          <tr>
            <td>내용</td>
            <td><input className='input2td multi-line' type="text" placeholder="내용" name="content" value={newPost.content} onChange={handleInputChange}/></td>
          </tr>
        </table>
      </div>
      <div>
        <button className='okay' onClick={handleSubmit}>작성</button>
        <button className='okay'>취소</button>
      </div>
    </div>
  );
}
