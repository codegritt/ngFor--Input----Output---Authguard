import { Component, Input } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {

  postsService : PostService;  
  constructor(public postService: PostService){  
    this.postsService = this.postsService;  
  }  
  // @Input() posts = [];  
  // posts=[  
  //   {title: 'First Post', content:'This is the first post\'s content'},  
  //   {title: 'Second Post', content:'This is the second post\'s content'},  
  //   {title: 'Third Post', content:'This is the third post\'s content'}    
  // ];  

  @Input()posts : Post[] = [];  
ngOnInit(){      
}  
}
