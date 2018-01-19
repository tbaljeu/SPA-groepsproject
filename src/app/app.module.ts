import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { UserService } from './services/user.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './components/login/login.component';
import { DataconverterComponent } from './components/login/dataconverter/dataconverter.component';

// Authentication.
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth-guard.service';
import { HalloComponent } from './hallo/hallo.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
   // HeaderComponent,
   // Login.ComponentComponent,
    LoginComponent,
    SignupComponent,
    SigninComponent,
    HalloComponent,
    DataconverterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ],
  providers: [UserService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})

export class AppModule {}