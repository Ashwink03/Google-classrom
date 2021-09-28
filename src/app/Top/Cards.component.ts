import { Component, Input } from "@angular/core";

@Component({
    selector: "card",
    templateUrl: "Cards.component.html"
})
export class CardComponent {
    @Input()
    imgpath! :string
    @Input() 
    title! :string;
    @Input()
    text! :string;
    @Input()
    footer!: string;
}
