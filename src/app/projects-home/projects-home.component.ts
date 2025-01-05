import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects-home',
  standalone: true,
  imports: [],
  templateUrl: './projects-home.component.html',
  styleUrl: './projects-home.component.css'
})
export class ProjectsHomeComponent implements OnInit {
  firstName: string = "firstName";
  lastName: string = "lastName";
  phoneNumber: string = "phoneNumber";

  setProperty(event: Event) {
    let target = event.target as HTMLInputElement;
    let property: string = target.id;
    switch(property) {
      case "firstNameInput":
        this.firstName = target.value;
        break;
      case "lastNameInput":
        this.lastName = target.value;
        break;
      case "phoneNumberInput":
        this.phoneNumber = target.value;
        break;
      default:
        console.warn("No matching ID found for input.");
        break;
    }
  }

  constructor() { }

  ngOnInit(): void { }
}
