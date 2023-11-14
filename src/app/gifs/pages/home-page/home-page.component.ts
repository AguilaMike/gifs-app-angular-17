import { Component } from '@angular/core';
import { SearchBoxComponent, CardListComponent } from '../../gifs.config';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [SearchBoxComponent, CardListComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
