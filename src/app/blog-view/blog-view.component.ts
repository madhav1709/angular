import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../blog.service';
import { BlogHttpService } from '../blog-http.service';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
})
export class BlogViewComponent implements OnInit {
  public currentBlog;
  constructor(private _route: ActivatedRoute, private router: Router,
              public blogServices: BlogService,
              public blogHttpService: BlogHttpService) {
    console.log('constructor is called');

  }

  ngOnInit(): void {
    let myBlogId = this._route.snapshot.paramMap.get('blogId');
    //this.currentBlog = this.blogHttpService.getSingleBlogInformation(myBlogId);
    console.log(this.currentBlog);
    this.blogHttpService.getSingleBlogInformation(myBlogId).subscribe(
      data => {
        console.log(data["data"])
        this.currentBlog = data["data"];
      },
      error => {
        console.log(error.errorMessage);
      }
    );

  }
}