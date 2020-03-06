import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../blog.service';
import { BlogHttpService } from '../blog-http.service';
import { ToastrService } from 'ngx-toastr';
import {Location} from '@angular/common';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css'],
  providers: [Location]
})
export class BlogViewComponent implements OnInit {
  public currentBlog;
  constructor(private _route: ActivatedRoute, private router: Router,
              public blogServices: BlogService,
              public blogHttpService: BlogHttpService,
              private toastr: ToastrService,
              private location:Location) {
    console.log('constructor is called');

  }

  ngOnInit(): void {
    let myBlogId = this._route.snapshot.paramMap.get('blogId');
    //this.currentBlog = this.blogHttpService.getSingleBlogInformation(myBlogId);
    //console.log(this.currentBlog);
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
  public deleteThisBlog(): any {
    this.blogHttpService.deleteBlog(this.currentBlog.blogId).subscribe(
      data =>{
        console.log(data);
        this.toastr.success('Blog Deleted Successfully', 'Success!');
        setTimeout(() =>{
          this.router.navigate(['/home']);
        },2000)
      },
      error => {
        this.toastr.error('Some Error Ocurred','Error!!');
      }
    );
  }
  public goBackToPreviousPage(): any{
    this.location.back();
  }


}