import { Profile } from '../models/profile.model';

export const FALLBACK_PROFILE: Profile = {
  name: 'Santiago Andrés D.',
  headline: 'Desarrollador Low Code & High Code | Power Platform · Angular · Python',
  location: 'Colombia',
  email: 'santiagoandresdm@gmail.com',
  github: 'https://github.com/santiagoadm',
  linkedin: 'https://www.linkedin.com/in/santiagoadm',
  about:
    'Desarrollador de soluciones empresariales especializado en Microsoft Power Platform y ' +
    'desarrollo a medida. Combino el enfoque low code (Power Apps, Power Automate, Power BI, ' +
    'Dataverse) con desarrollo high code (Angular, JavaScript/TypeScript, Kotlin, Python y MongoDB) ' +
    'para entregar automatizaciones, portales y aplicaciones que reducen trabajo manual y ponen los ' +
    'datos donde se toman las decisiones.',
  services: [
    {
      title: 'Power Platform',
      description:
        'Power Apps (canvas y model-driven), Power Automate, Power BI y Dataverse: automatización de procesos, ' +
        'flujos de aprobación e integración con Microsoft 365 y APIs externas.',
      icon: 'bolt'
    },
    {
      title: 'Desarrollo Low Code',
      description:
        'Prototipado y entrega rápida de aplicaciones de negocio con conectores, SharePoint y ' +
        'gobierno de soluciones (ALM, entornos, soluciones gestionadas).',
      icon: 'blocks'
    },
    {
      title: 'Desarrollo High Code',
      description:
        'Aplicaciones web con Angular y JavaScript/TypeScript, APIs y automatizaciones en Python, ' +
        'apps Android en Kotlin y persistencia con MongoDB.',
      icon: 'code'
    },
    {
      title: 'Integración de datos',
      description:
        'Diseño de APIs REST, modelado de datos en MongoDB/Dataverse y dashboards para explotar la ' +
        'información del negocio.',
      icon: 'database'
    }
  ],
  skills: [
    { name: 'Power Apps', level: 90, category: 'Low Code' },
    { name: 'Power Automate', level: 90, category: 'Low Code' },
    { name: 'Power BI', level: 80, category: 'Low Code' },
    { name: 'Dataverse / SharePoint', level: 80, category: 'Low Code' },
    { name: 'Angular', level: 85, category: 'High Code' },
    { name: 'JavaScript / TypeScript', level: 85, category: 'High Code' },
    { name: 'Python', level: 80, category: 'High Code' },
    { name: 'Kotlin (Android)', level: 70, category: 'High Code' },
    { name: 'MongoDB', level: 80, category: 'Data' },
    { name: 'REST APIs / Node.js', level: 80, category: 'High Code' },
    { name: 'Git & GitHub', level: 85, category: 'Cloud & DevOps' },
    { name: 'Azure / Microsoft 365', level: 70, category: 'Cloud & DevOps' }
  ],
  experience: [
    {
      role: 'Desarrollador Power Platform',
      company: 'Empresa actual',
      period: '2023 — Actualidad',
      location: 'Remoto',
      summary:
        'Diseño e implementación de soluciones low code para automatizar procesos internos y ' +
        'sustituir hojas de cálculo por aplicaciones gobernadas.',
      highlights: [
        'Aplicaciones canvas y model-driven integradas con Dataverse y SharePoint.',
        'Flujos de Power Automate para aprobaciones, notificaciones y sincronización con APIs.',
        'Dashboards en Power BI para seguimiento operativo en tiempo real.'
      ],
      stack: ['Power Apps', 'Power Automate', 'Power BI', 'Dataverse', 'SharePoint']
    },
    {
      role: 'Desarrollador Full Stack',
      company: 'Proyectos a medida',
      period: '2021 — 2023',
      location: 'Híbrido',
      summary:
        'Desarrollo de aplicaciones web y móviles, APIs y automatizaciones para clientes de distintos sectores.',
      highlights: [
        'SPAs en Angular consumiendo APIs REST propias.',
        'Servicios en Node.js y Python con persistencia en MongoDB.',
        'Aplicaciones Android nativas en Kotlin.'
      ],
      stack: ['Angular', 'TypeScript', 'Node.js', 'Python', 'Kotlin', 'MongoDB']
    }
  ],
  certifications: [
    {
      name: 'Microsoft Certified: Power Platform Fundamentals (PL-900)',
      issuer: 'Microsoft',
      issued: '2023',
      url: 'https://learn.microsoft.com/credentials/certifications/power-plat-fundamentals/'
    },
    {
      name: 'Microsoft Certified: Power Platform App Maker Associate (PL-100)',
      issuer: 'Microsoft',
      issued: '2023',
      url: 'https://learn.microsoft.com/credentials/certifications/power-platform-app-maker/'
    },
    {
      name: 'Microsoft Certified: Azure Fundamentals (AZ-900)',
      issuer: 'Microsoft',
      issued: '2022',
      url: 'https://learn.microsoft.com/credentials/certifications/azure-fundamentals/'
    },
    {
      name: 'MongoDB Associate Developer',
      issuer: 'MongoDB University',
      issued: '2022',
      url: 'https://learn.mongodb.com/'
    }
  ],
  projects: [
    {
      name: 'Portal de automatización de solicitudes',
      description:
        'Portal interno donde los empleados registran solicitudes y los flujos de Power Automate ' +
        'resuelven aprobaciones, notificaciones y trazabilidad.',
      stack: ['Power Apps', 'Power Automate', 'Dataverse']
    },
    {
      name: 'API de gestión documental',
      description:
        'API REST en Node.js/Express con MongoDB para clasificar y consultar documentos, consumida desde Angular.',
      stack: ['Node.js', 'Express', 'MongoDB', 'Angular']
    },
    {
      name: 'App Android de inventario',
      description: 'Aplicación nativa en Kotlin con sincronización offline y lectura de códigos de barras.',
      stack: ['Kotlin', 'Android', 'REST']
    }
  ]
};
