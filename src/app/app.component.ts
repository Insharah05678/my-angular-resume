import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeHeaderComponent } from './components/resume-header/resume-header.component';
import { ResumeSidebarComponent } from './components/resume-sidebar/resume-sidebar.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { ProjectsComponent } from './components/projects/projects.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    ResumeHeaderComponent,
    ResumeSidebarComponent,
    ExperienceComponent,
    EducationComponent,
    ProjectsComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  printResume(): void {
    window.print();
  }
}