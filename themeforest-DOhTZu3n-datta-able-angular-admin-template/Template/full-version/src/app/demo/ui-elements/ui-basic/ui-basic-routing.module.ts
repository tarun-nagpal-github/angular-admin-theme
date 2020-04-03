import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'alert',
        loadChildren: () => import('./basic-alert/basic-alert.module').then(m => m.BasicAlertModule)
      },
      {
        path: 'button',
        loadChildren: () => import('./basic-button/basic-button.module').then(m => m.BasicButtonModule)
      },
      {
        path: 'badges',
        loadChildren: () => import('./basic-badge/basic-badge.module').then(m => m.BasicBadgeModule)
      },
      {
        path: 'breadcrumb-paging',
        loadChildren: () => import('./breadcrumb-paging/breadcrumb-paging.module').then(m => m.BreadcrumbPagingModule)
      },
      {
        path: 'cards',
        loadChildren: () => import('./basic-cards/basic-cards.module').then(m => m.BasicCardsModule)
      },
      {
        path: 'collapse',
        loadChildren: () => import('./basic-collapse/basic-collapse.module').then(m => m.BasicCollapseModule)
      },
      {
        path: 'carousel',
        loadChildren: () => import('./basic-carousel/basic-carousel.module').then(m => m.BasicCarouselModule)
      },
      {
        path: 'grid-system',
        loadChildren: () => import('./basic-grid/basic-grid.module').then(m => m.BasicGridModule)
      },
      {
        path: 'progress',
        loadChildren: () => import('./basic-progress-bar/basic-progress-bar.module').then(m => m.BasicProgressBarModule)
      },
      {
        path: 'modal',
        loadChildren: () => import('./basic-modal/basic-modal.module').then(m => m.BasicModalModule)
      },
      {
        path: 'tabs-pills',
        loadChildren: () => import('./basic-tabs-pills/basic-tabs-pills.module').then(m => m.BasicTabsPillsModule)
      },
      {
        path: 'typography',
        loadChildren: () => import('./basic-typography/basic-typography.module').then(m => m.BasicTypographyModule)
      },
      {
        path: 'tooltip-popovers',
        loadChildren: () => import('./basic-tooltip-popovers/basic-tooltip-popovers.module').then(m => m.BasicTooltipPopoversModule)
      },
      {
        path: 'other',
        loadChildren: () => import('./basic-other/basic-other.module').then(m => m.BasicOtherModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UiBasicRoutingModule { }
