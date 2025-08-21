<?php
// Prevent direct access
if (!defined('ABSPATH')) {
    exit;
}
?>

<div class="anderson-landing-page">
    <!-- Header -->
    <header class="anderson-header py-4" style="background: var(--white); border-bottom: 1px solid rgba(81, 45, 109, 0.1);">
        <div class="container">
            <div class="flex items-center justify-between flex-wrap gap-4">
                <div class="flex items-center gap-4">
                    <img src="<?php echo esc_url(ANDERSON_HEAR_HER_PLUGIN_URL . 'assets/images/anderson-logo.png'); ?>" 
                         alt="Anderson Heating, Air & Insulation - The Paws-itive Choice" 
                         class="h-16 w-auto">
                </div>
                <nav class="hidden md:flex items-center gap-6">
                    <a href="#eligibility" class="text-anderson-purple hover:text-anderson-lilac transition-colors">Eligibility</a>
                    <a href="#upgrades" class="text-anderson-purple hover:text-anderson-lilac transition-colors">Upgrades</a>
                    <a href="#process" class="text-anderson-purple hover:text-anderson-lilac transition-colors">Process</a>
                    <a href="#faq" class="text-anderson-purple hover:text-anderson-lilac transition-colors">FAQ</a>
                    <a href="#service-area" class="text-anderson-purple hover:text-anderson-lilac transition-colors">Service Area</a>
                </nav>
                <a href="tel:<?php echo Anderson_Company_Data::PHONE_TEL; ?>" class="btn btn-anderson">
                    Call <?php echo Anderson_Company_Data::PHONE_DISPLAY; ?>
                </a>
            </div>
        </div>
    </header>

    <!-- Hero Section -->
    <section class="hero-section py-section bg-gradient-hero relative">
        <div class="container">
            <div class="max-w-6xl mx-auto">
                <div class="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-8">
                    <div class="flex-1">
                        <h1 class="font-bold mb-6 text-center">
                            A Cozier Home, Lower Bills—Handled by Anderson
                        </h1>
                        <p class="text-lg text-muted mb-6 text-center">
                            Slash energy bills, boost comfort, and let our team handle eligibility, testing, and paperwork.
                        </p>
                    </div>
                </div>
                
                <!-- Official Georgia Program Links -->
                <div class="alert alert-info mb-6">
                    <h3 class="font-semibold text-anderson-purple mb-3 text-sm text-center">Official Georgia Energy Rebates Resources:</h3>
                    <div class="grid grid-cols-2 gap-2 text-sm justify-items-center">
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
                    <a href="tel:<?php echo Anderson_Company_Data::PHONE_TEL; ?>" class="btn btn-anderson btn-xl">
                        Get My No-Cost Estimate
                    </a>
                    <a href="#eligibility" class="btn btn-anderson-secondary btn-xl">
                        Check My Rebate Eligibility
                    </a>
                    <a href="tel:<?php echo Anderson_Company_Data::PHONE_TEL; ?>" class="btn btn-anderson-ghost btn-xl">
                        Call <?php echo Anderson_Company_Data::PHONE_DISPLAY; ?>
                    </a>
                </div>

                <p class="text-sm text-muted mb-6 text-center">
                    <strong>HEAR applications must be submitted within 90 days of your invoice date.</strong> 
                    Rebates depend on eligibility, pre‑approval, and available funding.
                </p>
            </div>
        </div>
    </section>

    <!-- HER vs HEAR Comparison -->
    <section class="py-section">
        <div class="container">
            <h2 class="mb-12">Understanding Georgia's Two Rebate Programs</h2>
            <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div class="card">
                    <div class="card-header">
                        <h3 class="text-2xl font-bold text-anderson-purple">HER Program</h3>
                        <p class="text-sm text-muted">Home Energy Rebates</p>
                    </div>
                    <div class="card-content">
                        <ul class="space-y-2 text-sm">
                            <li>• Whole-home energy savings projects</li>
                            <li>• Must achieve 20%+ energy savings</li>
                            <li>• No income limit</li>
                            <li>• Up to $4,000 (or $8,000 for low-income)</li>
                            <li>• Requires energy modeling</li>
                        </ul>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header">
                        <h3 class="text-2xl font-bold text-anderson-purple">HEAR Program</h3>
                        <p class="text-sm text-muted">Home Electrification & Appliance Rebates</p>
                    </div>
                    <div class="card-content">
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
        </div>
    </section>

    <!-- Eligibility Section -->
    <section id="eligibility" class="py-section bg-gradient-trust">
        <div class="container">
            <h2 class="mb-8">Check Your HEAR Program Eligibility</h2>
            
            <div class="max-w-3xl mx-auto mb-8">
                <p class="text-center text-lg mb-6">
                    The Home Electrification and Appliance Rebates (HEAR) program is income-based. 
                    Here are the basic requirements to qualify:
                </p>
                
                <div class="grid md:grid-cols-3 gap-4 text-center">
                    <div class="card">
                        <div class="card-content">
                            <h4 class="font-semibold mb-2">✓ Georgia Resident</h4>
                            <p class="text-sm">Live in a single‑family or multifamily home in Georgia</p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-content">
                            <h4 class="font-semibold mb-2">✓ Approved Contractor</h4>
                            <p class="text-sm">Work with a participating contractor like Anderson</p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-content">
                            <h4 class="font-semibold mb-2">✓ Income Verification</h4>
                            <p class="text-sm">Complete application and income verification for State approval</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card max-w-4xl mx-auto">
                <div class="card-header">
                    <h3 class="text-center">Gordon County Income Eligibility Example</h3>
                </div>
                <div class="card-content">
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
    <section id="upgrades" class="py-section">
        <div class="container">
            <h2 class="mb-8">What Upgrades Can Count?</h2>
            
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <div class="card">
                    <div class="card-header">
                        <h3 class="text-lg font-semibold flex items-center gap-2">
                            🌡️ Heat Pump HVAC
                        </h3>
                    </div>
                    <div class="card-content">
                        <p class="text-sm">One smart system for heating & cooling. Requires a Manual J sizing report.</p>
                    </div>
                </div>
                
                <div class="card">
                    <div class="card-header">
                        <h3 class="text-lg font-semibold flex items-center gap-2">
                            💧 Heat Pump Water Heater
                        </h3>
                    </div>
                    <div class="card-content">
                        <p class="text-sm">Hot water with less energy.</p>
                    </div>
                </div>
                
                <div class="card">
                    <div class="card-header">
                        <h3 class="text-lg font-semibold flex items-center gap-2">
                            👕 Heat Pump Clothes Dryer
                        </h3>
                    </div>
                    <div class="card-content">
                        <p class="text-sm">Gentler on clothes and bills.</p>
                    </div>
                </div>
                
                <div class="card">
                    <div class="card-header">
                        <h3 class="text-lg font-semibold flex items-center gap-2">
                            🏠 Insulation & Air Sealing
                        </h3>
                    </div>
                    <div class="card-content">
                        <p class="text-sm">Keeps comfy air inside. Requires blower door & CAZ testing.</p>
                    </div>
                </div>
                
                <div class="card">
                    <div class="card-header">
                        <h3 class="text-lg font-semibold flex items-center gap-2">
                            💨 Ventilation
                        </h3>
                    </div>
                    <div class="card-content">
                        <p class="text-sm">Fresh air done right. Must pair with air/duct sealing or meet low‑leakage test.</p>
                    </div>
                </div>
                
                <div class="card">
                    <div class="card-header">
                        <h3 class="text-lg font-semibold flex items-center gap-2">
                            ⚡ Electric Panel & Wiring
                        </h3>
                    </div>
                    <div class="card-content">
                        <p class="text-sm">Only when paired with another HEAR measure or a HER project.</p>
                    </div>
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
    <section id="process" class="py-section bg-gradient-trust">
        <div class="container">
            <h2 class="mb-12">How It Works (5 Simple Steps)</h2>
            
            <div class="max-w-4xl mx-auto">
                <div class="space-y-6">
                    <div class="card">
                        <div class="card-content">
                            <div class="flex items-start gap-4">
                                <div class="flex-shrink-0">
                                    <div class="w-12 h-12 rounded-full bg-anderson-cream flex items-center justify-center">
                                        <span class="text-lg font-bold text-anderson-purple">1</span>
                                    </div>
                                </div>
                                <div class="flex-1">
                                    <h3 class="text-xl font-semibold mb-2 flex items-center gap-2">
                                        📞 Quick Call & Plan
                                    </h3>
                                    <p class="text-muted">We listen and build your plan. If an in‑home assessment is needed, we tell you the cost up front and deliver your report within 48 hours.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="card">
                        <div class="card-content">
                            <div class="flex items-start gap-4">
                                <div class="flex-shrink-0">
                                    <div class="w-12 h-12 rounded-full bg-anderson-cream flex items-center justify-center">
                                        <span class="text-lg font-bold text-anderson-purple">2</span>
                                    </div>
                                </div>
                                <div class="flex-1">
                                    <h3 class="text-xl font-semibold mb-2 flex items-center gap-2">
                                        ✅ Reserve Your Rebate
                                    </h3>
                                    <p class="text-muted">We submit project details; you complete your profile and income step in the Neighborly portal.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="card">
                        <div class="card-content">
                            <div class="flex items-start gap-4">
                                <div class="flex-shrink-0">
                                    <div class="w-12 h-12 rounded-full bg-anderson-cream flex items-center justify-center">
                                        <span class="text-lg font-bold text-anderson-purple">3</span>
                                    </div>
                                </div>
                                <div class="flex-1">
                                    <h3 class="text-xl font-semibold mb-2 flex items-center gap-2">
                                        🔧 Professional Install
                                    </h3>
                                    <p class="text-muted">We install to high standards. Heat pumps include Manual J; envelope work includes blower door & CAZ tests.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="card">
                        <div class="card-content">
                            <div class="flex items-start gap-4">
                                <div class="flex-shrink-0">
                                    <div class="w-12 h-12 rounded-full bg-anderson-cream flex items-center justify-center">
                                        <span class="text-lg font-bold text-anderson-purple">4</span>
                                    </div>
                                </div>
                                <div class="flex-1">
                                    <h3 class="text-xl font-semibold mb-2 flex items-center gap-2">
                                        🛡️ Quality Check
                                    </h3>
                                    <p class="text-muted">Georgia inspects projects. First 5 jobs for a new contractor are inspected; after that, at least 5% in person and 20% total.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="card">
                        <div class="card-content">
                            <div class="flex items-start gap-4">
                                <div class="flex-shrink-0">
                                    <div class="w-12 h-12 rounded-full bg-anderson-cream flex items-center justify-center">
                                        <span class="text-lg font-bold text-anderson-purple">5</span>
                                    </div>
                                </div>
                                <div class="flex-1">
                                    <h3 class="text-xl font-semibold mb-2 flex items-center gap-2">
                                        💳 Rebate Processed
                                    </h3>
                                    <p class="text-muted">Typical review in 3–5 business days; payments usually 10–14 days after QA/QC.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- FAQ Section -->
    <section id="faq" class="py-section">
        <div class="container">
            <h2 class="mb-8">Frequently Asked Questions</h2>
            
            <div class="max-w-4xl mx-auto">
                <p class="text-center mb-12 text-lg">
                    <strong>Questions?</strong> Call 
                    <a href="tel:<?php echo Anderson_Company_Data::PHONE_TEL; ?>" class="text-anderson-purple hover:text-anderson-lilac font-semibold">
                        <?php echo Anderson_Company_Data::PHONE_DISPLAY; ?>
                    </a> 
                    or email 
                    <a href="mailto:<?php echo Anderson_Company_Data::EMAIL; ?>" class="text-anderson-purple hover:text-anderson-lilac font-semibold">
                        <?php echo Anderson_Company_Data::EMAIL; ?>
                    </a>. 
                    We serve 46 specific counties in North Georgia (see service area below for full list).
                </p>

                <!-- Key FAQs -->
                <div class="space-y-4">
                    <details>
                        <summary>What's the difference between HER and HEAR?</summary>
                        <div>
                            <p>HER = whole‑home energy savings. Open to all incomes. HEAR = specific electric upgrades (like a heat pump). For households at or below 150% of Area Median Income (AMI); bigger help if at or below 80% AMI.</p>
                        </div>
                    </details>

                    <details>
                        <summary>How much money can I get back?</summary>
                        <div>
                            <p>HEAR uses set caps (examples): up to $8,000 for a heat pump HVAC, $1,750 for a heat pump water heater, $4,000 for an electric panel, and a total HEAR cap of $14,000 per home. HER pays based on modeled energy savings (up to $4,000, or up to $8,000 for low‑to‑moderate income).</p>
                        </div>
                    </details>

                    <details>
                        <summary>Can I get a rebate for just an electrical panel or wiring?</summary>
                        <div>
                            <p>No. Panel and wiring upgrades must be paired with another HEAR measure or be part of a HER project.</p>
                        </div>
                    </details>

                    <details>
                        <summary>Can I combine HER and HEAR?</summary>
                        <div>
                            <p>Yes, but one measure cannot be co‑funded by both. You can run separate projects (e.g., insulation under HER and a heat pump under HEAR). HER projects must reach at least 20% energy savings.</p>
                        </div>
                    </details>

                    <details>
                        <summary>What timelines should I know?</summary>
                        <div>
                            <p>HEAR applications must be submitted within <strong>90 days of the project invoice date</strong> (or coupon issuance for point‑of‑sale).</p>
                        </div>
                    </details>

                    <details>
                        <summary>Will my project be inspected?</summary>
                        <div>
                            <p>Yes. The first five jobs for a new contractor are always inspected. After that, at least 5% of projects get in‑person inspections and 20% total are inspected (mix of desktop and in‑person).</p>
                        </div>
                    </details>

                    <details>
                        <summary>Are funds limited?</summary>
                        <div>
                            <p>Yes. Georgia received a set amount from DOE for HER and HEAR. Funds are limited and subject to availability.</p>
                        </div>
                    </details>
                </div>
            </div>
        </div>
    </section>

    <!-- Service Area Section -->
    <section id="service-area" class="py-section bg-anderson-cream">
        <div class="container">
            <h2 class="mb-8">Proudly Serving North Georgia</h2>
            
            <div class="text-center mb-8">
                <p class="text-lg text-charcoal mb-6 max-w-3xl mx-auto">
                    <?php echo Anderson_Company_Data::COMPANY_NAME; ?> serves homeowners across North Georgia. 
                    Contact us today to see how we can help with your home energy rebate project.
                </p>
                <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                    <div class="flex items-center gap-2">
                        <span class="text-anderson-orange">📞</span>
                        <a href="tel:<?php echo Anderson_Company_Data::PHONE_TEL; ?>" 
                           class="text-anderson-purple hover:text-anderson-lilac font-semibold">
                            <?php echo Anderson_Company_Data::PHONE_DISPLAY; ?>
                        </a>
                    </div>
                    <span class="hidden sm:block text-muted">•</span>
                    <div class="flex items-center gap-2">
                        <span class="text-anderson-orange">✉️</span>
                        <a href="mailto:<?php echo Anderson_Company_Data::EMAIL; ?>" 
                           class="text-anderson-purple hover:text-anderson-lilac font-semibold">
                            <?php echo Anderson_Company_Data::EMAIL; ?>
                        </a>
                    </div>
                </div>
            </div>
            
            <div class="card max-w-6xl mx-auto">
                <div class="card-content">
                    <h3 class="font-semibold text-anderson-purple mb-4 text-center">Counties We Serve:</h3>
                    <div class="county-grid">
                        <?php foreach (Anderson_Company_Data::SERVICE_COUNTIES as $county): ?>
                            <div class="county-item">
                                <span class="font-medium text-charcoal"><?php echo esc_html($county); ?></span>
                            </div>
                        <?php endforeach; ?>
                    </div>
                    
                    <div class="alert alert-info mt-6">
                        <p class="text-sm text-charcoal text-center">
                            📍 If you're nearby but not listed, call 
                            <a href="tel:<?php echo Anderson_Company_Data::PHONE_TEL; ?>" 
                               class="text-anderson-purple hover:text-anderson-lilac font-semibold">
                                <?php echo Anderson_Company_Data::PHONE_DISPLAY; ?>
                            </a>—we can help or refer.
                        </p>
                    </div>
                </div>
            </div>
            
            <div class="text-center mt-6">
                <p class="text-sm text-muted">
                    <strong class="text-charcoal">Business Address:</strong> <?php echo Anderson_Company_Data::ADDRESS; ?><br>
                    <strong class="text-charcoal">Website:</strong> 
                    <a href="<?php echo Anderson_Company_Data::SITE_URL; ?>" 
                       class="text-anderson-purple hover:text-anderson-lilac">
                        <?php echo str_replace('https://', '', Anderson_Company_Data::SITE_URL); ?>
                    </a>
                </p>
            </div>
        </div>
    </section>

    <!-- Trust & Compliance Band -->
    <section class="py-8 bg-gradient-trust border-t border-anderson-purple/10">
        <div class="container">
            <div class="text-center max-w-4xl mx-auto">
                <h3 class="font-bold text-anderson-purple mb-4">
                    Your Trusted Partner for Georgia Energy Rebates
                </h3>
                <div class="grid md:grid-cols-3 gap-6 mb-6">
                    <div>
                        <span class="trust-badge">
                            🛡️ 45+ Years Experience
                        </span>
                    </div>
                    <div>
                        <span class="trust-badge">
                            ✅ Fully Licensed & Insured
                        </span>
                    </div>
                    <div>
                        <span class="trust-badge">
                            🏆 GEFA Participating Contractor
                        </span>
                    </div>
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
    <section class="py-section bg-gradient-cta text-white">
        <div class="container text-center">
            <h2 class="text-white mb-4">Ready to Start Saving?</h2>
            <p class="text-lg mb-8 max-w-2xl mx-auto">
                Don't wait—Georgia energy rebate funds are limited and available on a first-come, first-served basis.
            </p>
            <div class="flex flex-wrap justify-center gap-4">
                <a href="tel:<?php echo Anderson_Company_Data::PHONE_TEL; ?>" class="btn btn-anderson-ghost btn-xl">
                    Get My No-Cost Estimate
                </a>
                <a href="tel:<?php echo Anderson_Company_Data::PHONE_TEL; ?>" class="btn btn-anderson btn-xl">
                    Call <?php echo Anderson_Company_Data::PHONE_DISPLAY; ?>
                </a>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="py-12 bg-white border-t border-anderson-purple/20">
        <div class="container">
            <div class="grid md:grid-cols-2 gap-8 items-center">
                <!-- Anderson Company Info -->
                <div class="text-center md:text-left">
                    <div class="mb-4">
                        <img src="<?php echo esc_url(ANDERSON_HEAR_HER_PLUGIN_URL . 'assets/images/anderson-logo.png'); ?>" 
                             alt="Anderson Heating, Air & Insulation - The Paws-itive Choice" 
                             class="h-24 w-auto mx-auto md:mx-0">
                    </div>
                    <div class="text-sm text-muted">
                        <p class="font-semibold text-charcoal mb-2"><?php echo Anderson_Company_Data::COMPANY_NAME; ?></p>
                        <p class="mb-1">DBA <?php echo Anderson_Company_Data::DBA; ?></p>
                        <p class="mb-2"><?php echo Anderson_Company_Data::ADDRESS; ?></p>
                        <p class="font-semibold text-lg text-anderson-purple mb-2">
                            <a href="tel:<?php echo Anderson_Company_Data::PHONE_TEL; ?>" 
                               class="hover:text-anderson-lilac">
                                <?php echo Anderson_Company_Data::PHONE_DISPLAY; ?>
                            </a>
                        </p>
                        <p>
                            <a href="mailto:<?php echo Anderson_Company_Data::EMAIL; ?>" 
                               class="text-anderson-purple hover:text-anderson-lilac">
                                <?php echo Anderson_Company_Data::EMAIL; ?>
                            </a>
                        </p>
                        <p class="mt-2 text-xs">Licensed & Insured HVAC Contractor</p>
                        <p class="text-xs">Serving North Georgia Counties</p>
                    </div>
                </div>

                <!-- Compliance & Resources -->
                <div class="text-center md:text-right">
                    <div class="mb-4">
                        <p class="text-sm font-semibold text-anderson-purple mb-2">Official Georgia Program Resources:</p>
                        <div class="text-sm space-y-1">
                            <p>
                                <a href="https://energyrebates.georgia.gov/" target="_blank" rel="noopener noreferrer" 
                                   class="text-anderson-purple hover:text-anderson-lilac">
                                    Georgia Energy Rebates Home
                                </a>
                            </p>
                            <p>
                                <a href="https://energyrebates.georgia.gov/contact-us" target="_blank" rel="noopener noreferrer" 
                                   class="text-anderson-purple hover:text-anderson-lilac">
                                    Contact Center: (877) 348-5237
                                </a>
                            </p>
                        </div>
                    </div>
                    <p class="text-sm text-muted mb-4 leading-relaxed">
                        <strong class="text-charcoal">Compliance:</strong> Information provided is for guidance. Eligibility and rebate amounts are determined by GEFA upon review of your application. Program rules may change.
                    </p>
                    <p class="text-xs text-muted">
                        For state application assistance, contact the Georgia Home Energy Rebates Contact Center: Mon–Fri 9am–6pm ET, (877) 348‑5237.
                    </p>
                </div>
            </div>
        </div>
    </footer>

    <!-- Sticky Mobile CTA -->
    <div class="sticky-mobile-cta hidden-desktop">
        <div class="flex gap-2 justify-center">
            <a href="#eligibility" class="btn btn-anderson" style="flex: 1; max-width: 180px;">
                Check Rebate Eligibility
            </a>
            <a href="tel:<?php echo Anderson_Company_Data::PHONE_TEL; ?>" class="btn btn-anderson-secondary" style="flex: 1; max-width: 140px;">
                Call <?php echo Anderson_Company_Data::PHONE_DISPLAY; ?>
            </a>
        </div>
    </div>
</div>