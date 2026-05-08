import { Component } from '@angular/core';
import { Router } from '@angular/router';
interface NavItem {
  label: string;
  route: string;
  icon: string;
  badge?: number;
  badgeType?: 'default' | 'warn';
}

interface NavSection {
  title: string;
  items: NavItem[];
}
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  isOpen = true;
  mobileMenuOpen = false;
  userDropdownOpen = false;
  constructor(private router:Router){

  }

  sections: NavSection[] = [
    {
      title: 'Principal',
      items: [
        { label: 'Tableau de bord', route: '/dashboard', icon: 'dashboard' },
      ],
    },
    {
      title: 'Gestion',
      items: [
        { label: 'Trottinettes', route: '/trottinettes', icon: 'scooter',  badge: 42 },
        { label: 'Clients',      route: '/clients',      icon: 'users',    badge: 128 },
        { label: 'Réservations', route: '/reservations', icon: 'calendar', badge: 7, badgeType: 'warn' },

      ],
    },
    
    {
      title: 'Compte',
      items: [
        { label: 'Profil',       route: '/profil',       icon: 'profile' },
        { label: 'Utilisateurs', route: '/utilisateurs', icon: 'team' },
        { label: 'Paramètres',   route: '/parametres',   icon: 'settings' },
      ],

    },
    
  ];

  logout() {
  document.cookie.split(";").forEach(cookie => {
    const name = cookie.split("=")[0].trim();
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  });

  this.router.navigate(['/auth/login']);
}

  toggle() { this.isOpen = !this.isOpen; }
  toggleMobile() { this.mobileMenuOpen = !this.mobileMenuOpen; }
  toggleUserDropdown() { this.userDropdownOpen = !this.userDropdownOpen; }
  closeUserDropdown() { this.userDropdownOpen = false; }
}
