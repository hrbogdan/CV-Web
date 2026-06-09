import { Component, Input } from '@angular/core';

@Component({
  selector: 'skill-row',
  imports: [],
  templateUrl: './skill-row.html',
  styleUrl: './skill-row.css',
})
export class SkillRow {
  @Input() index!: number;

  @Input() section!: string;

  @Input() name!: string;

  @Input() level!: string;
}
