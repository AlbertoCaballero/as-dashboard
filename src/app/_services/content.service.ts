import { Injectable, Query } from '@angular/core';
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

  updateDocument(collection: string, id: string, document: any) {
    this.firestore.doc(collection+'/'+id).update(document);
  }

  deleteDocument(collection: string, id: string, document: any) {
    this.firestore.doc(collection+'/'+id).delete();
  }
}
