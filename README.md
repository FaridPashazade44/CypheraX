# CypheraX - Secure Social Platform

![CypheraX](https://img.shields.io/badge/CypheraX-v1.0.0-blue?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-15.5-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?style=for-the-badge&logo=typescript)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-12+-blue?style=for-the-badge&logo=postgresql)

**CypheraX** is a cutting-edge, security-first social platform built with modern web technologies. Featuring a stunning cyber aesthetic, end-to-end encryption capabilities, and a full-featured social network experience.

## 🚀 Features

### Frontend
- 🎨 **Cyber Aesthetic Design** - Dark theme with neon blue accents and glowing effects
- 📱 **Responsive Layout** - Fully responsive design that works on all devices
- 🔐 **Secure Authentication** - JWT-based authentication with HTTP-only cookies
- 💬 **Real-time Messaging** - Chat system with conversation history
- 👥 **Friend Management** - Connect with friends, send/accept requests
- 📝 **Social Feed** - Create and interact with posts, comments, and likes
- �� **User Profiles** - Customizable profiles with stats and activity
- 📊 **Trending Topics** - See what's popular on the platform

### Backend
- 🔒 **JWT Authentication** - Secure token-based authentication
- 🔐 **Password Hashing** - bcrypt with salt rounds for secure password storage
- ✅ **Input Validation** - Zod schemas for comprehensive data validation
- 🛡️ **Rate Limiting** - Protect endpoints from abuse
- 🗄️ **PostgreSQL** - Robust relational database with connection pooling
- 🔄 **RESTful API** - Clean, well-documented API endpoints
- ⚡ **TypeScript** - Full type safety across the stack

## 📋 Prerequisites

- Node.js 18+ and npm
- PostgreSQL 12+
- Git

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/FaridPashazade44/CypheraX.git
   cd CypheraX
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up the database**
   ```bash
   # Create PostgreSQL database
   psql -U postgres
   CREATE DATABASE cypherax_db;
   \q

   # Run the schema
   psql -U postgres -d cypherax_db -f DATABASE_SCHEMA.sql
   ```

4. **Configure environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` and set your values:
   ```env
   DB_HOST=localhost
   DB_PORT=5432
   DB_USER=your_db_user
   DB_PASSWORD=your_secure_password
   DB_NAME=cypherax_db
   JWT_SECRET=your_very_secure_random_jwt_secret
   JWT_EXPIRATION=7d
   NODE_ENV=development
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
CypheraX/
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── api/               # API routes
│   │   │   ├── auth/          # Authentication endpoints
│   │   │   ├── posts/         # Posts endpoints
│   │   │   ├── comments/      # Comments endpoints
│   │   │   └── users/         # User endpoints
│   │   ├── auth/              # Auth pages (login, signup)
│   │   ├── dashboard/         # Main dashboard
│   │   ├── messages/          # Messaging page
│   │   ├── friends/           # Friends management
│   │   ├── profile/           # User profile
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Landing page
│   │   └── globals.css        # Global styles
│   ├── components/            # React components
│   │   ├── Navbar.tsx         # Navigation bar
│   │   ├── PostCard.tsx       # Post display component
│   │   └── CreatePost.tsx     # Post creation form
│   ├── lib/                   # Utility functions
│   │   ├── auth.ts            # Authentication utilities
│   │   ├── db.ts              # Database connection
│   │   ├── middleware.ts      # Custom middleware
│   │   └── validators.ts      # Zod validation schemas
│   └── types/                 # TypeScript type definitions
├── public/                    # Static assets
├── DATABASE_SCHEMA.sql        # Database schema
├── .env.example              # Environment variables template
├── package.json              # Dependencies
├── tsconfig.json             # TypeScript configuration
├── tailwind.config.ts        # Tailwind CSS configuration
└── next.config.ts            # Next.js configuration
```

## 🔌 API Endpoints

### Authentication
- `POST /api/auth/signup` - Register a new user
- `POST /api/auth/login` - Login with email and password

### Posts
- `GET /api/posts` - Get all posts
- `POST /api/posts` - Create a new post (authenticated)

### Comments
- `GET /api/comments?postId={id}` - Get comments for a post
- `POST /api/comments` - Create a comment (authenticated)

### Users
- `GET /api/users/profile` - Get user profile (authenticated)
- `PUT /api/users/profile` - Update user profile (authenticated)

## 🎨 Tech Stack

### Frontend
- **Next.js 15.5** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library

### Backend
- **Next.js API Routes** - Serverless API endpoints
- **PostgreSQL** - Relational database
- **JWT** - JSON Web Tokens for authentication
- **bcryptjs** - Password hashing
- **Zod** - Schema validation

## 🔒 Security Features

- ✅ Password hashing with bcrypt (10 salt rounds)
- ✅ JWT tokens stored in HTTP-only cookies
- ✅ Input validation with Zod schemas
- ✅ Rate limiting on all endpoints
- ✅ SQL injection prevention with parameterized queries
- ✅ XSS protection with React's built-in escaping
- ✅ CSRF protection with SameSite cookies
- ✅ Environment variable validation

## 📝 Development

### Build for production
```bash
npm run build
```

### Start production server
```bash
npm start
```

### Type checking
TypeScript is automatically checked during build. For manual type checking:
```bash
npx tsc --noEmit
```

## 🚀 Deployment

### Environment Variables for Production
Ensure all environment variables are set in your deployment platform:
- `DB_HOST`, `DB_PORT`, `DB_USER`, `DB_PASSWORD`, `DB_NAME`
- `JWT_SECRET` (use a strong, random value)
- `NODE_ENV=production`

### Deployment Platforms
This app can be deployed to:
- **Vercel** (Recommended for Next.js)
- **Netlify**
- **AWS**
- **DigitalOcean**
- **Heroku**

For production deployments:
1. Consider using a managed PostgreSQL service (AWS RDS, DigitalOcean Managed Databases)
2. Implement proper rate limiting with Redis
3. Add monitoring and logging (Sentry, LogRocket)
4. Enable HTTPS
5. Configure proper CORS policies

## 📚 Database Schema

The complete database schema is available in `DATABASE_SCHEMA.sql`. Key tables include:
- **users** - User accounts and profiles
- **posts** - User posts
- **comments** - Post comments
- **post_likes** - Post likes
- **friendships** - Friend connections
- **messages** - Direct messages
- **notifications** - User notifications

## 🤝 Contributing

Contributions are welcome! Please follow these steps:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS approach
- The open-source community for the excellent libraries

## 📞 Contact

**Farid Pashazade**
- GitHub: [@FaridPashazade44](https://github.com/FaridPashazade44)
- Email: farid@example.com

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**
