import { Component } from '@angular/core';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css'],
})
export class SobreComponent {
  sobreMim1: string =
    'Meu nome é Rodrigo Marques de Lima, tenho 27 anos de idade e moro em Maceió-AL. Sou estudante de análise e desenvolvimento de sistemas e estou em busca da minha primeira oportunidade na área de programação, com foco em linguagens utilizadas na web.';
  sobreMim2: string =
    'Sempre estou buscando estudar e desenvolver projetos web, em maior parte no Front-end, visando ampliar meus conhecimentos na área, bem como ganhar expertise para os desafios de minha primeira oportunidade.';
}
