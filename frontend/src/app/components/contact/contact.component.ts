import { Component, Input, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Profile } from '../../models/profile.model';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  @Input({ required: true }) profile!: Profile;

  private readonly profileService = inject(ProfileService);

  readonly status = signal<'idle' | 'sending' | 'sent' | 'error'>('idle');

  readonly form = inject(FormBuilder).nonNullable.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10)]]
  });

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.status.set('sending');
    this.profileService.sendContact(this.form.getRawValue()).subscribe({
      next: () => {
        this.status.set('sent');
        this.form.reset();
      },
      error: () => this.status.set('error')
    });
  }
}
