// Language switching functionality
const languageSelect = document.getElementById('languageSelect');
let currentLang = 'es';

// Language translations
const translations = {
  es: {
    // Navigation
    'about': 'Acerca de mí',
    'resume': 'Currículum',
    'portfolio': 'Portafolio',
    
    // Sidebar
    'showContacts': 'Mostrar Contactos',
    'email': 'Email',
    'phone': 'Teléfono',
    'birthday': 'Cumpleaños',
    'location': 'Ubicación',
    
    // About section
    'aboutTitle': 'Acerca de mí',
    'aboutText1': 'Soy Ingeniero de Sistemas con más de 4 años de experiencia como desarrollador backend, especializado en Java (Spring Boot / WebFlux) y Node.js, con enfoque en arquitectura de microservicios, integración de sistemas financieros y despliegue en AWS (ECS, DynamoDB, SQS, EventBridge, S3).',
    'aboutText2': 'Actualmente trabajo en Pragma (cliente: Nequi Colombia), desarrollando microservicios de alta disponibilidad para el ecosistema de tarjetas (tokenización, emisión física, contracargos y notificaciones). Me apasiona construir soluciones escalables, limpias y seguras, aplicando principios SOLID, Clean Code, y buenas prácticas DevOps con Terraform y CI/CD en Azure DevOps.',
    'whatIDo': 'Lo que hago',
    'backendDev': 'Backend Development',
    'backendText': 'Desarrollo de microservicios en Java y Node.js con enfoque en rendimiento y resiliencia.',
    'cloudInfra': 'Cloud Infrastructure',
    'cloudText': 'Automatización y despliegue de infraestructura en AWS con Terraform y contenedores ECS/ECR.',
    'apiDesign': 'API Design',
    'apiText': 'Diseño de APIs REST y event-driven para ecosistemas financieros.',
    'integrations': 'Mobile & Web Integrations',
    'integrationsText': 'Integraciones backend con apps móviles y portales web en Flutter y Angular.',
    'technologies': 'Tecnologías',
    'experience': 'Experiencia',
    'clients': 'Clientes',
    
    // Resume section
    'resumeTitle': 'Currículum',
    'education': 'Educación',
    'workExperience': 'Experiencia Laboral',
    'mySkills': 'Mis Habilidades',
    
    // Portfolio section
    'portfolioTitle': 'Portafolio',
    'portfolioNote': 'No se puede mostrar la mayoría de proyectos pues son clasificados de los clientes.',
    'selectCategory': 'Seleccionar categoría',
    'all': 'Todos',
    'mobileApps': 'Aplicaciones Móviles',
    'microservices': 'Microservicios',
    'webDev': 'Desarrollo Web'
  },
  en: {
    // Navigation
    'about': 'About Me',
    'resume': 'Resume',
    'portfolio': 'Portfolio',
    
    // Sidebar
    'showContacts': 'Show Contacts',
    'email': 'Email',
    'phone': 'Phone',
    'birthday': 'Birthday',
    'location': 'Location',
    
    // About section
    'aboutTitle': 'About Me',
    'aboutText1': 'I am a Systems Engineer with over 4 years of experience as a backend developer, specialized in Java (Spring Boot / WebFlux) and Node.js, with a focus on microservices architecture, financial systems integration, and AWS deployment (ECS, DynamoDB, SQS, EventBridge, S3).',
    'aboutText2': 'Currently working at Pragma (client: Nequi Colombia), developing high-availability microservices for the card ecosystem (tokenization, physical issuance, chargebacks, and notifications). I am passionate about building scalable, clean, and secure solutions, applying SOLID principles, Clean Code, and DevOps best practices with Terraform and CI/CD in Azure DevOps.',
    'whatIDo': 'What I Do',
    'backendDev': 'Backend Development',
    'backendText': 'Development of microservices in Java and Node.js with focus on performance and resilience.',
    'cloudInfra': 'Cloud Infrastructure',
    'cloudText': 'Automation and deployment of AWS infrastructure with Terraform and ECS/ECR containers.',
    'apiDesign': 'API Design',
    'apiText': 'Design of REST and event-driven APIs for financial ecosystems.',
    'integrations': 'Mobile & Web Integrations',
    'integrationsText': 'Backend integrations with mobile apps and web portals in Flutter and Angular.',
    'technologies': 'Technologies',
    'experience': 'Experience',
    'clients': 'Clients',
    
    // Resume section
    'resumeTitle': 'Resume',
    'education': 'Education',
    'workExperience': 'Work Experience',
    'mySkills': 'My Skills',
    
    // Portfolio section
    'portfolioTitle': 'Portfolio',
    'portfolioNote': 'Most projects cannot be shown as they are classified by clients.',
    'selectCategory': 'Select category',
    'all': 'All',
    'mobileApps': 'Mobile Apps',
    'microservices': 'Microservices',
    'webDev': 'Web Development'
  }
};

// Function to change language
function changeLanguage(lang) {
  currentLang = lang;
  
  // Update navigation
  document.querySelector('[data-nav-link]').textContent = translations[lang].about;
  document.querySelectorAll('[data-nav-link]')[1].textContent = translations[lang].resume;
  document.querySelectorAll('[data-nav-link]')[2].textContent = translations[lang].portfolio;
  
  // Update sidebar
  document.querySelector('.info_more-btn span').textContent = translations[lang].showContacts;
  document.querySelectorAll('.contact-title')[0].textContent = translations[lang].email;
  document.querySelectorAll('.contact-title')[1].textContent = translations[lang].phone;
  document.querySelectorAll('.contact-title')[2].textContent = translations[lang].birthday;
  document.querySelectorAll('.contact-title')[3].textContent = translations[lang].location;
  
  // Update about section
  document.querySelector('.about .article-title').textContent = translations[lang].aboutTitle;
  document.querySelectorAll('.about-text p')[0].textContent = translations[lang].aboutText1;
  document.querySelectorAll('.about-text p')[1].textContent = translations[lang].aboutText2;
  
  document.querySelector('.service-title').textContent = translations[lang].whatIDo;
  document.querySelectorAll('.service-item-title')[0].textContent = translations[lang].backendDev;
  document.querySelectorAll('.service-item-text')[0].textContent = translations[lang].backendText;
  document.querySelectorAll('.service-item-title')[1].textContent = translations[lang].cloudInfra;
  document.querySelectorAll('.service-item-text')[1].textContent = translations[lang].cloudText;
  document.querySelectorAll('.service-item-title')[2].textContent = translations[lang].apiDesign;
  document.querySelectorAll('.service-item-text')[2].textContent = translations[lang].apiText;
  document.querySelectorAll('.service-item-title')[3].textContent = translations[lang].integrations;
  document.querySelectorAll('.service-item-text')[3].textContent = translations[lang].integrationsText;
  
  document.querySelectorAll('.service-title')[1].textContent = translations[lang].technologies;
  document.querySelector('.testimonials-title').textContent = translations[lang].experience;
  document.querySelector('.clients-title').textContent = translations[lang].clients;
  
  // Update resume section
  document.querySelector('.resume .article-title').textContent = translations[lang].resumeTitle;
  document.querySelectorAll('.timeline .h3')[0].textContent = translations[lang].education;
  document.querySelectorAll('.timeline .h3')[1].textContent = translations[lang].workExperience;
  document.querySelector('.skills-title').textContent = translations[lang].mySkills;
  
  // Update portfolio section
  document.querySelector('.portfolio .article-title').textContent = translations[lang].portfolioTitle;
  document.querySelector('.disclaimer-text strong').nextSibling.textContent = ' ' + translations[lang].portfolioNote;
  document.querySelector('.select-value').textContent = translations[lang].selectCategory;
  
  // Update portfolio filters
  document.querySelectorAll('[data-filter-btn]')[0].textContent = translations[lang].all;
  document.querySelectorAll('[data-filter-btn]')[1].textContent = translations[lang].mobileApps;
  document.querySelectorAll('[data-filter-btn]')[2].textContent = translations[lang].microservices;
  document.querySelectorAll('[data-filter-btn]')[3].textContent = translations[lang].webDev;
  
  document.querySelectorAll('[data-select-item]')[0].textContent = translations[lang].all;
  document.querySelectorAll('[data-select-item]')[1].textContent = translations[lang].mobileApps;
  document.querySelectorAll('[data-select-item]')[2].textContent = translations[lang].microservices;
  document.querySelectorAll('[data-select-item]')[3].textContent = translations[lang].webDev;
  
  // Update navigation mapping for JavaScript
  updateNavigationMapping(lang);
  
  // Store language preference
  localStorage.setItem('preferredLanguage', lang);
}

// Update navigation mapping
function updateNavigationMapping(lang) {
  const navMap = {
    'acerca de mí': 'about',
    'about me': 'about',
    'currículum': 'resume',
    'resume': 'resume',
    'portafolio': 'portfolio',
    'portfolio': 'portfolio'
  };
  
  // Store current mapping globally
  window.currentNavMap = navMap;
}

// Handle language change
languageSelect.addEventListener('change', function() {
  changeLanguage(this.value);
});

// Initialize language on page load
document.addEventListener('DOMContentLoaded', function() {
  const savedLang = localStorage.getItem('preferredLanguage') || 'es';
  languageSelect.value = savedLang;
  if (savedLang !== 'es') {
    changeLanguage(savedLang);
  }
});