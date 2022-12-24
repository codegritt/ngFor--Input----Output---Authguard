import { Component } from '@angular/core';
import { HERO } from '../hero';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  heroes=HERO;
  master='leonidas';

  parent=10;
  parentcount=0;

  displaycounter(count:number){
    this.parentcount=count;
  }

}
