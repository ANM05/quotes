import { Component, OnInit } from '@angular/core';
import {Quotes} from '../quotes'

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  misemo = [
    new Quotes(1,'Dont blow off anothers candle for it wont make yours shine brighter.','Jaachynma  Agu', new Date(2019,3,22)),
    new Quotes(2,'In a world where everyone desperately tries to be different; be unapologetically yourself.','Kayambila Mpulamasaka', new Date(2019,3,20)),
    new Quotes(3,'He was a nobody. Yet and still, he held the gun and therfore all of the power.','Brima Lamin & Chantale Wesley-Lamin', new Date(2019,3,21)),
    new Quotes(4,'Nobody can do you better than you do you.','Kayambila Mpulamasaka', new Date(2019,3,22)),
    new Quotes(5,'Among the Igbo the art of conversation is regarded very highly, and proverbs are the palm-oil with which words are eaten.',' Chinua Achebe', new Date(2019,3,23)),
    new Quotes(6,'Our people think: I , Wangari, a Kenyan by birth - how can I be a vagrant in my own country as if I were a foreigner.',"Ngũgĩ wa Thiong'o", new Date(2019,3,22)),
  ]
  upvotes(i){
    this.misemo[i].upvotes+=1;
  }
  downvotes(i){
    this.misemo[i].downvotes+=1;
  }
  constructor() { }

  ngOnInit() {
  }

}
