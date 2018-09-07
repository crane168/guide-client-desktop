import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from "@angular/common/http";
import { AppComponent } from './app.web.component';
import { NxModule } from '@nrwl/nx';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MainComponent } from './main/main.web.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from './app-routing.web.module';
import { DetailsComponent } from './details/details.web.component';
import { MatListModule} from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule} from "@angular/material/datepicker";
import { MatChipsModule} from '@angular/material/chips';
import { MatDialogModule} from '@angular/material/dialog';
import { MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';

import {
  MatCardModule,
  MatCheckboxModule,
  MatInputModule,
  MatNativeDateModule,
  MatSelectModule
} from "@angular/material";
import {MatSidenavModule} from '@angular/material/sidenav';

import { GuideCommonModule } from "@ngx3-guidelib";
import { TableComponent } from './table/table.web.component';
import { AnimDirective } from './anim.web.directive';
import { DialogComponent } from './dialog/dialog.web.component';
import { ModifyComponent } from './dialog/modify/modify.web.component';

@NgModule({
  declarations: [AppComponent, MainComponent, DetailsComponent, TableComponent, AnimDirective,DialogComponent, ModifyComponent],
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    GuideCommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatListModule,
    MatIconModule,
    MatInputModule,
    MatCheckboxModule,
    MatCardModule,
    MatSidenavModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatChipsModule,
    MatDialogModule,
    MatButtonModule,
    MatDividerModule,
    MatBottomSheetModule
  ],
  providers: [],
  entryComponents:[
    DialogComponent,
    ModifyComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
