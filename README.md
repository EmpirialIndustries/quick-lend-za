# EzLend ZA - Short-Term Lending Platform

A comprehensive fintech application for short-term lending in South Africa, built with React, TypeScript, and modern web technologies.

## 🚀 Features

### Frontend Website
- **Modern Landing Page** - Beautiful, responsive design with loan calculator
- **User Authentication** - Secure login/signup with email and phone verification
- **Loan Application Flow** - Multi-step application process with real-time validation
- **User Dashboard** - Track active loans, payment schedules, and loan history
- **KYC Integration** - Document upload and verification system
- **Responsive Design** - Optimized for desktop and mobile devices

### Admin Portal
- **Comprehensive Dashboard** - KPIs, loan management, and user analytics
- **Loan Management** - Review, approve/reject loan applications
- **User Management** - Search, filter, and manage registered users
- **Analytics & Reporting** - Performance metrics and financial insights
- **Real-time Updates** - Live data for loan statuses and repayments

## 🛠️ Technology Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS + Shadcn/ui components
- **Routing**: React Router v6
- **State Management**: React Query (TanStack Query)
- **Forms**: React Hook Form + Zod validation
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Package Manager**: npm

## 📦 Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ezlend-za
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Access the application**
   - Frontend: `http://localhost:8080`
   - The app will auto-reload when you make changes

### Build for Production
```bash
npm run build
```

## 🏗️ Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── ui/              # Shadcn/ui components
│   ├── navigation/      # Header, navigation components
│   ├── hero/           # Landing page hero section
│   └── loan/           # Loan-related components
├── pages/               # Main application pages
│   ├── auth/           # Login, signup pages
│   ├── dashboard/      # User dashboard
│   ├── loan/           # Loan application flow
│   └── admin/          # Admin portal
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── assets/             # Images, icons, static assets
└── index.css          # Global styles and design system
```

## 🎨 Design System

The application uses a comprehensive design system built with CSS custom properties and Tailwind CSS:

- **Colors**: Professional blues, success greens, South African-inspired accents
- **Typography**: Clean, modern font stack with proper hierarchy
- **Components**: Consistent button styles, form inputs, and interactive elements
- **Animations**: Smooth transitions and hover effects
- **Responsive**: Mobile-first approach with breakpoints for all devices

## 📋 Features Overview

### User Features
- ✅ Loan calculator with real-time calculations
- ✅ Multi-step loan application process
- ✅ Document upload for KYC verification
- ✅ User dashboard with loan tracking
- ✅ Payment scheduling and history
- ✅ Responsive design for mobile and desktop

### Admin Features
- ✅ Admin dashboard with KPIs
- ✅ Loan approval/rejection workflow
- ✅ User management and search
- ✅ Financial analytics and reporting
- ✅ Audit logs and activity tracking

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:

```env
# Add your environment variables here
# Example for Supabase integration:
# VITE_SUPABASE_URL=your_supabase_url
# VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Styling Configuration
- **Design tokens** are defined in `src/index.css`
- **Tailwind configuration** is in `tailwind.config.ts`
- **Component variants** can be customized in individual component files

## 🔒 Security Considerations

- All forms include proper validation
- Sensitive data handling follows best practices
- HTTPS enforcement for production
- Input sanitization and XSS protection
- Secure authentication flow with proper session management

## 📱 Mobile Development

For mobile app development, this project can be extended with **Capacitor**:

```bash
# Install Capacitor
npm install @capacitor/core @capacitor/cli @capacitor/ios @capacitor/android

# Initialize Capacitor
npx cap init

# Add platforms
npx cap add ios
npx cap add android

# Build and sync
npm run build
npx cap sync
```

## 🚀 Deployment

### Lovable Deployment
1. Open your Lovable project
2. Click on "Publish" in the top right
3. Your app will be deployed automatically

### Custom Domain
1. Navigate to Project > Settings > Domains
2. Click "Connect Domain"
3. Follow the setup instructions

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For support and questions:
- Create an issue in the GitHub repository
- Contact the development team
- Check the documentation

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🔮 Future Enhancements

- **Real-time notifications** via WebSocket integration
- **Advanced analytics** with charts and reporting
- **Mobile app** using Capacitor for iOS and Android
- **AI-powered credit scoring** integration
- **Payment gateway** integration (Stitch, PayFast, etc.)
- **SMS and email** notification system
- **Multi-language support** for local South African languages

---

Built with ❤️ for the South African fintech community using [Lovable](https://lovable.dev)