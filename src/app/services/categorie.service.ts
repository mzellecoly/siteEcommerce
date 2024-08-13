import { Injectable } from '@angular/core';
import { Categorie } from '../models/categorie.model';
import { Observable, of } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  constructor() { }
  addCategorie(categorie: Categorie): Observable<Categorie> {
    let categories = JSON.parse(localStorage.getItem('categories') || '[]');
    // Ajouter le nouvel utilisateur à la liste
    categories.push(categorie);
    // Stocker la liste mise à jour dans le local storage
    localStorage.setItem('categories', JSON.stringify(categories));

    return of(categorie);
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
  deleteCategorie(nom: string): void {
    let categories = JSON.parse(localStorage.getItem('categories') || '[]');
    categories = categories.filter((categorie: Categorie) => categorie.nom !== nom);
    localStorage.setItem('categories', JSON.stringify(categories));
  }
  
}
