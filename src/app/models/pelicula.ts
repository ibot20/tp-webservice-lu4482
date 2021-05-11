import { Trailer } from "./trailer";

export class Pelicula {
    id:string;
    title:string;
    year:number;
    length:string;
    rating:number;
    rating_votes:number;
    poster:string;
    plot:string;
    trailer:Array<Trailer>;

    constructor(id?:string, title?:string, year?:number, length?:string, rating?:number, 
    rating_votes?:number, poster?:string, plot?:string, trailer?:Array<Trailer>){
        this.id = id;
        this.title = title;
        this.year = year;
        this.length = length;
        this.rating = rating;
        this.rating_votes = rating_votes;
        this.poster = poster;
        this.plot = plot;
        this.trailer = trailer;
    }
}
