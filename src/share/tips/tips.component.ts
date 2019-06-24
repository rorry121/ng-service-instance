import { Component, OnInit, OnDestroy } from '@angular/core';
import { TipsService } from '../tips.service'
@Component({
  selector: 'app-tips',
  templateUrl: './tips.component.html',
  styleUrls: ['./tips.component.css']
})
export class TipsComponent implements OnInit, OnDestroy {
  text: string;
  tipsSub: any;
  constructor(
        private tips: TipsService
  ) { 
    console.log('TipsComponent-constructor');

  }

  ngOnInit() {
    this.tipsSub = this.tips.emitter.subscribe(text => {
      console.log('subscribe:', text);
      this.text = text;
    })
  }

  ngOnDestroy() {
    this.tipsSub.unsubscribe();
  }

}