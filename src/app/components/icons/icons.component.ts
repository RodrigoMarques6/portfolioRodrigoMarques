import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css'],
})
export class IconsComponent {
  @Input() techName!: string;
  get iconPath(): string {
    return `assets/icons/${this.techName.toLowerCase()}.svg`;
  }
}
