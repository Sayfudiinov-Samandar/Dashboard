import React from 'react'
import "./card.scss";

export const Card = ({text,count}) => {
  return (
    <li className="statistics-item">
        <p className="statistics-name">
            {text}
        </p>
        <h3 className="statistics-count">
            {count}
        </h3>
    </li>
  )
}