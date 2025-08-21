=== Anderson HEAR/HER Landing Page ===
Contributors: andersonhvac
Tags: energy-rebates, gefa, hear, her, georgia, hvac, landing-page
Requires at least: 5.0
Tested up to: 6.4
Requires PHP: 7.4
Stable tag: 1.0.0
License: GPLv2 or later
License URI: https://www.gnu.org/licenses/gpl-2.0.html

Georgia Home Energy Rebates (HEAR/HER) landing page for Anderson Heating, Air & Insulation with compliance-ready content and structured data.

== Description ==

This plugin creates a comprehensive landing page for Georgia's Home Energy Rebates programs (HER and HEAR) specifically for Anderson Heating, Air & Insulation. It includes:

* **Shortcode Support**: Use `[anderson_hear_her]` to display the complete landing page
* **Block Pattern**: Visual block pattern for Gutenberg editor
* **Helper Shortcodes**: `[anderson_phone]`, `[anderson_email]`, `[anderson_service_area]`
* **Structured Data**: Automatic JSON-LD schema for FAQ, HowTo, and LocalBusiness
* **Compliance**: Built-in program compliance guardrails and approved language
* **Mobile Optimized**: Responsive design with sticky mobile CTA
* **Performance**: Assets load only when needed

= Company Information =
* Anderson Heating, Air & Insulation
* DBA: John Anderson Service Co.
* Phone: 706-629-0749
* Email: workorders@johnandersonservice.com
* Service Area: 46 counties in North Georgia

= Key Features =
* Complete GEFA program information
* Income eligibility tables by county
* 5-step process explanation
* Comprehensive FAQ section
* Service area mapping
* Trust badges and compliance statements

== Installation ==

1. Upload the plugin files to `/wp-content/plugins/anderson-hear-her/`
2. Activate the plugin through the 'Plugins' screen in WordPress
3. Use the shortcode `[anderson_hear_her]` on any page or post
4. OR use the "Anderson / GEFA Rebates Landing" block pattern in Gutenberg

= Automatic Page Creation =
Upon activation, the plugin will create a draft page called "Georgia Energy Rebates - Anderson HVAC" with the slug `hear-her` containing the shortcode.

== Usage ==

= Main Shortcode =
`[anderson_hear_her]` - Displays the complete landing page

= Helper Shortcodes =
* `[anderson_phone]` - Displays clickable phone number
* `[anderson_email]` - Displays clickable email address  
* `[anderson_service_area]` - Lists all 46 service counties

= CSS Customization =
The plugin uses CSS custom properties (variables) that can be overridden in your theme:

```css
:root {
  --anderson-purple: #512D6D;
  --anderson-orange: #D14129;
  --anderson-lilac: #9069CD;
  --anderson-cream: #EFDBB2;
}
```

== Compliance Notes ==

This plugin follows GEFA program compliance requirements:

* Never uses "free" language - uses "no-cost" instead
* Includes required disclaimers about approval and funding
* Notes pairing requirements for electrical work
* Includes 90-day HEAR application deadline
* References official Georgia program resources

**Important**: Do not modify compliance language without GEFA approval.

== Technical Details ==

= Schema Markup =
The plugin automatically adds structured data for:
* LocalBusiness with service area
* FAQPage matching visible content
* HowTo for the 5-step process
* Service schemas for main offerings

= Performance =
* CSS and JS assets load only on pages with the shortcode or slug "hear-her"
* Minimal JavaScript footprint
* Optimized images and efficient markup

= Security =
* All outputs are properly escaped
* Direct file access prevented
* Follows WordPress coding standards

== Frequently Asked Questions ==

= Can I use this plugin for other HVAC companies? =
No, this plugin is specifically designed for Anderson Heating, Air & Insulation with their branding, contact information, and service area.

= How do I customize the colors? =
Override the CSS custom properties in your theme's stylesheet. See the Usage section for variable names.

= Will this work with my theme? =
Yes, the plugin uses its own contained styling and should work with any WordPress theme.

= Can I modify the content? =
The content follows GEFA compliance requirements. Contact Anderson before making changes to ensure compliance is maintained.

= Does this create a separate page? =
The plugin creates content via shortcode that can be used on any page. It optionally creates a draft page upon activation.

== Screenshots ==

1. Complete landing page with hero section and CTAs
2. Income eligibility table with county selector
3. Upgrades section with compliance rules
4. 5-step process explanation
5. Comprehensive FAQ section
6. Service area with county grid
7. Mobile responsive design with sticky CTA

== Changelog ==

= 1.0.0 =
* Initial release
* Complete GEFA landing page implementation
* Shortcode and block pattern support
* Structured data implementation
* Mobile responsive design
* Compliance-ready content

== Upgrade Notice ==

= 1.0.0 =
Initial release of the Anderson HEAR/HER landing page plugin.

== Support ==

For support with this plugin, contact:
* Email: workorders@johnandersonservice.com
* Phone: 706-629-0749
* Website: https://www.johnandersonservice.com

This plugin is maintained by Anderson Heating, Air & Insulation for their specific business needs.