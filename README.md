# Pura Essência - Christian Lifestyle & Worship Brand

A cinematic minimalist website for a Christian lifestyle and worship brand.

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ or Bun
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/Puraessencia/Essencia.git
cd Essencia

# Install dependencies
bun install
# or
npm install

# Create .env.local file
cp .env.example .env.local

# Add your Supabase credentials to .env.local

# Start development server
bun dev
# or
npm run dev
```

The site will be available at `http://localhost:3000`

## 📁 Project Structure

```
src/
├── assets/          # Images, fonts, and static resources
├── components/      # Reusable React components
├── hooks/           # Custom React hooks
├── lib/             # Utilities and library configuration (Supabase, Tailwind, etc)
├── routes/          # Page routes (file-based routing with TanStack Router)
├── main.tsx         # App entry point
├── router.tsx       # Router configuration
├── routeTree.gen.ts # Auto-generated route tree
└── styles.css       # Global styles (Tailwind + custom)
```

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Routing**: TanStack Router (file-based routing)
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Backend**: Supabase (Auth, Database, Storage)
- **Package Manager**: Bun (or npm/yarn)

## 🎨 Design System

### Colors
- Background: `#F5EFE8`
- Soft Beige: `#E9DDD1`
- Warm Brown: `#7A6251`
- Matte Black: `#111111`
- Soft White: `#FAF7F2`
- Muted Gray: `#B8AEA4`

### Typography
- Headings: Cormorant Garamond (thin, sophisticated)
- Body: Inter (clean, readable)
- Quotes: Great Vibes (elegant script)

## 📦 Available Scripts

```bash
# Development server
bun dev

# Build for production
bun run build

# Preview production build
bun run preview

# Lint code
bun run lint

# Format code
bun run format
```

## 🔐 Environment Variables

Create a `.env.local` file in the root directory:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository in [Vercel](https://vercel.com)
3. Add environment variables in project settings
4. Deploy

### Other Platforms

The project can be deployed to any platform that supports Node.js:
- Netlify
- Railway
- Render
- AWS Amplify

## 📝 Features

- ✨ Cinematic minimalist design
- 🛍️ E-commerce functionality (in progress)
- 📝 Blog/Devotional section (in progress)
- 👥 Community features (in progress)
- 🔐 User authentication (in progress)
- 📱 Fully responsive design
- ⚡ Fast performance with Vite
- 🎨 Premium editorial aesthetic

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is private.

## 📞 Contact

For questions or support, visit [Pura Essência](https://puraessencia.com)
