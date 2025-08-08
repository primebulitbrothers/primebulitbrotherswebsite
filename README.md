# PrimeScape Brothers - Professional Landscaping & Kitchen Remodeling Website

A sleek, professional website for PrimeScape Brothers, a landscaping and kitchen remodeling company. Built with React, Node.js, and Tailwind CSS.

## Features

- **Modern Design**: Clean, professional design with responsive layout
- **Service Showcase**: Detailed information about landscaping and kitchen remodeling services
- **Quote Form**: Comprehensive quote request form with project details
- **Contact Information**: Multiple ways to get in touch
- **Mobile Responsive**: Optimized for all devices
- **Fast Performance**: Built with Vite for optimal loading speeds

## Services Featured

- **Custom Patios**: Beautiful outdoor living spaces
- **Walkways**: Elegant pathways and walkways
- **Retaining Walls**: Structural solutions for property protection
- **General Landscaping**: Comprehensive landscape design and maintenance
- **Kitchen Remodeling**: Modern kitchen transformations

## Technology Stack

- **Frontend**: React 18 with Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Build Tool**: Vite

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd primescape-brothers
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Navbar.jsx     # Navigation component
│   ├── Footer.jsx     # Footer component
│   ├── QuoteForm.jsx  # Quote request form
│   ├── Confirmation.jsx # Confirmation page
│   └── ServiceCard.jsx # Service card component
├── pages/              # Page components
│   ├── Home.jsx       # Home page
│   ├── Services.jsx   # Services page
│   ├── About.jsx      # About page
│   └── Contact.jsx    # Contact page
├── App.jsx            # Main app component
├── main.jsx           # Entry point
└── index.css          # Global styles
```

## Pages

- **Home**: Hero section, featured services, testimonials
- **Services**: Detailed service information and process
- **About**: Company story, team, and values
- **Contact**: Contact form and information
- **Quote Form**: Comprehensive project quote request
- **Confirmation**: Thank you page after form submission

## Customization

### Colors
The color scheme can be customized in `tailwind.config.js` under the `primary` color palette.

### Content
All content is easily editable in the respective component files. Update text, contact information, and service details as needed.

### Styling
The design uses Tailwind CSS utility classes. Custom styles can be added in `src/index.css`.

## Deployment

The project can be deployed to any static hosting service:

- **Vercel**: Connect your repository for automatic deployments
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Use the `gh-pages` package
- **AWS S3**: Upload the `dist` folder to an S3 bucket

## License

This project is licensed under the MIT License.

## Support

For support or questions about this project, please contact the development team. 