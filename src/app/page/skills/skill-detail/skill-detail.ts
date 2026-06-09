import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBar } from '@angular/material/progress-bar';

@Component({
  selector: 'skill-detail',
  standalone: true,
  imports: [MatCardModule, MatProgressBar],
  templateUrl: './skill-detail.html',
  styleUrl: './skill-detail.css',
})
export class SkillDetail {
  @Input() name!: string;
  @Input() level!: string;
  @Input() percentage!: number;
  @Input() icon!: string;
}
