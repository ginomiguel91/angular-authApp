import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { validarTokenGuard } from './guards/validar-token.guard';
import { validarToken0Guard } from './guards/validar-token0.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },

  {
    path: 'dashboard',
    loadChildren: () =>
      import('./protected/protected.module').then((m) => m.ProtectedModule),
    canActivate: [validarToken0Guard],
    canMatch: [validarTokenGuard],
  },
  {
    path: '**',
    redirectTo: 'auth',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
