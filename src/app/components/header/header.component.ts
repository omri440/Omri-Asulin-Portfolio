import { Component, Input } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavbarComponent, MatIconModule, MatButtonModule,CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
   @Input() isMenuVisible!: boolean

  toggleMenu() {
    this.isMenuVisible = !this.isMenuVisible;
    console.log(this.isMenuVisible);
  }
}
