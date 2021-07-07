import { Component } from '@angular/core';
import { UpInfo } from './upinfo';

@Component({
    templateUrl:'./upcomingevent.component.html',
    styleUrls:['./upcomingevent.component.css']
})
export class UpComingEventComponent {
    parr:UpInfo[]=[
        new UpInfo('Eagle Ride','Lonavala','Mumbai',new Date(2021,7,15,11,0,0)),
        new UpInfo('Trucker Ride','Lavasa','Pune',new Date(2021,7,20,11,0,0)),
        new UpInfo('Smokey Ride','Sindhudurg','Mumbai',new Date(2021,7,27,8,0,0)),
        new UpInfo('Gears Ride','Sindhudurg','Pune',new Date(2021,7,22,8,0,0)),
    ]
}