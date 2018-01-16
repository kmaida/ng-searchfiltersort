# ng-searchfiltersort

## Installation

To install this library, run:

```bash
$ npm install ng-searchfiltersort --save
```

## Consuming your library

Once you have published your library to npm, you can import your library in any Angular application by running:

```bash
$ npm install ng-searchfiltersort
```

and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import your library
import { SearchFilterSortModule } from 'ng-searchfiltersort';
import { SearchFilterSortService } from 'ng-searchfiltersort'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SearchFilterSortModule.forRoot()
  ],
  providers: [SearchFilterSort],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once your library is imported, you can use its components, directives and pipes in your Angular application:

```xml
<!-- You can now use your library component in app.component.html -->
<h1>
  {{title}}
</h1>
<sampleComponent></sampleComponent>
```

## Development

To generate all `*.js`, `*.d.ts` and `*.metadata.json` files:

```bash
$ npm run build
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

## License

MIT © [Kim Maida](mailto:kim@kmaida.io)
