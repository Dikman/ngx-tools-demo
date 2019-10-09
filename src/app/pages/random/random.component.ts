import { Component } from '@angular/core';
import { Random } from '@dikman/ngx-tools';
import { TrimExample } from 'src/app/decorators/trim-example.decorator';

@Component({
  templateUrl: './random.component.html'
})
export class RandomComponent {

  @TrimExample()
  protected numberExample = `
    import { Random } from '@dikman/ngx-tools';

    console.log(Random.number(5, 25));
  `;

  @TrimExample()
  protected colorExample = `
    import { Random } from '@dikman/ngx-tools';

    console.log(Random.color());
  `;

  @TrimExample()
  protected stringExample = `
    import { Random } from '@dikman/ngx-tools';

    console.log(Random.string(32));
  `;

  protected randomNumber: number;

  protected randomColor: string;

  protected randomString: string;

  protected generateRandomNumber() {
    this.randomNumber = Random.number(5, 25);
    console.log(this.randomNumber);
  }

  protected generateRandomColor() {
    this.randomColor = Random.color();
    console.log(this.randomColor);
  }

  protected generateRandomString() {
    this.randomString = Random.string(16);
    console.log(this.randomString);
  }

}
