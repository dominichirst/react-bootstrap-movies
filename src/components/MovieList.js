import React, { Component, F } from 'react';
import { CardMovie } from './CardMovie';

class MovieList extends Component {

    render() {
        const { movies, deleteMovie, updateMovie } = this.props;
        return (
            <div>
                {movies.map((movie, i) => <CardMovie key={i} movie={movie} deleteMovie={deleteMovie} updateMovie={updateMovie} />)}
             </div>
        );
    }

} 

export default MovieList;