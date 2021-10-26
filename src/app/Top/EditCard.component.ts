import { Component} from "@angular/core";
import { Card } from "./Cards.model";
import { CardService } from "./Top.service";

@Component({
    selector: "editcard",
    templateUrl: "EditCard.component.html"
})

export class EditCardComponent{
    constructor(private cardService:CardService){

    }
    onEditCard(data: Card){
        console.log(data);
        this.cardService.editCardInfo(data).subscribe(data => {
            console.log("data posted successfully")
        })
    }
}