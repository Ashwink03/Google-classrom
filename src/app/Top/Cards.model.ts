export class Card {
    imgpath:string;
    title:string;
    text: string;
    footer: string;

    constructor({imgpath, title, text, footer} : 
        {imgpath:string, title:string, text:string, footer:string}) {
            this.imgpath = imgpath;
            this.title = title;
            this.text = text;
            this.footer = footer;
    }
}