import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface SkillGroup {
  title: string;
  items: string[];
}

@Component({
  selector: 'app-resume-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resume-sidebar.component.html',
  styleUrl: './resume-sidebar.component.scss'
})
export class ResumeSidebarComponent {
  skillGroups: SkillGroup[] = [
    {
      title: 'Technical',
      items: [
        'HTML/CSS and Javascript',
        'MS Office',
        'Python',
        'Graphics Design',
        'Figma',
        'UI/UX',
        'Front End Developer',
        'Angular & .Net',
        'Oracle',
        'MY SQL'
      ]
    },
    {
      title: 'Professional',
      items: [
        'Time Management',
        'Teamwork',
        'Creative Thinking',
        'Written Communication',
        'Presentation Skill'
      ]
    }
  ];

  certificates = [
    'Graphic Designing & Freelancing (Digi skills)',
    'JTECH Participant',
    'Introduction of Python Data Science',
    'JUW-Mathletes Society Performance (for web developer)',
    'Introduction to Flutter (10Pearls University)'
  ];

    weblink1 = ['https://my-angular-resume.insharah-ir.workers.dev/'
  ];    
  weblink2 = ['https://business-hub.insharah-ir.workers.dev/'
  ];
}
