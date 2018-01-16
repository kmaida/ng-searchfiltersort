import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SearchFilterSortModule } from 'ng-searchfiltersort';
import { SearchFilterSortService } from 'ng-searchfiltersort';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { ResultsComponent } from './search/results.component';
import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    SearchFilterSortModule.forRoot()
  ],
  declarations: [
    AppComponent,
    SearchComponent,
    ResultsComponent
  ],
  providers: [
    ApiService,
    SearchFilterSortService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
