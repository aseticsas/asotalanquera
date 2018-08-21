import { Component, OnInit } from '@angular/core';
import { ContenidoService } from '../../services/contenido.service';
import { Content } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-agroindustria',
  templateUrl: './agroindustria.component.html',
  styleUrls: ['./agroindustria.component.css']
})
export class AgroindustriaComponent implements OnInit {

  constructor(private contenido: ContenidoService ) { }
  public data_agroindustria = [];
  ngOnInit() {
    this.contenido.getLista('agroindustria').subscribe((contentSnapshot) => {
      this.data_agroindustria = [];
      contentSnapshot.forEach((dataAgroindustria: any) => {
        this.data_agroindustria.push({
          id: dataAgroindustria.payload.doc.id,
          data: dataAgroindustria.payload.doc.data()
        });
      });
    });
  }

}
