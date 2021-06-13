import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service'

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor(public bs:BookService) { }
  httpdata:any;

  ngOnInit(): void {
    this.bs.getBooks().subscribe((books)=>{
      this.httpdata=books;
      console.log(this.httpdata);
    })
  }

}
