import { Component, Input } from '@angular/core';
import { Certification } from '../../models/profile.model';

@Component({
  selector: 'app-certifications',
  standalone: true,
  templateUrl: './certifications.component.html',
  styleUrl: './certifications.component.scss'
})
export class CertificationsComponent {
  @Input({ required: true }) certifications: Certification[] = [];
}
