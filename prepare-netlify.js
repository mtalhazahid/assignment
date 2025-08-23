#!/usr/bin/env node

/**
 * Netlify Deployment Preparation Script
 * Run this before deploying to ensure everything is configured correctly
 */

const fs = require('fs');
const path = require('path');

console.log('🚀 Preparing for Netlify deployment...\n');

// Check if contact information has been updated
const indexPath = path.join(__dirname, 'client/pages/Index.tsx');
const indexContent = fs.readFileSync(indexPath, 'utf8');

const checks = {
  whatsapp: !indexContent.includes('1234567890'),
  email: !indexContent.includes('help@codementorpro.com')
};

console.log('📋 Pre-deployment Checklist:');
console.log(`${checks.whatsapp ? '✅' : '❌'} WhatsApp number updated`);
console.log(`${checks.email ? '✅' : '❌'} Email address updated`);

if (!checks.whatsapp) {
  console.log('\n⚠️  Update WhatsApp number in client/pages/Index.tsx');
  console.log('   Replace "1234567890" with your actual WhatsApp number');
}

if (!checks.email) {
  console.log('\n⚠️  Update email address in client/pages/Index.tsx');
  console.log('   Replace "help@codementorpro.com" with your business email');
}

// Check if build directory exists
const buildExists = fs.existsSync(path.join(__dirname, 'dist/spa'));
console.log(`${buildExists ? '✅' : '❌'} Build directory exists`);

if (!buildExists) {
  console.log('\n🔨 Running build command...');
  const { execSync } = require('child_process');
  try {
    execSync('pnpm run build:client', { stdio: 'inherit' });
    console.log('✅ Build completed successfully!');
  } catch (error) {
    console.error('❌ Build failed:', error.message);
    process.exit(1);
  }
}

if (checks.whatsapp && checks.email) {
  console.log('\n🎉 Ready for Netlify deployment!');
  console.log('\nNext steps:');
  console.log('1. Push code to GitHub/GitLab');
  console.log('2. Connect repository to Netlify');
  console.log('3. Deploy automatically with netlify.toml configuration');
  console.log('\nOr drag & drop the dist/spa folder to Netlify');
} else {
  console.log('\n📝 Please update contact information before deploying');
}
