import { CommonModule } from '@angular/common';
import { TableStructureComponent } from './table-structure.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/@fury/shared/material-components.module';
import { FurySharedModule } from 'src/@fury/fury-shared.module';
import { ListModule } from 'src/@fury/shared/list/list.module';
import { MatTableModule } from '@angular/material/table';
import { DirectivesModule } from '../../custom-directives/custom-directives.module';
import { PipesModule } from '../../custom-pipes/pipes-module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MaterialModule,
        FurySharedModule,
        ListModule,
        MatTableModule,
        DirectivesModule,
        PipesModule
    ],
    declarations: [TableStructureComponent],
    entryComponents: [TableStructureComponent],
    exports: [TableStructureComponent]
})
export class TableStructureModule { }
