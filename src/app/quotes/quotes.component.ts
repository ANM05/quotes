import { Component, OnInit } from '@angular/core';
import {Quotes} from '../quotes'

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  misemo = [
    new Quotes(1,'Dont blow off anothers candle for it wont make yours shine brighter.','Jaachynma  Agu','Jay', new Date(2019,3,22)),
    new Quotes(2,'In a world where everyone desperately tries to be different; be unapologetically yourself.','Kayambila Mpulamasaka','Vee', new Date(2019,3,20)),
    new Quotes(3,'He was a nobody. Yet and still, he held the gun and therfore all of the power.','Brima Lamin & Chantale Wesley-Lamin','Ras', new Date(2019,3,21)),
    new Quotes(4,'Nobody can do you better than you do you.','Kayambila Mpulamasaka','Sharon', new Date(2019,3,22)),
    new Quotes(5,'Among the Igbo the art of conversation is regarded very highly, and proverbs are the palm-oil with which words are eaten.',' Chinua Achebe','Shadra', new Date(2019,3,23)),
    new Quotes(6,'Our people think: I , Wangari, a Kenyan by birth - how can I be a vagrant in my own country as if I were a foreigner.',"Ngũgĩ wa Thiong'o",'Dave', new Date(2019,3,22)),
  ]
  upvotes(i){
    this.misemo[i].upvotes+=1;
  }
  downvotes(i){
    this.misemo[i].downvotes+=1;
  }
  addNewQuote(quotes){
    let quotesLength = this.misemo.length;
        quotes.id=quotesLength+1;
        quotes.datePosted = new Date(quotes.datePosted)
        this.misemo.push(quotes)

  }
  quoteDelete(isDelete,index){
    if(isDelete){
      let toDelete=confirm("Are you sure you want to delete this Quote")
      if(isDelete){
        this.misemo.splice(index,1);
      }
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
