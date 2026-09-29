import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-resume-header',
  templateUrl: './resume-header.component.html',
  styleUrls: ['./resume-header.component.scss']
})
export class ResumeHeaderComponent {
  isMobile = window.innerWidth < 768;

  // Ye screen resize pe If-Else check karega
  @HostListener('window:resize')
  onResize() {
    if (window.innerWidth < 768) {
      this.isMobile = true; // choti screen
    } else {
      this.isMobile = false; // bari screen
    }
  }
}