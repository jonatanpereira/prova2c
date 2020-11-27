import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastrarComponent } from './views/medico/cadastrar/cadastrar.component';
import { ListarComponent } from './views/medico/listar/listar.component';

const routes: Routes = [

  {
    path: '',
    component: ListarComponent
  },
  {
    path: 'medico/cadastrar',
    component: CadastrarComponent
  },
  {
    path: 'medico/cadastrar/:id',
    component: CadastrarComponent
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
