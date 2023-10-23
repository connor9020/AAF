import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-creation',
  templateUrl: './client-creation.component.html',
  styleUrls: ['./client-creation.component.css']
})
export class ClientCreationComponent implements OnInit {
name = "";
email = "";
password = "";

  constructor() {}

  ngOnInit() {}
  
  submitForm() {
    const message = `Your name is ${this.name}. Your email is ${this.email}`;
    // grab all the fields and their values
    alert(message)
  }
}
