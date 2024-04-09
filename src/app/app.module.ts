import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { ConhecimentosComponent } from './components/conhecimentos/conhecimentos.component';
import { ProjetosComponent } from './components/projetos/projetos.component';
import { RodapeComponent } from './components/rodape/rodape.component';
import { HomeComponent } from './components/home/home.component';
import { ExperienciasComponent } from './components/experiencias/experiencias.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SobreComponent,
    ConhecimentosComponent,
    ProjetosComponent,
    RodapeComponent,
    HomeComponent,
    ExperienciasComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
