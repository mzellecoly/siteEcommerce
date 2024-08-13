import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-vendeur',
  templateUrl: './vendeur.component.html',
  styleUrls: ['./vendeur.component.css']
})
export class VendeurComponent implements OnInit{
  constructor(private router: Router, private authService: AuthService){}
  ngOnInit(): void {
    const script = document.createElement('script');
    script.src = 'src/assets/js/sidebar.js';
    document.body.appendChild(script);
  }
  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/auth']); // Redirection vers la page de connexion
  }
}
