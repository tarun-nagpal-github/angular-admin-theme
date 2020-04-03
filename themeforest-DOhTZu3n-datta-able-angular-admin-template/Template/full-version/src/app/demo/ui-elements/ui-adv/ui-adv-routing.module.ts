import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'alert',
        loadChildren: () => import('./adv-alert/adv-alert.module').then(m => m.AdvAlertModule)
      },
      /*{
        path: 'datepicker',
        loadChildren: () => import('./adv-datepicker/adv-datepicker.module').then(m => m.AdvDatepickerModule)
      },*/
      {
        path: 'task-board',
        loadChildren: () => import('./adv-task-board/adv-task-board.module').then(m => m.AdvTaskBoardModule)
      },
      {
        path: 'light-box',
        loadChildren: () => import('./adv-light-box/adv-light-box.module').then(m => m.AdvLightBoxModule)
      },
      {
        path: 'modal',
        loadChildren: () => import('./adv-modal/adv-modal.module').then(m => m.AdvModalModule)
      },
      {
        path: 'notification',
        loadChildren: () => import('./adv-notification/adv-notification.module').then(m => m.AdvNotificationModule)
      },
      {
        path: 'rating',
        loadChildren: () => import('./adv-rating/adv-rating.module').then(m => m.AdvRatingModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UiAdvRoutingModule { }
