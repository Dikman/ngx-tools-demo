import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './singleton.component.html'
})
export class SingletonComponent {

  protected example = `
    @Injectable({
      providedIn: 'root'
    })
    @Singleton()
    export class ExampleService {
      constructor() {
        ...
      }
    }
  `.trim().replace(/(^|[\n\r])\s{4}/g, '$1');

}
