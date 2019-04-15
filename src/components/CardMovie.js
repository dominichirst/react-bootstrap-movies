import React from 'react';
import { FaTimes } from 'react-icons/fa';

export const CardMovie = ({ movie, deleteMovie, updateMovie}) => {

    const { title, year, rating, description } = movie;

    return (
        <div className="card bg-light mb-4 text-dark">
          <div>
            <button
                className="btn btn-lg btn-light text-danger "
                tite="Delete Attendee"
                onClick={e => deleteMovie(movie)}>
                <FaTimes />
            </button>
          </div>
            
            <div className="card-body pt-0">
                <h3 className="card-title" contentEditable
                    suppressContentEditableWarning onBlur={e =>
                        updateMovie(
                            'title',
                            e.target.innerText,
                            movie.movieId
                        )}>
                    {title}
                </h3>
              
                <p className="card-text font-italic">
                    Year: <span contentEditable
                        suppressContentEditableWarning onBlur={e =>
                            updateMovie(
                                'year',
                                e.target.innerText,
                                movie.movieId
                            )}>{year}</span> Rating: <span contentEditable
                                suppressContentEditableWarning onBlur={e =>
                                    updateMovie(
                                        'rating',
                                        e.target.innerText,
                                        movie.movieId
                                    )}>{rating}</span>
                </p>
                <p className="card-text" contentEditable
                    suppressContentEditableWarning onBlur={e =>
                        updateMovie(
                            'description',
                            e.target.innerText,
                            movie.movieId
                        )}>
                    {description}
                </p>
                
            </div>
        </div>
        );
}