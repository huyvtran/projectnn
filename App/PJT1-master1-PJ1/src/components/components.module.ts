import { NgModule } from '@angular/core';
import { Sn1Sec1Component } from './sn1-sec1/sn1-sec1';
import { Sn1Sec2Component } from './sn1-sec2/sn1-sec2';
import { Sn1Sec3Component } from './sn1-sec3/sn1-sec3';
import { IonicModule } from 'ionic-angular';
import { IonSimpleWizard } from '../plugin/ion-wizard/ion-simple-wizard.component'
import { IonSimpleWizardStep } from '../plugin/ion-wizard/ion-simple-wizard.step.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
	declarations: [Sn1Sec1Component,
    Sn1Sec2Component,
    Sn1Sec2Component,
    Sn1Sec3Component,
    IonSimpleWizard,
    IonSimpleWizardStep
],
	imports: [IonicModule],
	exports: [Sn1Sec1Component,
    Sn1Sec2Component,
    Sn1Sec2Component,
    Sn1Sec3Component,
    BrowserAnimationsModule,]
})
export class ComponentsModule {}
