import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FALLBACK_PROFILE } from './data/fallback-profile';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [provideHttpClient(), provideHttpClientTesting()]
    }).compileComponents();
  });

  it('renders the profile returned by the API', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();

    TestBed.inject(HttpTestingController)
      .expectOne((req) => req.url.endsWith('/profile'))
      .flush(FALLBACK_PROFILE);
    fixture.detectChanges();

    const text: string = fixture.nativeElement.textContent;
    expect(text).toContain(FALLBACK_PROFILE.name);
    expect(text).toContain('Certificaciones');
    expect(text).toContain(FALLBACK_PROFILE.certifications[0].name);
  });
});
