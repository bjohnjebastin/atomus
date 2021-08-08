import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiRoutingModule } from './ui-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MeetingsComponent } from './components/meetings/meetings.component';
import { CreateMeetingComponent } from './components/meetings/create-meeting/create-meeting.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UiRoutingModule
  ],
  declarations: [
    MeetingsComponent,
    CreateMeetingComponent
  ],
})
export class UiModule {}
