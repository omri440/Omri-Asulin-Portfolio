import { Component } from '@angular/core';
import {MatDividerModule} from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import {MatProgressBarModule} from '@angular/material/progress-bar';


@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [MatDividerModule,MatIconModule,MatProgressBarModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {

}
