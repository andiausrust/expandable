import {AfterViewInit, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-ct-accordion-panel',
  templateUrl: './ct-accordion-panel.component.html',
  styleUrls: ['./ct-accordion-panel.component.sass']
})
export class CtAccordionPanelComponent {

  @ViewChild('content', {read: TemplateRef})
  templateRef: TemplateRef<any>;

  constructor() {
  }
}
