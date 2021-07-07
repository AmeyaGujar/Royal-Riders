export class MembInfo{
    membId:number;
    membName:string;
    membLast:string;
    email:string;
    city:string;
    contactNo:number;
    
    constructor(mid:number,mnm:string,lnm:string,em:string,ct:string,cnt:number){
        this.membId=mid;
        this.membName=mnm;
        this.membLast=lnm;
        this.email=em;
        this.city=ct;
        this.contactNo=cnt;
    }
}