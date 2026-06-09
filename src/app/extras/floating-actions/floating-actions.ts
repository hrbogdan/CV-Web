import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'floating-actions',
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './floating-actions.html',
  styleUrl: './floating-actions.css',
})
export class FloatingActions {
  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
  scrollToBottom() {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  }
  showHelp() {
    alert(`Navigation:
      - Home
      - About
      - Skills
      - Contact

      Use navigation bar to explore the application
      `);
  }
}
