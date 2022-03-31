import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddAppointmentsComponent } from './add-appointments/add-appointments.component';
import { AppointmentsDetailsComponent } from './appointments-details/appointments-details.component';
import { AppointmentsListComponent } from './appointments-list/appointments-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddAppointmentsComponent,
    AppointmentsDetailsComponent,
    AppointmentsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
