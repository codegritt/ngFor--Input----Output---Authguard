import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input()hero!:Hero;
  @Input('master')masterName=''

  @Output()valuechange=new EventEmitter();
  counter=0;

  valuechanged(){
    this.counter+=1;
    this.valuechange.emit(this.counter);
  }

}
