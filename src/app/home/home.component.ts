import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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
  constructor() {}

  ngOnInit(): void {}
}
