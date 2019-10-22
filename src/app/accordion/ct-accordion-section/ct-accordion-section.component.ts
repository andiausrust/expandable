import {AfterViewInit, ChangeDetectorRef, Component, ContentChild, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CtAccordionPanelComponent} from '../ct-accordion-panel/ct-accordion-panel.component';

@Component({
  selector: 'app-ct-accordion-section',
  templateUrl: './ct-accordion-section.component.html',
  styleUrls: ['./ct-accordion-section.component.sass']
})
export class CtAccordionSectionComponent implements AfterViewInit {

  @Input() name: string;

  @ContentChild(CtAccordionPanelComponent, {static: false}) panel: CtAccordionPanelComponent;

  @Output() panelOpened = new EventEmitter<any>();
  @Output() panelClosed = new EventEmitter<any>();

  @Input() panelState: string;
  @Output() panelStateChanged = new EventEmitter<'open' | 'closed'>();

  constructor(private cdr: ChangeDetectorRef) {
  }

  ngAfterViewInit(): void {
    this.cdr.detectChanges();
  }

  toggle() {
    if (this.panelState === 'open') {
      this.panelState = 'closed';
    } else {
      this.panelState = 'open';
    }
    this.panelState === 'open' ? this.panelStateChanged.emit('open')
    : this.panelStateChanged.emit('closed');
  }
}
