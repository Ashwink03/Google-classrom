import { Component, OnInit } from '@angular/core';
import { Card } from './Cards.model';
import { CardService } from './Top.service';

@Component({
  selector: 'top',
  templateUrl: './Top.component.html',
  styleUrls:['./Top.component.css']
})
export class TopComponent implements OnInit{
  MyCards: Card[] = [];
  url: string = "https://classroom-65660-default-rtdb.firebaseio.com/CardsArray.json";
  constructor(private cardService:CardService){

  }
  ngOnInit(): void {
      this.showUserInfo();
  }
  showUserInfo(){
      this.cardService.getCardInfo().subscribe((data: any) => {
          for(var item in data){
          console.log(data[item]);
          this.MyCards.push(data[item]);
          }
      })
  }
}