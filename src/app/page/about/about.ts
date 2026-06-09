import { Component, OnInit } from '@angular/core';

import { SKILLS_DATA } from '../../../data/skills.data';
import { EDUCATION_DATA } from '../../../data/education.data';
import { EXPERIENCE_DATA } from '../../../data/experience.data';

import { MatExpansionModule } from '@angular/material/expansion';
import { FormsModule } from '@angular/forms';

import { Table } from './rows/table/table';

@Component({
  selector: 'app-about',
  imports: [MatExpansionModule, Table, FormsModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About implements OnInit {
  skillData = SKILLS_DATA;
  educationData = EDUCATION_DATA;
  experienceData = EXPERIENCE_DATA;

  filteredEducation = EDUCATION_DATA;
  filteredExperience = EXPERIENCE_DATA;
  filteredSkills = SKILLS_DATA;

  ngOnInit(): void {
    this.filteredEducation = this.educationData;
    this.filteredExperience = this.experienceData;
    this.filteredSkills = this.skillData;
  }

  applySearch(): void {
    const term = this.searchTerm.trim().toLowerCase();

    this.filteredEducation = this.educationData.filter(
      (item) =>
        !term ||
        item.period.toLowerCase().includes(term) ||
        item.institution.toLowerCase().includes(term) ||
        item.specialization.toLowerCase().includes(term) ||
        item.diploma.toLowerCase().includes(term),
    );

    this.filteredExperience = this.experienceData.filter(
      (item) =>
        !term ||
        item.period.toLowerCase().includes(term) ||
        item.organization.toLowerCase().includes(term) ||
        item.position.toLowerCase().includes(term),
    );

    this.filteredSkills = this.skillData.filter(
      (item) =>
        !term ||
        item.section.toLowerCase().includes(term) ||
        item.name.toLowerCase().includes(term) ||
        item.level.toLowerCase().includes(term),
    );
  }

  searchTerm = '';
}
