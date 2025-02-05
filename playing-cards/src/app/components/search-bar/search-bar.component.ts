import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  imports: [FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {

  @Input() search = 'inital';

  @Output() searchChanged = new EventEmitter<string>();
  @Output('submit') searchButtonClicked = new EventEmitter();

  searchClick() {
    this.searchButtonClicked.emit();
  }
  updateSearch(value:string) {
    this.searchChanged.emit(value);
  }
}
