import React, { Component } from 'react';
import { FaPlus } from 'react-icons/fa';

class AddMovie extends Component {
    state = {title: '', year: 0, rating: 0, description: ''}

   
    handleChange = (e) => {
        const itemName = e.target.name;
        const itemValue = e.target.value;
        this.setState({ [itemName]: itemValue });
    }

    submitForm = (e) => {
        e.preventDefault();
        console.log("d");
    }

    handleAdd = (e) => {
        e.preventDefault();
        let tempMovie = {
            title: this.state.title,
            year: this.state.year,
            rating: this.state.rating,
            description: this.state.description
        };

        this.props.addMovie(tempMovie);

        this.setState({
            title: '',
            year: '',
            rating: '',
            description: ''
        });
        this.props.toggleForm();
    }

    render() {
        return (
            <div
                className={
                    'card textcenter mb-3 ' +
                    (this.props.formDisplay ? '' : 'add-movie')
                }
            >
                <div
                    className="movie-addheading card-header bg-primary text-white"
                    onClick={this.props.toggleForm}
                >
                    <FaPlus /> Add Movie
        </div>

                <div className="card-body">
                    <form id="movieForm" noValidate onSubmit={this.handleAdd}>
                        <div className="form-group form-row">
                            <label
                                className="col-md-2 col-form-label text-md-right"
                                htmlFor="movieTitle"
                                readOnly
                            >
                               Movie Title
              </label>
                            <div className="col-md-10">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="title"
                                    placeholder="Movie Title"
                                    value={this.state.title}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>

                        

                        <div className="form-group form-row">
                            <label
                                className="col-md-2 col-form-label text-md-right"
                                htmlFor="movieYear"
                            >
                                Release Date
              </label>
                            <div className="col-md-4">
                                <input
                                    type="date"
                                    className="form-control"
                                    name="year"
                                    id="movieYear"
                                    value={this.state.year}
                                    onChange={this.handleChange}
                                />
                            </div>
                            <label
                                className="col-md-2 col-form-label text-md-right"
                                htmlFor="movieRating"
                            >
                                Rating
              </label>
                            <div className="col-md-4">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="rating"
                                    id="movieRating"
                                    value={this.state.rating}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div className="form-group form-row">
                            <label className="col-md-2 text-md-right" htmlFor="movieDescription">
                                Description
              </label>
                            <div className="col-md-10">
                                <textarea
                                    className="form-control"
                                    rows="4"
                                    cols="50"
                                    name="description"
                                    id="movieDescription"
                                    placeholder="Movie Description"
                                    value={this.state.description}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div className="form-group form-row mb-0">
                            <div className="offset-md-2 col-md-10">
                                <button
                                    type="submit"
                                    className="btn btn-primary d-block ml-auto"
                                >
                                    Add Movie
                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );

    }
}

export default AddMovie;