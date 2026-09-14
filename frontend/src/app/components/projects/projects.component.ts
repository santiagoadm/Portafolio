import { Component, Input } from '@angular/core';
import { Project } from '../../models/profile.model';

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  @Input({ required: true }) projects: Project[] = [];
}
