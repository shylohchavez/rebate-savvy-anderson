/* Anderson GEFA Page JavaScript Enhancements */
/* Loaded only on the hear-her page for performance */

jQuery(document).ready(function($) {
    
    // Smooth scrolling for internal links
    $('a[href^="#"]').on('click', function(e) {
        const target = $(this.getAttribute('href'));
        if (target.length) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top - 80
            }, 800, 'easeInOutQuart');
        }
    });
    
    // Enhanced FAQ functionality
    $('details').each(function() {
        const $details = $(this);
        const $summary = $details.find('summary');
        
        // Add accessibility attributes
        $summary.attr({
            'aria-expanded': $details.prop('open') ? 'true' : 'false',
            'role': 'button',
            'tabindex': '0'
        });
        
        // Handle keyboard navigation
        $summary.on('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                $details.prop('open', !$details.prop('open'));
                $summary.attr('aria-expanded', $details.prop('open') ? 'true' : 'false');
            }
        });
        
        // Update aria-expanded on toggle
        $details.on('toggle', function() {
            $summary.attr('aria-expanded', $details.prop('open') ? 'true' : 'false');
        });
    });
    
    // Intersection Observer for fade-in animations
    if ('IntersectionObserver' in window) {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);
        
        // Observe elements for animation
        $('.anderson-card, .anderson-faq details').each(function() {
            observer.observe(this);
        });
    }
    
    // Phone and email click tracking
    $('a[href^="tel:"]').on('click', function() {
        // Track phone clicks for analytics
        if (typeof gtag !== 'undefined') {
            gtag('event', 'phone_click', {
                'phone_number': '706-629-0749',
                'page_location': window.location.href
            });
        }
        
        // Track for other analytics platforms
        if (typeof fbq !== 'undefined') {
            fbq('track', 'Contact', {
                content_name: 'Phone Click'
            });
        }
    });
    
    $('a[href^="mailto:"]').on('click', function() {
        if (typeof gtag !== 'undefined') {
            gtag('event', 'email_click', {
                'email': 'workorders@johnandersonservice.com',
                'page_location': window.location.href
            });
        }
    });
    
    // CTA button tracking
    $('.btn-anderson, .btn-anderson-secondary, .btn-anderson-ghost').on('click', function() {
        const buttonText = $(this).text().trim();
        const buttonClass = this.className;
        
        if (typeof gtag !== 'undefined') {
            gtag('event', 'cta_click', {
                'button_text': buttonText,
                'button_type': buttonClass.includes('anderson-secondary') ? 'secondary' : 
                              buttonClass.includes('anderson-ghost') ? 'ghost' : 'primary',
                'page_location': window.location.href
            });
        }
    });
    
    // Scroll progress indicator (optional)
    if ($('.anderson-gefa-page').length) {
        const $progressBar = $('<div class="scroll-progress"></div>');
        $progressBar.css({
            'position': 'fixed',
            'top': '0',
            'left': '0',
            'width': '0%',
            'height': '3px',
            'background': 'var(--anderson-orange)',
            'z-index': '9999',
            'transition': 'width 0.1s ease'
        });
        $('body').prepend($progressBar);
        
        $(window).on('scroll', function() {
            const scrolled = ($(window).scrollTop() / ($(document).height() - $(window).height())) * 100;
            $progressBar.css('width', Math.min(scrolled, 100) + '%');
        });
    }
    
    // Enhanced sticky mobile CTA behavior
    const $stickyBar = $('.sticky-mobile-cta');
    if ($stickyBar.length) {
        let isVisible = false;
        const heroHeight = $('.hero-section').outerHeight() || 600;
        
        $(window).on('scroll', throttle(function() {
            const scrollTop = $(window).scrollTop();
            const shouldShow = scrollTop > heroHeight;
            
            if (shouldShow && !isVisible) {
                $stickyBar.addClass('show').css('transform', 'translateY(0)');
                isVisible = true;
            } else if (!shouldShow && isVisible) {
                $stickyBar.removeClass('show').css('transform', 'translateY(100%)');
                isVisible = false;
            }
        }, 100));
    }
    
    // FAQ search functionality (optional enhancement)
    if ($('.anderson-faq').length) {
        const $searchInput = $('<input type="text" placeholder="Search FAQs..." class="faq-search" style="width: 100%; padding: 0.75rem; margin-bottom: 1rem; border: 1px solid rgba(81,45,109,0.2); border-radius: 0.5rem;">');
        $('.anderson-faq .container > div').prepend($searchInput);
        
        $searchInput.on('input', debounce(function() {
            const searchTerm = $(this).val().toLowerCase();
            
            $('details').each(function() {
                const $details = $(this);
                const summaryText = $details.find('summary').text().toLowerCase();
                const contentText = $details.find('.faq-content').text().toLowerCase();
                
                if (summaryText.includes(searchTerm) || contentText.includes(searchTerm) || searchTerm === '') {
                    $details.show();
                } else {
                    $details.hide();
                }
            });
        }, 300));
    }
    
    // Utility functions
    function throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
    
    function debounce(func, wait, immediate) {
        let timeout;
        return function() {
            const context = this, args = arguments;
            const later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            const callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    }
    
    // Add custom easing function for smooth scrolling
    $.easing.easeInOutQuart = function(x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
        return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
    };
    
    // Print styles for the page
    if (window.matchMedia) {
        const mediaQueryList = window.matchMedia('print');
        mediaQueryList.addListener(function(mql) {
            if (mql.matches) {
                // Hide interactive elements when printing
                $('.sticky-mobile-cta, .btn-anderson, .btn-anderson-secondary, .btn-anderson-ghost').hide();
                // Open all FAQ details for printing
                $('details').prop('open', true);
            }
        });
    }
});