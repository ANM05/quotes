export class Quotes {
  public upvotes:number;
  public downvotes:number;
  constructor(public id:number, public quote:string, public author:string, public contName:string, public datePosted:Date){
    this.upvotes = 0;
    this.downvotes = 0;
  }
}
