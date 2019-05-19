import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})


export class PostListComponent {
  // array, but need to loop it
  // posts = [
  //   {title: 'First post', content: 'This is the first content'},
  //   {title: 'Second post', content: 'This is the second content'},
  //   {title: 'Third post', content: 'This is the third content'},
  // ];

  // get data by user input
  @Input() posts = [];
}
