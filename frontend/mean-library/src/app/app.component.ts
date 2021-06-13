import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mean-library';
  isavailable=true;
  eatable=["Burger","Pizza","Natcho","Pan Cakes","French Fries","Tacos","Beacon","Vada","Puri"]
  name="Your Name"
  btnClick(){
    alert("Hello you Clicked Me..!")
  }
  value="";
  keyupdemo(event:any){
    this.value=event.target.value;
    console.log(this.value)

  }
}
