import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-home',
  standalone: true,
  imports: [],
  templateUrl: './home-home.component.html',
  styleUrl: './home-home.component.css'
})
export class HomeHomeComponent implements OnInit {
  bankerName = "bankerName"; 
  bankerAddress = 'bankerAddress'; 
  bankerCity = 'bankerCity'; 
  bankerState = 'bankerState'; 
  bankerZip = 'bankerZip'; 
  bankerPhone = 'bankerPhone'; 
  bankerEmail = 'bankerEmail'; 
  summary = 'summary';
  school = 'school'; 
  schoolDates = 'schoolDates'; 
  schoolDegree = 'schoolDegree'; 
  employerName = 'employerName'; 
  jobTitle = 'jobTitle'; 
  employmentDates = 'employmentDates';   

  constructor() { }

  ngOnInit(): void { }
}
