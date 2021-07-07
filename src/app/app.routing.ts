import { Router, RouterModule } from '@angular/router';
import { EventComponent } from './Royal Riders/event.component';
import { HomeComponent } from './Royal Riders/home.component';
import { MembComponent } from './Royal Riders/memb.component';
import { NotFoundComponent } from './Royal Riders/notfound.component';
import { PastEventComponent } from './Royal Riders/pastevent.component';
import { RegiComponent } from './Royal Riders/regi.component';
import { UpComingEventComponent } from './Royal Riders/upcomingevent.component';



export const routing = RouterModule.forRoot([
    { path: '', component:HomeComponent},
    { path: 'member', component:MembComponent},
    { path: 'register', component:RegiComponent},
    {
        path: 'events', component:EventComponent,
        children :[
            {path: 'past', component:PastEventComponent},
            {path: 'upcoming', component:UpComingEventComponent}
        ]
   },
    { path: '**', component:NotFoundComponent},
    
]);



