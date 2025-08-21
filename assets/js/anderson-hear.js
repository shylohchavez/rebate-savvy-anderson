/* Anderson HEAR/HER Landing Page JavaScript */
/* Minimal enhancements for mobile sticky bar */

jQuery(document).ready(function($) {
    
    // Smooth scrolling for anchor links
    $('a[href*="#"]').on('click', function(e) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            e.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 80
            }, 1000);
        }
    });
    
    // Enhanced details/summary accessibility
    $('details').each(function() {
        var $details = $(this);
        var $summary = $details.find('summary');
        
        // Add ARIA attributes
        $summary.attr({
            'aria-expanded': $details.attr('open') ? 'true' : 'false',
            'aria-controls': $details.attr('id') || 'details-' + $details.index()
        });
        
        if (!$details.attr('id')) {
            $details.attr('id', 'details-' + $details.index());
        }
        
        // Update ARIA when toggled
        $details.on('toggle', function() {
            $summary.attr('aria-expanded', $details.attr('open') ? 'true' : 'false');
        });
    });
    
    // County selector enhancement (if present)
    $('#county-select').on('change', function() {
        var selectedCounty = $(this).val();
        // Trigger any analytics or tracking here if needed
        if (typeof gtag !== 'undefined') {
            gtag('event', 'county_selected', {
                'county': selectedCounty
            });
        }
    });
    
    // Form tracking (if contact forms are present)
    $('.anderson-contact-form').on('submit', function() {
        if (typeof gtag !== 'undefined') {
            gtag('event', 'form_submit', {
                'form_type': 'contact'
            });
        }
    });
    
    // CTA button tracking
    $('.btn-anderson, .btn-anderson-secondary').on('click', function() {
        var buttonText = $(this).text().trim();
        if (typeof gtag !== 'undefined') {
            gtag('event', 'cta_click', {
                'button_text': buttonText
            });
        }
    });
    
    // Phone link tracking
    $('a[href^="tel:"]').on('click', function() {
        if (typeof gtag !== 'undefined') {
            gtag('event', 'phone_click', {
                'phone_number': '706-629-0749'
            });
        }
    });
    
    // Email link tracking
    $('a[href^="mailto:"]').on('click', function() {
        if (typeof gtag !== 'undefined') {
            gtag('event', 'email_click', {
                'email': 'workorders@johnandersonservice.com'
            });
        }
    });
    
    // Sticky mobile CTA show/hide based on scroll position
    var $stickyBar = $('.sticky-mobile-cta');
    var heroHeight = $('.hero-section').outerHeight() || 600;
    
    $(window).on('scroll', function() {
        var scrollTop = $(window).scrollTop();
        
        if (scrollTop > heroHeight) {
            $stickyBar.addClass('show');
        } else {
            $stickyBar.removeClass('show');
        }
    });
    
    // Add bounce animation class to sticky bar when shown
    $stickyBar.addClass('show').css({
        'animation': 'slideUp 0.3s ease-out'
    });
    
    // Add CSS animation keyframes
    if (!document.getElementById('anderson-animations')) {
        var style = document.createElement('style');
        style.id = 'anderson-animations';
        style.textContent = `
            @keyframes slideUp {
                from { 
                    transform: translateY(100%); 
                    opacity: 0; 
                }
                to { 
                    transform: translateY(0); 
                    opacity: 1; 
                }
            }
            
            .sticky-mobile-cta.show {
                animation: slideUp 0.3s ease-out;
            }
            
            .card:hover {
                transform: translateY(-2px);
            }
            
            .btn:hover {
                transform: translateY(-1px);
            }
        `;
        document.head.appendChild(style);
    }
    
    // Intersection Observer for fade-in animations
    if ('IntersectionObserver' in window) {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                }
            });
        }, observerOptions);
        
        // Observe cards and sections
        document.querySelectorAll('.card, .py-section').forEach(function(el) {
            observer.observe(el);
        });
        
        // Add fade-in CSS
        var fadeStyle = document.createElement('style');
        fadeStyle.textContent = `
            .card, .py-section {
                opacity: 0;
                transform: translateY(20px);
                transition: opacity 0.6s ease, transform 0.6s ease;
            }
            
            .fade-in {
                opacity: 1 !important;
                transform: translateY(0) !important;
            }
        `;
        document.head.appendChild(fadeStyle);
    }
});