import { Component, OnInit,ViewEncapsulation } from '@angular/core';
// import { BooksComponent } from '../books/books.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  constructor() { }
  active=true;

  ngOnInit(): void {
  }

}
