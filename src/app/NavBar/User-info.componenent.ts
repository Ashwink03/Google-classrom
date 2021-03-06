import { HttpClient } from "@angular/common/http";
import { Component, Injectable, OnInit } from "@angular/core";
import { UserInfo } from "./user-info.model";

@Injectable()
@Component({
    selector: "user-info",
    templateUrl: "User-info.component.html"
})
export class UserInfoComponent implements OnInit{
    myInfo: UserInfo | undefined;
    constructor(private http:HttpClient){

    }
    ngOnInit(): void {
        console.log("sending get request to server");
        this.getUserInfo();
        console.log("Showing data");
        this.showUserInfo();
    }
    getUserInfo(){
        return this.http.get<UserInfo>("https://classroom-65660-default-rtdb.firebaseio.com/my-info.json");
    }
    showUserInfo(){
        this.getUserInfo().subscribe((data: UserInfo) => {
            console.log(data);
            this.myInfo=data;
        })
    }
}