import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterModule,  Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core';
import { HttpClientModule } from '@angular/common/http';  // replaces previous Http service
import { UserService } from './user.service';   // our custom service, see below


const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: '**', component: LoginComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

