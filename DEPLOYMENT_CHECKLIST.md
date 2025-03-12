# Deployment Checklist for Elsol Travel Agent

## Pre-Deployment Tasks

- [ ] Ensure all environment variables are set up in your deployment platform:
  - [ ] `VITE_EMAILJS_SERVICE_ID`
  - [ ] `VITE_EMAILJS_TEMPLATE_ID`
  - [ ] `VITE_EMAILJS_PUBLIC_KEY`
  - [ ] `VITE_TELEGRAM_BOT_TOKEN`
  - [ ] `VITE_TELEGRAM_CHANNEL_ID`
  - [ ] `VITE_APP_BASE_URL`

- [ ] Run the build locally to ensure it compiles without errors:
  ```bash
  npm run build:prod
  ```

- [ ] Test the production build locally:
  ```bash
  npm run preview
  ```

- [ ] Ensure all sensitive information is removed from the codebase and stored in environment variables
- [ ] Verify `.gitignore` includes all sensitive files
- [ ] Check that all API endpoints use HTTPS

## Deployment Steps

### GitHub Pages Deployment

1. [ ] Update the `vite.config.ts` base URL if needed
2. [ ] Set up GitHub repository secrets for all environment variables
3. [ ] Push changes to the main branch to trigger the GitHub Actions workflow
4. [ ] Verify the deployment was successful by checking the GitHub Actions logs

### Netlify/Vercel Deployment

1. [ ] Connect your GitHub repository to Netlify/Vercel
2. [ ] Configure build settings:
   - Build command: `npm run build:prod`
   - Publish directory: `dist`
3. [ ] Add all environment variables in the Netlify/Vercel dashboard
4. [ ] Deploy the site
5. [ ] Configure custom domain if needed

## Post-Deployment Verification

- [ ] Verify all pages load correctly
- [ ] Test the contact form submission
- [ ] Test blog post creation and updates as an admin
- [ ] Verify blog post updates are reflected for all users
- [ ] Test Telegram integration for blog post sharing
- [ ] Check responsive design on multiple devices
- [ ] Verify all static assets are loading correctly
- [ ] Check for any console errors

## Troubleshooting Common Issues

### Contact Form Not Working
- Verify EmailJS credentials are correct
- Check browser console for errors
- Ensure CORS is properly configured

### Blog Updates Not Syncing
- Clear browser cache
- Verify localStorage is working
- Check browser console for errors

### Telegram Integration Issues
- Verify Telegram bot token and channel ID are correct
- Check browser console for errors
- Ensure the bot has permission to post to the channel

## Security Considerations

- [ ] Ensure all API keys and tokens are stored as environment variables
- [ ] Verify that no sensitive information is exposed in the client-side code
- [ ] Use HTTPS for all API calls
- [ ] Regularly update dependencies to patch security vulnerabilities 