import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() name = '';

  readonly links = [
    { href: '#sobre-mi', label: 'Sobre mí' },
    { href: '#servicios', label: 'Qué hago' },
    { href: '#skills', label: 'Conocimientos' },
    { href: '#experiencia', label: 'Experiencia' },
    { href: '#formacion', label: 'Formación' },
    { href: '#certificaciones', label: 'Certificaciones' },
    { href: '#proyectos', label: 'Proyectos' },
    { href: '#contacto', label: 'Contacto' }
  ];
}
