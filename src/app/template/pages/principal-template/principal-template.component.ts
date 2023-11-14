import { Component } from '@angular/core';
import { SidebarComponent } from '../../template.config';
import { RouterOutlet } from '@angular/router';

const components = [SidebarComponent];

@Component({
  standalone: true,
  imports: [...components, RouterOutlet],
  templateUrl: './principal-template.component.html',
  styleUrl: './principal-template.component.scss'
})
export class PrincipalTemplateComponent {}
