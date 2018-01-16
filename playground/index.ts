/**
 * This is only for local test
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { SearchFilterSortModule }  from 'ng-searchfiltersort';
import { SearchFilterSortService }  from 'ng-searchfiltersort';

@Component({
  selector: 'app-root',
  template: ``
})
class AppComponent {
  constructor(private sfs: SearchFilterSortService) {}
}

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [ AppComponent ],
  imports: [ BrowserModule, SearchFilterSortModule.forRoot() ],
  providers: [SearchFilterSortService]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
