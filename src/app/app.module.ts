import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/main/menu/menu.component';
import { SobreComponent } from './components/main/sobre/sobre.component';
import { ProjetosComponent } from './components/main/projetos/projetos.component';
import { RodapeComponent } from './components/main/rodape/rodape.component';
import { HomeComponent } from './components/main/home/home.component';
import { ExperienciasComponent } from './components/main/experiencias/experiencias.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { IconsComponent } from './components/main/icons/icons.component';
import { MainComponent } from './components/main/main.component';
import { ConhecimentosComponent } from './components/main/conhecimentos/conhecimentos.component';
import { HeroComponent } from './components/hero/hero.component';
import { SobreMimComponent } from './components/hero/sobre-mim/sobre-mim.component';
import { AppRoutingModule } from './app.routing';
import { CurriculoComponent } from './components/hero/curriculo/curriculo.component';

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
    IconsComponent,
    MainComponent,
    HeroComponent,
    SobreMimComponent,
    CurriculoComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatRadioModule,
    MatIconModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
