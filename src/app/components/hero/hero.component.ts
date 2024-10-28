import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgxTypedJsModule} from 'ngx-typed-js';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule,NgxTypedJsModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

}
