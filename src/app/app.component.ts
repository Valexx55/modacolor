import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


    private ruta_foto; //= 'assests/bodydn.jpg',
    private colores; //= ['red', 'black'],
    private color_selec;// = 'black'

  constructor() {
    this.ruta_foto = 'assets/bodydn.jpg';
    this.colores = ['red', 'black'];
    this.color_selec = 'black';
   }

   cambio(color_tocado : string) : void
   {
     console.log ("Toco color "+color_tocado);
     color_tocado === 'red' ? (this.ruta_foto='assets/bodydr.jpg') : ((this.ruta_foto='assets/bodydn.jpg'))
   }

   ngDoCheck ()
   {
     console.log ("NG DOCHECK invocado");
   }
}

