import { ModuleWithProviders, NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { HeaderComponent } from "./common/header.component";

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
  ],
  exports:[
    HeaderComponent
  ]
})
export class GuideCommonModule {
  static forRoot(): ModuleWithProviders{
        return {ngModule:GuideCommonModule};
     }
}
