import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ControllerComponent } from './controller/controller.component'
import { MonitorComponent } from './monitor/monitor.component'
import { ViewerComponent } from './viewer/viewer.component'
import { LoginComponent } from './login/login.component'

const routes: Routes = [
  { path: '',  redirectTo: '/login' , pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'controller', component: ControllerComponent },
  { path: 'viewer', component: ViewerComponent },
  { path: 'monitor', component: MonitorComponent },
  { path: '**', redirectTo: '/login' , pathMatch: 'full' }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
