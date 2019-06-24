import { Component, OnInit } from '@angular/core';
import { TipsService } from '../share/tips.service';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css']
})
export class OtherComponent implements OnInit {

  constructor(
    private tips: TipsService
  ) { 
    setTimeout(() => {
       console.log('emit: OtherComponent-tips');
      this.tips.emitter.emit('OtherComponent-tips');
    }, 3000)
  }

  ngOnInit() {
  }

}