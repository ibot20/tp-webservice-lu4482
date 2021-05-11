export class Pais {
    activeCases:number;
    country:string;
    lastUpdate:Date;
    newCases:string;
    newDeath:string;
    totalCases:number;
    totalDeath:number;
    totalRecovered:number;

    constructor(activeCases?:number, country?:string, lastUpdate?:Date, newCases?:string, newDeath?:string,
    totalCases?:number, totalDeath?:number, totalRecovered?:number){
        this.activeCases = activeCases;
        this.country = country;
        this.lastUpdate = lastUpdate;
        this.newCases = newCases;
        this.newDeath = newDeath;
        this.totalCases = totalCases;
        this.totalDeath = totalDeath;
        this.totalRecovered = totalRecovered;
    }

    
}
