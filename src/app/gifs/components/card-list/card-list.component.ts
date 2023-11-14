import { Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';
import { CardItemComponent } from '../card-item/card-item.component';

@Component({
  selector: 'gifs-card-list',
  standalone: true,
  imports: [CardItemComponent],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.scss'
})
export class CardListComponent {
  @Input() public gifs: Gif[] = [];
}
