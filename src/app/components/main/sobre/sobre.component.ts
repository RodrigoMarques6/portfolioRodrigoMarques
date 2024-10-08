import { Component } from '@angular/core';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss'],
})
export class SobreComponent {
  sobreMim1: string =
    'Sou desenvolvedor front-end com dois anos de experiência em programação web. Transformo ideias em experiências digitais envolventes, criando interfaces que conectam pessoas e tecnologia de forma intuitiva. Que tal me conhecer melhor navegando por este portfólio? Fique à vontade!';
  // Sou apaixonado por desenvolver experiências de usuário intuitivas e envolventes. Formado em Análise e Desenvolvimento de Sistemas,  busco constantemente ampliar conhecimentos e criar soluções eficientes. Estou pronto para contribuir com uma visão diferenciada para o desenvolvimento de soluções web criativas.';
  // sobreMim2: string =
  //   'Atuo principalmente no desenvolvimento Front-End, sempre buscando ampliar meus conhecimentos e ganhar expertise para enfrentar novos desafios. Minhas formações em Administração e Ciências Contábeis complementam minhas habilidades, proporcionando uma visão diferenciada para o desenvolvimento de soluções. Sou apaixonado por criar experiências de usuário cativantes, autodidata e sempre pronto para contribuir com soluções criativas';
  curriculo: string = 'Visualizar currículo';
  sobre: string = 'Mais sobre mim (vai ter uma animação direta)'
}
