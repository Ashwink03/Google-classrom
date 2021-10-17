import { Component, OnInit } from '@angular/core';
import { Card } from './Cards.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'top',
  templateUrl: './Top.component.html',
  styleUrls:['./Top.component.css']
})
export class TopComponent implements OnInit{
  MyCards: Card[] = [];
  constructor(private http:HttpClient){

  }
  ngOnInit(): void {
      this.showUserInfo();
  }
  getUserInfo(){
      return this.http.get<Card[]>("https://classroom-65660-default-rtdb.firebaseio.com/CardsArray.json");
  }
  showUserInfo(){
      this.getUserInfo().subscribe((data: Card[]) => {
          for(var item in data){
          console.log(data[item]);
          this.MyCards.push(data[item]);
          }
      })
  }
}