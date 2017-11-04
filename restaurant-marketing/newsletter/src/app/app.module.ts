import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NgxElectronModule} from 'ngx-electron';


import { AppComponent } from './app.component';
import { HomeComponent,
          HeyoContestSetupComponent } from './components';

const appRoutes: Routes = [
  { path: 'home',      component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'heyo-contest',      component: HeyoContestSetupComponent }
  ];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeyoContestSetupComponent
  ],
  imports: [
    BrowserModule,
    NgxElectronModule,
    RouterModule.forRoot(
      appRoutes//, { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
