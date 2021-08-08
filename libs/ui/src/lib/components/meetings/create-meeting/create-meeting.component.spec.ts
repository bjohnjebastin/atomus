import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CreateMeetingComponent } from './create-meeting.component';

describe('CreateMeetingComponent', () => {
  let component: CreateMeetingComponent;
  let fixture: ComponentFixture<CreateMeetingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateMeetingComponent ],
      imports: [
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMeetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('check initial form values', () => {
    const meetingFormGroup = component.meetingForm;
    const meetingFormValues = {
      personName: '',
      bookingDate: '',
      meetingReason: ''
    };
    expect(meetingFormGroup.value).toEqual(meetingFormValues);
  });
});
