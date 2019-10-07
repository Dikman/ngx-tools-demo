import { Component, Renderer2 } from '@angular/core';
import { Debounce, Random } from '@dikman/ngx-tools';

@Component({
  templateUrl: './debounce.component.html'
})
export class DebounceComponent {

  protected example = `
    export class ExampleComponent {
      @Debounce() protected searchSomeData(): void {
        ...
      }
    }
  `.trim().replace(/(^|[\n\r])\s{4}/g, '$1');

  constructor(
    private renderer: Renderer2
  ) { }

  protected eventWithoutDebounce(event: MouseEvent): void {
    this.renderer.setStyle(event.target, 'background', Random.color());
    this.logged(`Event without @debounce() raised`);
  }

  @Debounce(150, false) protected eventWithDebounce(event): void {
    this.renderer.setStyle(event.target, 'background', Random.color());
    this.logged(`Event with @debounce(150, false) raised`);
  }

  @Debounce(150, true) protected eventWithImmediateDebounce(event): void {
    this.renderer.setStyle(event.target, 'background', Random.color());
    this.logged(`Event with @debounce(150, true) raised`);
  }

  private logged(message: string): void {
    const random = Math.random().toString(36).slice(-5);
    console.log(`[${random}] ${message}.`);
  }

}
