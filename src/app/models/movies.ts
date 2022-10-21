export interface post{
        name: string,
        avatar: string,
        noOfTickets: number,
        id: number,
        cast:string,
        Description:string
       }

       export class movieadd{
        constructor(public name: string,public avatar: string,public noOfTickets: number,public cast:string,public Description:string){}
    }
