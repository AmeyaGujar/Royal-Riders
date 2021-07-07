import { Component } from '@angular/core';

@Component({
    template: `<h1>{{notfounditle}}</h1>`
})
export class NotFoundComponent {
    notfounditle: string = "OOPs page not found ......!!!!!";
}