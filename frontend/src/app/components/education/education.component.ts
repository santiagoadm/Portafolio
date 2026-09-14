import { Component, Input } from '@angular/core';
import { Education } from '../../models/profile.model';

@Component({
  selector: 'app-education',
  standalone: true,
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {
  @Input({ required: true }) education: Education[] = [];
}
