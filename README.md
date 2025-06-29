# Skyline Home Services Website

A fully accessible, SEO-optimized static website built with Next.js 15 (App Router) for Skyline Home Services, a home services company based in Palo Alto, CA.

## 🚀 Features

### Technical Stack
- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **MDX** for content management
- **Static Export** for hosting flexibility

### SEO & Accessibility
- **WCAG 2.1 AA Compliant** - Full accessibility support
- **JSON-LD Structured Data** - Rich snippets for search engines
- **Semantic HTML5** - Proper landmarks and structure
- **Responsive Design** - Mobile-first approach
- **Performance Optimized** - Next.js Image optimization, lazy loading

### Business Features
- **Service Pages** - Plumbing, HVAC, Electrical, Roofing
- **Location Pages** - Palo Alto, Menlo Park, Mountain View
- **Contact Forms** - Netlify-ready form handling
- **Review System** - Customer testimonials with schema
- **Emergency Services** - 24/7 availability highlighted

### AI/LLM Ready
- **Structured Content API** - `/api/summary` endpoint
- **Content Summaries** - Optimized for AI consumption
- **Demo Chatbot** - Mock AI assistant integration

## 📁 Project Structure

\`\`\`
app/
├── components/           # Reusable UI components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── ServiceCard.tsx
│   ├── ReviewCard.tsx
│   ├── FaqAccordion.tsx
│   ├── ContactForm.tsx
│   ├── Breadcrumbs.tsx
│   ├── MapEmbed.tsx
│   └── AskUsBot.tsx
├── services/            # Service pages
│   ├── page.tsx
│   ├── plumbing/page.mdx
│   ├── hvac/page.mdx
│   ├── electrical/page.mdx
│   └── roofing/page.mdx
├── service-area/        # Location pages
│   ├── palo-alto/page.mdx
│   ├── menlo-park/page.mdx
│   └── mountain-view/page.mdx
├── api/                 # API routes
│   ├── summary/route.ts
│   └── placeholder/route.ts
├── about/page.mdx
├── reviews/page.mdx
├── contact/page.tsx
├── locations/page.tsx
├── for-ai/page.tsx
├── layout.tsx
└── page.tsx
\`\`\`

## 🛠️ Installation & Setup

1. **Clone the repository**
   \`\`\`bash
   git clone <repository-url>
   cd skyline-home-services
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Run development server**
   \`\`\`bash
   npm run dev
   \`\`\`

4. **Build for production**
   \`\`\`bash
   npm run build
   \`\`\`

## 🎨 Design System

### Colors
- **Navy**: #1C2C4C (Primary brand color)
- **Sky Blue**: #3ABEF9 (Accent color)
- **Light Gray**: #F4F4F4 (Background color)

### Typography
- **Headings**: Poppins (400, 500, 600, 700)
- **Body**: Inter (400, 500, 600)

### Components
All components follow accessibility best practices with:
- Proper ARIA labels and roles
- Keyboard navigation support
- Focus management
- Screen reader compatibility

## 📊 SEO Implementation

### Structured Data (JSON-LD)
- **HomeAndConstructionBusiness** - Main business entity
- **Service** - Individual service pages
- **FAQPage** - FAQ sections with Q&A pairs
- **Review** - Customer testimonials
- **AggregateRating** - Overall business rating
- **BreadcrumbList** - Navigation breadcrumbs

### Meta Tags
- Open Graph tags for social sharing
- Twitter Card support
- Canonical URLs
- Proper title and description tags

### Performance
- Next.js Image optimization
- Static generation for fast loading
- Lazy loading for images
- Optimized font loading

## 🤖 AI/LLM Integration

### Content API
The `/api/summary` endpoint provides structured content summaries:

\`\`\`json
{
  "success": true,
  "data": {
    "services": { ... },
    "locations": { ... },
    "company": { ... }
  },
  "meta": {
    "usage": "This endpoint provides structured content summaries for AI/LLM consumption..."
  }
}
\`\`\`

### Demo Chatbot
- Sticky chat widget with mock AI responses
- POST to `/api/placeholder` for demo functionality
- Clearly labeled as demonstration feature

## 🚀 Deployment

### Static Export
The site is configured for static export:

\`\`\`javascript
// next.config.mjs
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}
\`\`\`

### Hosting Options
- **Netlify** - Drag and drop the `out` folder
- **Vercel** - Connect GitHub repository
- **GitHub Pages** - Upload static files
- **Any static host** - Upload the build output

## 📋 GEO Optimization Checklist

- ✅ **Local Business Schema** - Complete JSON-LD implementation
- ✅ **NAP Consistency** - Name, Address, Phone consistent across all pages
- ✅ **Service Area Pages** - Dedicated pages for each location
- ✅ **Local Keywords** - Integrated throughout content
- ✅ **Contact Information** - Prominently displayed
- ✅ **Business Hours** - Clearly stated with emergency availability
- ✅ **Service Categories** - Well-organized with local relevance
- ✅ **Customer Reviews** - Structured data for testimonials

## 🔧 Extending the Site

### Adding New Services
1. Create new MDX file in `app/services/[service-name]/page.mdx`
2. Include frontmatter with title, description, summary, excerpt, and tags
3. Add FAQ section with structured data
4. Update the services array in relevant components

### Adding New Locations
1. Create new MDX file in `app/service-area/[location]/page.mdx`
2. Include local keywords and service information
3. Add location to the API summary endpoint
4. Update navigation and footer links

### Integrating Real AI/Chatbot
1. Replace the mock `/api/placeholder` endpoint
2. Connect to your preferred AI service (OpenAI, Anthropic, etc.)
3. Use the `/api/summary` data to provide context
4. Implement proper error handling and rate limiting

### Adding Real Forms
1. Configure Netlify Forms or your preferred form handler
2. Update the ContactForm component with proper endpoints
3. Add form validation and success/error states
4. Implement spam protection (reCAPTCHA, etc.)

## 📞 Business Information

- **Company**: Skyline Home Services
- **Address**: 2211 Elm Street, Palo Alto, CA 94301
- **Phone**: (650) 555-0199
- **Email**: info@skylinehomesvc.com
- **Hours**: Mon-Sat 8AM-6PM, Sunday Closed
- **Emergency**: 24/7 Available
- **Service Areas**: Palo Alto, Menlo Park, Mountain View

## 📄 License

This project is created for demonstration purposes. Modify as needed for your specific use case.
