import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'atomus-meetings',
  templateUrl: './meetings.component.html',
  styleUrls: ['./meetings.component.scss']
})
export class MeetingsComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  
  /**
   * Navigate to create meeting page
   *
   * @memberof MeetingsComponent
   */
  createMeeting(): void {
    this.router.navigate(['/meetings/create']);
  }
}
