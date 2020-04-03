import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'basic',
        loadChildren: () => import('./basic-elements/basic-elements.module').then(m => m.BasicElementsModule)
      },
      {
        path: 'advance',
        loadChildren: () => import('./frm-advance/frm-advance.module').then(m => m.FrmAdvanceModule)
      },
      {
        path: 'validation',
        loadChildren: () => import('./frm-validation/frm-validation.module').then(m => m.FrmValidationModule)
      },
      {
        path: 'masking',
        loadChildren: () => import('./frm-masking/frm-masking.module').then(m => m.FrmMaskingModule)
      },
      {
        path: 'wizard',
        loadChildren: () => import('./frm-wizard/frm-wizard.module').then(m => m.FrmWizardModule)
      },
      {
        path: 'picker',
        loadChildren: () => import('./frm-picker/frm-picker.module').then(m => m.FrmPickerModule)
      },
      {
        path: 'select',
        loadChildren: () => import('./frm-select/frm-select.module').then(m => m.FrmSelectModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormElementsRoutingModule { }
