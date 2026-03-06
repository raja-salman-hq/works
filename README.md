# TechNova Solutions - Professional Business Website

A modern, responsive service-based business website built with HTML5, CSS3, JavaScript (ES6), and Bootstrap 5.

## Features

- **Fully Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean design with smooth animations and hover effects
- **Interactive JavaScript Features**:
  - Mobile navigation toggle (hamburger menu)
  - Smooth scrolling navigation
  - Form validation with error handling
  - Dark mode toggle
  - Animated counters for statistics
  - Modal popups
- **Multi-page Website**:
  - Home page with hero, services, features, testimonials, portfolio preview, and newsletter
  - About page with company story, mission/vision, values, and team
  - Services page with detailed service offerings and pricing
  - Portfolio page with project showcase and filtering
  - Contact page with contact form, information, and embedded map
  - Login/Signup page with form validation
- **Professional Components**:
  - Sticky navigation bar
  - Service cards with icons and pricing
  - Project portfolio with technology tags
  - Contact form with validation
  - Google Maps integration
  - Social media links
  - Newsletter subscription

## Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Custom styling with modern features
- **JavaScript (ES6)**: Interactive functionality
- **Bootstrap 5**: Responsive grid system and components
- **Font Awesome**: Icons and social media links
- **Google Fonts**: Typography (Inter and Poppins)

## Color Scheme

- Primary: #4F46E5 (Indigo)
- Secondary: #06B6D4 (Cyan)
- Accent: #22C55E (Green)
- Dark: #1E293B (Slate)
- Light Background: #F8FAFC (Gray-50)

## Project Structure

```
project/
├── index.html          # Home page
├── about.html          # About page
├── services.html       # Services page
├── portfolio.html      # Portfolio page
├── contact.html        # Contact page
├── login.html          # Login/Signup page
├── css/
│   └── styles.css      # Custom styles
├── js/
│   └── script.js       # JavaScript functionality
└── images/             # Image assets (placeholders used)
```

## How to Run Locally

### Option 1: Using a Local Server (Recommended)

1. **Using Python (if installed):**
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   ```

2. **Using Node.js (if installed):**
   ```bash
   npx serve .
   ```

3. **Using PHP (if installed):**
   ```bash
   php -S localhost:8000
   ```

### Option 2: Direct File Opening

1. Open any HTML file directly in your web browser
2. Navigate between pages using the navigation menu

**Note:** Some features like smooth scrolling work better with a local server.

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## Features Overview

### Navigation
- Sticky navigation bar that stays at the top while scrolling
- Hamburger menu for mobile devices
- Smooth scrolling to page sections

### Home Page Sections
- **Hero**: Large heading with call-to-action buttons
- **Services Overview**: Preview of main services
- **Features**: Key benefits and advantages
- **Statistics**: Animated counters showing company metrics
- **Testimonials**: Customer reviews and feedback
- **Portfolio Preview**: Showcase of recent projects
- **Newsletter**: Email subscription form

### Services Page
- Service cards with icons, descriptions, and pricing
- Process overview showing development workflow

### Portfolio Page
- Project cards with images, descriptions, and technology stacks
- Filter functionality by category (Web, Mobile, E-commerce, Cloud)

### Contact Page
- Contact form with validation
- Contact information and business hours
- Embedded Google Maps
- FAQ section with accordion

### Login/Signup Page
- Toggle between login and signup forms
- Form validation and error handling
- Simulated authentication (for demo purposes)

### JavaScript Features
- **Mobile Navigation**: Collapsible menu for mobile devices
- **Smooth Scrolling**: Animated navigation between sections
- **Form Validation**: Real-time validation with error messages
- **Dark Mode**: Toggle between light and dark themes
- **Animated Counters**: Statistics that count up when visible
- **Scroll Animations**: Elements fade in as they enter viewport

## Customization

### Colors
Edit the CSS custom properties in `css/styles.css`:
```css
:root {
  --primary-color: #4F46E5;
  --secondary-color: #06B6D4;
  --accent-color: #22C55E;
  --dark-color: #1E293B;
  --light-bg: #F8FAFC;
}
```

### Content
- Update company information in the footer
- Modify service descriptions and pricing
- Add real project images and descriptions
- Update contact information and map location
- Customize social media links

### Adding New Pages
1. Create new HTML file following the existing structure
2. Add navigation link in all page headers
3. Include footer and necessary scripts

## Deployment

### GitHub Pages
1. Push the project to a GitHub repository
2. Go to Settings > Pages
3. Select "main" branch as source
4. The site will be available at `https://yourusername.github.io/repository-name`

### Netlify/Vercel
1. Connect your GitHub repository
2. Deploy automatically on push
3. Get a custom domain if desired

### Traditional Hosting
1. Upload all files to your web server
2. Ensure the directory structure is maintained
3. The site will work on any standard web hosting

## Development Notes

- All JavaScript is vanilla ES6, no frameworks required
- CSS uses modern features with fallbacks
- Bootstrap 5 provides responsive grid and components
- Font Awesome icons are loaded from CDN
- Google Fonts for typography
- Placeholder images used (replace with real images)

## License

This project is for educational and demonstration purposes. Feel free to use and modify as needed.

## Contact

For questions or customization requests, please use the contact form on the website or reach out directly.