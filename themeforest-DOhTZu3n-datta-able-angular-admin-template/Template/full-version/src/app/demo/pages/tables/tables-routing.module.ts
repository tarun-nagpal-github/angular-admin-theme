import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'bootstrap',
        loadChildren: () => import('./tbl-bootstrap/tbl-bootstrap.module').then(m => m.TblBootstrapModule)
      },
      {
        path: 'datatable',
        loadChildren: () => import('./tbl-datatable/tbl-datatable.module').then(m => m.TblDatatableModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablesRoutingModule { }
