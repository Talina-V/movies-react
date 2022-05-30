import { Movie } from './Movie';

function MoviesList(props) {
    const {movies} = props;

    return <div className="movies">
        {movies.map(movie => (
            <Movie key={movie.imdbID} {...movie} />
        ))}
    </div>
}

export { MoviesList };