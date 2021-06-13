//components
import { BooksComponent } from './books/books.component';
import { AuthorsComponent } from './authors/authors.component';
import { AddbookComponent } from './addbook/addbook.component';
import { AddauthorComponent } from './addauthor/addauthor.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
//components


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'books',component:BooksComponent},
  {path:'authors',component:AuthorsComponent},
  {path:'',component:LoginComponent},
  {path:'addauthor',component:AddauthorComponent},
  {path:'signup',component:SignupComponent},
  {path:'addbook',component:AddbookComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
