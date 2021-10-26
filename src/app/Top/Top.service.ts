import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Card } from "./Cards.model";

@Injectable({providedIn: 'root'})
export class CardService {
    url: string = "https://classroom-65660-default-rtdb.firebaseio.com/CardsArray.json";
    
    constructor(private http: HttpClient) {

    }

    getCardInfo() {
        console.log(this.url);
        return this.http.get<Card>(this.url);
    }
    editCardInfo(card: Card){
        return this.http.post(this.url, card)
      }
}