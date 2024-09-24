import { Component } from '@angular/core';
import { IconsComponent } from '../icons/icons.component';

@Component({
  selector: 'app-experiencias',
  templateUrl: './experiencias.component.html',
  styleUrls: ['./experiencias.component.css'],
})
export class ExperienciasComponent {
  descricaoJuceal: string[] = [
    'Suporte técnico em atendimento ao Portal Facilita AL;',
    'Atendimento presencial;',
    'Análise de aberturas, baixas e alterações de empresas de qualquer porte.',
  ];
  descricaoSenai: string[] = [
    'Desenvolvimento Web Front-End em projetos complexos;',
    'Reprodução de telas Front-End com base no Figma;',
    'Metodologia Scrum: daily, planning, retrospectiva e review;',
    'Azure Devops para organização de tasks;',
    'Controle de versão - GIT;',
    'Suporte Técnico em sistemas web por email.',
  ];

  descricaoYellowKite: string[] = [
    'Treinamento para usuários de plataformas conversacionais;',
    'Integrações com APIs do RD Conversas, RD Marketing e RD CRM para desenvolvimento de chatbots;',
    'Automação de tarefas rotineiras dos setores de marketing da agência;',
    'Desenvolvimento de landing pages responsivas;',
    'Manutenção de sites já existentes no portfólio da empresa;',
  ];
  descricaoSoftbase: string[] = [
    'Desenvolvimento Full-Stack;',
    'Reprodução de telas Front-End com base no Figma;',
    'Metodologia Scrum;',
    'Controle de versão - GIT;',
    'Click-up como controle de tasks;',
    'Auto gerenciamento na ausência do P.O.',
  ];
}
