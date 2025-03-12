# Deployment Guide for Elsol Travel Agent

## Prerequisites
- Node.js 18.x or higher
- npm 9.x or higher
- Access to EmailJS account

## Environment Setup

1. Create a `.env` file in the root directory using `.env.example` as a template:
```bash
cp .env.example .env
```

2. Fill in the environment variables:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## Build Process

1. Install dependencies:
```bash
npm install
```

2. Build for production:
```bash
npm run build:prod
```

The build output will be in the `dist` directory.

## Deployment Steps

### Static Hosting (Recommended)
The app is built as a static site and can be deployed to any static hosting service:

1. **Netlify**:
   - Connect your GitHub repository
   - Build command: `npm run build:prod`
   - Publish directory: `dist`
   - Add environment variables in Netlify dashboard

2. **Vercel**:
   - Connect your GitHub repository
   - Framework preset: Vite
   - Build command: `npm run build:prod`
   - Output directory: `dist`
   - Add environment variables in Vercel dashboard

3. **GitHub Pages**:
   - Update `vite.config.ts` with your base URL
   - Run build
   - Deploy the `dist` directory

## Post-Deployment Checklist

1. Verify environment variables are properly set
2. Test contact form submission
3. Verify blog post updates work across all instances
4. Check all static assets are loading correctly
5. Test responsive design across different devices

## Troubleshooting

### Contact Form Issues
- Verify EmailJS credentials
- Check browser console for errors
- Ensure CORS is properly configured

### Blog Updates Not Syncing
- Clear browser cache
- Verify localStorage is working
- Check browser console for errors

## Security Considerations

1. Never commit `.env` file
2. Keep EmailJS credentials secure
3. Regularly update dependencies
4. Use HTTPS for all API calls
