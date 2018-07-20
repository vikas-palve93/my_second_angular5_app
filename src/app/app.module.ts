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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToasterModule, ToasterService } from 'angular5-toaster';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { ToastrModule } from 'ngx-toastr';
import { Ng2Webstorage} from 'ngx-webstorage';
import { LocalStorageService} from 'ngx-webstorage';
import { HeaderComponent } from '../app/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatCardModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIcon } from '@angular/material';
import { LogoutConfirmPopupComponent } from './logout-confirm-popup/logout-confirm-popup.component';
import { Http, HttpModule } from '@angular/http';
import { DeleteConfirmPopupComponent } from './delete-confirm-popup/delete-confirm-popup.component';
import { EditUserPopupComponent } from './edit-user-popup/edit-user-popup.component';
import { DatepickerMultipleComponent } from './datepicker-multiple/datepicker-multiple.component';
import { CalendarComponent } from './calendar/calendar.component';
import 'flatpickr/dist/flatpickr.css';
import { CommonModule } from '@angular/common';
import { CalendarModule } from 'angular-calendar';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap/modal/modal.module';
import { FlatpickrModule } from 'angularx-flatpickr';
import {TooltipModule} from "ngx-tooltip";
import { FullYearCalendarComponent } from './full-year-calendar/full-year-calendar.component';
const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'table', component: TableComponent},
  { path: 'chart', component: ChartComponent},
  { path: 'datepicker-multiple', component: DatepickerMultipleComponent},
  { path: 'calendar', component: CalendarComponent},
  { path: 'full-year-calendar', component: FullYearCalendarComponent},
  
  { path: '**', component: LoginComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    TableComponent,
    ChartComponent,
    HeaderComponent,
    LogoutConfirmPopupComponent,
    DeleteConfirmPopupComponent,
    EditUserPopupComponent,
    DatepickerMultipleComponent,
    CalendarComponent,
    FullYearCalendarComponent,
  ],
  imports: [
    BrowserModule,
    ChartModule,
    Ng2SmartTableModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToasterModule,
    BrowserAnimationsModule,
    LoadingBarHttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    Ng2Webstorage,
    HttpModule,
    TooltipModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    NgbModalModule.forRoot(),
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot(),
   
    
    NgbModule.forRoot(),
    LoadingBarModule.forRoot(),
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
      progressBar: true,
     
  
    }),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [CalendarComponent],
  providers: [LocalStorageService],
  bootstrap: [AppComponent],
  entryComponents: [LogoutConfirmPopupComponent],
})
export class AppModule { }

