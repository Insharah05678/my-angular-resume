import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Experience {
  role: string;
  company: string;
  dates: string;
  location: string;
  description: string;
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      role: 'ADMINISTRATOR OFFICE',
      company: 'The Educatum School Excellence',
      dates: '11/2025 – 04/2026',
      location: 'Karachi, Pakistan',
      description:
        'A detail-oriented Admin Assistant is responsible for supporting school operations by maintaining records, coordinating meetings and events, handling correspondence, ensuring office supplies are stocked, and assisting students and parents with admissions and fees, while fostering a welcoming environment.'
    },
    {
      role: 'INTERNEE',
      company: 'Pakistan Civil Aviation Authority',
      dates: '03/2024 – 04/2024',
      location: 'Karachi, Pakistan',
      description:
        'A web application utilizing MySQL and PHP Laravel has been developed specifically for airport operations and scheduling. This application aims to enhance productivity and efficiency, offering users an intuitive interface that facilitates seamless operations.'
    },
    {
      role: 'INTERNEE',
      company: 'Growintern',
      dates: '01/2024 – 02/2024',
      location: 'Karachi, Pakistan',
      description:
        'As a Graphic Intern, I created visuals for social media and events using Canva and Adobe tools. I created some logos, business cards, brochures and all type of posters.'
    }
  ];
}