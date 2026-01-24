# Vercel Deployment Guide

## Overview

This guide explains how to deploy the CogArc frontend to Vercel.

## Prerequisites

1. A Vercel account ([sign up](https://vercel.com/signup) if needed)
2. GitHub account with the repository pushed
3. Vercel CLI installed (optional, for CLI deployment)

## Deployment Methods

### Method 1: GitHub Integration (Recommended)

1. **Push code to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/cogarc/frontend.git
   git push -u origin main
   ```

2. **Import project in Vercel**:
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "Add New..." → "Project"
   - Import the `cogarc/frontend` repository
   - Vercel will auto-detect Next.js settings

3. **Configure environment variables** (if needed):
   - Go to Project Settings → Environment Variables
   - Add any required variables:
     - `NEXT_PUBLIC_API_URL`: Backend API URL
     - `NEXT_PUBLIC_ENV`: Environment (production/staging)

4. **Deploy**:
   - Click "Deploy"
   - Vercel will build and deploy automatically

### Method 2: Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   cd frontend
   vercel
   ```

4. **Follow prompts**:
   - Link to existing project or create new
   - Confirm settings
   - Deploy

## Configuration

### vercel.json

The project includes a `vercel.json` file with the following configuration:

```json
{
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "nextjs",
  "regions": ["iad1"]
}
```

### Environment Variables

Create environment variables in Vercel Dashboard:

- **Production**: Project Settings → Environment Variables → Production
- **Preview**: Project Settings → Environment Variables → Preview
- **Development**: Project Settings → Environment Variables → Development

Example variables:
```
NEXT_PUBLIC_API_URL=https://api.cogarc.example.com
NEXT_PUBLIC_ENV=production
```

## Preview Deployments

Vercel automatically creates preview deployments for:
- Every pull request
- Every push to non-main branches

Preview URLs are available in:
- Pull request comments
- Vercel Dashboard
- GitHub status checks

## Custom Domain

1. Go to Project Settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions
4. Vercel will automatically provision SSL certificates

## Build Settings

Vercel auto-detects Next.js and uses:
- **Build Command**: `npm run build` (or `next build`)
- **Output Directory**: `.next`
- **Install Command**: `npm install`

These can be overridden in Project Settings → General.

## Performance Optimization

Vercel automatically optimizes Next.js apps with:
- Edge Network (CDN)
- Automatic HTTPS
- Image Optimization
- Serverless Functions

## Monitoring

1. **Deployment Logs**: Available in Vercel Dashboard
2. **Analytics**: Enable in Project Settings → Analytics
3. **Speed Insights**: Enable in Project Settings → Speed Insights

## Troubleshooting

### Build Failures

1. Check build logs in Vercel Dashboard
2. Verify all dependencies are in `package.json`
3. Ensure TypeScript compiles: `npm run build`
4. Check for environment variable issues

### Runtime Errors

1. Check function logs in Vercel Dashboard
2. Verify environment variables are set
3. Check browser console for client-side errors

### Common Issues

- **Module not found**: Ensure all dependencies are in `package.json`
- **Build timeout**: Optimize build process or increase timeout
- **Environment variables**: Ensure they're set for correct environment

## CI/CD Integration

Vercel integrates with GitHub for automatic deployments:

- **Main branch**: Auto-deploys to production
- **Other branches**: Auto-deploys to preview
- **Pull requests**: Creates preview deployments

## Rollback

To rollback to a previous deployment:

1. Go to Deployments in Vercel Dashboard
2. Find the deployment to restore
3. Click "..." → "Promote to Production"

## Next Steps

After deployment:

1. Test all routes and features
2. Verify environment variables
3. Set up monitoring and alerts
4. Configure custom domain (if needed)
5. Enable analytics

## Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js on Vercel](https://vercel.com/docs/frameworks/nextjs)
- [Vercel CLI Reference](https://vercel.com/docs/cli)
