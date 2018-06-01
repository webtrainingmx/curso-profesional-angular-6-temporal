import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './public/home/home.component';
import {FooterComponent} from './common/footer/footer.component';
import {AuthHomeComponent} from './auth/auth-home/auth-home.component';
import {PublicGuard} from './common/guards/public.guard';
import {AuthGuard} from './common/guards/auth.guard';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: '/home'
  }, {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full',
    canActivate: [PublicGuard]
  },
  {
    path: 'auth-home',
    component: AuthHomeComponent,
    canActivate: [AuthGuard]
  },
  // {
  //   path: 'vehicles/:id', component: VehicleDetailComponent
  // }
];
// /auth
//   /messages
//   /control-panel
// /public
//   /vehicles
//     /search


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
