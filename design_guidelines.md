# Manifest Write Design Guidelines

## Design Approach
**Reference-Based Approach**: Drawing inspiration from spiritual wellness platforms like Headspace, Calm, and productivity tools like Notion, with a focus on serene, contemplative aesthetics that encourage mindfulness and intentional action.

## Core Design Principles
- **Spiritual Minimalism**: Clean, uncluttered interfaces that promote focus and contemplation
- **Calming Energy**: Soft, nature-inspired elements that create a peaceful user experience
- **Intentional Hierarchy**: Clear visual flow guiding users through the manifestation process
- **Tactile Connection**: Design elements that evoke the physical act of writing and paper

## Color Palette

### Primary Colors (Dark & Light Mode)
- **Primary Brand**: 280 30% 25% (deep spiritual purple) / 280 25% 85% (light mode)
- **Secondary**: 200 40% 30% (calming blue-green) / 200 30% 75% (light mode)
- **Background**: 240 15% 8% (dark) / 0 0% 98% (light)
- **Surface**: 240 10% 12% (dark) / 0 0% 95% (light)

### Accent Colors
- **Success/Energy**: 140 35% 45% (sage green for completion states)
- **Gentle Warning**: 35 40% 55% (warm terracotta for important actions)

### Gradients
- **Hero backgrounds**: Subtle gradients from primary to secondary (280 30% 25% to 200 40% 30%)
- **Card overlays**: Very subtle radial gradients for depth
- **Button states**: Gentle linear gradients for premium feel

## Typography
- **Primary Font**: Inter (clean, modern readability)
- **Accent Font**: Crimson Text (for headers, spiritual elegance)
- **Hierarchy**: 
  - H1: 2.5rem (40px) Crimson Text
  - H2: 2rem (32px) Inter
  - Body: 1rem (16px) Inter
  - Small: 0.875rem (14px) Inter

## Layout System
**Spacing Framework**: Tailwind units of 4, 6, 8, 12, 16, 24
- `p-4` for tight spacing
- `m-6` for component margins  
- `gap-8` for section spacing
- `py-12` for vertical section padding
- `px-16` for wide container padding
- `mb-24` for major section breaks

## Component Library

### Core Navigation
- **Header**: Minimal with logo, navigation, and user session indicator
- **Footer**: Simple with essential links and spiritual tagline

### Content Components
- **AI Conversation Cards**: Rounded cards with gentle shadows and breathing room
- **Manifestation Display**: Elegant typography showcasing generated text
- **Font Preview Cards**: Visual samples of calligraphy styles with hover states
- **Progress Indicators**: Soft, organic progress bars for conversation flow

### Interactive Elements
- **Primary Buttons**: Rounded with gradient backgrounds
- **Secondary Buttons**: Outline style with blur backgrounds when over images
- **Form Inputs**: Soft borders with focus states in brand colors
- **Toggle Switches**: For language and mode preferences

### E-commerce
- **Pricing Cards**: Clean pricing display with spiritual iconography
- **Preview Modals**: Full-screen PDF previews with purchase CTAs
- **Payment Flow**: Streamlined Stripe integration with security indicators

## Key Pages Structure

### Landing Page (3 sections max)
1. **Hero Section**: Large spiritual imagery with gradient overlay, clear value proposition
2. **Process Overview**: Three-step visual flow (Manifest → Customize → Write)
3. **Social Proof & CTA**: Testimonials and primary conversion action

### App Interface
- **Conversation Flow**: Card-based interface with gentle animations between steps
- **Preview Gallery**: Grid layout showcasing font options and sample worksheets
- **Dashboard**: Simple user history and re-download capabilities

## Images
- **Hero Image**: Large, calming nature scene (mountains, flowing water, or meditation space) with gradient overlay
- **Process Icons**: Custom illustrated icons for AI conversation, font selection, and writing practice
- **Font Samples**: High-quality typography specimens showing each calligraphy style
- **Background Textures**: Subtle paper or natural textures for depth without distraction

## Animations
**Minimal Implementation**:
- Gentle fade-ins for conversation steps
- Smooth hover transitions on interactive elements
- Subtle loading states for AI generation
- Page transitions with soft easing

This design creates a serene, purposeful experience that honors the spiritual nature of manifestation while maintaining professional e-commerce functionality.