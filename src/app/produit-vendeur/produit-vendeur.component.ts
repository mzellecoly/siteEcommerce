import { Component, OnInit } from '@angular/core';
import { CategorieService } from '../services/categorie.service';
import { Categorie } from '../models/categorie.model';

@Component({
  selector: 'app-produit-vendeur',
  templateUrl: './produit-vendeur.component.html',
  styleUrls: ['./produit-vendeur.component.css']
})
export class ProduitVendeurComponent implements OnInit{
  nom :string='';
  categorie_id :string='';
  listeCategories:any[] = [];

  ngOnInit(): void {
    this.listeCategories = this.getCategorie();
  }
  constructor(private categorie :CategorieService){}

  getCategorie(): Categorie[] {
    let cat = localStorage.getItem('categories');
    console.log('La liste des catégories:', cat);
    return cat ? JSON.parse(cat) : [];
  }
}
