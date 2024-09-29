import React from 'react';
import Tag from '../Tag/Tag';
import './Card.css';


function Card({ ticket, grouping, user }) {
    const colorArray = [
        '#2ecc71', // Green
        '#f1c40f', // Yellow
        '#d35400', // Pumpkin
        '#8e44ad', // Amethyst
        '#16a085', // Dark Teal
        '#27ae60', // Emerald Green
        '#f39c12', // Bright Orange
    ];
    const backgColor = colorArray[Math.floor(Math.random() * colorArray.length)];

    const style = {
        backgroundColor: backgColor,
    };

    return (
        <div className='card'>
            <div className='card-header'>
                <div className='card-id'>{ticket.id}</div>
                {grouping !== 'user' && (
                    <div className='card-user'>
                        <div className='card-user-icon' style={style}>
                            {user.name.split(" ").map((n) => n[0].toUpperCase()).join("")}
                        </div>
                        <div className={user.available ? 'active-user' : 'inactive-user'}></div>
                    </div>
                )}
            </div>
            <div className='card-body'>
                {grouping !== 'status' && (
                    <img src={`/icons/status/${ticket.status}.svg`} alt={`${ticket.status} icon`} />
                )}
                <span>{ticket.title}</span>
            </div>
            <div className='card-footer'>
                {grouping !== 'priority' && (
                    <div className='card-footer-priority'>
                        <img src={`/icons/priority/${ticket.priority}.svg`} alt={`${ticket.priority} priority icon`} />
                    </div>
                )}
                <div className='card-footer-tags'>
                    {ticket.tag.map((tag, index) => (
                        <Tag key={index} tag={tag} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Card;
