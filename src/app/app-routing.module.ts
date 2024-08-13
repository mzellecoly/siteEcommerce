import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AuthComponent } from './auth/auth.component';
import { VendeurComponent } from './vendeur/vendeur.component';
import { ClientComponent } from './client/client.component';
import { ProduitVendeurComponent } from './produit-vendeur/produit-vendeur.component';
import { CategorieComponent } from './categorie/categorie.component';

const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: AccueilComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'vendeur', component: VendeurComponent },
  { path: 'produit', component: ProduitVendeurComponent },
  { path: 'client', component: ClientComponent },
  { path: 'categorie', component: CategorieComponent },
  {path: '', redirectTo:'/home', pathMatch:'full'},
  { path: '**', redirectTo: '/home' }
];

// @NgModule({
//   declarations: [],
//   imports: [
//     CommonModule
//   ]
// })
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
