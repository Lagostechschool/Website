
# About

This is a React-based website for a prompt engineering course, featuring registration forms, course information, and testimonials.

## Project Overview

This website is built with:
- **React** with **TypeScript** for frontend development
- **Vite** as the build tool
- **Tailwind CSS** for styling
- **shadcn/ui** for UI components
- **React Router** for navigation
- **React Hook Form** with **Zod** for form validation
- **TanStack Query** for data fetching

## Project Structure

```
src/
├── components/         # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── CourseCard.tsx  # Display course information
│   ├── ContactForm.tsx # Contact form component
│   ├── Features.tsx    # Course features display
│   ├── Footer.tsx      # Site footer
│   ├── Hero.tsx        # Landing page hero section
│   ├── Navbar.tsx      # Site navigation
│   ├── Process.tsx     # Course process steps
│   ├── SchoolBadge.tsx # School badge component
│   ├── SchoolInfo.tsx  # School information component
│   ├── Stats.tsx       # Statistics display
│   └── Testimonial.tsx # Student testimonials
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── pages/              # Page components
│   ├── Index.tsx       # Homepage
│   ├── NotFound.tsx    # 404 page
│   └── RegisterPromptEngineering.tsx # Registration page
├── App.tsx             # Main app component with routing
└── main.tsx            # Application entry point
```

## Key Features

1. **Course Registration Form**: Collects applicant information with form validation
2. **Google Sheets Integration**: Form submissions can be sent to Google Sheets
3. **Responsive Design**: Mobile-friendly layout using Tailwind CSS
4. **Interactive Components**: User-friendly UI with shadcn/ui

## Making Changes

### How to Modify the Homepage

The homepage is defined in `src/pages/Index.tsx`. It uses several components that you can modify individually:

- **Hero Section**: Edit `src/components/Hero.tsx` to change the main banner
- **Features**: Edit `src/components/Features.tsx` to change course features
- **Process Steps**: Edit `src/components/Process.tsx` to modify the course process
- **Testimonials**: Edit `src/components/Testimonial.tsx` to update student feedback
- **Stats**: Edit `src/components/Stats.tsx` to change displayed statistics
- **School Information**: Edit `src/components/SchoolInfo.tsx` to update school details

### How to Modify the Registration Form

The registration form is in `src/pages/RegisterPromptEngineering.tsx`. To modify:

1. Update the form schema in the file to add/remove/modify fields
2. Modify the corresponding UI form elements
3. Update the webhook URL for Google Sheets integration

### Adding New Pages

To add a new page:

1. Create a new file in `src/pages/` (e.g., `NewPage.tsx`)
2. Add the route in `src/App.tsx` like:
   ```tsx
   <Route path="/new-page" element={<NewPage />} />
   ```
3. Add navigation links in `src/components/Navbar.tsx`

### Styling Changes

This project uses Tailwind CSS:

1. Global styles are in `src/index.css`
2. Theme configuration is in `tailwind.config.ts`
3. Each component has inline Tailwind classes for styling

### Form Submission Configuration

The website is set up to submit form data to Google Sheets:

1. See `GOOGLE_SHEETS_INTEGRATION.md` for detailed setup instructions
2. Update the webhook URL in the registration form component

## Google Sheets Integration

Form submissions can be connected to Google Sheets using one of these methods:

1. **Make.com** (formerly Integromat): Easy setup with webhook to Google Sheets
2. **Zapier**: Similar to Make.com, connects form webhooks to Google Sheets
3. **Google Apps Script**: Direct integration using Google's scripting

See `GOOGLE_SHEETS_INTEGRATION.md` for detailed setup instructions.

## Development

To develop this website locally:

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

## Building for Production

```bash
# Create optimized build
npm run build

# Preview production build
npm run preview
```

## Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com/)
- [React Hook Form Documentation](https://react-hook-form.com/)
- [Google Sheets API Documentation](https://developers.google.com/sheets/api)
