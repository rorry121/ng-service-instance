import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class TipsService {
  emitter: EventEmitter<string>;

  constructor() { 
  this.emitter = new EventEmitter();
    console.log('实例：TipsService-constructor');
  }

}