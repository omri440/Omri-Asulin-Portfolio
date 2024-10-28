import { Component, Renderer2, ElementRef, HostListener } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { HeaderComponent } from "../header/header.component";
import { HeroComponent } from "../hero/hero.component";
import { AboutComponent } from "../about/about.component";
import { ContactComponent } from "../contact/contact.component";
import { ResumeComponent } from "../resume/resume.component";
import { ProtfolioComponent } from "../protfolio/protfolio.component";
import { SkillsComponent } from "../skills/skills.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, HeaderComponent, HeroComponent, AboutComponent, ContactComponent, ResumeComponent, ProtfolioComponent, SkillsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private renderer: Renderer2, private el: ElementRef) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const elements = this.el.nativeElement.querySelectorAll('.fade-in');
    elements.forEach((element: HTMLElement) => {
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight && !element.classList.contains('active')) {
        this.renderer.addClass(element, 'active');
      }
    });
  }

}
