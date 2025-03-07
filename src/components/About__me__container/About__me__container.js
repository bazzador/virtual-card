import React from 'react'
import './about__me__container.css'

function About__me__container() {
    return (

        <div className='about__me__container'>
            <div className='item'>
                <div className='layer'>
                    <h3>Цілі</h3>
                    <ul>
                        <li>Отримати глибокі знання в галузі комп'ютерних наук</li>
                        <li>Розробити власний програмний продукт</li>
                        <li>Опанувати сучасні технології розробки</li>
                    </ul>
                    <span>🎯</span>
                </div>
            </div>
            <div className='item'>
                <div className='layer'>
                    <h3>Навички</h3>
                    <ul>
                        <li>Програмування на С# </li>
                        <li>Розробка вебзастосунків (HTML + CSS + JavaScript, React)</li>
                        <li>Робота з базами даних (MySQL) </li>
                    </ul>
                    <span>📚</span>
                </div>
            </div>
            <div className='item'>
                <div className='layer'>
                    <h3>Досвід</h3>
                    <ul>
                        <li>Реалізація навчальних проєктів: вебзастосунки (HTML, CSS + JavaScript) і програми на C#</li>
                        <li>Участь в студентських олімпіадах та змаганнях</li>
                        <li>Спільна розробка застосунків у команді</li>
                    </ul>
                    <span>🛠️</span>
                </div>
            </div>
        </div>
    )
}

export default About__me__container