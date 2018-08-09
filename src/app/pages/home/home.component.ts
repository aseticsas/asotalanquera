import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  tarjetas = [
    { 
      id: "card1",  
      titulo: "Organizacional",
      imagen: "organizacion.png",
      descripcion: "<ul><li>Objetivos</li></ul>"
    },
    { 
      id: "card2",  
      titulo: "Lineas Productivas",
      imagen: "organizacion.png",
      descripcion: "<ul><li>Sacha Inchi</li></ul>"
    },
    {
      id: "card3",  
      titulo: "Agroindustria",
      imagen: "logo.JPG",
      descripcion: "Aceite de Sacha Inchi"
    },
    {
      id: "card4",  
      titulo: "Comercialización",
      imagen: "organizacion.png",
      descripcion: "Apoyenos comprando nuestros productos disponibles"
    }
  ]

}
