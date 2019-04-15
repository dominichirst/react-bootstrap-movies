import React, { Component } from 'react';

class SearchMovie extends Component {
 
    render() {
        return (
            <div className="card bg-light mb-3 ">
                <div className="card-body text-center">
                    
                    <div className="input-group-append">
                        <input className="form-control" type="text" name="searchQuery"
                            placeholder="Search Movies..."
                            onChange={e => this.props.searchMovies(e.target.value)}
                        />
                        <button
                            type="button"
                            className="btn btn-primary dropdown-toggle"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            Sort by: <span className="caret" />
                        </button>
                        <div className="sort-menu dropdown-menu dropdown-menu-right">
                            <button
                                className={
                                    'sort-by dropdown-item ' +
                                    (this.props.orderBy === 'title' ? 'active' : '')
                                }
                                onClick={e =>
                                    this.props.changeOrder('title', this.props.orderDir)
                                }
                                href="#"
                            >
                                Title
							</button>
                            <button
                                className={
                                    'sort-by dropdown-item ' +
                                    (this.props.orderBy === 'year' ? 'active' : '')
                                }
                                onClick={e =>
                                    this.props.changeOrder('year', this.props.orderDir)
                                }
                                href="#"
                            >
                                Year
							</button>
                            <button
                                className={
                                    'sort-by dropdown-item ' +
                                    (this.props.orderBy === 'rating' ? 'active' : '')
                                }
                                onClick={e =>
                                    this.props.changeOrder('rating', this.props.orderDir)
                                }
                                href="#"
                            >
                                Rating
							</button>
                            <div role="separator" className="dropdown-divider" />
                            <button
                                className={
                                    'sort-by dropdown-item ' +
                                    (this.props.orderDir === 'asc' ? 'active' : '')
                                }
                                onClick={e =>
                                    this.props.changeOrder(this.props.orderBy, 'asc')
                                }
                                href="#"
                            >
                                Asc
							</button>
                            <button
                                className={
                                    'sort-by dropdown-item ' +
                                    (this.props.orderDir === 'desc' ? 'active' : '')
                                }
                                onClick={e =>
                                    this.props.changeOrder(this.props.orderBy, 'desc')
                                }
                                href="#"
                            >
                                Desc
                </button>
                        </div>
					</div>
                </div>
            </div>
        );
    }

}

export default SearchMovie;