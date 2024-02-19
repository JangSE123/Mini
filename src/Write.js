import React, { useState } from 'react';
import './Write.css';

export default function Write(props) {
  const [topics, setTopics] = useState(props.topics);
  const [newPost, setNewPost] = useState({
    name: "",
    title: "",
    content: "",
    price: "",
    image: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPost({
      ...newPost,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    const newTopic = {
      id: topics.length + 1,
      name: newPost.name,
      image: newPost.image,
      price: newPost.price,
      title: newPost.title,
      content: newPost.content,
    };

    setTopics([...topics, newTopic]);
    console.log("새로운 게시글:", newTopic);
    setNewPost({  
      price: "",
      title: "",
      image: "",
      content: "",
      name: "",
    });
  };

  const lis = topics.map((t) => (
    <div key={t.id}>
      <div className="item">
        <div><img src={t.image} alt={t.title} /></div>
        <div>제목: {t.title}</div>
        <div>닉네임: {t.name}</div>
        <div>가격: {t.price}</div>
      </div>
    </div>
  ));

  return (
    <div>
      <input type="text" placeholder="이름" name="name" value={newPost.name} onChange={handleInputChange} />
      <input type="text" placeholder="제목" name="title" value={newPost.title} onChange={handleInputChange} />
      <input type="text" placeholder="내용" name="content" value={newPost.content} onChange={handleInputChange} />
      <input type="text" placeholder="가격" name="price" value={newPost.price} onChange={handleInputChange} />
      <input type="file" name="image" onChange={handleInputChange} />
      <button onClick={handleSubmit}>업로드</button>
    </div>
  );
}
