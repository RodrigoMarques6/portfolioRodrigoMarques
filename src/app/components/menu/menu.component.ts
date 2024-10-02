import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  menuItems = [
    { text: 'Início', url: '#' },
    { text: 'Sobre', url: '#sobre' },
    { text: 'Conhecimentos', url: '#conhecimentos' },
    { text: 'Projetos', url: '#projetos' },
    { text: 'Experiências', url: '#experiencias' },
    { text: 'Contato', url: '#contato' },
  ];
  

}
