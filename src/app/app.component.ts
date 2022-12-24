import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  array:any=[];
  
  constructor(private demo:UserService){
this.demo.userlist().subscribe((data:any)=>{
  this.array=data;

  console.log(data);
})

  }
}
