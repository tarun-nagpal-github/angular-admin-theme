import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'amchart',
        loadChildren: () => import('./crt-amchart/crt-amchart.module').then(m => m.CrtAmchartModule)
      },
      {
        path: 'chart-js',
        loadChildren: () => import('./crt-chart-js/crt-chart-js.module').then(m => m.CrtChartJsModule)
      },
      {
        path: 'e-chart',
        loadChildren: () => import('./crt-echart/crt-echart.module').then(m => m.CrtEchartModule)
      },
      {
        path: 'google',
        loadChildren: () => import('./crt-google-chart/crt-google-chart.module').then(m => m.CrtGoogleChartModule)
      },
      {
        path: 'high-chart',
        loadChildren: () => import('./crt-high-chart/crt-high-chart.module').then(module => module.CrtHighChartModule)
      },
      {
        path: 'morris',
        loadChildren: () => import('./crt-morris/crt-morris.module').then(m => m.CrtMorrisModule)
      },
      {
        path: 'nvd3',
        loadChildren: () => import('./crt-nvd3/crt-nvd3.module').then(m => m.CrtNvd3Module)
      },
      {
        path: 'peity',
        loadChildren: () => import('./crt-peity/crt-peity.module').then(m => m.CrtPeityModule)
      },
      {
        path: 'radial',
        loadChildren: () => import('./crt-radial/crt-radial.module').then(m => m.CrtRadialModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreChartRoutingModule { }
