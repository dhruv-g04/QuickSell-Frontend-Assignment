import React from 'react'
import './Title.css'

const plusIcon = '/icons/plus.svg'
const ellipsisIcon = '/icons/ellipsis.svg'

const priorityCode = {
    'No priority': 0,
    'Low': 1,
    'Medium': 2,
    'High': 3,
    'Urgent': 4
}

function Title({ title, grouping, count, available = true }) {
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
        <div className='card-title'>
            <div className='card-title-left'>
                {grouping === 'user' ?
                    <div className='card-user'>
                        <div className='card-user-icon' style={style}>{title.split(" ").map((n) => n[0].toUpperCase()).join("")}</div>
                        <div className={available ? 'active-user' : 'inactive-user'}></div>
                    </div>
                    : grouping === 'status' ? <img src={'/icons/status/' + title + '.svg'} />
                        : grouping === 'priority' ? <img src={'/icons/priority/' + priorityCode[title] + '.svg'} /> : null}
                <span className='group-title'>{title}</span>
                <span className='group-count'>{count}</span>
            </div>
            {count > 0 ? <div className='card-title-right'>
                <button className='card-title-right-btn'><img src={plusIcon} /></button>
                <button className='card-title-right-btn'><img src={ellipsisIcon} /></button>
            </div> : null}
        </div>
    )
}

export default Title