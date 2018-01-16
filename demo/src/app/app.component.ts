import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  films: { [key: string]: any }[];
  filmsSub: Subscription;
  loading: boolean;
  error: boolean;

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.loading = true;
    this.filmsSub = this.api.getFilms$().subscribe(
      films => {
        this.films = films;
        this.loading = false;
      },
      err => {
        this.error = true;
        this.loading = false;
      }
    );
  }
}
