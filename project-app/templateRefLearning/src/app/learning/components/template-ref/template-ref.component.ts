import { ChangeDetectionStrategy, Component, TemplateRef, ViewEncapsulation } from '@angular/core';
import { MyChipsComponent } from '../my-chips/my-chips.component';

interface PersonMessage {
  name: string;
  message: string;
}

@Component({
  selector: 'app-template-ref',
  templateUrl: './template-ref.component.html',
  styleUrls: ['./template-ref.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TemplateRefComponent {
  public helloMsg: PersonMessage = {
    name: 'Mat',
    message: 'no witaj Wielki Macie'
  }
}
