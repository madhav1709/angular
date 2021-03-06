import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BlogHttpService {
  public allBlogs;
  public currentBlog;
  public baseUrl = 'https://blogapp.edwisor.com/api/v1/blogs';
  private authToken = 'Mjk1N2MxOTdhMzliNmMyYzkwZWZjZjAwNDdhMTliZmJmNDhiMjdlODQ5ZDY2ZDc3NjdhYmE4NGJjMzhhYmUyMWY1OWY1NmFhNWM3NWY1NTNlODQyNTViMTIyY2Q0NzIxNTkxMWU4ZTBhMDRkOGM3NmZjMDFkNWQ2MjEyMWExMzRjYQ==';

  constructor(private _http: HttpClient) {
    console.log('blog-http service called');

  }
  private handleError(err: HttpErrorResponse) {
    console.log('Handle error Http calls');
    console.log(err.message);
    return throwError(err.message);

  }
  public getAllBlogs(): any {

    const myResponse = this._http.get(this.baseUrl + '/all?authToken=' + this.authToken);
    console.log(myResponse);
    return myResponse;
  }

  public getSingleBlogInformation(currentBlogId): any {
    const myResponse = this._http.get(this.baseUrl + '/view/' + currentBlogId + '?authToken=' + this.authToken);
    console.log(myResponse);
    return myResponse;

  }
  public createBlog(blogData): any{
    let myResponse = this._http.post(this.baseUrl + '/create' + '?authToken=' + this.authToken, blogData);
    return myResponse;
  }
  public deleteBlog(blogId): any {
    let data={};
    return this._http.post(this.baseUrl +'/'+ blogId + '/delete?authToken=' + this.authToken, data);
  }
  public editBlog(blogId, blogData): any {
    
    return this._http.put(this.baseUrl +'/'+ blogId + '/edit?authToken=' + this.authToken, blogData);
  
  }

}
