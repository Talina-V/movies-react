import React from 'react';
import { Component } from 'react';
import { MoviesList } from '../components/MoviesList';

class Main extends Component {

    state = {
        movies: [],
    }

    componentDidMount() {
        fetch('http://www.omdbapi.com/?apikey=f2c9ab06&s=matrix')
            .then(response => response.json())
            .then(data => this.setState({movies: data.Search}))
    }

    render() {
        const {movies} = this.state;

        return <main className="container content">
            {
                movies.length ? (
                    <MoviesList movies={this.state.movies} />
                ) : <h3>Loading...</h3>
            }
            
        </main>
    }
}

export { Main };