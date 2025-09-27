# Manifest Write - AI-Powered Manifestation Platform

## Overview

Manifest Write is a spiritual wellness application that combines AI-powered manifestation guidance with calligraphy practice. The platform helps users transform their dreams and goals into personalized affirmations and scripts, then converts these into beautiful calligraphy practice worksheets for mindful writing practice.

The application follows a two-step process: users engage in an AI-guided conversation to create custom manifestation content, then select font styles to generate downloadable PDF worksheets. The platform emphasizes the connection between intentional writing and manifestation practice, drawing inspiration from spiritual wellness platforms like Headspace and Calm.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript, built using Vite for development and bundling
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: shadcn/ui component library with Radix UI primitives for accessibility
- **Styling**: Tailwind CSS with custom design system featuring spiritual minimalism aesthetic
- **State Management**: React Query (TanStack Query) for server state and built-in React state for local state
- **Form Handling**: React Hook Form with Zod validation for type-safe form management

### Backend Architecture
- **Runtime**: Node.js with Express.js server framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **API Design**: RESTful API structure with Express routes
- **Session Management**: Express sessions with PostgreSQL session store

### Design System
- **Typography**: Inter for body text, Crimson Text for headers
- **Color Palette**: Spiritual-themed colors with purple/blue gradients, supporting both light and dark modes
- **Component Patterns**: Card-based layouts with pearl/crystal aesthetic effects
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints

### Application Flow
- **Landing Page**: Hero section with process overview and call-to-action
- **Conversation Interface**: Step-by-step AI-guided questionnaire for manifestation content creation
- **Font Selection**: Gallery of Chinese and English calligraphy fonts with live previews
- **Preview & Purchase**: Modal-based worksheet preview system with pricing tiers
- **Download System**: PDF generation for printable calligraphy worksheets

### Component Architecture
- **Atomic Design**: Reusable UI components with consistent styling patterns
- **Example Components**: Each major component includes example implementations
- **State Management**: Props-based communication with React Query for data fetching
- **Error Boundaries**: Comprehensive error handling with user-friendly fallbacks

## External Dependencies

### Core Technologies
- **@neondatabase/serverless**: Serverless PostgreSQL database connection
- **drizzle-orm**: Type-safe ORM for database operations
- **@tanstack/react-query**: Server state management and caching
- **@radix-ui/***: Accessible UI component primitives for dropdowns, dialogs, forms, etc.
- **wouter**: Lightweight client-side routing

### Development Tools
- **Vite**: Build tool and development server with hot module replacement
- **TypeScript**: Type safety across frontend and backend
- **Tailwind CSS**: Utility-first CSS framework with custom design tokens
- **ESBuild**: Fast bundling for production builds

### AI Integration
- The application is designed to integrate with AI services for manifestation content generation, though specific AI providers are not yet implemented in the current codebase

### Payment Processing
- **@stripe/stripe-js** and **@stripe/react-stripe-js**: Stripe integration for worksheet purchases and subscription management

### Fonts and Assets
- **Google Fonts**: Inter and Crimson Text font families
- **Lucide React**: Icon library for consistent iconography
- Custom spiritual-themed visual elements and gradients

### Database Schema
- **Users Table**: Basic user authentication with username/password
- **Session Management**: PostgreSQL-based session storage
- Extensible schema design for future manifestation content and user data storage