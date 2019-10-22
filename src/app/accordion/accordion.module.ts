import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CtAccordionComponent} from './ct-accordion/ct-accordion.component';
import {CtAccordionStateComponent} from './ct-accordion-state/ct-accordion-state.component';
import {CtAccordionSectionComponent} from './ct-accordion-section/ct-accordion-section.component';
import {CtAccordionPanelComponent} from './ct-accordion-panel/ct-accordion-panel.component';

@NgModule({
  declarations: [
    CtAccordionComponent,
    CtAccordionStateComponent,
    CtAccordionSectionComponent,
    CtAccordionPanelComponent
  ],
  exports: [
    CtAccordionComponent,
    CtAccordionStateComponent,
    CtAccordionSectionComponent,
    CtAccordionPanelComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AccordionModule {
}
