import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TipsService } from './tips.service';
import { TipsComponent } from './tips/tips.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TipsComponent],
  providers: [TipsService],
  exports: [TipsComponent]
})
export class ShareModule { }