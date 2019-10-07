import { Component } from '@angular/core';
import { Random } from '@dikman/ngx-tools';

@Component({
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.scss']
})
export class RandomComponent {

  protected numberExample = `
    console.log(Random.number(5, 25));
  `.trim().replace(/(^|[\n\r])\s{4}/g, '$1');

  protected colorExample = `
    console.log(Random.color(5, 25));
  `.trim().replace(/(^|[\n\r])\s{4}/g, '$1');

  protected stringExample = `
    console.log(Random.string(32));
  `.trim().replace(/(^|[\n\r])\s{4}/g, '$1');

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
