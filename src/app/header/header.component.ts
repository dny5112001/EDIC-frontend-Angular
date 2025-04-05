import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // For *ngIf, etc., if needed
import { RouterLink } from '@angular/router'; // For navigation links

@Component({
  selector: 'app-header',
  standalone: true, // Mark as standalone
  imports: [CommonModule, RouterLink], // Import necessary modules
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  headerTitle = 'Your App Name'; // Replace with your desired title
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    const hamburger = document.querySelector('.hamburger');
    if (hamburger) {
      hamburger.classList.toggle('active');
    }
  }

  closeMenu() {
    this.isMenuOpen = false;
    const hamburger = document.querySelector('.hamburger');
    if (hamburger) {
      hamburger.classList.remove('active');
    }
  }
}
