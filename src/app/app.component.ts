import { MediaMatcher } from '@angular/cdk/layout';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  protected mobile: MediaQueryList;

  constructor(media: MediaMatcher) {
    this.mobile = media.matchMedia('(max-width: 599px)');
  }

}
