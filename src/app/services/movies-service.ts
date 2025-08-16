import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Movie } from '../interfaces/movie.interface';
import { MovieResponse } from '../interfaces/movies.interfaces';
import { environment } from '../../environments/environment.development';
import { MovieMapper } from '../mapper/movie.mapper';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private htpp = inject(HttpClient);

  movies = signal<Movie[]>([]);

  constructor() {
    this.loadMovies();
  }

  loadMovies() {
    this.htpp
      .get<MovieResponse>(`${environment.omdbUrl}`, {
        params: {
          apikey: environment.omdbApiKey,
          s: 'movie',
          y: 2025,
        },
      })
      .subscribe((resp) => {
        const movies = MovieMapper.mapMovieResponseToMovieArray(resp.Search);
        this.movies.set(movies);
      });
  }
}
