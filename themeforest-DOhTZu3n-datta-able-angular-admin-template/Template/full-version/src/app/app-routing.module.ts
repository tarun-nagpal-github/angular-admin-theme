import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './theme/layout/admin/admin.component';
import { AuthComponent } from './theme/layout/auth/auth.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard/default',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./demo/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'layout',
        loadChildren: () => import('./demo/layout/layout.module').then(m => m.LayoutModule)
      },
      {
        path: 'widget',
        loadChildren: () => import('./demo/widget/widget.module').then(m => m.WidgetModule)
      },
      {
        path: 'basic',
        loadChildren: () => import('./demo/ui-elements/ui-basic/ui-basic.module').then(m => m.UiBasicModule)
      },
      {
        path: 'advance',
        loadChildren: () => import('./demo/ui-elements/ui-adv/ui-adv.module').then(m => m.UiAdvModule)
      },
      {
        path: 'forms',
        loadChildren: () => import('./demo/pages/form-elements/form-elements.module').then(m => m.FormElementsModule)
      },
      {
        path: 'tables',
        loadChildren: () => import('./demo/pages/tables/tables.module').then(m => m.TablesModule)
      },
      {
        path: 'charts',
        loadChildren: () => import('./demo/pages/core-chart/core-chart.module').then(m => m.CoreChartModule)
      },
      {
        path: 'maps',
        loadChildren: () => import('./demo/pages/core-maps/core-maps.module').then(m => m.CoreMapsModule)
      },
      {
        path: 'message',
        loadChildren: () => import('./demo/app/inline-chat/inline-chat.module').then(m => m.InlineChatModule)
      },
      {
        path: 'task',
        loadChildren: () => import('./demo/app/task/task.module').then(m => m.TaskModule)
      },
      {
        path: 'todo',
        loadChildren: () => import('./demo/app/todo/todo.module').then(m => m.TodoModule)
      },
      {
        path: 'gallery',
        loadChildren: () => import('./demo/app/gallery/gallery.module').then(m => m.GalleryModule)
      },
      {
        path: 'editor',
        loadChildren: () => import('./demo/extension/editor/editor.module').then(m => m.EditorModule)
      },
      {
        path: 'invoice',
        loadChildren: () => import('./demo/extension/invoice/invoice.module').then(m => m.InvoiceModule)
      },
      {
        path: 'full-calendar',
        loadChildren: () => import('./demo/extension/full-event-calendar/full-event-calendar.module').then(m => m.FullEventCalendarModule)
      },
      {
        path: 'file-upload',
        loadChildren: () => import('./demo/extension/files-upload/files-upload.module').then(m => m.FilesUploadModule)
      },
      {
        path: 'sample-page',
        loadChildren: () => import('./demo/extra/sample-page/sample-page.module').then(m => m.SamplePageModule)
      }
    ]
  },
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'maintenance',
        loadChildren: () => import('./demo/pages/maintenance/maintenance.module').then(m => m.MaintenanceModule)
      },
      {
        path: 'auth',
        loadChildren: () => import('./demo/pages/authentication/authentication.module').then(m => m.AuthenticationModule)
      },
      {
        path: 'landing',
        loadChildren: () => import('./demo/pages/landing/landing.module').then(m => m.LandingModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
