import { Component } from '@angular/core';
import { SkillDetail } from '../skill-detail/skill-detail';
import { SKILLS_DATA, SKILL_SECTIONS } from '../../../../data/skills.data';

@Component({
  selector: 'skill-details',
  imports: [SkillDetail],
  templateUrl: './skill-details.html',
  styleUrl: './skill-details.css',
})
export class SkillDetails {
  sections = SKILL_SECTIONS;

  skills = SKILLS_DATA;
}
