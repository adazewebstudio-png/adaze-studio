# Adaze Web Studio - Sanity Blog CMS

This is the Sanity Studio for managing blog content on the Adaze Web Studio website.

## Setup

1. Install dependencies:
   ```bash
   cd studio
   npm install
   ```

2. Run the studio locally:
   ```bash
   npm run dev
   ```
   The studio will be available at `http://localhost:3333`

## Deploying the Studio

Deploy to Sanity's free hosting:

```bash
npm run deploy
```

This will deploy to: `https://adaze-studio-blog.sanity.studio`

## Content Structure

### Blog Post
- **Title** - The article title
- **Slug** - URL-friendly version (auto-generated from title)
- **Author** - Select from authors
- **Main Image** - Featured image with alt text
- **Category** - Select from categories
- **Tags** - Keywords for SEO
- **Excerpt** - Short summary (for previews and SEO)
- **Body** - Rich text content with images, code blocks, etc.
- **Published At** - Publication date
- **Read Time** - Estimated reading time (minutes)
- **Featured** - Toggle to show in featured section

### Author
- **Name** - Author's full name
- **Role** - Job title/role
- **Image** - Profile picture
- **Bio** - Short biography

### Category
- **Title** - Category name
- **Slug** - URL-friendly version
- **Description** - Category description
- **Color** - Color theme for the category

## Initial Setup

After deploying, create:
1. At least one **Author** (e.g., "Richard Adaze")
2. Categories: "Web Design", "Business Growth", "Tech Trends", "Case Studies", "SEO & Marketing"
3. Your first blog posts!

## Environment Variables

The main website uses these environment variables (already configured):
- `NEXT_PUBLIC_SANITY_PROJECT_ID` - fa80crkw
- `NEXT_PUBLIC_SANITY_DATASET` - production
- `SANITY_API_TOKEN` - Your viewer token

## CORS Configuration

If you get CORS errors, go to:
1. [sanity.io/manage](https://sanity.io/manage)
2. Select your project → **API** tab
3. Add your website URL under **CORS origins**:
   - `http://localhost:3000` (for local development)
   - `https://adazewebstudio.netlify.app`
   - `https://adazewebstudio.com`
