import { Component, Input } from '@angular/core';
import { Profile } from '../../models/profile.model';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  @Input({ required: true }) profile!: Profile;
}
