import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'shared-lazy-image',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lazy-image.component.html',
  styleUrl: './lazy-image.component.scss'
})
export class LazyImageComponent implements OnInit {
  @Input() public url!: string;
  @Input() public alt: string = '';
  public hasLoaded: boolean = false;

  ngOnInit(): void {
    if (!this.url) {
      throw new Error('Url property is required');
    }
  }

  onLoad() {
    this.hasLoaded = true;
  }
}
