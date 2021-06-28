import React from "react"
import "./Card.css"
const Card = ({ title, text, imageUrl }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt="Course" />

      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  )
}

export default Card
