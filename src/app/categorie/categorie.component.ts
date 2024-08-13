import { Component, OnInit } from '@angular/core';
import { CategorieService } from '../services/categorie.service';
import { Categorie } from '../models/categorie.model';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {

  nom :string='';
  listeCategories:any[] = [];

  ngOnInit(): void {
    this.listeCategories = this.getCategorie();
  }
  constructor(private categorie :CategorieService){}

  // Méthode pour afficher les catégories
  // getCategorie(): Categorie | null {
  //   let cat = localStorage.getItem('categories');
  //   console.log('la liste des catégorie')
  //   return cat ? JSON.parse(cat) : null;
  // }
  getCategorie(): Categorie[] {
    let cat = localStorage.getItem('categories');
    console.log('La liste des catégories:', cat);
    return cat ? JSON.parse(cat) : [];
  }
  
    // Méthode pour ajouter une catégorie
  ajoutCategorie() {
    if (this.nom == '') {
      this.categorie.showAlert('Attention', 'Renseigner un nom', 'error');
    } else {
      console.log('Avant ajout :', this.nom);
      const newCategorie: Categorie = {
        id: Date.now().toString(),
        nom: this.nom,
      };
      console.log('Après ajout :', this.nom);
      this.categorie.addCategorie(newCategorie).subscribe((reponse) => {
        console.log('Réponse du service :', reponse);
        this.categorie.showAlert(
          'Bravo!',
          'Catégorie ajouté avec succés',
          'success'
        );
        this.viderChamps();
        this.listeCategories=this.getCategorie();
      });
    }
  }
  viderChamps() {
    this.nom='';
  }
  supprimerCategorie(nom: string) {
    this.categorie.deleteCategorie(nom);
    this.listeCategories = this.getCategorie();
    this.categorie.showAlert('Supprimé', `La catégorie "${nom}" a été supprimée.`, 'success');
  }

}
