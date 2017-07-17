import { Component } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  quote = new Quote;
  quotes = [];
  
  createQuote(){
    this.quotes.push(this.quote);
    this.quote = new Quote;
  }
  upVote(idx){
    this.quotes[idx].votes += 1;
  }
  downVote(idx){
    this.quotes[idx].votes -= 1;
  }
  deleteQuote(idx){
    this.quotes.splice(idx,1);
  }
}
