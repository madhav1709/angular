import { Component, OnInit } from '@angular/core';
import { BlogHttpService } from '../blog-http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css']
})
export class BlogEditComponent implements OnInit {
  public currentBlog;
  public possibleCategories = ['Comedy', 'Drama', 'Action', 'Technology'];
  constructor(private blogHttpsService: BlogHttpService,
              private _route: ActivatedRoute,
              private router: Router,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    let myBlogId = this._route.snapshot.paramMap.get('blogId');
    this.blogHttpsService.getSingleBlogInformation(myBlogId).subscribe(
      data => {
        this.currentBlog = data["data"]
      },
      error =>{
        console.log(error.errorMessage);
      }
    );
  }

  public editThisBlog(): any{
    this.blogHttpsService.editBlog(this.currentBlog.blogId, this.currentBlog).subscribe(
      data => {
        this.toastr.success('Blog Edited Successfully','Success!');
        setTimeout(() =>{
          this.router.navigate(['/blog',this.currentBlog.blogId]);
        },2000)
      },
      error =>{
        this.toastr.error('Some error Ocurred','Error');
      }
    );
  }

}
