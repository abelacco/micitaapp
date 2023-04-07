import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { FiltersComponent } from './filters/filters.component';
import { DoctorCardComponent } from './doctor-card/doctor-card.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { ButtonModule } from 'primeng/button';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DetalleDoctorComponent } from './detalle-doctor/detalle-doctor.component';
import { HttpClientModule } from '@angular/common/http'; 

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'doctor/:id', component: DetalleDoctorComponent }
];

@NgModule({
  declarations: [HomeComponent, FiltersComponent, DoctorCardComponent, DetalleDoctorComponent],
  imports: [CommonModule,HttpClientModule, RouterModule.forChild(routes) ,ButtonModule,FormsModule,InputTextareaModule,DropdownModule,CalendarModule],
})
export class HomeModule {}
