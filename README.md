# Md. Al Helal Sarkar — Executive Personal Portfolio Website

A premium, executive-grade personal portfolio website engineered specifically for **MD. AL HELAL SARKAR** (Administration & Operations Professional).

This project features:
- **Zero-Dependency Static Architecture**: Ready for direct deployment to **GitHub Pages**, Netlify, Vercel, or any static hosting service with zero build steps.
- **Full-Stack Development Preview**: Built with modern React 19, Tailwind CSS, and Vite for interactive editing and development.
- **Strict Privacy Protection**: Sensitive personal records (NID, Blood Group, Father's Name, DOB) are protected by default (`showPrivateInformation: false`).
- **One-File Centralized Configuration**: Change photo, CV file, phone number, email, and social networks in seconds without touching HTML markup.

---

## 📁 Project Directory Structure

```text
portfolio/
│
├── index.html            # Main portfolio webpage
├── README.md             # Complete user guide & deployment instructions
│
├── assets/
│   ├── profile.svg       # Executive portrait matching ProfilePhoto HD.png (active)
│   ├── profile.jpg       # Your custom photograph (drop ProfilePhoto HD.png here)
│   ├── cv.pdf            # Your official CV document
│   ├── favicon.svg       # Executive monogram browser favicon (SVG)
│   └── favicon.png       # Standard browser favicon (PNG)
│
├── css/
│   └── style.css         # Complete executive visual styling system & dark mode
│
└── js/
    └── script.js         # Centralized configuration & interactive features
```

---

## 🚀 1. How to Open the Website

### Option A: Direct Browser Preview (Instant)
1. Open the folder where this project is saved.
2. Double-click on `index.html` (or `portfolio/index.html`).
3. The portfolio will immediately launch in your default web browser (Chrome, Edge, Firefox, Safari) with full styling and interactivity. No server or internet connection is required.

### Option B: Local Development Server (Optional)
If you have Node.js installed and want to run the Vite development server:
```bash
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📷 2. How to Replace Your Profile Photo

1. Prepare your preferred photo in **JPG**, **JPEG**, **PNG**, or **WEBP** format.
2. Rename your photo file to:
   ```text
   profile.jpg
   ```
3. Copy and paste it into the `assets/` folder, replacing the existing file:
   ```text
   assets/profile.jpg
   ```
4. Refresh your browser (`Ctrl + F5` or `Cmd + Shift + R`). The website will automatically display your new photograph everywhere!

> **Live Preview Utility**: You can also test how any photo on your computer looks before replacing the file by clicking **"Test Local Photo Preview Utility"** beneath the profile photo frame on the website.

---

## 📄 3. How to Replace Your CV (PDF)

1. Save your latest CV as a PDF file named:
   ```text
   cv.pdf
   ```
2. Copy and paste it into the `assets/` folder:
   ```text
   assets/cv.pdf
   ```
3. Every **"Download CV"** button on the website will now automatically provide your updated PDF file to recruiters and HR managers.

---

## ⚙️ 4. How to Update Phone, Email, Title & Social Links

All personal and contact details are managed in a single file:
- For static GitHub Pages: open **`js/script.js`**
- For the React version: open **`src/config.ts`**

Look for the `SITE_CONFIG` and `SOCIAL_LINKS` sections at the very top of the file:

```javascript
// Centralized Website Configuration
const SITE_CONFIG = {
  name: "Md. Al Helal Sarkar",
  title: "Administration & Operations Professional",
  eyebrow: "ADMINISTRATION • OPERATIONS • COMPLIANCE",
  profileImage: "assets/profile.jpg",
  cvFile: "assets/cv.pdf",
  email: "alhelal711@gmail.com",       // Change your email here
  phone: "+880 171-845557",           // Change your phone number here
  location: "Dhaka, Bangladesh",       // Change your location here
  showPrivateInformation: false        // Set to true only if you want private info visible
};

// Social Networks (Leave empty "" to hide any icon automatically)
const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/your-profile",
  facebook: "",                        // Add your Facebook URL (or leave empty)
  github: "",                          // Add your GitHub URL (or leave empty)
  whatsapp: ""                         // Add your WhatsApp URL (or leave empty)
};
```

### 4. How to Change Phone Number
Edit the `phone` line in `SITE_CONFIG`:
```javascript
phone: "+880 17XXXXXXXX",
```

### 5. How to Change Email
Edit the `email` line in `SITE_CONFIG`:
```javascript
email: "your_name@example.com",
```

### 6. How to Add LinkedIn
Add your LinkedIn profile link to `SOCIAL_LINKS`:
```javascript
linkedin: "https://www.linkedin.com/in/alhelal-sarkar",
```

### 7. How to Add Facebook
Add your Facebook profile link (if desired):
```javascript
facebook: "https://facebook.com/your-username",
```

### 8. How to Add GitHub
Add your GitHub profile link (if desired):
```javascript
github: "https://github.com/your-username",
```
*Note: Any social network left with `""` is automatically hidden from the navigation and footer.*

### 9. How to Enable / Disable Private Information
By default, sensitive personal records (NID, Blood Group, Father's Name, Mother's Name, Date of Birth) are protected:
```javascript
showPrivateInformation: false
```
If you ever want these details displayed on the website, simply change it to:
```javascript
showPrivateInformation: true
```

### 10. How to Change Website Title
To update the text shown on the browser tab and search engines, open `index.html` and update line 6:
```html
<title>Md. Al Helal Sarkar | Administration & Operations Professional</title>
```

---

## 🌐 11. How to Upload to GitHub

Follow these simple steps to put your portfolio on GitHub:

1. Log in to [GitHub](https://github.com/) (or create a free account).
2. Click the **+** icon in the top right corner and select **New repository**.
3. Name your repository (for example: `alhelal-portfolio` or `md-al-helal-sarkar`).
4. Set the repository to **Public**.
5. Do **not** check "Initialize this repository with a README" (your files already have one).
6. Click **Create repository**.
7. In the quick setup section, upload the files from your computer:
   - Click the link that says **"uploading an existing file"**.
   - Drag and drop all project files (`index.html`, `css/`, `js/`, `assets/`, `README.md`) into the box.
   - Click the green **Commit changes** button at the bottom.

---

## 🚀 12. How to Activate GitHub Pages (Free Hosting)

Once your files are uploaded to your GitHub repository:

1. Click the **Settings** tab near the top of your repository.
2. In the left-hand menu, scroll down and click **Pages** (under the "Code and automation" section).
3. Under **Build and deployment**:
   - Set **Source** to: `Deploy from a branch`
   - Set **Branch** to: `main` (or `master`)
   - Set **Folder** to: `/ (root)`
4. Click **Save**.
5. Wait approximately 1 to 2 minutes. Refresh the page.
6. A banner will appear at the top saying:
   > **"Your site is live at https://yourusername.github.io/your-repository-name/"**
7. Click the link to open your live executive personal portfolio website! You can now share this URL on your CV, LinkedIn profile, or job applications.

---

## 🖨️ 13. Printing & PDF Export Feature

The portfolio includes an integrated **Print Portfolio** feature:
- Click the printer icon in the top navigation or the **"Print Portfolio"** button in the footer.
- The website uses an executive `@media print` stylesheet that automatically hides navigation bars, buttons, dark-mode switches, and interactive tools, producing an immaculate corporate summary document.

---

## 📝 Verified Professional Record Summary

- **Executive**: Md. Al Helal Sarkar
- **Core Title**: Administration & Operations Professional
- **Experience**: 9+ Years
- **Organizations**: KiDO Dhaka Co. Limited, Ha-Meem Denim Ltd., Zaber Spinning Mills, Advance Design & Technology
- **Education**: BSc in Computer Science Engineering (Pundra University of Science & Technology, 2022), Diploma in CSE (Palashbari Polytechnic Institute, 2016), SSC (Faridpur BL High School, 2012)
- **Trainings**: FSCD Fire Safety Certified, BRAC Social Compliance Master Trainer, 10 Minute School Corporate Certifications, Government Digital Innovation Fair Honoree.
