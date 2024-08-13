import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AccueilComponent } from './accueil/accueil.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ContentsComponent } from './contents/contents.component';
import { AuthComponent } from './auth/auth.component';
import { FormsModule } from '@angular/forms';
import { VendeurComponent } from './vendeur/vendeur.component';
import { ClientComponent } from './client/client.component';
import { ProduitVendeurComponent } from './produit-vendeur/produit-vendeur.component';
import { CategorieComponent } from './categorie/categorie.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    FooterComponent,
    HeaderComponent,
    ContentsComponent,
    AuthComponent,
    VendeurComponent,
    ClientComponent,
    ProduitVendeurComponent,
    CategorieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
