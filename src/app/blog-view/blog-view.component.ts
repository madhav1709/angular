import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../blog.service';
@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
})
export class BlogViewComponent implements OnInit {
  public currentBlog;
  
  constructor(private _route: ActivatedRoute, private router: Router,public blogServices:BlogService) {
    console.log('constructor is called');

  }

  ngOnInit(): void {
    let myBlogId = this._route.snapshot.paramMap.get('blogId');
    this.currentBlog =  this.blogServices.getSingleBlogInformation(myBlogId);
    console.log(this.currentBlog);

  }
  

}