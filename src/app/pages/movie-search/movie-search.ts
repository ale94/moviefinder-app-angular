import { Component, signal } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';
import { SearchBar } from '../../components/search-bar/search-bar';
import { MovieList } from '../../components/movie-list/movie-list';
import { Footer } from '../../components/footer/footer';
import { Movie } from '../../interfaces/movie.interface';
import { MovieCard } from '../../components/movie-card/movie-card';

@Component({
  selector: 'movie-search',
  imports: [Navbar, SearchBar, Footer, MovieCard],
  templateUrl: './movie-search.html',
})
export default class MovieSearch {

  movies = signal<Movie[]>([]);

  onSearch(movies: Movie[]) {
    this.movies.set(movies);
  }
}
