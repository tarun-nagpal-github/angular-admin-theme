import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'signup',
        loadChildren: () => import('./auth-signup/auth-signup.module').then(m => m.AuthSignupModule)
      },
      {
        path: 'signin',
        loadChildren: () => import('./auth-signin/auth-signin.module').then(m => m.AuthSigninModule)
      },
      {
        path: 'reset-password',
        loadChildren: () => import('./auth-reset-password/auth-reset-password.module').then(m => m.AuthResetPasswordModule)
      },
      {
        path: 'change-password',
        loadChildren: () => import('./auth-change-password/auth-change-password.module').then(m => m.AuthChangePasswordModule)
      },
      {
        path: 'personal-information',
        loadChildren: () => import('./auth-personal-info/auth-personal-info.module').then(m => m.AuthPersonalInfoModule)
      },
      {
        path: 'profile-settings',
        loadChildren: () => import('./auth-profile-settings/auth-profile-settings.module').then(m => m.AuthProfileSettingsModule)
      },
      {
        path: 'map-form',
        loadChildren: () => import('./auth-map-form/auth-map-form.module').then(m => m.AuthMapFormModule)
      },
      {
        path: 'subscribe',
        loadChildren: () => import('./subscribe/subscribe.module').then(m => m.SubscribeModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
