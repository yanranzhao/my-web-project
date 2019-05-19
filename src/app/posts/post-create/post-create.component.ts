import { Component } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})

// passing input to instance
export class PostCreateComponent {
  newPost = 'No content';
  enteredValue = '';
  onAddPost() {

    this.newPost = this.enteredValue;
  }
}
