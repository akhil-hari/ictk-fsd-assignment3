import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class BookService {


  constructor(public http:HttpClient) { }
  
  getBooks(){
    return this.http.get('http://ictk-fsd-assignment3.herokuapp.com/books');
  }
  getBook(id:String){

    return this.http.get('/api/books/single/'+id);
  }
}
