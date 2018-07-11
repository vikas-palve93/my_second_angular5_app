import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterModule,  Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core';
import { HttpClientModule } from '@angular/common/http';  // replaces previous Http service
import { UserService } from './user.service';
import { TableComponent } from './table/table.component';
import { ChartComponent } from './chart/chart.component';   // our custom service, see below
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';
import { ChartModule } from 'angular-highcharts';


const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'table', component: TableComponent},
  { path: 'chart', component: ChartComponent},
  { path: '**', component: LoginComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    TableComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    ChartModule,
    Ng2SmartTableModule,
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

