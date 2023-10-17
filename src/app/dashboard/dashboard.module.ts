import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftSidenavComponent } from './left-sidenav/left-sidenav.component';
import { RightSidenavComponent } from './right-sidenav/right-sidenav.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { UsermanagementComponent } from './usermanagement/usermanagement.component';
import { ChartComponent } from './chart/chart.component';
import {HttpClientModule} from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component';
import { FrameComponent } from './frame/frame.component'
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { BackAccountFormatPipe } from './pipes/back-account-format.pipe';
import { EmployeeManagementComponent } from './user-list/employee-management/employee-management.component';
import { ManagerManagementComponent } from './manager-management/manager-management.component';
import { AdminManagementComponent } from './admin-management/admin-management.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserListComponent } from './user-list/user-list.component';
import { httpInterceptorProviders } from '../_helpers/http.interceptor';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatRadioModule} from '@angular/material/radio';
import {MatTableModule} from '@angular/material/table';
import{MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { BrowserModule } from '@angular/platform-browser';
import { ViewEmployeeComponent } from './user-list/view-employee/view-employee.component';
import { GarbagePointComponent } from './garbage-point/garbage-point.component';
import { GarbageManagementComponent } from './garbage-point/garbage-management/garbage-management.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@NgModule({
  declarations: [
    LeftSidenavComponent,
    RightSidenavComponent,
    FooterComponent,
    DashboardComponent,
    ContentComponent,
    HeaderComponent,
    UsermanagementComponent,
    ChartComponent,
    ProfileComponent,
    FrameComponent,
    CapitalizePipe,
    BackAccountFormatPipe,
    EmployeeManagementComponent,
    ManagerManagementComponent,
    AdminManagementComponent,
    UserListComponent,
    ViewEmployeeComponent,
    GarbagePointComponent,
    GarbageManagementComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatRadioModule,
    MatPaginatorModule,
    MatInputModule,
    MatProgressBarModule
    ],
  exports:[
    DashboardComponent,
    FooterComponent,
    HeaderComponent
],
providers: [httpInterceptorProviders],
})
export class DashboardModule { }
