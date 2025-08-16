import { Component } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';
import { SearchBar } from '../../components/search-bar/search-bar';
import { Footer } from '../../components/footer/footer';
import { MovieList } from '../../components/movie-list/movie-list';

@Component({
  selector: 'movie-page',
  imports: [Navbar, SearchBar, MovieList, Footer],
  templateUrl: './movie-page.html'
})
export class MoviePage {

}
