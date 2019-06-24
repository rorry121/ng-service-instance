import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyComponent } from './lazy.component';
import { ShareModule } from '../share/share.module'
import { LazyRoutingModule } from './lazy-routing.module'
import { OtherModule } from '../other/other.module'

@NgModule({
  imports: [
    CommonModule,
    ShareModule,
    LazyRoutingModule,
    OtherModule
  ],
  declarations: [LazyComponent]
})
export class LazyModule { }