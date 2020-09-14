import { NgModule } from '@angular/core';
import { AdminpagesRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';

@NgModule({
    declarations: [AdminComponent
    ],
    imports: [
      AdminpagesRoutingModule      
    ]
  })
  export class AdminpagesModule { }