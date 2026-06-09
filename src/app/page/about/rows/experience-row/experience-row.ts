import { Component, Input } from '@angular/core';

@Component({
  selector: 'experience-row',
  imports: [],
  templateUrl: './experience-row.html',
  styleUrl: './experience-row.css',
})
export class ExperienceRow {
  @Input() index!: number;

  @Input() organization!: string;

  @Input() position!: string;

  @Input() webSite!: string;

  @Input() period!: string;
}
