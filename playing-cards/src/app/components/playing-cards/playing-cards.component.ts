import { Component, input, Input, InputSignal } from '@angular/core';
import { Monster } from '../../models/monster.model';

@Component({
  selector: 'app-playing-cards',
  imports: [],
  templateUrl: './playing-cards.component.html',
  styleUrl: './playing-cards.component.css'
})
export class PlayingCardsComponent {
  // @Input({
  //   required: true,//Permet d'obliger le composant à recevoir une valeur
  //   alias: 'My-monster',// Permet de renommer la variable
  //   transform: (value: Monster) => {//Permet de transformer la valeur reçue selon le besoin dans notre cas on l'a divisé par 2
  //     value.hp = value.hp/2;
  //     return value;
  //   }
  // }) monster: Monster = new Monster();


  monster : InputSignal<Monster> = input(new Monster());
}
