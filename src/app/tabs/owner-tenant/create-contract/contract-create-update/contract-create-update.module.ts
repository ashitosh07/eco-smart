import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BreadcrumbsModule } from '../../../../../@fury/shared/breadcrumbs/breadcrumbs.module';
import { ListModule } from '../../../../../@fury/shared/list/list.module';
import { MaterialModule } from '../../../../../@fury/shared/material-components.module';
import { CreateContractRoutingModule } from '../../create-contract/create-contract-routing.module';
import { FurySharedModule } from '../../../../../@fury/fury-shared.module';
import { ContractCreateUpdateComponent } from './contract-create-update.component';
import { ShowErrorsModule } from '../../../shared/components/show-errors/show-errors.module';
import { DatePipe } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TitleModule } from '../../../../../@fury/shared/title/title.module';
import { PageLayoutModule } from '../../../../../@fury/shared/page-layout/page-layout.module';
import {FuryCardModule } from '../../../../../@fury/shared/card/card.module';
import { DirectivesModule } from '../../../shared/custom-directives/custom-directives.module';
import { PipesModule } from '../../../shared/custom-pipes/pipes-module';


@NgModule({
  imports: [
    CommonModule,MatMenuModule, FontAwesomeModule, TitleModule,
    CreateContractRoutingModule, PageLayoutModule, FuryCardModule,
    FormsModule,    
    // BrowserModule,
    MaterialModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    FurySharedModule,  
    ShowErrorsModule,
    ListModule,
    BreadcrumbsModule,
    DirectivesModule,
    PipesModule
  ],
  declarations: [ContractCreateUpdateComponent],
  entryComponents: [ContractCreateUpdateComponent],
  exports: [ContractCreateUpdateComponent],
  providers: [DatePipe]
})
export class ContractCreateUpdateModule {
}
