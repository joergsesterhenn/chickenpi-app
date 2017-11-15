import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireModule} from 'angularfire2';
import {AppComponent} from './app.component';

import {environment} from '../environments/environment';
import { AngularFireAuth } from 'angularfire2/auth';
import { ControllerComponent } from './controller/controller.component';
import { ViewerComponent } from './viewer/viewer.component';
import { MonitorComponent } from './monitor/monitor.component';
import { ConditionsComponent } from './conditions/conditions.component';
import { AutomationComponent } from './automation/automation.component';
import { AppRoutingModule } from './/app-routing.module';
import { LoginComponent } from './login/login.component';
import { CollapseModule } from 'ngx-bootstrap';

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
    AngularFireDatabaseModule,
    AppRoutingModule
  ],
  providers: [AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule {}
