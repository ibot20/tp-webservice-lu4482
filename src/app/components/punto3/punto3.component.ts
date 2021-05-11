import { Component, OnInit } from '@angular/core';
import { ConversorService } from 'src/app/services/conversor.service';

@Component({
  selector: 'app-punto3',
  templateUrl: './punto3.component.html',
  styleUrls: ['./punto3.component.css']
})
export class Punto3Component implements OnInit {
  toType:string="";
  fromType:string="";
  fromValue:number=0;
  resultado:number=0;

  constructor(private conversorService:ConversorService) {
    this.convertir();
   }

  convertir(){
    this.conversorService.postConversor(this.toType, this.fromType, this.fromValue).subscribe(
      (result) => {
        this.resultado = result['result'];
      },
      error => { alert("Error en la petición"); }
    )
  }

  ngOnInit(): void {
  }

}
