import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchFilterSortService } from './search-filter-sort.service';

export * from './search-filter-sort.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class SearchFilterSortModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SearchFilterSortModule,
      providers: [SearchFilterSortService]
    };
  }
}
