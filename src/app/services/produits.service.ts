import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Produit } from '../models/produit.model';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ProduitsService {

  constructor() { }
  // addProduct(produit: any): Observable<Produit> {
  //   let produits = JSON.parse(localStorage.getItem('produits') || '[]');
  //   // Ajouter un nouveau produit à la liste
  //   produits.push(produit);
  //   // Stocker la liste mise à jour dans le local storage
  //   localStorage.setItem('produits', JSON.stringify(produit));

  //   return of(produit);
  // }
  addProduct(produit: any): Observable<Produit> {
    let produits = JSON.parse(localStorage.getItem('produits') || '[]');

    // Vérifiez que 'produits' est bien un tableau
    if (!Array.isArray(produits)) {
        produits = [];
    }

    // Ajouter le nouveau produit à la liste
    produits.push(produit);

    // Stocker la liste mise à jour dans le local storage
    localStorage.setItem('produits', JSON.stringify(produits));

    return of(produit);
}
deleteProduct(id: string): Observable<void> {
  // Récupérer la liste des produits depuis le localStorage
  let produits = JSON.parse(localStorage.getItem('produits') || '[]');

  // Vérifiez que 'produits' est bien un tableau
  if (!Array.isArray(produits)) {
    produits = [];
  }

  // Filtrer les produits pour exclure celui avec l'ID donné
  produits = produits.filter((produit: any) => produit.id !== id);

  // Stocker la liste mise à jour dans le localStorage
  localStorage.setItem('produits', JSON.stringify(produits));

  return of(undefined); // Observable vide pour signaler la fin de l'opération
}

  showAlert(title: any, text: any, icon: any) {
    Swal.fire({
      icon: icon,
      title: title,
      text: text,
      showConfirmButton: false,
      timer: 1500,
    });
  }
}
