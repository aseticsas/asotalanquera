import { Component, OnInit } from '@angular/core';
import { ContenidoService } from '../../services/contenido.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent implements OnInit {

  constructor(private contenido: ContenidoService,
    private route: ActivatedRoute ) { }
  public data_nosotros = [];
  public data_nosotro = [];
  ngOnInit() {
    this.contenido.getNosotros().subscribe((contentSnapshot) => {
      this.data_nosotros = [];
      contentSnapshot.forEach((dataNosotros: any) => {
        this.data_nosotros.push({
          id: dataNosotros.payload.doc.id,
          data: dataNosotros.payload.doc.data()
        }); // cierra el push
       });
      }); // cierra subscribe
      this.route.params
      .subscribe(parametros => {
         this.contenido.getNosotro(parametros['id']).subscribe( dataNosotro => {
          this.data_nosotro.push({
            id: dataNosotro.payload.id,
            data: dataNosotro.payload.data()
            }); // cierra el push
            console.log(this.data_nosotro);
         }); // cierra subscribe
        });
  }

}
