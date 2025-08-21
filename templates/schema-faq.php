<?php
// Prevent direct access
if (!defined('ABSPATH')) {
    exit;
}

// FAQ Schema matching the visible FAQ content
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
            "name" => "Can I get a rebate for just an electrical panel or wiring?",
            "acceptedAnswer" => array(
                "@type" => "Answer",
                "text" => "No. Panel and wiring upgrades must be paired with another HEAR measure or be part of a HER project."
            )
        ),
        array(
            "@type" => "Question",
            "name" => "Can I combine HER and HEAR?",
            "acceptedAnswer" => array(
                "@type" => "Answer",
                "text" => "Yes, but one measure cannot be co‑funded by both. You can run separate projects (e.g., insulation under HER and a heat pump under HEAR). HER projects must reach at least 20% energy savings."
            )
        ),
        array(
            "@type" => "Question",
            "name" => "What timelines should I know?",
            "acceptedAnswer" => array(
                "@type" => "Answer",
                "text" => "HEAR applications must be submitted within 90 days of the project invoice date (or coupon issuance for point‑of‑sale)."
            )
        ),
        array(
            "@type" => "Question",
            "name" => "Will my project be inspected?",
            "acceptedAnswer" => array(
                "@type" => "Answer",
                "text" => "Yes. The first five jobs for a new contractor are always inspected. After that, at least 5% of projects get in‑person inspections and 20% total are inspected (mix of desktop and in‑person)."
            )
        ),
        array(
            "@type" => "Question",
            "name" => "Are funds limited?",
            "acceptedAnswer" => array(
                "@type" => "Answer",
                "text" => "Yes. Georgia received a set amount from DOE for HER and HEAR. Funds are limited and subject to availability."
            )
        ),
        array(
            "@type" => "Question",
            "name" => "Which counties do you serve for the GEFA rebate programs?",
            "acceptedAnswer" => array(
                "@type" => "Answer",
                "text" => "Our GEFA rebate services are exclusively available to homeowners within a specific 46-county region in North Georgia. Our service area includes: " . implode(', ', Anderson_Company_Data::SERVICE_COUNTIES) . " counties."
            )
        ),
        array(
            "@type" => "Question",
            "name" => "What does Anderson do for me?",
            "acceptedAnswer" => array(
                "@type" => "Answer",
                "text" => "We plan the best fix for comfort and bills, do the required tests, handle the paperwork, and install to high standards—so you get the most help you qualify for. Georgia approves eligibility and rebates."
            )
        ),
        array(
            "@type" => "Question",
            "name" => "How do I start?",
            "acceptedAnswer" => array(
                "@type" => "Answer",
                "text" => "Call " . Anderson_Company_Data::PHONE_DISPLAY . " or visit " . Anderson_Company_Data::SITE_URL . ". Or tap 'Get My No‑Cost Estimate.'"
            )
        )
    )
);
?>

<script type="application/ld+json">
<?php echo json_encode($faq_schema, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES); ?>
</script>