import { Component, OnInit } from '@angular/core';
import { Traductor } from 'src/app/models/traductor';
import { TraduccionService } from 'src/app/services/traduccion.service';

@Component({
  selector: 'app-punto1',
  templateUrl: './punto1.component.html',
  styleUrls: ['./punto1.component.css']
})
export class Punto1Component implements OnInit {
  traductor: Traductor;

  constructor(private traduccionService:TraduccionService) {
    this.traductor = new Traductor("", "", "");
    this.traducir();
  }

  idioma(){
    if(this.traductor.idiomaIn == "itIn"){
      this.traductor.idiomaIn = "it"
    }else if(this.traductor.idiomaIn == "frIn"){
      this.traductor.idiomaIn = "fr"
    }else if(this.traductor.idiomaIn == "enIn"){
      this.traductor.idiomaIn = "en"
    }else{
      this.traductor.idiomaIn = "es"
    }

    if(this.traductor.idiomaOut == "itOut"){
      this.traductor.idiomaOut = "it"
    }else if(this.traductor.idiomaOut == "frOut"){
      this.traductor.idiomaOut = "fr"
    }else if(this.traductor.idiomaOut == "enOut"){
      this.traductor.idiomaOut = "en"
    }else{
      this.traductor.idiomaOut = "es"
    }
  }

  traducir(){
    this.idioma();
    this.traduccionService.getTraduccion(this.traductor.idiomaIn, this.traductor.idiomaOut, this.traductor.traduccionIn).subscribe(
      (result)=>{
        this.traductor.traduccionOut = result.outputs[0].output;
      },
    )
  }

  ngOnInit(): void {
    
  }
}
