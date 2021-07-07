import { Component } from "@angular/core";
import { MembInfo } from "./membInfo";

@Component({
    templateUrl:'./memb.component.html',
    styleUrls:['./memb.component.css']
})
export class MembComponent{
    marr:MembInfo[]=[
        new MembInfo(1001,'Umesh','Pawar','amey@gmail.com','Pune',9562670009),
        new MembInfo(1002,'Alex','Patil','alexp@gmail.com','Daund',9566574549),
        new MembInfo(1003,'Abhi','Kadam','abhikad@gmail.com','Beed',9562233309),
        new MembInfo(1004,'Sourab','Kadam','sourabh@gmail.com','Mumbai',9762673309),
        new MembInfo(1005,'Kunal','Malangave','kunal@gmail.com','Panvel',9397678809),
    ]
}