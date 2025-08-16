import { Component, signal } from '@angular/core';
import { MoviePage } from './pages/movie-page/movie-page';

@Component({
  selector: 'app-root',
  imports: [MoviePage],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('movie-search-app');
}
