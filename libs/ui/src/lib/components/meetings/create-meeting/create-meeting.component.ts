import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Meeting } from '@atomus/api-interface';
import { MeetingService } from '../../../service/meeting.service';

@Component({
  selector: 'atomus-create-meeting',
  templateUrl: './create-meeting.component.html',
  styleUrls: ['./create-meeting.component.scss']
})
export class CreateMeetingComponent implements OnInit {

  bookedMeetingInfo = sessionStorage.getItem('bookedMeetingInfo');

  meetingForm: FormGroup;

  constructor(
    private meetingService: MeetingService,
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.meetingForm = this.formBuilder.group({
      personName: ['', Validators.required],
      bookingDate: ['', Validators.required],
      meetingReason: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.meetingForm.valid) {
      const meeting: Meeting = {
        personName: this.meetingForm.get('personName')?.value,
        bookingDate: this.meetingForm.get('bookingDate')?.value,
        meetingReason: this.meetingForm.get('meetingReason')?.value
      }

      this.meetingService.bookMeeting(meeting).subscribe(meetingResult => {
        this.bookedMeetingInfo = meetingResult.message;
        sessionStorage.setItem('bookedMeetingInfo', meetingResult.message);
      });
    }
  }
}
