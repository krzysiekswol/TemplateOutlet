import { Component, Input, TemplateRef } from '@angular/core';

type Context = Array<ITEMS>;
interface ITEMS {
  name: string;
}
@Component({
  selector: 'app-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss']
})
export class ChipComponent {
  @Input() public template!: TemplateRef<any>;
  @Input() public data!: Context;
}
