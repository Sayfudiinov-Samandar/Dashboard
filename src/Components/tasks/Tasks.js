import React from 'react'

const Task = ({ Svg, text }) => {
    return (
        <li className="sidebar-item">
            <Svg />
            <p>{text}</p>
        </li>
    )
}

export default Task