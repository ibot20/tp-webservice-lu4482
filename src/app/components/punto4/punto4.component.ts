import { Component, OnInit } from '@angular/core';
import { Pais } from 'src/app/models/pais';
import { EstadisticaService } from 'src/app/services/estadistica.service';

@Component({
  selector: 'app-punto4',
  templateUrl: './punto4.component.html',
  styleUrls: ['./punto4.component.css']
})
export class Punto4Component implements OnInit {
  estadoPais:Pais;
  confirmado:boolean;
  curado:boolean;
  fallecido:boolean;
  pais:string;
  bandera:string;
  band:boolean;

  constructor(private estadisticaService:EstadisticaService) {
    this.band=true;
  }

  consultar(){
    this.estadisticaService.getPais(this.pais).subscribe(
      (result) => {
        this.estadoPais = new Pais();
        this.estadoPais.activeCases = result['Active Cases_text'];
        this.estadoPais.country = result['Country_text'];
        this.estadoPais.lastUpdate = result['Last Update'];
        this.estadoPais.newCases = result['New Cases_text'];
        this.estadoPais.newDeath = result['New Deaths_text'];
        this.estadoPais.totalCases = result['Total Cases_text'];
        this.estadoPais.totalDeath = result['Total Deaths_text'];
        this.estadoPais.totalRecovered = result['Total Recovered_text'];
      }
    )
    this.asignarBandera();
    this.band=false;
  }

  asignarBandera(){
    if(this.pais == "Argentina"){
      this.bandera = "ar"
    }else if(this.pais == "Germany"){
      this.bandera = "de"
    }else if(this.pais == "Italy"){
      this.bandera = "it"
    }else if(this.pais == "USA"){
      this.bandera = "us"
    }else if(this.pais == "Spain"){
      this.bandera = "es"
    }
  }

  ngOnInit(): void {
  }

}
