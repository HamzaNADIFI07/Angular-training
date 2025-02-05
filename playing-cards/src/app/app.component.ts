import { Monster } from './models/monster.model';
import { Component } from '@angular/core';
import { PlayingCardsComponent } from './components/playing-cards/playing-cards.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
@Component({
  selector: 'app-root',
  imports: [PlayingCardsComponent, SearchBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'

})
export class AppComponent {
  monster1 !: Monster;
  count : number = 0;
  search ='';

  constructor() {
    this.monster1 = new Monster();
    this.monster1.name = "Pikachu";
    this.monster1.hp = 40;
    this.monster1.figureCaption = "N°002 Pikachu";
  }
  increaseCount() {
    this.count++;
  }
}
