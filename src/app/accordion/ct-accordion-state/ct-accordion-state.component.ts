import {AfterContentInit, AfterViewInit, ChangeDetectorRef, Component, ContentChild, OnInit, TemplateRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-ct-accordion-state',
  templateUrl: './ct-accordion-state.component.html',
  styleUrls: ['./ct-accordion-state.component.sass']
})
export class CtAccordionStateComponent {

  @ViewChild('content', {read: TemplateRef})
  templateRef: TemplateRef<any>;

  constructor(private cdr: ChangeDetectorRef) {
  }
}
