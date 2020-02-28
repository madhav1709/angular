import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
})
export class BlogViewComponent implements OnInit {
  public currentBlog;
  public allBlogs = [
    {
      blogId: '1',
      lastModified: '2018-10-20T12:20:47.854Z',
      created: '2018-10-20T12:20:47.854Z',
      tags: [],
      author: 'Admin',
      category: 'comedy',
      isPublished: true,
      views: 0,
      bodyHTML: 'this is blog body',
      description: 'this is blog 1 description',
      title: 'This is blog 1'
    },
    {
      blogId: '2',
      lastModified: '2019-10-20T12:20:47.854Z',
      created: '2019-10-20T12:20:47.854Z',
      tags: [],
      author: 'Suresh',
      category: 'Thriller',
      isPublished: true,
      views: 0,
      bodyHTML: 'this is blog body',
      description: 'this is blog 2 description',
      title: 'This is blog 2'
    },
    {
      blogId: '3',
      lastModified: '2019-12-20T12:20:47.854Z',
      created: '2019-12-20T12:20:47.854Z',
      tags: [],
      author: 'Madhav',
      category: 'Drama',
      isPublished: true,
      views: 0,
      bodyHTML: 'this is blog body',
      description: 'this is blog 3 description',
      title: 'This is blog 3'
    }
  ];
  constructor(private _route: ActivatedRoute, private router: Router) {
    console.log('constructor is called');

  }

  ngOnInit(): void {
    let myBlogId = this._route.snapshot.paramMap.get('blogId');
    this.getSingleBlogInformation(myBlogId);

  }
  public getSingleBlogInformation(currentBlogId): any {
    for (let blog of this.allBlogs) {
      if (blog.blogId == currentBlogId) {
        this.currentBlog = blog;
      }
    }
  }

}
