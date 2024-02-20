import React, { useState } from 'react';
import './Write.css';

export default function Write(props) {
  const [newPost, setNewPost] = useState({
    name: "",
    profile: "",
    title: "",
    content: "",
    price: "",
    image: "", // 이미지 파일의 경로를 저장할 변수 추가
    item: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'image') {
      // 파일 선택 시 파일 내용을 읽고 업로드
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        // 파일의 내용을 읽어와서 이미지 경로를 설정
        setNewPost({
          ...newPost,
          image: reader.result, // 파일 내용을 이미지 경로로 설정
        });
      };
      reader.readAsDataURL(file);
    } else {
      // 이미지가 아닌 다른 입력 필드는 기존과 동일하게 처리
      setNewPost({
        ...newPost,
        [name]: value,
      });
    }
  };

  const handleSubmit = () => {
    const newTopic = {
      id: props.topics.length + 1,
      profile: newPost.profile,
      name: newPost.name,
      image: newPost.image,
      item: newPost.item, 
      price: newPost.price,
      title: newPost.title,
      content: newPost.content,
      like: false 
    };

    props.setTopics(prevTopics => [...prevTopics, newTopic]);
    console.log("Updated topics in Main:", props.topics);
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
