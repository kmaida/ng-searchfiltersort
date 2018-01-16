import { Component, OnInit, Input } from '@angular/core';
import { SearchFilterSortService } from 'ng-searchfiltersort';

@Component({
  selector: 'app-search',
  template: `
    <div class="container">
      <section class="row form-inline my-2">
        <input
            type="text"
            class="form-control col-sm-8 mb-2 mb-sm-0"
            [(ngModel)]="query"
            placeholder="Search Films" />
        <button
          class="col btn btn-primary ml-sm-2"
          (click)="searchFilms()"
          [disabled]="!query">Search</button>
        <button
          class="col btn btn-danger ml-1"
          (click)="resetQuery()"
          [disabled]="!query">&times;</button>
      </section>
    </div>
    <app-results *ngIf="results" [results]="results"></app-results>
  `,
  styles: []
})
export class SearchComponent implements OnInit {
  @Input() films: { [key: string]: any }[];
  results: { [key: string]: any }[];
  query = '';

  constructor(public sfs: SearchFilterSortService) { }

  ngOnInit() {
    this.results = this.films;
  }

  searchFilms() {
    this.results = this.sfs.search(this.films, this.query, 'id');
  }

  resetQuery() {
    this.query = '';
    this.results = this.films;
  }

}
