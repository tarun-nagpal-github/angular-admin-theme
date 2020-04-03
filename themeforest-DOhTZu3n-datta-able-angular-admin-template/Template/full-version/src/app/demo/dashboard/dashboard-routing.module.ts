import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'default',
        loadChildren: () => import('./default/default.module').then(m => m.DefaultModule)
      },
      {
        path: 'e-commerce',
        loadChildren: () => import('./ecommerce/ecommerce.module').then(m => m.EcommerceModule)
      },
      {
        path: 'crm',
        loadChildren: () => import('./dash-crm/dash-crm.module').then(m => m.DashCrmModule)
      },
      {
        path: 'analytics',
        loadChildren: () => import('./dash-analytics/dash-analytics.module').then(m => m.DashAnalyticsModule)
      },
      {
        path: 'crypto',
        loadChildren: () => import('./dash-crypto/dash-crypto.module').then(m => m.DashCryptoModule)
      },
      {
        path: 'project',
        loadChildren: () => import('./dash-project/dash-project.module').then(m => m.DashProjectModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
