# Anderson Child Theme - HEAR/HER Landing Page

A WordPress child theme specifically designed for Anderson Heating, Air & Insulation's Georgia Energy Rebates (GEFA) landing page.

## Installation Instructions

### Step 1: Install the Child Theme
1. Download the `anderson-child-hear.zip` file
2. Go to **Appearance → Themes → Add New → Upload Theme**
3. Select the ZIP file and click "Install Now"
4. Click "Activate" to enable the child theme

### Step 2: Create the Landing Page
1. Go to **Pages → Add New**
2. Set the page title to "Georgia Energy Rebates"
3. In the **Page Attributes** meta box, select **Template: Georgia Energy Rebates**
4. Set the slug to `hear-her` (this is important for proper asset loading)
5. Leave the content area empty - the template handles all content
6. Click "Publish"

### Step 3: Verify Setup
- Visit your new page at `yoursite.com/hear-her/`
- The page should display the complete GEFA landing page with Anderson branding
- Mobile sticky bar should appear on smaller screens
- All phone/email links should work properly

## Features

### ✅ Complete GEFA Landing Page
- Hero section with Anderson branding
- HER vs HEAR program comparison
- Income eligibility tables (Gordon County example)
- Upgrades section with compliance rules
- 5-step process explanation
- Comprehensive FAQ section
- Service area with 46 counties
- Trust badges and compliance statements

### ✅ WordPress Integration
- Uses parent theme header/footer
- Child theme safety (updates won't override)
- Custom page template for the landing page
- SEO-friendly meta tags and structured data
- Mobile-responsive design

### ✅ Brand Compliance
- Anderson official brand colors (#512D6D, #D14129, etc.)
- Oswald font for headings, Inter for body text
- 7% logo clear space maintained
- No "free" language - uses "no-cost" instead
- All required GEFA compliance disclaimers

### ✅ Technical Features
- JSON-LD structured data (LocalBusiness, FAQ, HowTo)
- Assets load only on the GEFA page (performance)
- Fallback shortcodes if plugin not available
- Disabled comments on GEFA page
- Custom body classes for styling

## Company Information

- **Company:** Anderson Heating, Air & Insulation
- **DBA:** John Anderson Service Co.
- **Phone:** 706-629-0749
- **Email:** workorders@johnandersonservice.com
- **Website:** https://www.johnandersonservice.com
- **Address:** 519 Pine St, Calhoun, GA 30701

## Service Area (46 Counties)
Banks, Barrow, Carroll, Catoosa, Chattooga, Cherokee, Clarke, Clayton, Cobb, Coweta, Dade, Dawson, DeKalb, Douglas, Elbert, Fannin, Fayette, Floyd, Forsyth, Franklin, Fulton, Gilmer, Gordon, Gwinnett, Habersham, Hall, Haralson, Hart, Heard, Henry, Jackson, Lumpkin, Madison, Murray, Newton, Oconee, Paulding, Pickens, Rockdale, Stephens, Towns, Troup, Walker, Walton, White, Whitfield

## File Structure

```
anderson-child-hear/
├── style.css                 # Child theme styles with Anderson branding
├── functions.php            # Theme functionality and schema
├── page-hear-her.php        # Custom page template for GEFA page
├── assets/
│   ├── images/
│   │   └── anderson-logo.png # Company logo
│   ├── css/
│   │   └── gefa-page.css    # Additional page-specific styles
│   └── js/
│       └── gefa-page.js     # Page enhancements and tracking
└── README.md               # This file
```

## Customization

### Colors
The theme uses CSS custom properties that can be overridden:

```css
:root {
  --anderson-purple: #512D6D;
  --anderson-orange: #D14129;
  --anderson-lilac: #9069CD;
  --anderson-cream: #EFDBB2;
}
```

### Fonts
- **Headings:** Oswald 700
- **Body:** Inter (400, 500, 600, 700)
- Fonts are loaded from Google Fonts

### Logo Requirements
- Use full-color logo on light backgrounds
- Maintain ~7% clear space around logo
- Do not distort logo proportions
- Logo file should be placed in `assets/images/anderson-logo.png`

## Compatibility

- **WordPress:** 5.0+
- **PHP:** 7.4+
- **Parent Theme:** Any modern WordPress theme (tested with Twenty Twenty-Four)
- **Browsers:** Modern browsers with CSS Grid support

## Compliance Notes

This theme follows GEFA program compliance requirements:

- ✅ Never uses "free" language - uses "no-cost" instead  
- ✅ Includes required disclaimers about approval and funding
- ✅ Notes pairing requirements for electrical work
- ✅ Includes 90-day HEAR application deadline
- ✅ References official Georgia program resources

**⚠️ Important:** Do not modify compliance language without GEFA approval.

## Schema Markup

The theme automatically adds structured data:

- **LocalBusiness:** Company information with service areas
- **FAQPage:** Matching visible FAQ content
- **HowTo:** 5-step process for getting rebates
- **Service:** Main service offerings

## Performance

- CSS and JavaScript load only on the GEFA page
- Minimal external dependencies
- Optimized images and efficient markup
- Uses CSS custom properties for consistent theming

## Support

For support with this child theme:

- **Email:** workorders@johnandersonservice.com
- **Phone:** 706-629-0749  
- **Website:** https://www.johnandersonservice.com

## Changelog

### v1.0.0
- Initial release
- Complete GEFA landing page implementation
- Anderson brand compliance
- Mobile responsive design
- SEO and structured data
- WordPress best practices

## License

This child theme is proprietary to Anderson Heating, Air & Insulation and is not for redistribution or use by other companies.