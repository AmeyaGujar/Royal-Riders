import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
    templateUrl:'./regi.component.html',
    styleUrls:['./regi.component.css']
})

export class RegiComponent{
    onFormSubmit(userForm:NgForm):void{
        console.log(userForm.value);
        console.log("First Name="+userForm.controls['fname'].value);
        console.log("Last Name="+userForm.controls['lname'].value);
        console.log("Email="+userForm.controls['email'].value);
        console.log("City="+userForm.controls['city'].value);
        console.log("Contact no.="+userForm.controls['cno'].value);
        console.log("Address="+userForm.controls['add'].value);
    }
    onReset(userForm:NgForm):void{
        userForm.reset();
    }

}