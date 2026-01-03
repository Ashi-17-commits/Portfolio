# Personal Portfolio Website

A modern, responsive personal portfolio website built with React, Tailwind CSS, and Framer Motion. Features a clean, elegant design with smooth animations and dark mode support.

## 🚀 Features

- **Modern Design**: Minimal, elegant UI with glassmorphism effects and soft gradients
- **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **Dark Mode**: Toggle between light and dark themes with system preference detection
- **Smooth Animations**: Framer Motion animations for engaging user experience
- **Accessible**: Semantic HTML and proper contrast ratios
- **Performance**: Optimized with Vite for fast build times and hot module replacement

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **Google Fonts** - Inter & Poppins fonts

## 📦 Installation

1. **Clone the repository** (or navigate to the project directory)

```bash
cd Portfolio
```

2. **Install dependencies**

```bash
npm install
```

3. **Start the development server**

```bash
npm run dev
```

4. **Open your browser**

Navigate to `http://localhost:5173` (or the URL shown in your terminal)

## 🏗️ Build for Production

```bash
npm run build
```

The production build will be in the `dist` directory.

## 📁 Project Structure

```
Portfolio/
├── src/
│   ├── components/          # React components
│   │   ├── Navbar.jsx       # Navigation bar with dark mode toggle
│   │   ├── Hero.jsx         # Hero section with CTA buttons
│   │   ├── About.jsx        # About me section
│   │   ├── Skills.jsx       # Skills with progress bars
│   │   ├── Projects.jsx     # Projects showcase
│   │   ├── Experience.jsx   # Experience and achievements
│   │   ├── Contact.jsx      # Contact form and social links
│   │   └── Footer.jsx       # Footer component
│   ├── context/
│   │   └── ThemeContext.jsx # Dark mode context provider
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles and Tailwind directives
├── index.html               # HTML template
├── package.json             # Dependencies and scripts
├── vite.config.js           # Vite configuration
├── tailwind.config.js       # Tailwind CSS configuration
└── README.md                # This file
```

## 🎨 Customization

### Update Personal Information

1. **Hero Section** (`src/components/Hero.jsx`):
   - Update name and tagline
   - Modify description text

2. **About Section** (`src/components/About.jsx`):
   - Update the about me paragraphs

3. **Skills** (`src/components/Skills.jsx`):
   - Modify the `skills` array with your skills and proficiency levels
   - Update the technology badges

4. **Projects** (`src/components/Projects.jsx`):
   - Update the `projects` array with your projects
   - Add GitHub and live demo URLs
   - Customize project descriptions and tech stacks

5. **Experience** (`src/components/Experience.jsx`):
   - Update the `experiences` array with your work history and achievements

6. **Contact** (`src/components/Contact.jsx`):
   - Update email address
   - Update social media links (LinkedIn, GitHub)
   - Connect the form to your backend (currently logs to console)

7. **Title** (`index.html`):
   - Update the page title

### Colors

The accent color can be customized in `tailwind.config.js`. The default accent color is indigo (`#6366f1`). You can change it to any color you prefer.

### Fonts

Fonts are loaded from Google Fonts. To change fonts, update the link in `index.html` and the font family in `tailwind.config.js` and `src/index.css`.

## 🔧 Configuration

### Dark Mode

Dark mode is automatically detected from system preferences on first visit, then saved to localStorage. Users can toggle it using the button in the navbar.

### Smooth Scrolling

Smooth scrolling is enabled by default via CSS in `src/index.css`. Navigation links use JavaScript scrollIntoView for additional control.

## 📝 Form Handling

The contact form currently logs submissions to the console. To make it functional:

1. Set up a backend API endpoint
2. Update the `handleSubmit` function in `src/components/Contact.jsx`
3. Add proper error handling and success messages

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

---

Built with ❤️ using React and Tailwind CSS

