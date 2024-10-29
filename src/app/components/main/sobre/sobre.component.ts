import { Component } from '@angular/core';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss'],
})
export class SobreComponent {
  sobreMim1: string =
    'Sou desenvolvedor front-end com dois anos de experiência em programação web. Transformo ideias em experiências digitais envolventes, criando interfaces que conectam pessoas e tecnologia de forma intuitiva. Que tal me conhecer melhor navegando por este portfólio? Fique à vontade!';
  curriculo: string = 'Visualizar currículo';
}
