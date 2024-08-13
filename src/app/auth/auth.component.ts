import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { AuthService } from '../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit{

  ngOnInit(): void {
    // this.inscriptionUser();
  }
  nom_complet: string = '';
  email: string = '';
  emailConnexion:string='';
  motDePasseConnexion:string='';
  mot_de_passe: string = '';
  telephone: string = '';
  role: string = '';
  emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,}$/;
  // emailRegex = /^[A-Za-z]+[A-Za-z0-9._%+-]+@[A-Za-z][A-Za-z0-9.-]+.[A-Za-z]{3,}$/;
  emailRegex =/^[A-Za-z]+[A-Za-z0-9._%+-]+@[A-Za-z][A-Za-z0-9.-]+.[A-Za-z]{2,}$/;
  nameRegex=/^[a-zA-Z][a-zA-Z -]{1,100}$/;
  formChoice = true;
  // Variables pour faire la vérifications
  verifNom: String = '';
  verifEmail: String = '';
  verifPassword: String = '';
  verifTelephone: String = '';
  // Variables si les champs sont exacts
  exactNom: boolean = false;
  exactEmail: boolean = false;
  exactPassword: boolean = false;
  exactTelephone: boolean = false;

  constructor(private router: Router, private authService: AuthService){}

  viderChamps() {
    this.nom_complet = '';
    this.email = '';
    this.role='';
    this.mot_de_passe = '';
    this.telephone = '';
    this.verifNom = '';
    this.verifEmail = '';
    this.verifPassword = '';
    this.verifTelephone = '';
    // Variables si les champs sont exacts
    this.exactNom = false;
    this.exactEmail = false;
    this.exactPassword = false;
    this.exactTelephone = false;
  }

    // Verification du nom
    verifNomFonction() {
      this.exactNom = false;
      if (this.nom_complet == '') {
        this.verifNom = 'Veuillez renseigner votre nom complet';
      } else if (this.nom_complet.length < 5) {
        this.verifNom = 'Le nom est trop court';
      }
      else if (!this.nom_complet.match(this.nameRegex)) {
        this.verifEmail = 'Le nom ne doit pas de caractères speciaux ni de chiffres';
      } else {
        this.verifNom = '';
        this.exactNom = true;
      }
       // Si le champ est vide, efface le message d'erreur
       if (this.nom_complet == '') {
        this.verifNom = '';
      }
    }
      // Verification de  l'email
  verifEmailFonction() {
    this.exactEmail = false;

    if (this.email == '') {
      this.verifEmail = 'Veuillez renseigner votre email';
    } else if (!this.email.match(this.emailPattern)) {
      this.verifEmail = 'Veuillez donner un email valide';
    }  else if (!this.email.match(this.emailRegex)) {
      this.verifEmail = 'Veuillez donner un email valide';
    } else if (!this.email.includes('.')) {
      this.verifEmail = 'Veuillez donner un email valide';
    } else {
      this.verifEmail = '';
      this.exactEmail = true;
    }
     // Si le champ est vide, efface le message d'erreur
     if (this.email == '') {
      this.verifEmail = '';
    }
  }
    // Verification du mot de passe
    verifPasswordFonction(){
      this.exactPassword = false;
      if(this.mot_de_passe == ""){
        this.verifPassword = "Veuillez renseigner votre mot de passe";
      }
      else if (/\s/.test(this.mot_de_passe)){
        this.verifPassword = "Mot de passe ne doit pas contenir d'espace";
      }
      else if (this.mot_de_passe.length < 10 ){
        this.verifPassword = "Mot de passe doit être supérieur ou égal à 10 caratères";
      }
      else{
        this.verifPassword = "";
        this.exactPassword = true;
      }
       // Si le champ est vide, efface le message d'erreur
    if (this.mot_de_passe == '') {
      this.verifPassword = '';
    }
    }
    // Verification du numéro de téléphone
    // verifTelephoneFonction(){
    //   this.exactTelephone = false;
    //   if(this.telephone == ""){
    //     this.verifTelephone= "Veuillez renseigner votre numéro de téléphone";
    //   }
    //   else if (/\s/.test(this.telephone)){
    //     this.verifTelephone = "Le numéro de téléphone ne doit pas contenir d'espace";
    //   }
    //   else if (!this.telephone.match(/^(\+221|221)?[76|77|78|70|33]\d{8}$/)){
    //     this.verifTelephone = "Le format du numéro de téléphone est invalide!";
    //   }
    //   else{
    //     this.verifTelephone = "";
    //     this.exactTelephone = true;
    //   }
    //    // Si le champ est vide, efface le message d'erreur
    // if (this.telephone == '') {
    //   this.verifTelephone = '';
    // }
    // }
    verifTelephoneFonction() {
      this.exactTelephone = false;
      if (this.telephone === '') {
        this.verifTelephone = 'Veuillez renseigner votre numéro de téléphone';
      } else if (/\s/.test(this.telephone)) {
        this.verifTelephone = 'Le numéro de téléphone ne doit pas contenir d\'espace';
      } else if (!String(this.telephone).match(/^(\+221|221)?[76|77|78|70|33]\d{7}$/)) {
        this.verifTelephone = 'Le format du numéro de téléphone est invalide!';
      } else {
        this.verifTelephone = '';
        this.exactTelephone = true;
      }
      if (this.telephone === '') {
        this.verifTelephone = '';
      }
    }
    // Fonction pour afficher un sweetalert
  alertMessage(icon: any, title: any, text: any) {
    Swal.fire({
      icon: icon,
      title: title,
      text: text,
      showConfirmButton: false,
      timer: 2000,
    });
  }

    // Méthode pour l'inscription

    // inscriptionUser() {
    //   // Appel des méthodes de vérification
    //   this.verifNomFonction();
    //   this.verifEmailFonction();
    //   this.verifPasswordFonction();
    //   this.verifTelephoneFonction();   
    //   // console.log('') 
    //   if (this.exactNom && this.exactEmail && this.exactPassword && this.exactTelephone) {
    //     console.log("L'utilisateur ajouté est:reubeudio");
    //     let newUser: User = {
    //       nom_complet: this.nom_complet,
    //       telephone: this.telephone,
    //       email: this.email,
    //       mot_de_passe: this.mot_de_passe,
    //       role: this.role,
    //     };
  
    //     console.log("L'utilisateur ajouté est",newUser);
  
    //     // Appel du service pour ajouter le nouvel utilisateur
    //     this.authService.inscription(newUser).subscribe(
    //       (addedUser) => {
    //         // L'utilisateur a été ajouté avec succès
    //         this.alertMessage('success', 'Super', 'Inscription réussie avec succès!');
    //         this.viderChamps();
    //         console.log('Utilisateur ajouté:', addedUser);
    //       },
    //       (error) => {
    //         // Gestion des erreurs lors de l'ajout de l'utilisateur
    //         console.error("Erreur lors de l'ajout de l'utilisateur:", error);
    //         this.alertMessage('error', 'Erreur', "Erreur lors de l'inscription. Veuillez réessayer.");
    //       }
    //     );
    //   }
    // }
    inscriptionUser() {
      this.verifNomFonction();
      this.verifEmailFonction();
      this.verifPasswordFonction();
      // this.verifTelephoneFonction();
      
      if (this.exactNom && this.exactEmail && this.exactPassword) {
        let newUser = {
          nom_complet: this.nom_complet,
          telephone: this.telephone,
          email: this.email,
          mot_de_passe: this.mot_de_passe,
          role: this.role
        };
    
        this.authService.inscription(newUser).subscribe(
          (addedUser) => {
            this.alertMessage('success', 'Super', 'Inscription réussie avec succès!');
            this.viderChamps();
            console.log('Utilisateur ajouté:', addedUser);
          },
          (error) => {
            console.error("Erreur lors de l'ajout de l'utilisateur:", error);
            this.alertMessage('error', 'Erreur', "Erreur lors de l'inscription. Veuillez réessayer.");
          }
        );
      }
    }
    // Méthode pour la connexion
    connexionUser() {
      this.authService.connexion(this.emailConnexion, this.motDePasseConnexion).subscribe(user => {
        if (user) {
          console.log('le user est:', user);
          console.warn('le role du user est:', user.role);
             // Normaliser le rôle en minuscules
        const role = user.role.toLowerCase();
          Swal.fire({
            icon: 'success',
            title: 'Connexion réussie',
            text: `Bienvenue, ${user.nom_complet}`,
            showConfirmButton: false,
            timer: 2000
          }).then(() => {
            // Redirection selon le rôle de l'utilisateur après la fermeture de SweetAlert
            if (role == 'vendeur') {
              this.router.navigate(['/vendeur']);
            } else if (role == 'client') {
              this.router.navigate(['/client']);
            }
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Erreur',
            text: 'Email ou mot de passe incorrect',
            showConfirmButton: false,
            timer: 2000
          });
        }
      });
    }
    logout() {
      localStorage.removeItem('currentUser');
      this.router.navigate(['/auth']); // Redirection vers la page de connexion
    }
    
}
