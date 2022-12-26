import { Injectable } from '@angular/core';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }



  private posts: Post[] = [];  

  getPosts(){  
    return [...this.posts];  
  }  

  addPost(title: string, content: string){  
    const post: Post={title: title, content: content};  
    this.posts.push(post);  
}  


}
