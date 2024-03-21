
import { Component } from '@angular/core';

@Component({
  selector: 'app-meeting-schedule',
  templateUrl: './meeting-schedule.component.html',
  styleUrls: ['./meeting-schedule.component.css']
})
export class MeetingScheduleComponent {
  meetings: any[] = []; // Array to store meetings
  newMeeting = { dateTime: '', clientName: '', location: '' }; // Object to store new meeting data

  onSubmit() {
    // Validate form inputs
    if (!this.newMeeting.dateTime || !this.newMeeting.clientName || !this.newMeeting.location) {
      alert("Please fill out all fields.");
      return;
    }

    // Add new meeting to the array
    this.meetings.push({ ...this.newMeeting });

    // Clear form fields
    this.newMeeting = { dateTime: '', clientName: '', location: '' };
  }

/* not used yet
  onCancel() {
    // Implement your cancel logic here
    console.log("Cancel button clicked!");
  } */
  
}

