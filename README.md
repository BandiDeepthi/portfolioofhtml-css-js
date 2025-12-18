# Bandi Deepthi - Portfolio Website

A modern, responsive portfolio website showcasing projects, experience, and skills.

## 🎨 Features

- **Modern Design**: Dark purple gradient background with plus pattern overlay
- **Animated Loader**: Smooth loading animation
- **Typing Effect**: Dynamic role display in hero section
- **Responsive**: Works on all devices (mobile, tablet, desktop)
- **Glassmorphism**: Modern glass effect on cards and sections
- **Smooth Animations**: Scroll-triggered animations and transitions
- **Dynamic Content**: All content loaded from `constants.js`

## 📁 Project Structure

```
portfolioofhtml,css,js/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # All styles and animations
├── js/
│   ├── constants.js    # Portfolio data and configuration
│   └── main.js         # JavaScript functionality
├── images/
│   ├── project1.jpg    # Cervical Cancer Detection project image
│   └── project2.jpg    # Multimedia Blog project image
└── Deepthi_Bandi_Resume.pdf  # Resume file (replace with actual PDF)
```

## 🚀 How to Use

1. **View Locally**: Simply open `index.html` in your web browser
2. **Update Content**: Edit `js/constants.js` to change your information
3. **Add Resume**: Replace `Deepthi_Bandi_Resume.pdf` with your actual resume
4. **Customize Colors**: Modify CSS variables in `css/style.css`

## 📝 Updating Your Information

### Personal Details
Edit the `PORTFOLIO_DATA.personal` object in `js/constants.js`:
```javascript
personal: {
    name: "Your Name",
    role: "Your Role",
    email: "your.email@example.com",
    // ... etc
}
```

### Projects
Add or modify projects in the `PORTFOLIO_DATA.projects` array.

### Experience
Update education and work experience in `PORTFOLIO_DATA.experience`.

### Skills
Modify skills categories in `PORTFOLIO_DATA.skills`.

## 🎨 Color Scheme

- **Background**: Deep indigo/purple gradient (#1a0f3f → #4b1c73)
- **Primary**: Purple gradient (#667eea → #764ba2)
- **Accent**: Blue gradient (#4facfe → #00f2fe)
- **Text**: White with varying opacity

## 📱 Responsive Breakpoints

- **Mobile**: < 480px
- **Tablet**: 481px - 768px
- **Desktop**: > 768px

## 🌐 Deployment

To deploy this portfolio:

### Deployment Methods

**Option 1: Automatic Deployment (Recommended)**
This project includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically verifies and deploys your site.
1. Push this code to your GitHub repository.
2. Go to **Settings** > **Pages**.
3. Under **Build and deployment** > **Source**, select **GitHub Actions**.
4. The site will deploy automatically, and you can see the "Output Checking Process" in the **Actions** tab of your repository.

**Option 2: Classic Deployment**
1. **GitHub Pages**: 
    - Push this code to a GitHub repository.
    - Go to **Settings** > **Pages**.
    - Under **Source**, select `main` (or `master`) branch.
    - Click **Save**.
    - Your site will be live at `https://<your-username>.github.io/<repository-name>/`.
    - Note: An empty `.nojekyll` file has been added to ensure all assets load correctly.
2. **Netlify**: Drag and drop the folder
3. **Vercel**: Import the project
4. **Any Web Host**: Upload all files via FTP

## ✨ Technologies Used

- HTML5
- CSS3 (Flexbox, Grid, Animations)
- Vanilla JavaScript (ES6+)
- Google Fonts (Inter, Outfit)
- Font Awesome Icons

## 📧 Contact

- **Email**: bnddeepthi@gmail.com
- **Phone**: +91 91606 95846
- **GitHub**: [@BandiDeepthi](https://github.com/BandiDeepthi)

---

**Note**: Remember to replace `Deepthi_Bandi_Resume.pdf` with your actual resume file before deploying!
