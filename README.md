# PlentifulPower.xyz

A modern web platform for power optimization solutions.

## 🚀 Quick Start

1. Clone the repository:
```bash
git clone https://github.com/yourusername/plentiful-power.git
cd plentiful-power
```

2. Install dependencies:
```bash
npm install
```

3. Create environment variables:
```bash
cp .env.example .env.local
```

4. Start the development server:
```bash
npm run dev
```

## 🚀 Deployment

### Prerequisites

1. A VPS with Node.js and PM2 installed
2. SSH access to the VPS
3. Domain configured to point to your VPS

### GitHub Actions Setup

1. Add the following secrets to your GitHub repository:
   - `VPS_HOST`: Your server's IP or domain
   - `VPS_USERNAME`: SSH username
   - `SSH_PRIVATE_KEY`: SSH private key for authentication

2. The deployment will automatically trigger when pushing to the main branch

### Manual Deployment

1. Build the application:
```bash
npm run build
```

2. Copy the files to your server:
```bash
scp -r out/* user@your-server:/var/www/plentiful-power/
```

3. Start the application with PM2:
```bash
pm2 start npm --name "plentiful-power" -- start
```

## 📦 Project Structure

```
├── app/                # Next.js app directory
├── components/         # React components
├── lib/               # Utility functions
└── public/            # Static assets
```

## 🛠️ Built With

- Next.js 13
- React 18
- Tailwind CSS
- Framer Motion
- shadcn/ui
- TypeScript