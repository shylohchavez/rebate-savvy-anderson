<?php
/**
 * Anderson Child Theme Functions
 * For GEFA HEAR/HER Landing Page
 */

// Prevent direct access
if (!defined('ABSPATH')) {
    exit;
}

// Define child theme constants
define('ANDERSON_CHILD_VERSION', '1.0.0');
define('ANDERSON_CHILD_URI', get_stylesheet_directory_uri());
define('ANDERSON_CHILD_PATH', get_stylesheet_directory());

// Company constants (DO NOT MODIFY - compliance requirement)
class Anderson_Child_Company {
    const COMPANY_NAME = "Anderson Heating, Air & Insulation";
    const DBA = "John Anderson Service Co.";
    const PHONE_DISPLAY = "706-629-0749";
    const PHONE_TEL = "+17066290749";
    const EMAIL = "workorders@johnandersonservice.com";
    const SITE_URL = "https://www.johnandersonservice.com";
    const ADDRESS = "519 Pine St, Calhoun, GA 30701";
    
    // 46 counties served (DO NOT MODIFY)
    const SERVICE_COUNTIES = [
        'Banks', 'Barrow', 'Carroll', 'Catoosa', 'Chattooga', 'Cherokee', 'Clarke', 'Clayton',
        'Cobb', 'Coweta', 'Dade', 'Dawson', 'DeKalb', 'Douglas', 'Elbert', 'Fannin', 'Fayette',
        'Floyd', 'Forsyth', 'Franklin', 'Fulton', 'Gilmer', 'Gordon', 'Gwinnett', 'Habersham',
        'Hall', 'Haralson', 'Hart', 'Heard', 'Henry', 'Jackson', 'Lumpkin', 'Madison', 'Murray',
        'Newton', 'Oconee', 'Paulding', 'Pickens', 'Rockdale', 'Stephens', 'Towns', 'Troup',
        'Walker', 'Walton', 'White', 'Whitfield'
    ];
}

/**
 * Enqueue parent and child theme styles
 */
function anderson_child_enqueue_styles() {
    // Enqueue parent theme style
    wp_enqueue_style('parent-style', get_template_directory_uri() . '/style.css', array(), wp_get_theme()->parent()->get('Version'));
    
    // Enqueue child theme style
    wp_enqueue_style('anderson-child-style', get_stylesheet_uri(), array('parent-style'), ANDERSON_CHILD_VERSION);
    
    // Enqueue Google Fonts
    wp_enqueue_style('anderson-fonts', 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Oswald:wght@700&display=swap', array(), null);
}
add_action('wp_enqueue_scripts', 'anderson_child_enqueue_styles');

/**
 * Enqueue assets only for GEFA page
 */
function anderson_child_enqueue_gefa_assets() {
    global $post;
    
    // Only load on the hear-her page
    if (is_page() && $post->post_name === 'hear-her') {
        wp_enqueue_style(
            'anderson-gefa-styles',
            ANDERSON_CHILD_URI . '/assets/css/gefa-page.css',
            array('anderson-child-style'),
            ANDERSON_CHILD_VERSION
        );
        
        wp_enqueue_script(
            'anderson-gefa-scripts',
            ANDERSON_CHILD_URI . '/assets/js/gefa-page.js',
            array('jquery'),
            ANDERSON_CHILD_VERSION,
            true
        );
        
        // Localize script with company data
        wp_localize_script('anderson-gefa-scripts', 'andersonData', array(
            'phone' => Anderson_Child_Company::PHONE_TEL,
            'email' => Anderson_Child_Company::EMAIL,
            'counties' => Anderson_Child_Company::SERVICE_COUNTIES
        ));
    }
}
add_action('wp_enqueue_scripts', 'anderson_child_enqueue_gefa_assets');

/**
 * Add JSON-LD schema for GEFA page only
 */
function anderson_child_add_gefa_schema() {
    global $post;
    
    if (is_page() && $post->post_name === 'hear-her') {
        // LocalBusiness Schema
        $local_business = array(
            "@context" => "https://schema.org",
            "@type" => "LocalBusiness",
            "@id" => Anderson_Child_Company::SITE_URL . "/#organization",
            "name" => Anderson_Child_Company::COMPANY_NAME,
            "alternateName" => Anderson_Child_Company::DBA,
            "url" => Anderson_Child_Company::SITE_URL,
            "logo" => ANDERSON_CHILD_URI . "/assets/images/anderson-logo.png",
            "telephone" => Anderson_Child_Company::PHONE_TEL,
            "email" => Anderson_Child_Company::EMAIL,
            "address" => array(
                "@type" => "PostalAddress",
                "streetAddress" => "519 Pine St",
                "addressLocality" => "Calhoun",
                "addressRegion" => "GA",
                "postalCode" => "30701",
                "addressCountry" => "US"
            ),
            "areaServed" => array(),
            "serviceType" => array(
                "Georgia Energy Rebates Consultation",
                "HER Program Guidance", 
                "HEAR Program Guidance",
                "Heat Pump Installation",
                "Insulation Services",
                "Air Sealing",
                "Home Energy Assessment"
            ),
            "hasCredential" => "Georgia Home Energy Rebates Specialist"
        );
        
        // Add counties to areaServed
        foreach (Anderson_Child_Company::SERVICE_COUNTIES as $county) {
            $local_business['areaServed'][] = array(
                "@type" => "City",
                "name" => $county . " County, Georgia"
            );
        }
        
        // FAQ Schema
        $faq_schema = array(
            "@context" => "https://schema.org",
            "@type" => "FAQPage",
            "mainEntity" => array(
                array(
                    "@type" => "Question",
                    "name" => "What's the difference between HER and HEAR?",
                    "acceptedAnswer" => array(
                        "@type" => "Answer",
                        "text" => "HER = whole‑home energy savings. Open to all incomes. HEAR = specific electric upgrades (like a heat pump). For households at or below 150% of Area Median Income (AMI); bigger help if at or below 80% AMI."
                    )
                ),
                array(
                    "@type" => "Question",
                    "name" => "How much money can I get back?",
                    "acceptedAnswer" => array(
                        "@type" => "Answer",
                        "text" => "HEAR uses set caps (examples): up to $8,000 for a heat pump HVAC, $1,750 for a heat pump water heater, $4,000 for an electric panel, and a total HEAR cap of $14,000 per home. HER pays based on modeled energy savings (up to $4,000, or up to $8,000 for low‑to‑moderate income)."
                    )
                ),
                array(
                    "@type" => "Question",
                    "name" => "Which counties do you serve for the GEFA rebate programs?",
                    "acceptedAnswer" => array(
                        "@type" => "Answer",
                        "text" => "Our GEFA rebate services are exclusively available to homeowners within a specific 46-county region in North Georgia. Our service area includes: " . implode(', ', Anderson_Child_Company::SERVICE_COUNTIES) . " counties."
                    )
                )
            )
        );
        
        // HowTo Schema
        $howto_schema = array(
            "@context" => "https://schema.org",
            "@type" => "HowTo",
            "name" => "How to Get Georgia Home Energy Rebates with Anderson",
            "description" => "5 simple steps to get your Georgia HER or HEAR rebates with Anderson Heating, Air & Insulation",
            "step" => array(
                array(
                    "@type" => "HowToStep",
                    "position" => 1,
                    "name" => "Quick Call & Plan",
                    "text" => "We listen and build your plan. If an in‑home assessment is needed, we tell you the cost up front and deliver your report within 48 hours."
                ),
                array(
                    "@type" => "HowToStep",
                    "position" => 2,
                    "name" => "Reserve Your Rebate",
                    "text" => "We submit project details; you complete your profile and income step in the Neighborly portal."
                ),
                array(
                    "@type" => "HowToStep",
                    "position" => 3,
                    "name" => "Professional Install",
                    "text" => "We install to high standards. Heat pumps include Manual J; envelope work includes blower door & CAZ tests."
                ),
                array(
                    "@type" => "HowToStep",
                    "position" => 4,
                    "name" => "Quality Check",
                    "text" => "Georgia inspects projects. First 5 jobs for a new contractor are inspected; after that, at least 5% in person and 20% total."
                ),
                array(
                    "@type" => "HowToStep",
                    "position" => 5,
                    "name" => "Rebate Processed",
                    "text" => "Typical review in 3–5 business days; payments usually 10–14 days after QA/QC."
                )
            )
        );
        
        // Output all schemas
        echo '<script type="application/ld+json">' . json_encode($local_business, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES) . '</script>' . "\n";
        echo '<script type="application/ld+json">' . json_encode($faq_schema, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES) . '</script>' . "\n";
        echo '<script type="application/ld+json">' . json_encode($howto_schema, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES) . '</script>' . "\n";
    }
}
add_action('wp_head', 'anderson_child_add_gefa_schema');

/**
 * Add custom body class for GEFA page
 */
function anderson_child_add_body_class($classes) {
    global $post;
    
    if (is_page() && $post->post_name === 'hear-her') {
        $classes[] = 'anderson-gefa-page';
    }
    
    return $classes;
}
add_filter('body_class', 'anderson_child_add_body_class');

/**
 * Customize excerpt length
 */
function anderson_child_excerpt_length($length) {
    return 30;
}
add_filter('excerpt_length', 'anderson_child_excerpt_length');

/**
 * Add theme support
 */
function anderson_child_theme_support() {
    // Add support for responsive embeds
    add_theme_support('responsive-embeds');
    
    // Add support for custom logo
    add_theme_support('custom-logo', array(
        'height'      => 100,
        'width'       => 400,
        'flex-height' => true,
        'flex-width'  => true,
    ));
}
add_action('after_setup_theme', 'anderson_child_theme_support');

/**
 * Register shortcodes (fallback if plugin not active)
 */
function anderson_child_register_shortcodes() {
    // Only register if the main plugin shortcodes don't exist
    if (!shortcode_exists('anderson_phone')) {
        add_shortcode('anderson_phone', 'anderson_child_phone_shortcode');
        add_shortcode('anderson_email', 'anderson_child_email_shortcode');
        add_shortcode('anderson_service_area', 'anderson_child_service_area_shortcode');
    }
}
add_action('init', 'anderson_child_register_shortcodes');

function anderson_child_phone_shortcode($atts) {
    return '<a href="tel:' . Anderson_Child_Company::PHONE_TEL . '">' . Anderson_Child_Company::PHONE_DISPLAY . '</a>';
}

function anderson_child_email_shortcode($atts) {
    return '<a href="mailto:' . Anderson_Child_Company::EMAIL . '">' . Anderson_Child_Company::EMAIL . '</a>';
}

function anderson_child_service_area_shortcode($atts) {
    return implode(', ', Anderson_Child_Company::SERVICE_COUNTIES);
}

/**
 * Custom post meta for GEFA page
 */
function anderson_child_add_meta_tags() {
    global $post;
    
    if (is_page() && $post->post_name === 'hear-her') {
        echo '<meta name="description" content="Georgia Home Energy Rebates (GEFA) made simple by Anderson Heating, Air & Insulation. HEAR and HER program guidance for North Georgia homeowners. Up to $14,000 in rebates available.">' . "\n";
        echo '<meta name="keywords" content="Georgia energy rebates, HEAR, HER, GEFA, heat pump rebates, insulation rebates, Anderson HVAC, North Georgia">' . "\n";
        echo '<meta property="og:title" content="Georgia Energy Rebates - Anderson HVAC">' . "\n";
        echo '<meta property="og:description" content="Up to $14,000 in Georgia energy rebates. We handle the paperwork, testing, and compliance for HEAR and HER programs.">' . "\n";
        echo '<meta property="og:type" content="website">' . "\n";
        echo '<meta property="og:url" content="' . get_permalink() . '">' . "\n";
        echo '<link rel="canonical" href="' . get_permalink() . '">' . "\n";
    }
}
add_action('wp_head', 'anderson_child_add_meta_tags');

/**
 * Disable comments on GEFA page
 */
function anderson_child_disable_comments($open, $post_id) {
    $post = get_post($post_id);
    if ($post && $post->post_name === 'hear-her') {
        return false;
    }
    return $open;
}
add_filter('comments_open', 'anderson_child_disable_comments', 10, 2);