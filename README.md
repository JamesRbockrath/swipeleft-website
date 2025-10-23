# SwipeLeft AI Website

A modern, professional website for SwipeLeft AI LLC built with Next.js 14, TypeScript, and Tailwind CSS.

## ✨ Features

✅ Fully responsive design (mobile, tablet, desktop)
✅ Modern UI with your green brand colors
✅ SwipeLeft AI logo integrated throughout
✅ All 7 sections from your content outline
✅ Contact form for candidate applications
✅ SEO optimized
✅ Fast loading with Next.js optimization

## 🚀 Getting Started

### Prerequisites
- Node.js 18 or higher
- npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 🌐 Deployment

### Deploy to Vercel (Recommended - Free)

1. Push this code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "Import Project" and select your repository
4. Click "Deploy"

Your site will be live in ~2 minutes!

### Add Custom Domain

1. In Vercel dashboard, go to your project → Settings → Domains
2. Add `swipeleft.ai`
3. Update DNS at your registrar with the records Vercel provides
4. Done! Free SSL included

## 🎨 Customization

### Update Colors
Edit `tailwind.config.js` to change the green color:
```js
colors: {
  primary: '#2d7d46', // Your brand green
}
```

### Replace Logo
Place your new logo in `/public/logo.png`

### Modify Content
Edit `app/page.tsx` - all content is clearly labeled by section

## 📂 Project Structure

```
swipeleft-website/
├── app/
│   ├── layout.tsx      # Navigation & footer with logo
│   ├── page.tsx        # Homepage with all sections
│   └── globals.css     # Global styles
├── public/
│   └── logo.png        # Your SwipeLeft AI logo
├── tailwind.config.js  # Tailwind configuration
├── next.config.js      # Next.js configuration
└── package.json        # Dependencies
```

## 💻 Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel (free)

## 📝 License

© 2025 SwipeLeft AI LLC. All rights reserved.
