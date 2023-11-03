import React from 'react'
import { Link } from 'react-router-dom'

const Meal = ({image, name, id, category, area, tags}) => {
  return (
    <article className="meal">
      <div className="img-container">
        <Link to={`/meal/${id}`} className="btn btn-primary">
          <img src={image} alt={name} />
        </Link>
      </div>
      <div className="meal-footer">
        <h3>{name}</h3>
        <h4>{category}</h4>
        <p>{area}</p>
        <Link to={`/meal/${id}`} className="btn btn-primary btn-details">
          details
        </Link>
      </div>
    </article>
  );
}

export default Meal
