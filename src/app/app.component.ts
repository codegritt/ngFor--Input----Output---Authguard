import { Component } from '@angular/core';
import { Post } from './posts/post';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  array:any=[];
  Storedposts : Post[] = [];  
 
  constructor(private demo:UserService){
this.demo.userlist().subscribe((data:any)=>{
  this.array=data;

  console.log(data);
})

  }


  
  onPostAdded(post: any){  
    this.Storedposts.push(post);  
  }  
}
