import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SobreMimComponent } from './components/hero/sobre-mim/sobre-mim.component';
import { MainComponent } from './components/main/main.component';
import { CurriculoComponent } from './components/hero/curriculo/curriculo.component';

const routes: Routes = [
  //   { path: '', redirectTo: '/home', pathMatch: 'full' },
  //   { path: '**', component: MainComponent },
  { path: '', component: MainComponent },
  { path: 'sobre-mim', component: SobreMimComponent },
  { path: 'curriculo-rodrigo-marques', component: CurriculoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
