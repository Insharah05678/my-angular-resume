import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Education {
  institution: string;
  degree: string;
  dates: string;
}

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {
  education: Education[] = [
    {
      institution: 'Jinnah University For Women',
      degree: 'BACHELOR OF SCIENCE IN COMPUTER SCIENCE',
      dates: '01/2020 – 05/2024'
    },
    {
      institution: 'Government College for Women, Nazimabad Karachi',
      degree: 'INTERMEDIATE IN PRE-ENGINEERING',
      dates: '08/2017 – 08/2019'
    },
    {
      institution: 'Brilliant Career Secondary School, Karachi',
      degree: 'MATRICULATION IN SCIENCE',
      dates: '04/2015 – 08/2017'
    }
  ];
}