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
  private authToken = 'YWRkYWMwM2ZiOWQ5MTg1N2YzMDNkZDZjYzgyOGU1YjliZTg1MTkzMDMwZWUyOWMxZWVlZjI0NmFkMGFlMmFmZWM2ZGU4OWQxZWUyNTc2YWU3YjNlMjMyMDZjYzljOTkxYjI1YzQwZWI0NGNmMTFlM2E5YTY1YzU5YWMxZjU3MGIxMA==';

  constructor(private _http: HttpClient) {
    console.log('blog-http service called');
    
  }
  private handleError(err:HttpErrorResponse){
    console.log("Handle error Http calls");
    console.log(err.message);
    return Observable.throw(err.message);

  }
  public getAllBlogs(): any {

    let myResponse = this._http.get(this.baseUrl + '/all?authToken=' + this.authToken);
    console.log(myResponse);
    return myResponse;


  }

  public getSingleBlogInformation(currentBlogId): any {
    let myResponse = this._http.get(this.baseUrl + '/view/' + currentBlogId + '?authToken=' + this.authToken);
    console.log(myResponse);
    return myResponse;

  }
}
