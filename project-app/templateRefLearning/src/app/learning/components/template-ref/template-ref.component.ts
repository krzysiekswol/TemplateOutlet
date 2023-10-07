import { Component } from '@angular/core';

interface PersonMessage {
  name: string;
  message: string;
}

@Component({
  selector: 'app-template-ref',
  templateUrl: './template-ref.component.html',
  styleUrls: ['./template-ref.component.scss']
})
export class TemplateRefComponent {
  public helloMsg: PersonMessage = {
    name: 'Mat',
    message: 'no witaj Wielki Macie'
  }
}
