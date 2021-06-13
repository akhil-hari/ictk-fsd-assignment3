import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

//routing module
import { AppRoutingModule } from './app-routing.module';
//routing module

//components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BooksComponent } from './books/books.component';
import { FooterComponent } from './footer/footer.component';
import { AuthorsComponent } from './authors/authors.component';
import { AddbookComponent } from './addbook/addbook.component';
import { AddauthorComponent } from './addauthor/addauthor.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { BookComponent } from './book/book.component';
//component

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BooksComponent,
    FooterComponent,
    AuthorsComponent,
    AddbookComponent,
    AddauthorComponent,
    SignupComponent,
    LoginComponent,
    BookComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
