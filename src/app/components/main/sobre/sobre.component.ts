import { Component } from '@angular/core';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css'],
})
export class SobreComponent {
  sobreMim1: string =
    'Meu nome é Rodrigo Marques de Lima, tenho 28 anos de idade e moro em Maceió-AL. Sou formado em Análise e Desenvolvimento de Sistemas e tenho quase dois anos de experiência na área de programação, com foco em linguagens utilizadas na web.';
  sobreMim2: string =
    'Atuo principalmente no desenvolvimento Front-End, sempre buscando ampliar meus conhecimentos e ganhar expertise para enfrentar novos desafios. Minhas formações em Administração e Ciências Contábeis complementam minhas habilidades, proporcionando uma visão diferenciada para o desenvolvimento de soluções. Sou apaixonado por criar experiências de usuário cativantes, autodidata e sempre pronto para contribuir com soluções criativas';
  curriculo: string = 'Visualizar currículo';
}
