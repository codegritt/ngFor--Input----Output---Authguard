import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from '../post';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
 
  enteredTitle = '';  
  enteredContent = '';  
  newPost = 'This is a Post';  
  // postCreated = new EventEmitter();  
  @Output() postCreated = new EventEmitter<Post>();  
  onAddPost( form: NgForm)  {  
    const post : Post = {  
      title: form.value.title,  
      content: form.value.content  
    };  
    this.postCreated.emit(post);  
}  
}  