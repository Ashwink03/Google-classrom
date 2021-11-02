import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Card } from "./Cards.model";
import { AngularFireDatabase } from "@angular/fire/compat/database"

@Injectable({
    providedIn: 'root'
})
export class DatabaseService{
    items: Observable<Card []>;
    constructor(private db:AngularFireDatabase){
        this.items = this.db.list<Card>('CardsArray').valueChanges();
    }
    public showData(){
        this.items.subscribe((data:Card[]) => {
            for( let item of data){
                console.log(item)
            }
        })
    }
}