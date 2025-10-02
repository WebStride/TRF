# The Rathik Foundation Website

A modern, responsive website for The Rathik Foundation - a social foundation dedicated to creating positive change in communities.

## Features

- **Modern Design**: Clean, professional design with Urbanist font
- **Responsive Navigation**: Mobile-friendly navigation with hamburger menu
- **Multiple Pages**: Home, About, Programs, Blogs, Contact, and Donate pages
- **Social Foundation Focus**: Content tailored for community development and social impact

## Tech Stack

- **Next.js 15**: React framework with App Router
- **TypeScript**: Type-safe development
- **CSS**: Custom CSS with responsive design
- **Urbanist Font**: Modern, clean typography from Google Fonts

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── page.tsx        # Home page
│   ├── about/          # About page
│   ├── programs/       # Programs page
│   ├── blogs/          # Blogs page
│   ├── contact/        # Contact page
│   └── donate/         # Donate page
├── components/         # React components
│   └── Navigation.tsx  # Navigation component
└── styles/            # CSS styles
    └── globals.css    # Global styles and custom CSS
```

## Pages

- **Home**: Landing page with hero section and mission overview
- **About**: Foundation story, values, and team information
- **Programs**: Showcase of various community programs and initiatives
- **Blogs**: News and updates (coming soon)
- **Contact**: Contact information and form (coming soon)
- **Donate**: Donation options and information (coming soon)

## Customization

### Logo
Replace the placeholder logo in the Navigation component with your actual logo image.

### Content
Update the content in each page component to reflect your foundation's specific programs and information.

### Styling
Modify the CSS in `src/styles/globals.css` to match your brand colors and design preferences.

## Deployment

This project is ready for deployment on Netlify:

1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `.next`

## License

This project is created for The Rathik Foundation. 