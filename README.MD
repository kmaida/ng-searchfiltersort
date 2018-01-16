# ng-searchfiltersort

This is an Angular library that **provides a service for searching, filtering, and sorting arrays of objects**. [Angular](https://angular.io) does not support FilterPipe or OrderByPipe like AngularJS does. Instead, the docs declare:

> _"Any capabilities that you would have put in a pipe and shared across the app can be written in a filtering/sorting service and injected into the component."_
>
> -[Angular Pipes: No FilterPipe or OrderByPipe](https://angular.io/guide/pipes#appendix-no-filterpipe-or-orderbypipe)

The `ng-searchfiltersort` library fulfills that need for searching, filtering, and sorting arrays containing objects. It can search, filter, and sort objects with properties that are strings, booleans, numbers, and dates.

## Installation

To install `ng-searchfiltersort`, run:

```bash
$ npm install ng-searchfiltersort --save
```

You can check out / download the service source code here: [`search-filter-sort.service.ts`](https://github.com/kmaida/ng-searchfiltersort/blob/master/src/search-filter-sort.service.ts).

## Setup

The `SearchFilterSortService` is intended to be used as a _singleton_. You will need to provide the module and call the `forRoot()` method, as well as provide the service.

### Add to Module

In the file containing the `@NgModule` where you wish to inject module and service (for many projects, this will be `app.module.ts`), do the following:

```js
// src/app/app.module.ts
...
// Import SearchFilterSort module and service
import { SearchFilterSortModule } from 'ng-searchfiltersort';
import { SearchFilterSortService } from 'ng-searchfiltersort';

@NgModule({
  ...,
  imports: [
    ...,
    SearchFilterSortModule.forRoot()
  ],
  providers: [SearchFilterSort],
  ...
})
export class AppModule { }
```

### Implement in Components

In components that should use the `SearchFilterSortService`, be sure to import the service and add it to the component's constructor like so:

```
...
import { SearchFilterSortService } from 'ng-searchfiltersort';

@Component({
  ...
})
export class MyComponent {
  constructor(private sfs: SearchFilterSortService) {}
  ...
```

## Methods

The following methods are provided by `SearchFilterSortService`:

### search(array, query, excludeProps?, dateFormat?)

The `search()` method filters an array of objects and returns only items that contain values matching the specified _query_. It accepts the following arguments:

* **array**: `object[]` An array of objects is expected; any (`any[]`) array is accepted as type, but an error will be thrown if the array does not contain objects.
* **query**: `string` The search query string.
* **excludeProps** _(optional)_: `string|string[]` Accepts a string or an array of strings specifying any properties that should _not_ have their values searched for matches (e.g., IDs).
* **dateFormat** _(optional)_: `string` Accepts an [Angular DatePipe format string](https://angular.io/api/common/DatePipe) that can be used to transform JavaScript or ISO dates in the array data into a format that users might actually use in a search query. For example, if a user searches for "November", you can pass the `dateFormat` argument as `fullDate` so that items with a value like `2017-11-25T23:43:08.444Z` will be returned rather than ignored.

> **Note:** If you are passing a `dateFormat` but don't wish to exclude properties from search, the `excludeProps` argument must be explicitly passed as a falsey value such as `false`, `null`, or `undefined`.

### filter(array, property, value)

The `filter()` method can be used to _filter_ an array of objects, returning only items with specified key/value pairs. It accepts the following arguments:

* **array**: `object[]` An array of objects is expected; any (`any[]`) array is accepted as type, but an error will be thrown if the array does not contain objects.
* **prop**: `string` The object property to check for a matching value.
* **value**: `any` The desired value of the key/value pair to look for.

### orderBy(array, prop, reverse?)

The `orderBy()` method sorts an array of objects by a specified property. Property values can be of type `string`, `number`, or `boolean` (but are _expected_ to be consistent types across all objects in the array). If other value types are found instead, the original array will be returned unsorted. The method accepts the following arguments:

* **array**: `object[]` An array of objects is expected; any (`any[]`) array is accepted as type, but an error will be thrown if the array does not contain objects.
* **prop**: `string` The property that should be used to sort the array.
* **reverse** _(optional)_: `boolean` Specifies whether the order of sorting should be reversed. For example, if the value type of the property you specified is text, setting `reverse` to `true` will return the array from Z to A instead of the default A to Z.

### orderByDate(array, prop, reverse?)

The `orderByDate()` method specifically sorts by dates.

* **array**: `object[]` An array of objects is expected; any (`any[]`) array is accepted as type, but an error will be thrown if the array does not contain objects.
* **prop**: `string` The property that should be used to sort the array. Dates are expected as values for the specified property. (An error will occur otherwise.)
* **reverse** _(optional)_: `boolean` Specifies whether the order of sorting should be reversed. For example, setting `reverse` to `true` will return the array in _descending_ order (Dec to Jan | 2017 to 1992) instead of the default _ascending_ (Jan to Dec | 1992 to 2017).

## Demo

You can check out a demo Angular app showing how to use the `ng-searchfiltersort` library in the [`demo` folder in this repository](https://github.com/kmaida/ng-searchfiltersort/tree/master/demo). See the folder's README for installation instructions.

## License

[MIT](https://github.com/kmaida/ng-searchfiltersort/blob/master/LICENSE) &copy; Kim Maida
