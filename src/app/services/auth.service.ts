import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  inscription(user: User): Observable<User> {
    let users = JSON.parse(localStorage.getItem('users') || '[]');
    // Ajouter le nouvel utilisateur à la liste
    users.push(user);
    // Stocker la liste mise à jour dans le local storage
    localStorage.setItem('users', JSON.stringify(users));

    return of(user);
  }
  connexion(email: string, motDePasse: string): Observable<User | null> {
    let users: User[] = JSON.parse(localStorage.getItem('users') || '[]');
    let user = users.find(u => u.email === email && u.mot_de_passe === motDePasse);
    if (user) {
      // Stocker l'utilisateur connecté dans le local storage
      localStorage.setItem('currentUser', JSON.stringify(user));
    }
    return of(user ? user : null);
  }
}
