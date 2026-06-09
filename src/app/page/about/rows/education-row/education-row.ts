import { Component, Input } from '@angular/core';

@Component({
  selector: 'education-row',
  standalone: true,
  imports: [],
  templateUrl: './education-row.html',
  styleUrl: './education-row.css',
})
export class EducationRow {
  @Input() index!: number;

  @Input() institution!: string;

  @Input() specialization!: string;

  @Input() period!: string;

  @Input() diploma!: string;

  @Input() webSite!: string;
}
