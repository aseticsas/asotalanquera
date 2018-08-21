import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument  } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ContenidoService {
  constructor(private firestore: AngularFirestore) { }
  public getContenidos() {
    return this.firestore.collection('operaciones').snapshotChanges();
  }
  public getServicios() {
    return this.firestore.collection('servicios').snapshotChanges();
  }
  public getAliados() {
    return this.firestore.collection('aliados').snapshotChanges();
  }
  public getNosotros() {
    return this.firestore.collection('nosotros').snapshotChanges();
  }
  public getNosotro(documentId: string) {
    return this.firestore.collection('nosotros').doc(documentId).snapshotChanges();
  }
  public getLista(collectionId: string) {
    return this.firestore.collection(collectionId).snapshotChanges();
  }
}
