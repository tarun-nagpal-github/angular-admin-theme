import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'offline-ui',
        loadChildren: () => import('./mainten-offline-ui/mainten-offline-ui.module').then(m => m.MaintenOfflineUiModule)
      },
      {
        path: 'coming-soon',
        loadChildren: () => import('./mainten-coming-soon/mainten-coming-soon.module').then(m => m.MaintenComingSoonModule)
      },
      {
        path: 'error',
        loadChildren: () => import('./mainten-error/mainten-error.module').then(m => m.MaintenErrorModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaintenanceRoutingModule { }
