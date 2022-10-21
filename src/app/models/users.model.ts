import { NumberSymbol } from "@angular/common";

export class userData{
    constructor(public username:string,public PhoneNumber:string,public movieBooked:string,public DateBooked:string,public showTimings:string,public ticketsBooked:NumberSymbol){}
}

export interface movieuser{
    username:string,
    PhoneNumber:string,
    movieBooked:string,
    DateBooked:string,
    showTimings:string,
    ticketsBooked:number;
}