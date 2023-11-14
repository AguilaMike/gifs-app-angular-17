import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';
import { LazyImageComponent } from '../../../shared/shared.config';

@Component({
  selector: 'gifs-card-item',
  standalone: true,
  imports: [LazyImageComponent],
  templateUrl: './card-item.component.html',
  styleUrl: './card-item.component.scss'
})
export class CardItemComponent implements OnInit {
  @Input() gif!: Gif;

  ngOnInit(): void {
    if (!this.gif) {
      throw new Error('Gif property is required');
    }
  }
}
