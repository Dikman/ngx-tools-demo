import { Component, Renderer2 } from '@angular/core';
import { Debounce, Random } from '@dikman/ngx-tools';
import { TrimExample } from 'src/app/decorators/trim-example.decorator';

@Component({
  templateUrl: './debounce.component.html'
})
export class DebounceComponent {

  @TrimExample()
  protected example = `
    import { Debounce } from '@dikman/ngx-tools';

    export class ExampleComponent {
      @Debounce()
      protected searchSomeData(): void {
        ...
      }
    }
  `;

  constructor(
    private renderer: Renderer2
  ) { }

  protected eventWithoutDebounce(event: MouseEvent): void {
    this.logged(event.target, 'Event without @debounce() raised');
  }

  @Debounce(150, false)
  protected eventWithDebounce(event: MouseEvent): void {
    this.logged(event.target, 'Event with @debounce(150, false) raised');
  }

  @Debounce(150, true)
  protected eventWithImmediateDebounce(event: MouseEvent): void {
    this.logged(event.target, 'Event with @debounce(150, true) raised');
  }

  private logged(target: EventTarget, message: string): void {
    const color = Random.color();
    this.renderer.setStyle(target, 'background', color);
    console.log(`[${color}] ${message}.`);
  }

}
