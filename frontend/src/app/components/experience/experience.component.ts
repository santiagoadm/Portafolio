import { Component, Input } from '@angular/core';
import { Experience } from '../../models/profile.model';

@Component({
  selector: 'app-experience',
  standalone: true,
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  @Input({ required: true }) experience: Experience[] = [];
}
