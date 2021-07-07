export class UpInfo{
    eveName:string;
    locat:string;
    city:string;
    date:Date;
    
    constructor(enm:string,lnm:string,ct:string,dt:Date,){
        this.eveName=enm;
        this.locat=lnm;
        this.city=ct;
        this.date=dt;
    }
}