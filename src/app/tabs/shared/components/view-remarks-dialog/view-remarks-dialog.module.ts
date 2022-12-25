import { CommonModule } from '@angular/common';
import { ViewRemarksDialogComponent } from './view-remarks-dialog.component';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../../../../@fury/shared/material-components.module';
import { FurySharedModule } from '../../../../../@fury/fury-shared.module';
import { MatDialogModule } from '@angular/material/dialog';
import { FuryCardModule } from '../../../../../@fury/shared/card/card.module';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatToolbarModule,
        FormsModule,
        MaterialModule,
        FuryCardModule,
        FurySharedModule,
        MatDialogModule,
        MatIconModule,
        MatToolbarModule
    ],
    declarations: [ViewRemarksDialogComponent],
    entryComponents: [ViewRemarksDialogComponent],
    exports: [ViewRemarksDialogComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]
})
export class ViewRemarksDialogModule { }
