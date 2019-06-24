import { Component, OnInit } from '@angular/core';
import { TipsService } from '../share/tips.service';

@Component({
  selector: 'app-lazy',
  templateUrl: './lazy.component.html',
  styleUrls: ['./lazy.component.css']
})
export class LazyComponent implements OnInit {
  constructor(
    private tips: TipsService
  ) { 
  }

  ngOnInit() {
    // setTimeout(() => {
    //   this.tips.emitter.emit('LazyComponent-tips');
    // }, 6000)
  }

}