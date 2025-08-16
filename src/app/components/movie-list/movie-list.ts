import { Component } from '@angular/core';
import { MovieCard } from '../movie-card/movie-card';

@Component({
  selector: 'movie-list',
  imports: [MovieCard],
  templateUrl: './movie-list.html'
})
export class MovieList {

}
