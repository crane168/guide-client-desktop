import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.web.component';
import { MainComponent } from './main/main.web.component';

const routes:Routes=[
  {path:'', component:MainComponent},
  {path:'details',component:DetailsComponent}
]
@NgModule({
  imports:[
    RouterModule.forRoot(routes),
    CommonModule
    ],
    exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }
