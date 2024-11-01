import { Component, signal, Signal } from '@angular/core';
import {MatDividerModule} from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-protfolio',
  standalone: true,
  imports: [MatDividerModule,MatIconModule,CommonModule],
  templateUrl: './protfolio.component.html',
  styleUrl: './protfolio.component.css'
})
export class ProtfolioComponent {
  public keyWord = "All"
  public isClickPhoto = signal(false);


  onClickFilter(keyWord:string){
    this.keyWord = keyWord;
  }

  onClickPhoto():void{
    this.isClickPhoto.set(true);
  }
  

}
