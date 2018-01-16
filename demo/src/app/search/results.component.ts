import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { SearchFilterSortService } from 'ng-searchfiltersort';

@Component({
  selector: 'app-results',
  template: `
    <section class="my-3">
      Sort By:
      <div class="btn-group btn-group-sm" role="group">
        <button
          class="btn btn-secondary"
          (click)="sortByTitle()"
          [disabled]="sortActive('title')">Title</button>
        <button
          class="btn btn-secondary"
          (click)="sortByYear()"
          [disabled]="sortActive('year')">Year</button>
        <button
          class="btn btn-secondary"
          (click)="sortByScore()"
          [disabled]="sortActive('score')">Score</button>
      </div>
    </section>
    <ul class="list-group">
      <li *ngFor="let film of sortedResults" class="list-group-item">
        <h5 class="mb-1">{{ film.title }} ({{ film.release_date }})</h5>
        <small><strong>Rotten Tomatoes Score:</strong> {{ film.rt_score }}</small><br>
        <small><strong>Summary:</strong> {{ film.description }}</small>
      </li>
    </ul>
  `,
  styles: []
})
export class ResultsComponent implements OnInit, OnChanges {
  @Input() results: { [key: string]: any }[];
  sortedResults: { [key: string]: any }[];
  sort: string;

  constructor(public sfs: SearchFilterSortService) { }

  ngOnInit() {
    this.sortByTitle();
  }

  ngOnChanges(changes) {
    switch (this.sort) {
      case 'title':
        this.sortByTitle();
        break;
      case 'year':
        this.sortByYear();
        break;
      case 'score':
        this.sortByScore();
        break;
    }
  }

  sortByTitle() {
    this.sortedResults = this.sfs.orderBy(this.results, 'title');
    this.sort = 'title';
  }

  sortByYear() {
    this.sortedResults = this.sfs.orderBy(this.results, 'release_date');
    this.sort = 'year';
  }

  sortByScore() {
    this.sortedResults = this.sfs.orderBy(this.results, 'rt_score', true);
    this.sort = 'score';
  }

  sortActive(val: string) {
    return this.sort === val;
  }

}
