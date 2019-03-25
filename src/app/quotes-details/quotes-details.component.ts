import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {Quotes} from '../quotes'

@Component({
  selector: 'app-quotes-details',
  templateUrl: './quotes-details.component.html',
  styleUrls: ['./quotes-details.component.css']
})
export class QuotesDetailsComponent implements OnInit {
  @Input() dispQuote:Quotes;
  @Output() isDelete = new EventEmitter<boolean>();

  deleteQuote(del:boolean){
    this.isDelete.emit(del);
  }
  constructor() { }

  ngOnInit() {
  }

}
