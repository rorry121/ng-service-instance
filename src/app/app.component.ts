import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TipsService } from '../share/tips.service'
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  constructor(
    private tips: TipsService,
    private router: Router
  ) {
    this.router.navigate(['/lazy']);

    setTimeout(() => {
      console.log('emit: AppComponent-tips');
      this.tips.emitter.emit('AppComponent-tips');
    }, 6000)
  }
  name = 'Angular';
}
