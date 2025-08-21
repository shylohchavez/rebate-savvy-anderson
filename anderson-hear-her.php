<?php
/**
 * Plugin Name: Anderson HEAR/HER Landing Page
 * Plugin URI: https://www.johnandersonservice.com
 * Description: Georgia Home Energy Rebates (HEAR/HER) landing page for Anderson Heating, Air & Insulation. Includes shortcodes, block patterns, and compliance-ready content.
 * Version: 1.0.0
 * Author: Anderson Heating, Air & Insulation
 * License: GPL v2 or later
 * Text Domain: anderson-hear-her
 */

// Exit if accessed directly
if (!defined('ABSPATH')) {
    exit;
}

// Define plugin constants
define('ANDERSON_HEAR_HER_VERSION', '1.0.0');
define('ANDERSON_HEAR_HER_PLUGIN_URL', plugin_dir_url(__FILE__));
define('ANDERSON_HEAR_HER_PLUGIN_PATH', plugin_dir_path(__FILE__));

// Company constants (DO NOT MODIFY - compliance requirement)
class Anderson_Company_Data {
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

// Main plugin class
class Anderson_HEAR_HER_Plugin {
    
    public function __construct() {
        add_action('init', array($this, 'init'));
        add_action('wp_enqueue_scripts', array($this, 'enqueue_assets'));
        add_action('wp_head', array($this, 'add_schema_json_ld'));
        register_activation_hook(__FILE__, array($this, 'activate'));
    }
    
    public function init() {
        // Register shortcodes
        add_shortcode('anderson_hear_her', array($this, 'render_landing_page'));
        add_shortcode('anderson_phone', array($this, 'render_phone'));
        add_shortcode('anderson_email', array($this, 'render_email'));
        add_shortcode('anderson_service_area', array($this, 'render_service_area'));
        
        // Register block pattern
        add_action('init', array($this, 'register_block_pattern'));
    }
    
    public function enqueue_assets() {
        // Only load on pages with shortcode or specific slug
        global $post;
        if ((is_a($post, 'WP_Post') && has_shortcode($post->post_content, 'anderson_hear_her')) || 
            (is_page() && $post->post_name === 'hear-her')) {
            
            wp_enqueue_style(
                'anderson-hear-her-styles',
                ANDERSON_HEAR_HER_PLUGIN_URL . 'assets/css/anderson-hear.css',
                array(),
                ANDERSON_HEAR_HER_VERSION
            );
            
            wp_enqueue_script(
                'anderson-hear-her-scripts',
                ANDERSON_HEAR_HER_PLUGIN_URL . 'assets/js/anderson-hear.js',
                array('jquery'),
                ANDERSON_HEAR_HER_VERSION,
                true
            );
        }
    }
    
    public function add_schema_json_ld() {
        global $post;
        if ((is_a($post, 'WP_Post') && has_shortcode($post->post_content, 'anderson_hear_her')) || 
            (is_page() && $post->post_name === 'hear-her')) {
            
            // Load schema templates
            include ANDERSON_HEAR_HER_PLUGIN_PATH . 'templates/schema-local.php';
            include ANDERSON_HEAR_HER_PLUGIN_PATH . 'templates/schema-faq.php';
            include ANDERSON_HEAR_HER_PLUGIN_PATH . 'templates/schema-howto.php';
        }
    }
    
    public function render_landing_page($atts) {
        ob_start();
        include ANDERSON_HEAR_HER_PLUGIN_PATH . 'templates/landing.php';
        return ob_get_clean();
    }
    
    public function render_phone($atts) {
        return '<a href="tel:' . Anderson_Company_Data::PHONE_TEL . '">' . Anderson_Company_Data::PHONE_DISPLAY . '</a>';
    }
    
    public function render_email($atts) {
        return '<a href="mailto:' . Anderson_Company_Data::EMAIL . '">' . Anderson_Company_Data::EMAIL . '</a>';
    }
    
    public function render_service_area($atts) {
        return implode(', ', Anderson_Company_Data::SERVICE_COUNTIES);
    }
    
    public function register_block_pattern() {
        if (function_exists('register_block_pattern')) {
            register_block_pattern(
                'anderson/gefa-rebates-landing',
                array(
                    'title'       => __('Anderson / GEFA Rebates Landing', 'anderson-hear-her'),
                    'description' => __('Complete Georgia Energy Rebates landing page with compliance content', 'anderson-hear-her'),
                    'content'     => '[anderson_hear_her]',
                    'categories'  => array('anderson'),
                )
            );
        }
    }
    
    public function activate() {
        // Create custom page on activation (optional)
        $page_exists = get_page_by_path('hear-her');
        if (!$page_exists) {
            $page_data = array(
                'post_title'    => 'Georgia Energy Rebates - Anderson HVAC',
                'post_content'  => '[anderson_hear_her]',
                'post_status'   => 'draft',
                'post_type'     => 'page',
                'post_name'     => 'hear-her'
            );
            wp_insert_post($page_data);
        }
    }
}

// Initialize the plugin
new Anderson_HEAR_HER_Plugin();