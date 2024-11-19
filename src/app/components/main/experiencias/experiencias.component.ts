import { Component } from '@angular/core';

@Component({
  selector: 'app-experiencias',
  templateUrl: './experiencias.component.html',
  styleUrls: ['./experiencias.component.css'],
})
export class ExperienciasComponent {
  descricaoJuceal: string[] = [
    'Suporte técnico em atendimento ao Portal Facilita AL;',
    'Atendimento telefônico para dúvidas a respeito do portal;',
    'Atendimento presencial;',
    'Análise de aberturas, baixas e alterações de empresas de qualquer porte.',
  ];
  descricaoSenai: string[] = [
    'Desenvolvimento Web Front-End em projetos complexos;',
    'Reprodução de telas Front-End com base no Figma;',
    'Metodologia Scrum: daily/planning/retrospective/review;',
    'Azure Devops para organização de tasks;',
    'Controle de versão em atuação com grandes times - GIT;',
    'Suporte Técnico em sistemas web por email.',
  ];

  descricaoYellowKite: string[] = [
    'Desenvolvimento de landing pages responsivas;',
    'Manutenção de websites do portfólio da empresa;',
    'Integrações com APIs do RD Conversas, RD Marketing, RD CRM, Hablla e Bitrix24 para desenvolvimento de chatbots;',
    'Automações com uso de IA para tarefas rotineiras dos setores de marketing e clientes da agência;',
    'Treinamento em plataformas conversacionais.',
  ];
  descricaoSoftbase: string[] = [
    'Desenvolvimento Front e Back;',
    'Reprodução de telas Front-End com base no Figma;',
    'Foco na experiência do usuário - UX;',
    'Metodologia Scrum;',
    'Controle de versão - GIT;',
    'Click-up como controle de tasks;',
    'Auto gerenciamento na ausência do P.O.',
  ];
}
