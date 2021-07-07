import { Component } from '@angular/core';
import { PastInfo } from './pastinfo';

@Component({
    templateUrl:'./pastevent.component.html',
    styleUrls:['./pastevent.component.css']
})
export class PastEventComponent {
    parr:PastInfo[]=[
        new PastInfo('Rooster Ride','Lonavala','Pune',new Date(2021,6,22,11,0,0)),
        new PastInfo('Buffalo Ride','Lavasa','Pune',new Date(2021,6,25,11,0,0)),
        new PastInfo('Shotgun Ride','Sindhudurg','Mumbai',new Date(2021,6,27,8,0,0)),
    ]
}