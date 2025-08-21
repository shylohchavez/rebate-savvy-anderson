<?php
/**
 * Template Name: Georgia Energy Rebates
 * 
 * Custom page template for Anderson GEFA HEAR/HER landing page
 * This template contains ONLY the landing page content - the theme provides header/footer
 */

get_header(); ?>

<main id="main" class="site-main anderson-gefa-page" role="main">
    <?php while (have_posts()) : the_post(); ?>
        
        <article id="post-<?php the_ID(); ?>" <?php post_class('anderson-gefa-content'); ?>>
            
            <!-- Hero Section -->
            <section class="hero-section bg-gradient-hero py-16">
                <div class="container mx-auto px-4 max-w-6xl">
                    <div class="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-8">
                        <div class="flex-1">
                            <h1 class="font-bold mb-6 text-center">
                                A Cozier Home, Lower Bills—Handled by Anderson
                            </h1>
                            <p class="text-lg text-muted mb-6 text-center max-w-4xl mx-auto">
                                Slash energy bills, boost comfort, and let our team handle eligibility, testing, and paperwork.
                            </p>
                        </div>
                    </div>
                    
                    <!-- Official Georgia Program Links -->
                    <div class="alert alert-info mb-6">
                        <h3 class="font-semibold text-anderson-purple mb-3 text-sm text-center">Official Georgia Energy Rebates Resources:</h3>
                        <div class="grid grid-cols-2 gap-2 text-sm text-center">
                            <a href="https://energyrebates.georgia.gov/" target="_blank" rel="noopener noreferrer" class="text-anderson-purple hover:text-anderson-lilac">
                                Program Home ↗
                            </a>
                            <a href="https://energyrebates.georgia.gov/eligibility" target="_blank" rel="noopener noreferrer" class="text-anderson-purple hover:text-anderson-lilac">
                                Check Eligibility ↗
                            </a>
                            <a href="https://energyrebates.georgia.gov/how-do-i-how-apply" target="_blank" rel="noopener noreferrer" class="text-anderson-purple hover:text-anderson-lilac">
                                How to Apply ↗
                            </a>
                            <a href="https://energyrebates.georgia.gov/find-approved-contractor" target="_blank" rel="noopener noreferrer" class="text-anderson-purple hover:text-anderson-lilac">
                                Find Contractors ↗
                            </a>
                        </div>
                    </div>
                    
                    <!-- CTA Buttons -->
                    <div class="flex flex-wrap justify-center gap-4 mb-6">
                        <a href="tel:+17066290749" class="btn-anderson px-8 py-4 text-lg">
                            Get My No-Cost Estimate
                        </a>
                        <a href="#eligibility" class="btn-anderson-secondary px-8 py-4 text-lg">
                            Check My Rebate Eligibility
                        </a>
                        <a href="tel:+17066290749" class="btn-anderson-ghost px-8 py-4 text-lg">
                            Call 706-629-0749
                        </a>
                    </div>

                    <p class="text-sm text-muted mb-6 text-center">
                        <strong>HEAR applications must be submitted within 90 days of your invoice date.</strong> 
                        Rebates depend on eligibility, pre‑approval, and available funding.
                    </p>
                </div>
            </section>

            <!-- HER vs HEAR Comparison -->
            <section class="py-16">
                <div class="container mx-auto px-4 max-w-4xl">
                    <h2 class="mb-12">Understanding Georgia's Two Rebate Programs</h2>
                    <div class="anderson-grid">
                        <div class="anderson-card">
                            <h3 class="text-2xl font-bold text-anderson-purple mb-2">HER Program</h3>
                            <p class="text-sm text-muted mb-4">Home Energy Rebates</p>
                            <ul class="space-y-2 text-sm">
                                <li>• Whole-home energy savings projects</li>
                                <li>• Must achieve 20%+ energy savings</li>
                                <li>• No income limit</li>
                                <li>• Up to $4,000 (or $8,000 for low-income)</li>
                                <li>• Requires energy modeling</li>
                            </ul>
                        </div>
                        <div class="anderson-card">
                            <h3 class="text-2xl font-bold text-anderson-purple mb-2">HEAR Program</h3>
                            <p class="text-sm text-muted mb-4">Home Electrification & Appliance Rebates</p>
                            <ul class="space-y-2 text-sm">
                                <li>• Specific electric upgrades</li>
                                <li>• Income-based (≤150% AMI)</li>
                                <li>• Up to $8,000 for heat pumps</li>
                                <li>• $14,000 total cap per home</li>
                                <li>• Set rebate amounts</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Eligibility Section -->
            <section id="eligibility" class="py-16 bg-gradient-trust">
                <div class="container mx-auto px-4">
                    <h2 class="mb-8">Check Your HEAR Program Eligibility</h2>
                    
                    <div class="max-w-3xl mx-auto mb-8">
                        <p class="text-center text-lg mb-6">
                            The Home Electrification and Appliance Rebates (HEAR) program is income-based. 
                            Here are the basic requirements to qualify:
                        </p>
                        
                        <div class="anderson-grid text-center">
                            <div class="anderson-card">
                                <h4 class="font-semibold mb-2">✓ Georgia Resident</h4>
                                <p class="text-sm">Live in a single‑family or multifamily home in Georgia</p>
                            </div>
                            <div class="anderson-card">
                                <h4 class="font-semibold mb-2">✓ Approved Contractor</h4>
                                <p class="text-sm">Work with a participating contractor like Anderson</p>
                            </div>
                            <div class="anderson-card">
                                <h4 class="font-semibold mb-2">✓ Income Verification</h4>
                                <p class="text-sm">Complete application and income verification for State approval</p>
                            </div>
                        </div>
                    </div>

                    <div class="anderson-card max-w-4xl mx-auto">
                        <h3 class="text-center mb-4">Gordon County Income Eligibility Example</h3>
                        <table class="income-table">
                            <thead>
                                <tr>
                                    <th>Household Size</th>
                                    <th>Max Income for 100% Rebate<br/>(&lt;80% AMI)</th>
                                    <th>Max Income for 50% Rebate<br/>(&lt;150% AMI)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td>1</td><td>$43,750</td><td>$104,200</td></tr>
                                <tr><td>2</td><td>$50,000</td><td>$104,200</td></tr>
                                <tr><td>3</td><td>$56,250</td><td>$105,450</td></tr>
                                <tr><td>4</td><td>$62,450</td><td>$117,150</td></tr>
                                <tr><td>5</td><td>$67,450</td><td>$126,550</td></tr>
                                <tr><td>6</td><td>$72,450</td><td>$135,900</td></tr>
                                <tr><td>7</td><td>$77,450</td><td>$145,300</td></tr>
                                <tr><td>8</td><td>$82,450</td><td>$154,650</td></tr>
                            </tbody>
                        </table>
                        
                        <div class="alert alert-warning mt-4">
                            <p class="text-sm">
                                <strong>Important:</strong> Income limits vary by county and are subject to change. 
                                This chart is for informational purposes only. Final eligibility is determined by the State of Georgia.
                            </p>
                        </div>
                    </div>
                    
                    <div class="text-center mt-8">
                        <p class="mb-4">
                            <a href="https://energyrebates.georgia.gov/eligibility" target="_blank" rel="noopener noreferrer" 
                               class="text-anderson-purple hover:text-anderson-lilac font-semibold">
                                View complete income limits for all counties ↗
                            </a>
                        </p>
                    </div>
                </div>
            </section>

            <!-- Upgrades Section -->
            <section id="upgrades" class="py-16">
                <div class="container mx-auto px-4">
                    <h2 class="mb-8">What Upgrades Can Count?</h2>
                    
                    <div class="anderson-grid mb-8">
                        <div class="anderson-card">
                            <h3 class="text-lg font-semibold mb-2 flex items-center gap-2">
                                🌡️ Heat Pump HVAC
                            </h3>
                            <p class="text-sm">One smart system for heating & cooling. Requires a Manual J sizing report.</p>
                        </div>
                        
                        <div class="anderson-card">
                            <h3 class="text-lg font-semibold mb-2 flex items-center gap-2">
                                💧 Heat Pump Water Heater
                            </h3>
                            <p class="text-sm">Hot water with less energy.</p>
                        </div>
                        
                        <div class="anderson-card">
                            <h3 class="text-lg font-semibold mb-2 flex items-center gap-2">
                                👕 Heat Pump Clothes Dryer
                            </h3>
                            <p class="text-sm">Gentler on clothes and bills.</p>
                        </div>
                        
                        <div class="anderson-card">
                            <h3 class="text-lg font-semibold mb-2 flex items-center gap-2">
                                🏠 Insulation & Air Sealing
                            </h3>
                            <p class="text-sm">Keeps comfy air inside. Requires blower door & CAZ testing.</p>
                        </div>
                        
                        <div class="anderson-card">
                            <h3 class="text-lg font-semibold mb-2 flex items-center gap-2">
                                💨 Ventilation
                            </h3>
                            <p class="text-sm">Fresh air done right. Must pair with air/duct sealing or meet low‑leakage test.</p>
                        </div>
                        
                        <div class="anderson-card">
                            <h3 class="text-lg font-semibold mb-2 flex items-center gap-2">
                                ⚡ Electric Panel & Wiring
                            </h3>
                            <p class="text-sm">Only when paired with another HEAR measure or a HER project.</p>
                        </div>
                    </div>

                    <div class="alert alert-warning">
                        <h3 class="font-semibold text-anderson-orange mb-4 flex items-center gap-2">
                            ⚠️ Important Rules
                        </h3>
                        <ul class="space-y-3">
                            <li class="flex items-start gap-3">
                                <span class="text-green-600">✓</span>
                                <span><strong>Pairing:</strong> Panels & wiring must be paired with another HEAR measure or a HER project.</span>
                            </li>
                            <li class="flex items-start gap-3">
                                <span class="text-green-600">✓</span>
                                <span><strong>Replacement limits:</strong> No rebate for swapping an electric stove with another electric/induction stove by itself.</span>
                            </li>
                            <li class="flex items-start gap-3">
                                <span class="text-green-600">✓</span>
                                <span><strong>Testing & docs:</strong> Manual J (heat pumps); blower door & CAZ (insulation, air sealing, ventilation).</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <!-- Process Section -->
            <section id="process" class="py-16 bg-gradient-trust">
                <div class="container mx-auto px-4">
                    <h2 class="mb-12">How It Works (5 Simple Steps)</h2>
                    
                    <div class="max-w-4xl mx-auto space-y-6">
                        <?php 
                        $steps = array(
                            array('number' => 1, 'icon' => '📞', 'title' => 'Quick Call & Plan', 'description' => 'We listen and build your plan. If an in‑home assessment is needed, we tell you the cost up front and deliver your report within 48 hours.'),
                            array('number' => 2, 'icon' => '✅', 'title' => 'Reserve Your Rebate', 'description' => 'We submit project details; you complete your profile and income step in the Neighborly portal.'),
                            array('number' => 3, 'icon' => '🔧', 'title' => 'Professional Install', 'description' => 'We install to high standards. Heat pumps include Manual J; envelope work includes blower door & CAZ tests.'),
                            array('number' => 4, 'icon' => '🛡️', 'title' => 'Quality Check', 'description' => 'Georgia inspects projects. First 5 jobs for a new contractor are inspected; after that, at least 5% in person and 20% total.'),
                            array('number' => 5, 'icon' => '💳', 'title' => 'Rebate Processed', 'description' => 'Typical review in 3–5 business days; payments usually 10–14 days after QA/QC.')
                        );
                        
                        foreach ($steps as $step): ?>
                        <div class="anderson-card">
                            <div class="flex items-start gap-4">
                                <div class="flex-shrink-0">
                                    <div class="w-12 h-12 rounded-full bg-anderson-cream flex items-center justify-center">
                                        <span class="text-lg font-bold text-anderson-purple"><?php echo $step['number']; ?></span>
                                    </div>
                                </div>
                                <div class="flex-1">
                                    <h3 class="text-xl font-semibold mb-2 flex items-center gap-2">
                                        <?php echo $step['icon']; ?> <?php echo $step['title']; ?>
                                    </h3>
                                    <p class="text-muted"><?php echo $step['description']; ?></p>
                                </div>
                            </div>
                        </div>
                        <?php endforeach; ?>
                    </div>
                </div>
            </section>

            <!-- FAQ Section -->
            <section id="faq" class="py-16 anderson-faq">
                <div class="container mx-auto px-4">
                    <h2 class="mb-8">Frequently Asked Questions</h2>
                    
                    <div class="max-w-4xl mx-auto">
                        <p class="text-center mb-12 text-lg">
                            <strong>Questions?</strong> Call 
                            <a href="tel:+17066290749" class="text-anderson-purple hover:text-anderson-lilac font-semibold">706-629-0749</a> 
                            or email 
                            <a href="mailto:workorders@johnandersonservice.com" class="text-anderson-purple hover:text-anderson-lilac font-semibold">workorders@johnandersonservice.com</a>. 
                            We serve 46 specific counties in North Georgia (see service area below for full list).
                        </p>

                        <!-- Key FAQs -->
                        <?php 
                        $faqs = array(
                            array(
                                'question' => 'What\'s the difference between HER and HEAR?',
                                'answer' => 'HER = whole‑home energy savings. Open to all incomes. HEAR = specific electric upgrades (like a heat pump). For households at or below 150% of Area Median Income (AMI); bigger help if at or below 80% AMI.'
                            ),
                            array(
                                'question' => 'How much money can I get back?',
                                'answer' => 'HEAR uses set caps (examples): up to $8,000 for a heat pump HVAC, $1,750 for a heat pump water heater, $4,000 for an electric panel, and a total HEAR cap of $14,000 per home. HER pays based on modeled energy savings (up to $4,000, or up to $8,000 for low‑to‑moderate income).'
                            ),
                            array(
                                'question' => 'Can I get a rebate for just an electrical panel or wiring?',
                                'answer' => 'No. Panel and wiring upgrades must be paired with another HEAR measure or be part of a HER project.'
                            ),
                            array(
                                'question' => 'Can I combine HER and HEAR?',
                                'answer' => 'Yes, but one measure cannot be co‑funded by both. You can run separate projects (e.g., insulation under HER and a heat pump under HEAR). HER projects must reach at least 20% energy savings.'
                            ),
                            array(
                                'question' => 'What timelines should I know?',
                                'answer' => 'HEAR applications must be submitted within <strong>90 days of the project invoice date</strong> (or coupon issuance for point‑of‑sale).'
                            ),
                            array(
                                'question' => 'Will my project be inspected?',
                                'answer' => 'Yes. The first five jobs for a new contractor are always inspected. After that, at least 5% of projects get in‑person inspections and 20% total are inspected (mix of desktop and in‑person).'
                            ),
                            array(
                                'question' => 'Are funds limited?',
                                'answer' => 'Yes. Georgia received a set amount from DOE for HER and HEAR. Funds are limited and subject to availability.'
                            )
                        );
                        
                        foreach ($faqs as $faq): ?>
                        <details>
                            <summary><?php echo $faq['question']; ?></summary>
                            <div class="faq-content">
                                <p><?php echo $faq['answer']; ?></p>
                            </div>
                        </details>
                        <?php endforeach; ?>
                    </div>
                </div>
            </section>

            <!-- Service Area Section -->
            <section id="service-area" class="py-16 bg-anderson-cream">
                <div class="container mx-auto px-4">
                    <h2 class="mb-8">Proudly Serving North Georgia</h2>
                    
                    <div class="text-center mb-8">
                        <p class="text-lg mb-6 max-w-3xl mx-auto">
                            Anderson Heating, Air & Insulation serves homeowners across North Georgia. 
                            Contact us today to see how we can help with your home energy rebate project.
                        </p>
                        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                            <div class="flex items-center gap-2">
                                <span>📞</span>
                                <a href="tel:+17066290749" class="text-anderson-purple hover:text-anderson-lilac font-semibold">706-629-0749</a>
                            </div>
                            <span class="hidden sm:block text-muted">•</span>
                            <div class="flex items-center gap-2">
                                <span>✉️</span>
                                <a href="mailto:workorders@johnandersonservice.com" class="text-anderson-purple hover:text-anderson-lilac font-semibold">workorders@johnandersonservice.com</a>
                            </div>
                        </div>
                    </div>
                    
                    <div class="anderson-card max-w-6xl mx-auto">
                        <h3 class="font-semibold text-anderson-purple mb-4 text-center">Counties We Serve:</h3>
                        <div class="county-grid">
                            <?php 
                            $counties = array('Banks', 'Barrow', 'Carroll', 'Catoosa', 'Chattooga', 'Cherokee', 'Clarke', 'Clayton', 'Cobb', 'Coweta', 'Dade', 'Dawson', 'DeKalb', 'Douglas', 'Elbert', 'Fannin', 'Fayette', 'Floyd', 'Forsyth', 'Franklin', 'Fulton', 'Gilmer', 'Gordon', 'Gwinnett', 'Habersham', 'Hall', 'Haralson', 'Hart', 'Heard', 'Henry', 'Jackson', 'Lumpkin', 'Madison', 'Murray', 'Newton', 'Oconee', 'Paulding', 'Pickens', 'Rockdale', 'Stephens', 'Towns', 'Troup', 'Walker', 'Walton', 'White', 'Whitfield');
                            foreach ($counties as $county): ?>
                                <div class="county-item"><?php echo $county; ?></div>
                            <?php endforeach; ?>
                        </div>
                        
                        <div class="alert alert-info mt-6">
                            <p class="text-sm text-center">
                                📍 If you're nearby but not listed, call 
                                <a href="tel:+17066290749" class="text-anderson-purple hover:text-anderson-lilac font-semibold">706-629-0749</a>—we can help or refer.
                            </p>
                        </div>
                    </div>
                    
                    <div class="text-center mt-6">
                        <p class="text-sm text-muted">
                            <strong>Business Address:</strong> 519 Pine St, Calhoun, GA 30701<br>
                            <strong>Website:</strong> <a href="https://www.johnandersonservice.com" class="text-anderson-purple hover:text-anderson-lilac">johnandersonservice.com</a>
                        </p>
                    </div>
                </div>
            </section>

            <!-- Trust & Compliance Band -->
            <section class="py-8 bg-gradient-trust border-t border-anderson-purple/10">
                <div class="container mx-auto px-4">
                    <div class="text-center max-w-4xl mx-auto">
                        <h3 class="font-bold text-anderson-purple mb-4">
                            Your Trusted Partner for Georgia Energy Rebates
                        </h3>
                        <div class="flex flex-wrap justify-center gap-3 mb-6">
                            <span class="trust-badge">🛡️ 45+ Years Experience</span>
                            <span class="trust-badge">✅ Fully Licensed & Insured</span>
                            <span class="trust-badge">🏆 GEFA Participating Contractor</span>
                        </div>
                        <div class="alert alert-compliance">
                            <p class="text-sm leading-relaxed">
                                <strong>Compliance:</strong> Anderson is a participating contractor. Customers complete their own application and income step; the State reviews and approves rebates. We provide a checklist, detailed invoice, photos, and reports to make it easy. Program rules and funds can change.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Final CTA Section -->
            <section class="py-16" style="background: var(--gradient-cta); color: white;">
                <div class="container mx-auto px-4 text-center">
                    <h2 class="text-white mb-4">Ready to Start Saving?</h2>
                    <p class="text-lg mb-8 max-w-2xl mx-auto">
                        Don't wait—Georgia energy rebate funds are limited and available on a first-come, first-served basis.
                    </p>
                    <div class="flex flex-wrap justify-center gap-4">
                        <a href="tel:+17066290749" class="btn-anderson-ghost px-8 py-4 text-lg">
                            Get My No-Cost Estimate
                        </a>
                        <a href="tel:+17066290749" class="btn-anderson px-8 py-4 text-lg">
                            Call 706-629-0749
                        </a>
                    </div>
                </div>
            </section>

            <!-- Sticky Mobile CTA -->
            <div class="sticky-mobile-cta">
                <div class="flex gap-2 justify-center">
                    <a href="#eligibility" class="btn-anderson">Check Rebate Eligibility</a>
                    <a href="tel:+17066290749" class="btn-anderson-secondary">Call 706-629-0749</a>
                </div>
            </div>

        </article>
        
    <?php endwhile; ?>
</main>

<?php get_footer(); ?>