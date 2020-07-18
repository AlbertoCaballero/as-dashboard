import { Injectable, Query } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  db: any;
  app: any;
  collection: any; 

  constructor(private firestore: AngularFirestore) {}

  getAllQuestionsObjects() {
    return this.firestore.collectionGroup('questions').snapshotChanges();
  }

  readDocument(collection: string, id: string) {
    return this.firestore.collection(collection).doc(id).snapshotChanges();
  }
}
