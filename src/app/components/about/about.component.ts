import { Component } from '@angular/core';
import {MatDividerModule} from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [MatDividerModule,MatIconModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
