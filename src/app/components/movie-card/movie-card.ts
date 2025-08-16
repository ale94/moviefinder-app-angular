import { Component, input } from '@angular/core';
import { Movie } from '../../interfaces/movie.interface';

@Component({
  selector: 'movie-card',
  imports: [],
  templateUrl: './movie-card.html',
})
export class MovieCard {
  movie = input.required<Movie>();
}
