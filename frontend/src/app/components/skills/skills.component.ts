import { Component, Input, computed, signal } from '@angular/core';
import { Skill } from '../../models/profile.model';

@Component({
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  private readonly skillsSignal = signal<Skill[]>([]);

  @Input({ required: true }) set skills(value: Skill[]) {
    this.skillsSignal.set(value ?? []);
  }

  readonly groups = computed(() => {
    const byCategory = new Map<string, Skill[]>();
    for (const skill of this.skillsSignal()) {
      byCategory.set(skill.category, [...(byCategory.get(skill.category) ?? []), skill]);
    }
    return [...byCategory.entries()].map(([category, items]) => ({ category, items }));
  });
}
