import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'defibrillateurs',
    loadChildren: () => import('./defibrillateurs/defibrillateurs.module').then( m => m.DefibrillateursPageModule)
  },
  {
    path: 'commandes',
    loadChildren: () => import('./commandes/commandes.module').then( m => m.CommandesPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'defibrillateurs',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
