import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index.component';
import { HttpClientModule } from '@angular/common/http';
import { ServicesModule } from '../../services/services.module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ServicesModule
  ],
  exports: [
    IndexComponent
  ],
  declarations: [
    IndexComponent
  ],
  providers: [
    
  ]
})
export class IndexModule { }
