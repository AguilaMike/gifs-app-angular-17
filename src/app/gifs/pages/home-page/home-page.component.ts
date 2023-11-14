import { Component } from '@angular/core';
import { SearchBoxComponent, CardListComponent } from '../../gifs.config';
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [SearchBoxComponent, CardListComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  constructor(private gifsService: GifsService) { }

  get gifsList(): Gif[]  {
    return this.gifsService.gifList;
  }
}
