import React from 'react'

export const Task = ({ Svg, text }) => {
    return (
        <li className="sidebar-item">
            <Svg />
            <p>{text}</p>
        </li>
    )
}

 