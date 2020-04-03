import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'static',
        loadChildren: () => import('./theme-static/theme-static.module').then(m => m.ThemeStaticModule)
      },
      {
        path: 'fixed',
        loadChildren: () => import('./theme-fixed/theme-fixed.module').then(m => m.ThemeFixedModule)
      },
      {
        path: 'nav-fixed',
        loadChildren: () => import('./theme-nav-fixed/theme-nav-fixed.module').then(m => m.ThemeNavFixedModule)
      },
      {
        path: 'nav-image',
        loadChildren: () => import('./theme-nav-image/theme-nav-image.module').then(m => m.ThemeNavImageModule)
      },
      {
        path: 'collapse-menu',
        loadChildren: () => import('./theme-collapse-menu/theme-collapse-menu.module').then(m => m.ThemeCollapseMenuModule)
      },
      {
        path: 'horizontal',
        loadChildren: () => import('./theme-horizontal/theme-horizontal.module').then(m => m.ThemeHorizontalModule)
      },
      {
        path: 'box',
        loadChildren: () => import('./theme-box/theme-box.module').then(m => m.ThemeBoxModule)
      },
      {
        path: 'rtl',
        loadChildren: () => import('./theme-rtl/theme-rtl.module').then(m => m.ThemeRtlModule)
      },
      {
        path: 'light',
        loadChildren: () => import('./theme-light/theme-light.module').then(m => m.ThemeLightModule)
      },
      {
        path: 'dark',
        loadChildren: () => import('./theme-dark/theme-dark.module').then(m => m.ThemeDarkModule)
      },
      {
        path: 'icon-color',
        loadChildren: () => import('./theme-icon-color/theme-icon-color.module').then(m => m.ThemeIconColorModule)
      },
      {
        path: 'layout-2',
        loadChildren: () => import('./theme-layout2/theme-layout2.module').then(m => m.ThemeLayout2Module)
      },
      {
        path: 'layout-2-2',
        loadChildren: () => import('./theme-layout22/theme-layout22.module').then(m => m.ThemeLayout22Module)
      },
      {
        path: 'layout-3',
        loadChildren: () => import('./theme-layout3/theme-layout3.module').then(m => m.ThemeLayout3Module)
      },
      {
        path: 'layout-4',
        loadChildren: () => import('./theme-layout4/theme-layout4.module').then(m => m.ThemeLayout4Module)
      },
      {
        path: 'layout-4-2',
        loadChildren: () => import('./theme-layout44/theme-layout44.module').then(m => m.ThemeLayout44Module)
      },
      {
        path: 'layout-5h',
        loadChildren: () => import('./theme-layout5h/theme-layout5h.module').then(m => m.ThemeLayout5hModule)
      },
      {
        path: 'nav-color',
        loadChildren: () => import('./theme-layout5v/theme-layout5v.module').then(m => m.ThemeLayout5vModule)
      },
      {
        path: 'layout-6',
        loadChildren: () => import('./theme-layout6/theme-layout6.module').then(m => m.ThemeLayout6Module)
      },
      {
        path: 'layout-8',
        loadChildren: () => import('./theme-layout8/theme-layout8.module').then(m => m.ThemeLayout8Module)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
