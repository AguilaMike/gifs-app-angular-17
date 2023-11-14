import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'root-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  constructor(private gifsService: GifsService) { }

    get tagsHistory(): string[] {
      return this.gifsService.tagsHistory;
    }
}
