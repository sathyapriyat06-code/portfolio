/* ==========================================================================
   PORTFOLIO INTERACTIVE JAVASCRIPT & EASY CONTENT MANAGEMENT DATA
   Developer: SATHYAPRIYA T
   Role: Full Stack Developer | Computer Science Engineer
   ========================================================================== */

// --------------------------------------------------------------------------
// 1. DATA STRUCTURES FOR EASY CONTENT MANAGEMENT
// --------------------------------------------------------------------------

/**
 * Projects Data Array
 * Easily add or edit projects here!
 */
const projectsData = [
  {
    id: "proj-1",
    title: "Decentralised Certificate Verification System",
    category: "Academic",
    badge: "Academic Project",
    technology: ["Blockchain", "React.js", "Solidity", "IPFS", "MetaMask"],
    description: "A blockchain-based certificate verification system designed to provide secure and tamper-resistant certificate verification.",
    image: "assets/projects/blockchain-cert.svg",
    features: [
      { text: "Certificate upload", status: "implemented" },
      { text: "Certificate verification", status: "implemented" },
      { text: "Unique certificate ID generation", status: "implemented" },
      { text: "QR-based verification", status: "planned" },
      { text: "Admin management dashboard", status: "planned" },
      { text: "Blockchain smart contract verification", status: "planned" }
    ],
    github: "",
    demo: "",
    statusText: "In Active Development"
  },
  {
    id: "proj-2",
    title: "Real-Time Chat Application",
    category: "Internship",
    badge: "MERN Internship Project",
    technology: ["MERN Stack", "Socket.IO", "React.js", "Node.js", "Express.js", "MongoDB"],
    description: "A real-time communication platform designed for personal, educational and professional communication built during WilTech Solutions internship.",
    image: "assets/projects/chat-app.svg",
    features: [
      { text: "User authentication & JWT authorization", status: "implemented" },
      { text: "Real-time instant messaging via Socket.IO", status: "implemented" },
      { text: "File sharing & attachment preview", status: "implemented" },
      { text: "Team management & group channels", status: "implemented" },
      { text: "Online / offline presence indicators", status: "implemented" },
      { text: "Typing indicators & active status", status: "implemented" }
    ],
    github: "https://github.com/sathyapriyat06-code/chat_app.git",
    demo: "",
    statusText: "Completed"
  },
  {
    id: "proj-3",
    title: "Coffee Website",
    category: "Internship",
    badge: "Python Internship Project",
    technology: ["Python Full Stack", "HTML5", "CSS3", "JavaScript"],
    description: "A responsive coffee website developed during my Python Full Stack internship at U.N.I.Q Technology, focusing on user-friendly design and web application development.",
    image: "assets/projects/coffee-website.svg",
    features: [
      { text: "Interactive beverage menu & filtering", status: "implemented" },
      { text: "Responsive user-friendly ordering interface", status: "implemented" },
      { text: "Python backend data integration", status: "implemented" },
      { text: "Customer review & feedback section", status: "implemented" }
    ],
    github: "",
    demo: "",
    statusText: "Completed"
  },
  {
    id: "proj-4",
    title: "Instagram Clone Interface",
    category: "Personal",
    badge: "Personal Project",
    technology: ["React.js", "JavaScript (ES6+)", "CSS3 Modules", "HTML5"],
    description: "A responsive Instagram-inspired social media interface developed using React.js with reusable components and responsive layouts.",
    image: "assets/projects/instagram-clone.svg",
    features: [
      { text: "User profile interface with bio & story highlights", status: "implemented" },
      { text: "Feed posts with like toggle & comment section", status: "implemented" },
      { text: "Responsive grid layout for mobile & desktop", status: "implemented" },
      { text: "Reusable React UI component architecture", status: "implemented" }
    ],
    github: "https://github.com/sathyapriyat06-code/Clonewebsite_Instagram.git",
    demo: "",
    statusText: "Completed"
  }
];

/**
 * Internships Data Array
 */
const internshipsData = [
  {
    id: "intern-1",
    role: "MERN Stack Developer Intern",
    company: "WilTech Solutions, Madurai",
    duration: "01 June 2026 – 30 June 2026",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "REST APIs", "Git"],
    description: "Worked on full-stack web application development using the MERN stack. Developed responsive interfaces, implemented REST APIs and worked with MongoDB for data management.",
    responsibilities: [
      "Developed responsive full-stack web application features using React & Bootstrap.",
      "Built and tested robust RESTful APIs with Node.js and Express.",
      "Implemented secure user authentication features and session state.",
      "Worked with MongoDB for application data storage, schemas, and queries.",
      "Debugged complex application issues and optimized database queries.",
      "Used Git for collaborative version control and feature branching.",
      "Contributed effectively to real-world software development tasks."
    ],
    certificatePath: "assets/certificates/mern-internship.pdf"
  },
  {
    id: "intern-2",
    role: "Python Full Stack Intern",
    company: "U.N.I.Q Technology, Chennai",
    duration: "17 June 2025 – 18 July 2025",
    technologies: ["Python", "Frontend Technologies", "Database", "HTML/CSS/JS"],
    description: "Worked on full-stack web application development using Python for backend development with frontend integration.",
    responsibilities: [
      "Developed mini web applications using Python backend structures.",
      "Worked with databases to store, query, and retrieve application data smoothly.",
      "Integrated responsive frontend components with Python backend logic.",
      "Applied modern Software Development Life Cycle (SDLC) practices in project delivery."
    ],
    certificatePath: "assets/certificates/python-internship.pdf"
  }
];

/**
 * Achievements & Certifications Data Array
 */
const achievementsData = [
  {
    id: "ach-1",
    title: "KPR Institute Hackathon",
    category: "Hackathons",
    organization: "KPR Institute of Engineering and Technology",
    date: "2025",
    description: "Participated in the KPR Institute Hackathon and gained practical experience in teamwork, problem solving and developing innovative software solutions.",
    photoPath: "assets/achievements/kpr-hackathon.svg",
    certificatePath: "assets/certificates/kpr-hackathon.pdf"
  },
  {
    id: "ach-2",
    title: "Smart India Hackathon (SIH)",
    category: "Hackathons",
    organization: "Ministry of Education / Government of India",
    date: "2025",
    description: "Participated in Smart India Hackathon and worked collaboratively on a real-world problem-solving challenge with an interdisciplinary team.",
    photoPath: "assets/achievements/sih-hackathon.svg",
    certificatePath: "assets/certificates/sih-hackathon.pdf"
  },
  {
    id: "ach-3",
    title: "SYMBOLISM Technical Event",
    category: "Technical Events",
    organization: "Technical Event Committee",
    date: "2025",
    description: "Participated in the SYMBOLISM state-level technical competition, demonstrating problem-solving abilities and coding proficiency.",
    photoPath: "assets/achievements/symbolism-event.svg",
    certificatePath: "assets/certificates/symbolism-certificate.pdf"
  },
  {
    id: "ach-4",
    title: "KONGUNADU Technical Event",
    category: "Technical Events",
    organization: "Kongunadu College of Engineering",
    date: "2025",
    description: "Engaged in competitive technical presentation and coding challenge at the Kongunadu technical meet.",
    photoPath: "assets/achievements/kongunadu-event.svg",
    certificatePath: "assets/certificates/kongunadu-certificate.pdf"
  },
  {
    id: "ach-5",
    title: "SSM SYMPOSIUM",
    category: "Symposiums",
    organization: "SSM Institute of Engineering and Technology",
    date: "2025",
    description: "Participated in national level technical symposium events, showcasing technical skills and peer interaction.",
    photoPath: "assets/achievements/ssm-symposium.svg",
    certificatePath: "assets/certificates/ssm-symposium.pdf"
  },
  {
    id: "ach-6",
    title: "UiPath Technical Program / Webinar",
    category: "Webinars",
    organization: "PSNA College of Engineering and Technology",
    date: "2025",
    description: "Participated in a UiPath technical webinar/program and gained valuable exposure to Robotic Process Automation (RPA) and automation technologies.",
    photoPath: "assets/achievements/uipath-webinar.svg",
    certificatePath: "assets/certificates/uipath-certificate.pdf"
  },
  {
    id: "ach-7",
    title: "Technical Seminars & Workshops",
    category: "Seminars",
    organization: "NPRCET & Partner Institutions",
    date: "2024 - 2026",
    description: "Attended various technical seminars covering modern full stack web development, cloud technology foundations, and emerging IT trends.",
    photoPath: "assets/achievements/technical-seminars.svg",
    certificatePath: "assets/certificates/seminar-certificate.pdf"
  }
];


// --------------------------------------------------------------------------
// 2. CORE DOM INITIALIZATION & EVENT LISTENERS
// --------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', () => {
  initNavbarHighlighter();
  initStickyNavbar();
  initBackToTopButton();
  initScrollReveal();
  initContactFormValidation();
  
  // Render dynamic project cards if project filter container is present
  if (document.getElementById('projectCardsContainer')) {
    renderProjectCards('all');
    initProjectFilters();
  }

  // Bind video player helper if video present
  const demoVideo = document.getElementById('projectDemoVideo');
  const playBtn = document.getElementById('btnPlayDemo');
  if (demoVideo && playBtn) {
    playBtn.addEventListener('click', () => {
      demoVideo.scrollIntoView({ behavior: 'smooth', block: 'center' });
      demoVideo.play().catch(e => console.log('Video play trigger:', e));
    });
  }
});


// --------------------------------------------------------------------------
// 3. NAVBAR FUNCTIONS
// --------------------------------------------------------------------------

function initNavbarHighlighter() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link, .dropdown-item');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
      // If inside dropdown, also highlight parent dropdown toggle
      const parentDropdown = link.closest('.dropdown');
      if (parentDropdown) {
        const toggleBtn = parentDropdown.querySelector('.dropdown-toggle');
        if (toggleBtn) toggleBtn.classList.add('active');
      }
    } else {
      link.classList.remove('active');
    }
  });
}

function initStickyNavbar() {
  const navbar = document.querySelector('.navbar-custom');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}


// --------------------------------------------------------------------------
// 4. PROJECT FILTERING & DYNAMIC RENDERING
// --------------------------------------------------------------------------

function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.btn-filter');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      filterBtns.forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      const category = e.target.getAttribute('data-filter');
      renderProjectCards(category);
    });
  });
}

function renderProjectCards(category = 'all') {
  const container = document.getElementById('projectCardsContainer');
  if (!container) return;

  const filtered = category === 'all' 
    ? projectsData 
    : projectsData.filter(p => p.category.toLowerCase() === category.toLowerCase());

  container.innerHTML = filtered.map(project => `
    <div class="col-lg-6 mb-4 reveal active">
      <div class="project-card">
        <div class="project-img-wrapper">
          <img src="${project.image}" alt="${project.title} Preview" loading="lazy">
          <span class="project-category-tag">${project.badge}</span>
        </div>
        <div class="project-body">
          <div class="d-flex justify-content-between align-items-start mb-2">
            <h3 class="project-title mb-0">${project.title}</h3>
            ${project.statusText === 'Completed' 
              ? `<span class="badge-status-completed"><i class="bi bi-check-circle-fill me-1"></i>Completed</span>`
              : `<span class="badge-status-progress"><i class="bi bi-clock-history me-1"></i>In Progress</span>`
            }
          </div>
          <p class="project-desc">${project.description}</p>
          
          <div class="project-tech">
            ${project.technology.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
          </div>

          <h5 class="fs-6 fw-bold mb-2 text-white">Key Features:</h5>
          <ul class="feature-list">
            ${project.features.map(f => `
              <li>
                <i class="bi ${f.status === 'implemented' ? 'bi-check-circle-fill text-success' : 'bi-hourglass-split text-warning'}"></i>
                <span>${f.text} ${f.status === 'planned' ? '<em class="text-warning fs-7">(Planned / In Progress)</em>' : ''}</span>
              </li>
            `).join('')}
          </ul>

          <div class="mt-auto pt-3 border-top border-secondary border-opacity-25 d-flex gap-2 flex-wrap">
            ${project.github ? `
              <a href="${project.github}" target="_blank" class="btn btn-sm btn-outline-custom">
                <i class="bi bi-github"></i> GitHub Code
              </a>
            ` : ''}
            <button class="btn btn-sm btn-primary-custom" onclick="openProjectDetailsModal('${project.id}')">
              <i class="bi bi-eye-fill"></i> View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}


// --------------------------------------------------------------------------
// 5. CERTIFICATE & EVENT PHOTO VIEWER MODALS
// --------------------------------------------------------------------------

/**
 * Open Certificate Modal (Supports PDF Viewer & Download)
 */
function openCertificateModal(pdfPath, certTitle) {
  const modalElement = document.getElementById('certificateModal');
  if (!modalElement) return;

  const modalTitle = document.getElementById('certModalTitle');
  const iframeContainer = document.getElementById('certIframeContainer');
  const downloadBtn = document.getElementById('certDownloadBtn');

  if (modalTitle) modalTitle.textContent = certTitle || "Certificate Viewer";
  if (downloadBtn) downloadBtn.setAttribute('href', pdfPath);

  if (iframeContainer) {
    iframeContainer.innerHTML = `
      <div class="w-100 h-100 d-flex flex-column align-items-center justify-content-center bg-dark text-white p-4 rounded text-center">
        <i class="bi bi-file-earmark-pdf text-indigo display-3 mb-3"></i>
        <h5 class="fw-bold mb-2">${certTitle}</h5>
        <p class="text-muted small mb-4">Official Document Placeholder Path: <code>${pdfPath}</code></p>
        <div class="ratio ratio-16x9 w-100 mb-3" style="max-height: 450px;">
          <iframe src="${pdfPath}" title="${certTitle}" class="rounded border border-secondary"></iframe>
        </div>
        <a href="${pdfPath}" download class="btn btn-sm btn-primary-custom">
          <i class="bi bi-download me-1"></i> Download Certificate PDF
        </a>
      </div>
    `;
  }

  const bsModal = new bootstrap.Modal(modalElement);
  bsModal.show();
}

/**
 * Open Event Photo Viewer Modal
 */
function openPhotoModal(imagePath, photoTitle, photoCaption) {
  const modalElement = document.getElementById('photoModal');
  if (!modalElement) return;

  const modalTitle = document.getElementById('photoModalTitle');
  const modalImg = document.getElementById('photoModalImg');
  const modalCaption = document.getElementById('photoModalCaption');

  if (modalTitle) modalTitle.textContent = photoTitle || "Event Photo";
  if (modalImg) modalImg.setAttribute('src', imagePath);
  if (modalCaption) modalCaption.textContent = photoCaption || "Geotagged Event Photograph";

  const bsModal = new bootstrap.Modal(modalElement);
  bsModal.show();
}

/**
 * Open Project Details Modal
 */
function openProjectDetailsModal(projectId) {
  const project = projectsData.find(p => p.id === projectId);
  if (!project) return;

  const modalElement = document.getElementById('projectDetailsModal');
  if (!modalElement) return;

  document.getElementById('projectModalTitle').textContent = project.title;
  document.getElementById('projectModalDesc').textContent = project.description;
  document.getElementById('projectModalTech').innerHTML = project.technology.map(t => `<span class="tech-tag">${t}</span>`).join(' ');
  document.getElementById('projectModalImg').src = project.image;
  
  const githubBtn = document.getElementById('projectModalGithubBtn');
  if (githubBtn) {
    if (project.github) {
      githubBtn.href = project.github;
      githubBtn.classList.remove('d-none');
    } else {
      githubBtn.classList.add('d-none');
    }
  }

  const bsModal = new bootstrap.Modal(modalElement);
  bsModal.show();
}


// --------------------------------------------------------------------------
// 6. CONTACT FORM VALIDATION & MAILTO FALLBACK
// --------------------------------------------------------------------------

function initContactFormValidation() {
  const form = document.getElementById('portfolioContactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('contactName');
    const emailInput = document.getElementById('contactEmail');
    const subjectInput = document.getElementById('contactSubject');
    const messageInput = document.getElementById('contactMessage');
    const feedbackBox = document.getElementById('contactFeedback');

    if (!nameInput.value.trim() || !emailInput.value.trim() || !messageInput.value.trim()) {
      showFeedback('Please fill out all required fields.', 'danger');
      return;
    }

    if (!validateEmail(emailInput.value.trim())) {
      showFeedback('Please enter a valid email address.', 'warning');
      return;
    }

    // Success response & Mailto Fallback launcher
    const mailtoSubject = encodeURIComponent(subjectInput.value.trim() || `Portfolio Contact from ${nameInput.value.trim()}`);
    const mailtoBody = encodeURIComponent(`Hello Sathyapriya,\n\n${messageInput.value.trim()}\n\nBest regards,\n${nameInput.value.trim()}\n${emailInput.value.trim()}`);
    
    showFeedback('Thank you for reaching out! Opening your mail client...', 'success');
    
    setTimeout(() => {
      window.location.href = `mailto:sathyapriyati06@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;
      form.reset();
    }, 1200);
  });
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showFeedback(msg, type) {
  const feedbackBox = document.getElementById('contactFeedback');
  if (!feedbackBox) return;

  feedbackBox.className = `alert alert-${type} mt-3 mb-0`;
  feedbackBox.textContent = msg;
  feedbackBox.classList.remove('d-none');
}


// --------------------------------------------------------------------------
// 7. BACK TO TOP BUTTON & SCROLL REVEAL ANIMATIONS
// --------------------------------------------------------------------------

function initBackToTopButton() {
  const backToTopBtn = document.getElementById('btnBackToTop');
  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add('show');
    } else {
      backToTopBtn.classList.remove('show');
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.1 });

  reveals.forEach(el => observer.observe(el));
}
