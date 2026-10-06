/**
 * ============================================================
 * MD. AL HELAL SARKAR - EXECUTIVE PERSONAL PORTFOLIO SCRIPT
 * Centralized Configuration & Client-Side Interactive Engine
 * ============================================================
 */

// 1. Centralized Website Configuration (Section 27)
const SITE_CONFIG = {
  name: "Md. Al Helal Sarkar",
  title: "Administration & Operations Professional",
  eyebrow: "ADMINISTRATION • OPERATIONS • COMPLIANCE",
  profileImage: "assets/profile.jpg", // Replace this file with your real .jpg photo
  cvFile: "assets/cv.pdf",            // Replace this file to update CV document
  email: "alhelal711@gmail.com",
  phone: "+880 1717-845557",
  location: "Dhaka, Bangladesh",
  showPrivateInformation: false      // Keep false to protect personal identifiers
};

// 2. Social Links Configuration (Section 26)
// Empty string ("") automatically hides the icon
const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/",
  facebook: "",
  github: "",
  whatsapp: ""
};

// Initialize Application on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initHeaderScroll();
  initNavigation();
  initExperienceAccordion();
  initTrainingFilters();
  initPhotoPreviewUtility();
  initPrintAndCopy();
  applyConfiguration();
});

/**
 * Apply Site Configuration to Elements
 */
function applyConfiguration() {
  // Bind Profile Image with auto-detection for JPG, PNG, or ProfilePhoto HD.png
  const profileImgs = document.querySelectorAll('.js-profile-img');
  profileImgs.forEach(img => {
    img.src = SITE_CONFIG.profileImage;
    img.onerror = () => {
      if (img.src.endsWith('profile.jpg')) {
        img.src = 'assets/ProfilePhoto HD.png';
      } else if (img.src.includes('ProfilePhoto')) {
        img.src = 'assets/profile.png';
      } else {
        img.style.display = 'none';
        const fallback = document.querySelector('.js-portrait-fallback');
        if (fallback) fallback.style.display = 'flex';
      }
    };
  });

  // Bind CV Download Links
  const cvButtons = document.querySelectorAll('.js-cv-download');
  cvButtons.forEach(btn => {
    btn.setAttribute('href', SITE_CONFIG.cvFile);
    btn.setAttribute('download', 'Md_Al_Helal_Sarkar_CV.pdf');
  });

  // Bind Contact Details
  const emailEls = document.querySelectorAll('.js-email');
  emailEls.forEach(el => el.textContent = SITE_CONFIG.email);

  const phoneEls = document.querySelectorAll('.js-phone');
  phoneEls.forEach(el => el.textContent = SITE_CONFIG.phone);

  const locationEls = document.querySelectorAll('.js-location');
  locationEls.forEach(el => el.textContent = SITE_CONFIG.location);

  // Social Links Visibility
  bindSocialLink('linkedin', SOCIAL_LINKS.linkedin);
  bindSocialLink('facebook', SOCIAL_LINKS.facebook);
  bindSocialLink('github', SOCIAL_LINKS.github);
  bindSocialLink('whatsapp', SOCIAL_LINKS.whatsapp);

  // Private Info Shield
  const privatePanel = document.getElementById('private-info-panel');
  if (privatePanel) {
    privatePanel.style.display = SITE_CONFIG.showPrivateInformation ? 'block' : 'none';
  }
}

function bindSocialLink(platform, url) {
  const el = document.querySelector(`.js-social-${platform}`);
  if (el) {
    if (url && url.trim() !== '') {
      el.href = url;
      el.style.display = 'inline-flex';
    } else {
      el.style.display = 'none';
    }
  }
}

/**
 * Dark / Light Mode with localStorage & System Preference
 */
function initTheme() {
  const toggleBtn = document.getElementById('theme-toggle-btn');
  const storedTheme = localStorage.getItem('theme_preference');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  let currentTheme = storedTheme || (systemPrefersDark ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', currentTheme);

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const active = document.documentElement.getAttribute('data-theme');
      const nextTheme = active === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', nextTheme);
      localStorage.setItem('theme_preference', nextTheme);
    });
  }
}

/**
 * Sticky Navigation Scroll Effect
 */
function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

/**
 * Mobile Navigation Drawer
 */
function initNavigation() {
  const hamburger = document.getElementById('hamburger-btn');
  const drawer = document.getElementById('mobile-drawer');

  if (hamburger && drawer) {
    hamburger.addEventListener('click', () => {
      drawer.classList.toggle('open');
    });

    const mobileLinks = drawer.querySelectorAll('.mobile-nav-link');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => drawer.classList.remove('open'));
    });
  }
}

/**
 * Career Journey Accordion Expand/Collapse
 */
function initExperienceAccordion() {
  const detailButtons = document.querySelectorAll('.js-toggle-experience');
  detailButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      const details = document.getElementById(targetId);
      if (details) {
        const isOpen = details.classList.contains('open');
        details.classList.toggle('open');
        btn.textContent = isOpen ? 'View Details' : 'Hide Details';
      }
    });
  });

  const expandAllBtn = document.getElementById('btn-expand-all');
  const collapseAllBtn = document.getElementById('btn-collapse-all');

  if (expandAllBtn) {
    expandAllBtn.addEventListener('click', () => {
      document.querySelectorAll('.role-details').forEach(el => el.classList.add('open'));
      detailButtons.forEach(btn => btn.textContent = 'Hide Details');
    });
  }

  if (collapseAllBtn) {
    collapseAllBtn.addEventListener('click', () => {
      document.querySelectorAll('.role-details').forEach(el => el.classList.remove('open'));
      detailButtons.forEach(btn => btn.textContent = 'View Details');
    });
  }
}

/**
 * Training Category Filters
 */
function initTrainingFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const trainingCards = document.querySelectorAll('.training-card');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');
      trainingCards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (filter === 'All' || cat === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/**
 * Optional Local-Only Profile Photo Preview Tool (Section 20)
 * Uses client-side FileReader only; no server uploads.
 */
function initPhotoPreviewUtility() {
  const modal = document.getElementById('photo-modal');
  const openButtons = document.querySelectorAll('.js-open-photo-modal');
  const closeBtn = document.getElementById('close-photo-modal');
  const fileInput = document.getElementById('photo-file-input');
  const previewImg = document.getElementById('photo-modal-preview');
  const applyBtn = document.getElementById('apply-photo-preview');
  const resetBtn = document.getElementById('reset-photo-preview');

  let currentBlobUrl = null;

  openButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      if (modal) modal.classList.add('open');
    });
  });

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => modal.classList.remove('open'));
  }

  if (fileInput) {
    fileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (evt) => {
          currentBlobUrl = evt.target.result;
          if (previewImg) {
            previewImg.src = currentBlobUrl;
            previewImg.style.display = 'block';
          }
          if (applyBtn) applyBtn.disabled = false;
        };
        reader.readAsDataURL(file);
      }
    });
  }

  if (applyBtn) {
    applyBtn.addEventListener('click', () => {
      if (currentBlobUrl) {
        document.querySelectorAll('.js-profile-img').forEach(img => {
          img.src = currentBlobUrl;
          img.style.display = 'block';
        });
        const fallback = document.querySelector('.js-portrait-fallback');
        if (fallback) fallback.style.display = 'none';
      }
      if (modal) modal.classList.remove('open');
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      currentBlobUrl = null;
      document.querySelectorAll('.js-profile-img').forEach(img => {
        img.src = SITE_CONFIG.profileImage;
      });
      if (modal) modal.classList.remove('open');
    });
  }
}

/**
 * Print & Copy Handlers
 */
function initPrintAndCopy() {
  const printButtons = document.querySelectorAll('.js-print-portfolio');
  printButtons.forEach(btn => {
    btn.addEventListener('click', () => window.print());
  });

  const copyEmailBtn = document.getElementById('copy-email-btn');
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(SITE_CONFIG.email).then(() => {
        copyEmailBtn.textContent = 'Copied!';
        setTimeout(() => copyEmailBtn.textContent = 'Copy', 2000);
      });
    });
  }

  const privacyToggle = document.getElementById('toggle-privacy-btn');
  const privateContent = document.getElementById('private-info-content');
  if (privacyToggle && privateContent) {
    privacyToggle.addEventListener('click', () => {
      const isVisible = privateContent.style.display === 'block';
      privateContent.style.display = isVisible ? 'none' : 'block';
      privacyToggle.textContent = isVisible ? 'Verify Protected Policy' : 'Hide Protected Details';
    });
  }
}
