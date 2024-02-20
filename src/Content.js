import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Content.css';
import Detail from './Detail';
import { FcLike, FcLikePlaceholder } from "react-icons/fc";

export default function Content({ topics, setTopics, filteredTopics, handleLike }) {
    const { id } = useParams();
    const [selectedItem, setSelectedItem] = useState(null);
    const [showDetailModal, setShowDetailModal] = useState(false);

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

    return (
        <div>
            {showDetailModal && selectedItem && <Detail item={selectedItem} onClose={handleCloseModal} />}
            {!showDetailModal && (
                <div>
                    {topics.map((topic, index) => (
                        <div key={index}>
                            <div className='item' >
                                <div>
                                    <div className='profile-image'>{topic.profile}</div>
                                    <div className='profile-name'>{topic.name}</div>
                                </div>
                                <div>
                                    <div className='product-image' onClick={() => handleItemClick(topic)}><img src={topic.image} alt={topic.title} /></div>
                                    <div onClick={() => handleLike(topic.id)}>{topic.like ? <FcLike /> : <FcLikePlaceholder />}</div>
                                </div>
                                <div>{topic.title}<br />{topic.item}<br />가격: {topic.price}</div>
                                <div></div>
                            </div>
                        </div>
                    ))}

                </div>
            )}
        </div>
    );
}