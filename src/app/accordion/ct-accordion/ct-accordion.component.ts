import {Component} from '@angular/core';

@Component({
  selector: 'app-ct-accordion',
  templateUrl: './ct-accordion.component.html',
  styleUrls: ['./ct-accordion.component.sass'],
})
export class CtAccordionComponent {

  panelState = 'closed';

  constructor() {
  }

}
