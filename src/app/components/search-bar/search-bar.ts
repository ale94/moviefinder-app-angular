import { Component, inject, output, signal } from '@angular/core';
import { MoviesService } from '../../services/movies-service';
import { Movie } from '../../interfaces/movie.interface';

@Component({
  selector: 'search-bar',
  imports: [],
  templateUrl: './search-bar.html',
})
export class SearchBar {
  movieService = inject(MoviesService);
  movies = signal<Movie[]>([]);
  moviesEvent = output<Movie[]>();

  onSearch(query: string) {
    this.movieService.searchMovies(query).subscribe((resp) => {
      this.movies.set(resp);
      this.moviesEvent.emit(this.movies());
    });
  }
}
