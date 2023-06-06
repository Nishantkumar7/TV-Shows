import React from 'react';
import Button from './Button';

const ShowCard = ({ show, onButtonClick }) => {
  const { name, rating, language, status, image } = show;

  return (
    <div className="card show-card shadow">
      {image && <img src={image.medium} alt={name} className="card-img-top show-card__image" />}
      <div className="card-body show-card__content">
        <h5 className="card-title show-card__title">{name}</h5>
        <p className="card-text show-card__rating">Rating: {rating && rating.average}</p>
        <p className="card-text show-card__language">Language: {language}</p>
        <p className="card-text show-card__language">Genres: {show.genres.join(', ')}</p>
        <p className="card-text show-card__status">Status: {status}</p>
        <Button onClick={onButtonClick} className="btn btn-primary">
          Show Details
        </Button>
      </div>
    </div>
  );
};

export default ShowCard;
