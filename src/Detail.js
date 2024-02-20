import React from 'react';
import './Detail.css';

function Detail({ item, onClose }) {
    return (
        <div className="detail">
            <div className='detailback'>
                <img src={item.profile} alt='프로필' className='profile'></img>
                <div className='name'>{item.name}</div>
                <div>
                    <img src={item.image} alt={item.name} className='sellingitem' />
                </div>
                <div className='info1'>
                    <table>
                        <tr>
                            <td>상품</td>
                            <td className='info1td'>{item.item}</td>
                        </tr>
                        <tr>
                            <td>가격</td>
                            <td className='info1td'>{item.price}</td>
                        </tr>
                    </table>
                </div>
                <div className='info2'>
                    <table>
                        <tr>
                            <td>제목</td>
                            <td className='info2td'>{item.title}</td>
                        </tr>
                        <tr>
                            <td>내용</td>
                            <td className='info2td multi-line'>{item.content}</td>
                        </tr>
                    </table>
                </div>
                <div>
                    <button className='chat'>채팅하기</button>
                    <button className="chat" onClick={onClose}>닫기</button>
                </div>
            </div>
        </div>
    );
}

export default Detail;