import { Component, Input, inject, signal } from '@angular/core';
import { AbstractControl, FormBuilder, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { Profile } from '../../models/profile.model';
import { ProfileService } from '../../services/profile.service';

function trimmedLength(min: number) {
  return (control: AbstractControl): ValidationErrors | null => {
    const length = (control.value as string).trim().length;
    if (length === 0) {
      return { required: true };
    }
    return length < min ? { minlength: { requiredLength: min, actualLength: length } } : null;
  };
}

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
    name: ['', trimmedLength(1)],
    email: ['', [trimmedLength(1), Validators.email]],
    message: ['', trimmedLength(10)]
  });

  showError(field: 'name' | 'email' | 'message'): boolean {
    const control = this.form.controls[field];
    return control.invalid && (control.touched || control.dirty);
  }

  submit(): void {
    const { name, email, message } = this.form.getRawValue();
    const payload = { name: name.trim(), email: email.trim(), message: message.trim() };

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.status.set('sending');
    this.profileService.sendContact(payload).subscribe({
      next: () => {
        this.status.set('sent');
        this.form.reset();
      },
      error: () => this.status.set('error')
    });
  }
}
