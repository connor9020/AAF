import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClientCreationComponent } from './client-creation/client-creation.component';
import { MeetingScheduleComponent } from './meeting-schedule/meeting-schedule.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'client-creation', component: ClientCreationComponent },
  { path: 'meetings', component: MeetingScheduleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
