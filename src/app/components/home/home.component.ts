import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { HeaderComponent } from "../header/header.component";
import { HeroComponent } from "../hero/hero.component";
import { AboutComponent } from "../about/about.component";
import { ContactComponent } from "../contact/contact.component";
import { ResumeComponent } from "../resume/resume.component";
import { ProtfolioComponent } from "../protfolio/protfolio.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, HeaderComponent, HeroComponent, AboutComponent, ContactComponent, ResumeComponent, ProtfolioComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
