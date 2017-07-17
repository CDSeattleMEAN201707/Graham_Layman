import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css']
})
export class QuoteListComponent implements OnInit {
  @Input() quotes;
  @Output() emitUp = new EventEmitter();
  @Output() emitDown = new EventEmitter();
  @Output() emitDelete = new EventEmitter();
  constructor() { }
  ngOnInit() {}

  upVote(idx){
    console.log("starting the chain... child .ts")
    this.emitUp.emit(idx);
  }
  downVote(idx){
    this.emitDown.emit(idx);
  }
  deleteQuote(idx){
    this.emitDelete.emit(idx);
  }

}
