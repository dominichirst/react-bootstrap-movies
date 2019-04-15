import React, { Component } from 'react';
import { findIndex, without } from 'lodash';

import MovieList  from './MovieList';
import SearchMovie from './SearchMovie';
import AddMovie from './AddMovie';


class Movies extends Component {

    state = {
            showAddMovie: false,
            searchQuery: '',
            orderBy: 'rating',
            orderDir: 'asc',
            movies: [],
            lastIndex: 0
        }

    componentDidMount() {
        fetch('./data.json')
            .then(response => response.json())
            .then(response => {
                const movies = response.map(item => {
                    item.movieId = this.state.lastIndex;
                    this.setState({ lastIndex: this.state.lastIndex + 1 });
                    return item;
                })
                this.setState({ movies })
            });
    }

    toggleForm = () => {
        this.setState({
            showAddMovie: !this.state.showAddMovie
        });
    }

    updateMovie = (name, value, id) => {
        let tempMovies = this.state.movies;
        let aptIndex = findIndex(this.state.movies, {
            movieId: id
        });
        tempMovies[aptIndex][name] = value;
        this.setState({
            movies: tempMovies
        });
    }

    addMovie = (movie) => {
        let tempMovies = this.state.movies;
        movie.movieId = this.state.lastIndex;
        tempMovies.unshift(movie);
        this.setState({
            movies: tempMovies,
            lastIndex: this.state.lastIndex + 1
        });
    }

    deleteMovie = (movie) => {
        let tempMovies = this.state.movies;
        tempMovies = without(tempMovies, movie);

        this.setState({
            movies: tempMovies
        });
    }

    changeOrder = (orderBy, orderDir) =>{
        this.setState({
            orderBy,
            orderDir
        });
    }

    searchMovies = (searchQuery) => {
        this.setState({ searchQuery });
    }

    render() {
        let order;
        let filteredMovies = this.state.movies;

        if (this.state.orderDir === 'asc') {
            order = 1;
        }
        else {
            order = -1;
        }

        filteredMovies = filteredMovies.sort((a, b) => {
            if (a[this.state.orderBy] && b[this.state.orderBy] && a[this.state.orderBy].toLowerCase() < b[this.state.orderBy].toLowerCase()) {
                return -1 * order;
            } else {
                return 1 * order;
            }
        }).filter(eachItem => {
            return (
                eachItem['title'] && eachItem['title']
                    .toLowerCase()
                    .includes(this.state.searchQuery.toLowerCase()) ||
                eachItem['rating'] && eachItem['rating']
                    .includes(this.state.searchQuery.toLowerCase()) ||
                eachItem['year'] && eachItem['year']
                    .includes(this.state.searchQuery.toLowerCase()) || 
                eachItem['title'] && eachItem['description']
                    .toLowerCase()
                    .includes(this.state.searchQuery.toLowerCase())
            );
        });
      
        return (
            <div className="container" >
                <div className="row ">
                <div className="col-md-12">
                    
                        <h1 className="mb-4 mt-4">Movies</h1>
                        <AddMovie
                            formDisplay={this.state.showAddMovie}
                            toggleForm={this.toggleForm}
                            addMovie={this.addMovie}
                        />
                        <SearchMovie
                            searchMovies={this.searchMovies}
                            orderBy={this.state.orderBy}
                            orderDir={this.state.orderDir}
                            changeOrder={this.changeOrder}
                        />
                        <MovieList movies={filteredMovies} deleteMovie={this.deleteMovie} updateMovie={this.updateMovie} />
                    </div>
                   
                </div>
            </div>
            
            
        );
    }
}

export default Movies;