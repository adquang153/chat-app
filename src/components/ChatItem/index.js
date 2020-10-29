import React from 'react'
import './index.css';

const ChatItem = ({ content = '', me = false }) => {
    return (
        <li className={me ? 'left' : 'right'}>
            <span className='chat-item'>{content}</span>
        </li>
    );
}

export default ChatItem;