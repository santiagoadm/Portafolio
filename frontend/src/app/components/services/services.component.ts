import { Component, Input } from '@angular/core';
import { Service } from '../../models/profile.model';

@Component({
  selector: 'app-services',
  standalone: true,
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  @Input({ required: true }) services: Service[] = [];
}
