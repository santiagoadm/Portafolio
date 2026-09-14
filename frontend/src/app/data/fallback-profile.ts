import { Profile } from '../models/profile.model';

export const FALLBACK_PROFILE: Profile = {
  name: 'Santiago Andrés Díaz Medina',
  headline: 'Ingeniero de Software | Seguridad de la Información · Power Platform · Angular',
  location: 'Bogotá, Colombia',
  email: 'santiagoandresdm@gmail.com',
  phone: '+57 313 3597716',
  github: 'https://github.com/santiagoadm',
  linkedin: 'https://www.linkedin.com/in/santiagoadm/',
  about:
    'Ingeniero de Software con experiencia en implementación de sistemas de gestión de seguridad de la ' +
    'información (ISO 27001:2022 y NIST), auditorías internas y respuesta a auditorías externas, junto con ' +
    'desarrollo de software low code y high code. Combino Power Platform y automatización (n8n) con ' +
    'desarrollo a medida en Angular, JavaScript, Kotlin, Python y MongoDB para resolver necesidades de ' +
    'negocio con análisis, mejora continua y orientación al resultado.',
  services: [
    {
      title: 'Seguridad de la información',
      description:
        'Implementación y mejora continua de SGSI bajo ISO 27001:2022 y NIST: documentación normativa, ' +
        'auditorías internas, atención a auditorías externas, gestión de incidentes y de vulnerabilidades.',
      icon: 'shield'
    },
    {
      title: 'Power Platform y automatización',
      description:
        'Power Apps, Power Automate y Power BI, además de workflows en n8n (incluido self-hosted) para ' +
        'automatizar procesos internos y eliminar tareas manuales.',
      icon: 'bolt'
    },
    {
      title: 'Desarrollo low code y high code',
      description:
        'Aplicaciones de negocio rápidas con herramientas low code y desarrollo a medida con Angular, ' +
        'JavaScript/TypeScript, Python, Kotlin y MongoDB.',
      icon: 'code'
    },
    {
      title: 'Gobierno, riesgos y cumplimiento',
      description:
        'Gestión de riesgos (ISO 31000), auditoría interna ISO 9001:2015, evaluaciones de seguridad de ' +
        'clientes y proveedores, y programas de concientización para colaboradores.',
      icon: 'checklist'
    }
  ],
  skills: [
    { name: 'ISO 27001:2022 / SGSI', level: 90, category: 'Seguridad de la Información' },
    { name: 'NIST CSF', level: 80, category: 'Seguridad de la Información' },
    { name: 'Auditoría interna (ISO 27001 / 9001)', level: 85, category: 'Seguridad de la Información' },
    { name: 'Gestión de incidentes y vulnerabilidades', level: 80, category: 'Seguridad de la Información' },
    { name: 'Power Apps / Power Automate', level: 85, category: 'Low Code' },
    { name: 'Power BI', level: 75, category: 'Low Code' },
    { name: 'n8n (workflows, self-hosted)', level: 80, category: 'Low Code' },
    { name: 'Angular', level: 80, category: 'High Code' },
    { name: 'JavaScript / TypeScript', level: 80, category: 'High Code' },
    { name: 'Python', level: 75, category: 'High Code' },
    { name: 'Kotlin (Android)', level: 70, category: 'High Code' },
    { name: 'MongoDB', level: 75, category: 'Datos y Nube' },
    { name: 'AWS Cloud Foundations', level: 70, category: 'Datos y Nube' },
    { name: 'Microsoft 365 / Google Workspace', level: 85, category: 'Datos y Nube' }
  ],
  experience: [
    {
      role: 'Analista / Consultor de Seguridad de la Información',
      company: 'Grant Thornton Colombia',
      period: 'Julio 2026 — Actualidad',
      summary:
        'Responsable del mantenimiento y la mejora continua del SGSI basado en ISO 27001:2022 y NIST.',
      highlights: [
        'Elaboración de documentación normativa y ejecución de auditorías internas; atención a auditorías externas.',
        'Gestión de la respuesta a incidentes de seguridad y monitoreo de vulnerabilidades.',
        'Programas de concientización para colaboradores y evaluaciones de seguridad de clientes y proveedores.',
        'Coordinación de requerimientos tecnológicos de seguridad de la información, TI y transformación digital.'
      ],
      stack: ['ISO 27001:2022', 'NIST', 'Gestión de incidentes', 'Auditoría', 'Transformación digital']
    },
    {
      role: 'Asistente de Seguridad de la Información',
      company: 'Grant Thornton Colombia',
      period: 'Enero 2025 — Junio 2026',
      summary:
        'Implementación del SGSI bajo ISO 27001:2022 y NIST, con documentación y auditorías sobre ambas normas.',
      highlights: [
        'Respuesta a auditorías internas y externas, y realización de auditorías internas.',
        'Gestión y monitoreo de vulnerabilidades y gestión de incidentes de seguridad.',
        'Capacitación y concientización de los colaboradores de la empresa.'
      ],
      stack: ['ISO 27001:2022', 'NIST', 'Vulnerabilidades', 'Capacitación']
    },
    {
      role: 'Auxiliar de Seguridad de la Información',
      company: 'Grant Thornton Colombia',
      period: 'Mayo 2023 — Diciembre 2024',
      summary:
        'Apoyo a la implementación del SGSI ISO 27001:2022 y NIST y a la documentación de ambas normas.',
      highlights: [
        'Respuesta a auditorías externas y realización de auditorías internas.',
        'Gestión de incidentes de seguridad y respuesta a evaluaciones de clientes y proveedores.',
        'Capacitación y concientización de colaboradores.'
      ],
      stack: ['ISO 27001:2022', 'NIST', 'Documentación', 'Auditoría interna']
    },
    {
      role: 'Aprendiz de Seguridad de la Información y Ciberseguridad',
      company: 'Bolsa de Valores de Colombia',
      period: 'Octubre 2022 — Abril 2023',
      summary: 'Apoyo al área de seguridad de la información y ciberseguridad de la organización.',
      highlights: [
        'Seguimiento de capacitaciones dentro de la organización.',
        'Control y actualización del inventario de activos de información.',
        'Acompañamiento y validación de planes de acción y hallazgos de auditoría.',
        'Validación del inventario de software open source y licenciado.'
      ],
      stack: ['Activos de información', 'Auditoría', 'Ciberseguridad']
    }
  ],
  education: [
    {
      program: 'Especialización en Ciberseguridad y Ciberdefensa (cursando)',
      institution: 'Universidad Santo Tomás',
      period: 'Actualidad'
    },
    {
      program: 'Ingeniería de Software',
      institution: 'Fundación Universitaria Compensar',
      period: '2021 — 2026'
    },
    {
      program: 'Tecnólogo en Desarrollo de Aplicaciones Web y Móviles',
      institution: 'Fundación Universitaria Compensar',
      period: '2021 — 2024'
    },
    {
      program: 'Técnico Profesional en Programación de Aplicaciones de Software',
      institution: 'Fundación Universitaria Compensar',
      period: '2021 — 2024'
    },
    { program: 'Inglés B2', institution: 'London Language Institute', period: '2020' }
  ],
  certifications: [
    { name: 'Ethical Hacking Professional Certification', issuer: 'CertiProf', issued: 'Jul 2026' },
    { name: 'Artificial Intelligence and Cybersecurity Essentials', issuer: 'HPE', issued: 'Jun 2026' },
    {
      name: 'Automatizaciones con n8n: self-hosted para empresas y workflows profesionales',
      issuer: 'Platzi',
      issued: 'Ene 2026'
    },
    { name: 'Gestión de Riesgos — ISO 31000:2018', issuer: 'Udemy', issued: 'Nov 2025' },
    { name: 'Analista SOC N1', issuer: 'Comunidad Dojo', issued: 'Sept 2025' },
    { name: 'Lead Auditor ISO 27001', issuer: 'CertiProf', issued: 'Ago 2025' },
    {
      name: 'AWS Academy Graduate — AWS Academy Cloud Foundations',
      issuer: 'Amazon Web Services',
      issued: 'May 2024'
    },
    {
      name: 'ISO 27001 Lead Implementer',
      issuer: 'CertiProf',
      issued: 'Sept 2024',
      credentialId: 'I27001CLI'
    },
    { name: 'Auditor Interno ISO 9001:2015', issuer: 'Instituto Tecnisistemas', issued: 'Sept 2024' },
    { name: 'Arquitectura en la Nube', issuer: 'Cymetria y MinTIC', issued: 'Sept 2024' },
    { name: 'Lead Cybersecurity Professional', issuer: 'Wolf Hack Academy', issued: 'Mar 2024' },
    { name: 'Implementación ISO 27001', issuer: 'Udemy', issued: 'Mar 2023' }
  ],
  projects: [
    {
      name: 'Implementación de SGSI ISO 27001:2022',
      description:
        'Documentación normativa, análisis de riesgos, auditorías internas y atención a auditorías externas ' +
        'para sostener la certificación del sistema de gestión.',
      stack: ['ISO 27001:2022', 'NIST', 'Gestión de riesgos']
    },
    {
      name: 'Automatización de procesos con Power Platform y n8n',
      description:
        'Flujos de aprobación, notificaciones e integraciones entre Microsoft 365 y APIs externas para ' +
        'eliminar tareas manuales y dejar trazabilidad.',
      stack: ['Power Apps', 'Power Automate', 'n8n', 'Microsoft 365']
    },
    {
      name: 'Portfolio personal (este sitio)',
      description:
        'Aplicación Angular con API REST en Node.js/Express y TypeScript, desplegable como sitio estático ' +
        'con datos de respaldo.',
      stack: ['Angular', 'TypeScript', 'Node.js', 'Express'],
      url: 'https://github.com/santiagoadm/Portafolio'
    }
  ]
};
