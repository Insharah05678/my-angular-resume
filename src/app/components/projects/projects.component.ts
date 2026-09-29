import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  type: string;
  description: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Business Hub - FYP',
      type: 'Personal Project',
      description:
        'Created a category-based E-commerce application for students to start business & showcase their skills, using React Native for user-friendly interface and PHP & MySQL for database management.'
    },
    {
      title: 'Optimal Path AI using Python & Driver Demand Prediction',
      type: 'Personal Project',
      description:
        'Created a optimal path AI using Python graph technology using Python plot library. Driver demand prediction also using Python Interpolation.'
    },
    {
      title: 'FYP Automation System',
      type: 'Personal Project',
      description:
        'A web application that automates an organizatio’s final year project process using PHP, MySQL for database.'
    }
  ];
}