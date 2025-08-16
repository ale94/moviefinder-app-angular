import { Movie } from '../interfaces/movie.interface';
import { Search } from '../interfaces/movies.interfaces';

export class MovieMapper {
  static mapMovieResponseToMovie(movies: Search): Movie {
    return {
      title: movies.Title,
      year: movies.Year,
      poster: movies.Poster,
      type: movies.Type
    };
  }

  static mapMovieResponseToMovieArray(items: Search[]): Movie[] {
    return items.map(this.mapMovieResponseToMovie);
  }
}
