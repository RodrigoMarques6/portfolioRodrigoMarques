import { Component } from '@angular/core';

@Component({
  selector: 'app-experiencias',
  templateUrl: './experiencias.component.html',
  styleUrls: ['./experiencias.component.css'],
})
export class ExperienciasComponent {
  descricaoJuceal: string =
    'Suporte técnico em atendimento ao Portal Facilita AL, bem como atendimento presencial antes da emergência em saúde pública, além de análise de aberturas, baixas e alterações de empresas de qualquer porte, no Estado de AL ou fora dele.';
  descricaoSenai: string =
    'Desenvolvimento Web Front-End principalmente com base no figma fornecido pelo setor de design após aprovação do cliente, desenvolvimento Front (Angular, Tailwind, CSS, SCSS, Git, Metodologia Scrum, Typescript/Javascript), back-end com nest.js. Utilização do Azure Devops para acompanhamento e organização das tasks, forte uso da metodologia scrum, contendo daily, planning, retrospectiva e review e Suporte Técnico em sistemas web por email diretamente em contato com o usuário. A atuação principal com foco em sistemas voltados à indústria e escolas do SESI.';
  descricaoYellowKite: string =
    'Treinamento para usuários de plataformas conversacionais, integrações com APIs do RD Conversas, RD Marketing e RD CRM para desenvolvimento de chatbot, mais focado no whatsapp e telegram e automação de tarefas rotineiras dos setores de marketing e vendas da agência. Desenvolvimento de landing pages responsivas e manutenção de sites já existentes no portfólio da empresa.';
  descricaoSoftbase: string =
    'Metodologia Scrum, desenvolvimento front-end com Angular, Tailwind, CSS, Javascript/Typescript. Algumas tasks de back-end com nest.js/node. Git para controle de versão e clickup como controle de tasks.';
}
