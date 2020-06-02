import { NgModule } from "@angular/core";
import { RufMaterialModule } from '@ruf/material';
import {
  RufAppCanvasModule,
  RufLayoutModule,
  RufBannerModule,
//  RufFooterModule,
  // RufIconModule,
  // RufMenubarModule,
  // RufNavbarModule,
  // RufPageHeaderModule,
  // RufToolbarModule,
  // RufPageHeaderTitleComponent,
  RufRouterModule,
  RufCardModule,
  // RufDynamicMenubarModule,
  // RufMenuLabelModule,
  // RufUniqueIdModule,
  // RufDialogPanelModule,
  // RufTriggerModule,
  // RufStatusbarModule,
	// RufLabeledIconModule
} from '@ruf/shell';
import { RufLoadingIndicatorModule } from '@ruf/widgets';


@NgModule({
  imports: [
    RufAppCanvasModule,
   RufLayoutModule,
    RufBannerModule,
    //RufFooterModule,
    // RufIconModule,
    // RufMenubarModule,
 //   RufNavbarModule,
  //  RufPageHeaderModule,
    RufMaterialModule,
  //  RufToolbarModule,
    RufRouterModule.forRoot(),
 //   RufCardModule,
 //   RufDynamicMenubarModule,
 //   RufMenuLabelModule,
 //   RufDialogPanelModule,
 //   RufTriggerModule,
  //  RufStatusbarModule,
	//	RufLabeledIconModule,
	//	RufLoadingIndicatorModule
  ],
  exports: [
    RufAppCanvasModule,
    RufMaterialModule,
     RufLayoutModule,
    RufBannerModule,
    // RufFooterModule,
    // RufIconModule,
    // RufMenubarModule,
    // RufNavbarModule,
    // RufPageHeaderModule,
    // RufToolbarModule,
    RufRouterModule,
    RufCardModule,
    // RufDynamicMenubarModule,
    // RufMenuLabelModule,
    // RufUniqueIdModule,
    // RufDialogPanelModule,
    // RufTriggerModule,
    // RufStatusbarModule,
		// RufLabeledIconModule,
		RufLoadingIndicatorModule
  ]
})
export class HBSharedRufModule { }
