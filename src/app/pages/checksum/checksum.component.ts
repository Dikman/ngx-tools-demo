import { Component, OnInit } from '@angular/core';
import { TrimExample } from 'src/app/decorators/trim-example.decorator';
import { Random } from '@dikman/ngx-tools';
import { crc24 } from '@dikman/ngx-tools';

@Component({
  templateUrl: './checksum.component.html'
})
export class ChecksumComponent {

  @TrimExample()
  protected crc24Example = `
    import { crc24 } from '@dikman/ngx-tools';

    console.log(crc24('Some string'));
  `;

  protected crc24Number: string;

  protected generateCrc24Number() {
    const sample = Random.string(Random.number(10, 25));
    this.crc24Number = `crc24('${sample}') = 0x${crc24(sample).toString(16)}`;
    console.log(this.crc24Number);
  }

}
