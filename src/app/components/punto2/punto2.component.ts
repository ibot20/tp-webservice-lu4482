import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/models/pelicula';
import { PeliculaService } from 'src/app/services/pelicula.service';

@Component({
  selector: 'app-punto2',
  templateUrl: './punto2.component.html',
  styleUrls: ['./punto2.component.css']
})
export class Punto2Component implements OnInit {
  pelicula:Pelicula;
  peliculas:Array<Pelicula>;

  constructor(private peliculaService:PeliculaService) { 
    this.peliculas = new Array<Pelicula>();
    this.cargarPeliculas();
  }

  cargarPeliculas(){
    this.cargarPelicula("joker");
    this.cargarPelicula("harry potter");
    this.cargarPelicula("suicide squad");
    this.cargarPelicula("bohemian rhapsody");
    this.cargarPelicula("deadpool");
    this.cargarPelicula("paranormal activity");
  }

  cargarPelicula(title:string){
    this.peliculaService.getPelicula(title).subscribe(
      (result) => {
      this.pelicula = new Pelicula();
      Object.assign(this.pelicula, result);
      this.peliculas.push(this.pelicula)
      }
    )
  }

  ngOnInit(): void {
  }

}
