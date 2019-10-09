import { Component } from '@angular/core';
import { TrimExample } from 'src/app/decorators/trim-example.decorator';

@Component({
  templateUrl: './singleton.component.html'
})
export class SingletonComponent {

  @TrimExample()
  protected example = `
    import { Singleton } from '@dikman/ngx-tools';

    @Injectable({
      providedIn: 'root'
    })
    @Singleton()
    export class ExampleService {
      constructor() {
        ...
      }
    }
  `;

}
