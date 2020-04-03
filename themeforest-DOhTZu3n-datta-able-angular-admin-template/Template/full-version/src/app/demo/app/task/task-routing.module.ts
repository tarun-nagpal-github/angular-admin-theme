import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'list',
        loadChildren: () => import('./task-list/task-list.module').then(m => m.TaskListModule)
      },
      {
        path: 'board',
        loadChildren: () => import('./task-board/task-board.module').then(m => m.TaskBoardModule)
      },
      {
        path: 'detail',
        loadChildren: () => import('./task-detail/task-detail.module').then(m => m.TaskDetailModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule { }
