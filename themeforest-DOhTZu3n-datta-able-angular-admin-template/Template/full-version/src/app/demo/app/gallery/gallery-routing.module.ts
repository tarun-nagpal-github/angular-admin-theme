import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'grid',
        loadChildren: () => import('./gallery-grid/gallery-grid.module').then(m => m.GalleryGridModule)
      },
      {
        path: 'masonry',
        loadChildren: () => import('./gallery-masonry/gallery-masonry.module').then(m => m.GalleryMasonryModule)
      },
      {
        path: 'advance',
        loadChildren: () => import('./gallery-advance/gallery-advance.module').then(m => m.GalleryAdvanceModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GalleryRoutingModule { }
