import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../post.model';
import { PostsService } from '../posts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})


export class PostListComponent implements OnInit, OnDestroy {
  // array, but need to loop it
  // posts = [
  //   {title: 'First post', content: 'This is the first content'},
  //   {title: 'Second post', content: 'This is the second content'},
  //   {title: 'Third post', content: 'This is the third content'},
  // ];

  // get data by user input
  posts: Post[] = [];
  private postsSub: Subscription;

  // postsService: PostsService;
  // constructor(postsService: PostsService) {
  //   this.postsService = postsService;
  // }

  constructor(public postsService: PostsService) {}

  // update posts when receive new posts
  ngOnInit() {
    this.postsService.getPosts();
    this.postsSub = this.postsService.getPostUpdateListener()
      .subscribe((posts: Post[]) => {
        this.posts = posts;
    });
  }

  // remvoe the subscription and revent memory leaks
  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }

  onDelete(postId: string) {
    this.postsService.deletePost(postId);
  }
}

