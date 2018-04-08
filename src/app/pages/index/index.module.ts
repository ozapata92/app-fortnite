import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index.component';
import { HttpClientModule } from '@angular/common/http';
import {JsonpModule, Jsonp, Response} from '@angular/http';
import { ServicesModule } from '../../services/services.module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ServicesModule,
    JsonpModule 
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
