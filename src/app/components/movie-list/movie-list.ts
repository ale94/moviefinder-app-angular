import { Component, inject } from '@angular/core';
import { MovieCard } from '../movie-card/movie-card';
import { MoviesService } from '../../services/movies-service';

@Component({
  selector: 'movie-list',
  imports: [MovieCard],
  templateUrl: './movie-list.html',
})
export class MovieList {
  movies = inject(MoviesService);
}
