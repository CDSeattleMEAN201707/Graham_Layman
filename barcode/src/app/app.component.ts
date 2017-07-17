import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  colors = ["green","red","purple","pink"];
  display = [];
  constructor(){
    this.randomizeColors();
  }
  randomizeColors(){
    for(let i:number = 0; i < 20; i++){
      let y:number = Math.floor(Math.random()*4);
      this.display.push(this.colors[y]);

    }
  }
}
