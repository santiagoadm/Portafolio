import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { ContactComponent } from './contact.component';
import { FALLBACK_PROFILE } from '../../data/fallback-profile';

describe('ContactComponent', () => {
  let fixture: ComponentFixture<ContactComponent>;
  let component: ContactComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactComponent],
      providers: [provideHttpClient()]
    }).compileComponents();

    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('profile', FALLBACK_PROFILE);
    fixture.detectChanges();
  });

  it('muestra errores cuando los campos solo tienen espacios', () => {
    component.form.setValue({ name: '   ', email: 'a@b.co', message: '          ' });
    component.submit();

    expect(component.showError('name')).toBeTrue();
    expect(component.showError('message')).toBeTrue();
    expect(component.showError('email')).toBeFalse();
  });

  it('acepta valores válidos', () => {
    component.form.setValue({
      name: 'Santiago',
      email: 'santiago@example.com',
      message: 'Mensaje de prueba suficientemente largo.'
    });

    expect(component.form.valid).toBeTrue();
  });
});
