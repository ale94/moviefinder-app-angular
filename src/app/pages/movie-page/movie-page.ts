import { Component } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';
import { Footer } from '../../components/footer/footer';
import { MovieList } from '../../components/movie-list/movie-list';

@Component({
  selector: 'movie-page',
  imports: [Navbar, MovieList, Footer],
  templateUrl: './movie-page.html',
})
export default class MoviePage {}
