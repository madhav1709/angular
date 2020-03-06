import { Component, OnInit } from '@angular/core';
import { BlogHttpService } from '../blog-http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {

  constructor(private blogHttpsService: BlogHttpService,
    private _route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService) { }

  public blogTitle: string;
  public blogBodyHtml: string;
  public blogDescription: string;
  public blogCategory: string;
  public possibleCategories = ['Comedy', 'Drama', 'Action', 'Technology']

  ngOnInit(): void {
  }
  public createBlog(): any {
    let blogData = {
      title: this.blogTitle,
      description: this.blogDescription,
      blogBody: this.blogBodyHtml,
      category: this.blogCategory

    };
    console.log(blogData);
    this.blogHttpsService.createBlog(blogData).subscribe(
      data => {
        console.log('Blog Created')
        //alert('Blog Posted Successfully')
        this.toastr.success('Success!', 'Blog Created Successfully');
        setTimeout(() => {
          this.router.navigate(['/blog', data.data.blogId]);
        }, 3000)
      },
      error => {
        console.log(error.errorMessage);
        this.toastr.error('Error!!', 'error');
      }
    );
  }


}
