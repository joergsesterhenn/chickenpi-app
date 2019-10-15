import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import {AppComponent} from './app.component';

import {environment} from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { ControllerComponent } from './controller/controller.component';
import { ViewerComponent } from './viewer/viewer.component';
import { MonitorComponent } from './monitor/monitor.component';
import { ConditionsComponent } from './conditions/conditions.component';
import { AutomationComponent } from './automation/automation.component';
import { LoginComponent } from './login/login.component';
import { CollapseModule } from 'ngx-bootstrap';
import { ButtonsModule } from 'ngx-bootstrap';
import { AuthService } from './providers/auth.service';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './providers/authGuard';

const routes: Routes = [
  { path: '',  component: LoginComponent},
  { path: 'login', component: LoginComponent },
  { path: 'controller', component: ControllerComponent, canActivate: [ AuthGuard ] },
  { path: 'viewer', component: ViewerComponent, canActivate: [ AuthGuard ] },
  { path: 'monitor', component: MonitorComponent, canActivate: [ AuthGuard ] },
  { path: '**', component: LoginComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ControllerComponent,
    ViewerComponent,
    MonitorComponent,
    ConditionsComponent,
    AutomationComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    CollapseModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    ButtonsModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [AuthService, AngularFireAuthModule, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
