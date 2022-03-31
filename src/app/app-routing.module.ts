import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentsListComponent } from './appointments-list/appointments-list.component';
import { AppointmentsDetailsComponent } from './appointments-details/appointments-details.component';
import { AddAppointmentsComponent } from './add-appointments/add-appointments.component';

const routes: Routes = [
  {path:'', redirectTo: 'Appointments', pathMatch: 'full'},
  {path:'Appointments', component: AppointmentsDetailsComponent},
  {path:'Appointments/:id', component: AppointmentsDetailsComponent},
  {path:'add', component: AddAppointmentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
