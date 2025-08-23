# Netlify Deployment Guide

Your CodeMentor Pro landing page is ready for Netlify deployment! 🚀

## 📋 Pre-deployment Checklist

Before deploying, update these placeholder values in your code:

### 1. Contact Information
In `client/pages/Index.tsx`, replace:
- `1234567890` with your actual WhatsApp number (line 97, 147, 285, 326)
- `help@codementorpro.com` with your business email (line 295, 155, 334)

Example:
```typescript
// Replace this:
'https://wa.me/1234567890?text=Hi,%20I%20need%20help'

// With your number:
'https://wa.me/15551234567?text=Hi,%20I%20need%20help'
```

## 🚀 Deployment Methods

### Option 1: Direct Git Deployment (Recommended)

1. **Push to GitHub/GitLab:**
   ```bash
   git add .
   git commit -m "Ready for Netlify deployment"
   git push origin main
   ```

2. **Connect to Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Choose your repository
   - Netlify will auto-detect the settings from `netlify.toml`

### Option 2: Drag & Drop Deployment

1. **Build locally:**
   ```bash
   pnpm install
   pnpm run build:client
   ```

2. **Deploy to Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Drag the `dist/spa` folder to the deploy area

## ⚙️ Netlify Configuration

The project includes a pre-configured `netlify.toml` file with:

- **Build Command:** `pnpm install && pnpm run build:client`
- **Publish Directory:** `dist/spa`
- **Functions:** Serverless API endpoints
- **Redirects:** SPA routing support

## 🔧 Environment Variables

If you need environment variables (optional):

1. Go to your Netlify site dashboard
2. Navigate to Site settings → Environment variables
3. Add any required variables

## 🌐 Custom Domain

To use your own domain:

1. In Netlify dashboard: Site settings → Domain management
2. Add your custom domain
3. Follow DNS configuration instructions

## 📊 Performance Optimization

Your site is already optimized with:
- ✅ React production build
- ✅ CSS optimization with Tailwind
- ✅ Fast loading with modern components
- ✅ SEO-friendly meta tags
- ✅ Mobile responsive design

## 🔍 Testing Your Deployment

After deployment, test:
- [ ] Homepage loads correctly
- [ ] WhatsApp links work with your number
- [ ] Email links work with your address
- [ ] All sections display properly
- [ ] Mobile responsiveness
- [ ] Contact form functionality

## 🆘 Troubleshooting

**Build fails?**
- Check that all dependencies are in `package.json`
- Verify Node.js version compatibility

**WhatsApp not working?**
- Ensure phone number includes country code
- Format: `15551234567` (no +, spaces, or dashes)

**Email not working?**
- Verify email address is correctly formatted
- Check spam filters on test emails

## 📈 Post-Deployment

After successful deployment:
1. Set up Google Analytics (optional)
2. Configure Google Ads conversion tracking
3. Test all contact methods
4. Monitor site performance

Your landing page is now ready to convert visitors from Google Ads! 🎯
