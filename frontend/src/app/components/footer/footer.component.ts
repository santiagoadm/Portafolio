import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer>
      <div class="container">
        <p class="muted">© {{ year }} {{ name }} · Hecho con Angular y Node.js</p>
      </div>
    </footer>
  `,
  styles: [
    `
      footer {
        border-top: 1px solid var(--border);
        padding: 28px 0;
        text-align: center;
      }

      p {
        font-size: 0.88rem;
        margin: 0;
      }
    `
  ]
})
export class FooterComponent {
  @Input() name = '';
  readonly year = new Date().getFullYear();
}
