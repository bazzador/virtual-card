import React, { useState } from 'react';
import './contact__me__flip__card.css';

function ContactMeFlipCard() {
    const [flipped, setFlipped] = useState(false);

    const handleClick = () => {
        setFlipped(!flipped);
    };

    const handleMouseLeave = () => {
        if (flipped) {
            setFlipped(false);
        }
    };

    const copyToClipboard = (text, e) => {
        e.stopPropagation();
        navigator.clipboard.writeText(text).then(() => {
            alert('Текст скопійовано!');
        });
    };

    return (
        <div 
            className={`contact__me__flip__card ${flipped ? 'flipped' : ''}`} 
            onClick={handleClick} 
            onMouseLeave={handleMouseLeave}>
            <div className='flip__card front'>
                <h1>Зв'язатися зі мною</h1>
            </div>
            <div className='flip__card back'>
                <h2>📞 КОНТАКТИ</h2>
                <ul>
                    <li onClick={(e) => copyToClipboard('vana95530@gmail.com', e)}>📧 Email: vana95530@gmail.com</li>
                    <li onClick={(e) => copyToClipboard('@bazzador', e)}>💬 Telegram: @bazzador</li>
                    <li onClick={(e) => copyToClipboard('+380506947667', e)}>☎️ Телефон: +380506947667</li>
                </ul>
            </div>
        </div>
    );
}

export default ContactMeFlipCard;



