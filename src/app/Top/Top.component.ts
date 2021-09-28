import { Component } from '@angular/core';
import { mock_cards } from './mock-cards';
import { Card } from './Cards.model';

@Component({
  selector: 'top',
  templateUrl: './Top.component.html',
  styleUrls:['./Top.component.css']
})
export class TopComponent {

  cards:Card[] = [];

  constructor() {
      for (var cards of mock_cards) {
          this.cards.push(new Card(cards));
      }
  }




}