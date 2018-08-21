import { Component, OnInit } from '@angular/core';
import { ContenidoService } from '../../services/contenido.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private contenido: ContenidoService) { }
  public data_operaciones = [];
  public data_servicios = [];
  public data_aliados = [];
  ngOnInit() {
    this.contenido.getContenidos().subscribe((contentSnapshot) => {
      this.data_operaciones = [];
      contentSnapshot.forEach((dataOperaciones: any) => {
        this.data_operaciones.push({
          id: dataOperaciones.payload.doc.id,
          data: dataOperaciones.payload.doc.data()
        }); // cierra el push
       });
      }); // cierra subscribe
      this.contenido.getServicios().subscribe((contentSnapshot) => {
        this.data_servicios = [];
        contentSnapshot.forEach((dataServicios: any) => {
          this.data_servicios.push({
            id: dataServicios.payload.doc.id,
            data: dataServicios.payload.doc.data()
          }); // cierra el push
         });
        }); // cierra subscribe
        this.contenido.getAliados().subscribe((contentSnapshot) => {
          this.data_aliados = [];
          contentSnapshot.forEach((dataAliados: any) => {
            this.data_aliados.push({
              id: dataAliados.payload.doc.id,
              data: dataAliados.payload.doc.data()
            }); // cierra el push
           });
          }); // cierra subscribe

    }// cierra ngOnInit
  }// cierra la clase

/*
export class HomeComponent implements OnInit {
  constructor(private usuario: UsuariosService) { }
  public usuarios = [];
  ngOnInit() {
    this.usuario.getUsers().subscribe((catsSnapshot) => {
      this.usuarios = [];
      catsSnapshot.forEach((catData: any) => {
        this.usuarios.push({
          id: catData.payload.doc.id,
          data: catData.payload.doc.data()
        });
        console.log(this.usuarios)
      })
    });
  }

}

  */
