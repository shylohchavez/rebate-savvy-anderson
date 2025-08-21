<?php
// Prevent direct access
if (!defined('ABSPATH')) {
    exit;
}

// HowTo Schema for the 5-step process
$howto_schema = array(
    "@context" => "https://schema.org",
    "@type" => "HowTo",
    "name" => "How to Get Georgia Home Energy Rebates with Anderson",
    "description" => "5 simple steps to get your Georgia HER or HEAR rebates with Anderson Heating, Air & Insulation",
    "totalTime" => "PT2W", // 2 weeks typical timeline
    "estimatedCost" => array(
        "@type" => "MonetaryAmount",
        "currency" => "USD",
        "value" => "0"
    ),
    "supply" => array(
        array(
            "@type" => "HowToSupply",
            "name" => "Proof of Income Documentation"
        ),
        array(
            "@type" => "HowToSupply", 
            "name" => "Georgia Residency Verification"
        )
    ),
    "tool" => array(
        array(
            "@type" => "HowToTool",
            "name" => "GEFA-Approved Contractor (Anderson)"
        ),
        array(
            "@type" => "HowToTool",
            "name" => "Neighborly Portal Account"
        )
    ),
    "step" => array(
        array(
            "@type" => "HowToStep",
            "position" => 1,
            "name" => "Quick Call & Plan",
            "text" => "We listen and build your plan. If an in‑home assessment is needed, we tell you the cost up front and deliver your report within 48 hours.",
            "url" => "tel:" . Anderson_Company_Data::PHONE_TEL
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
    ),
    "author" => array(
        "@type" => "Organization",
        "name" => Anderson_Company_Data::COMPANY_NAME,
        "url" => Anderson_Company_Data::SITE_URL
    )
);
?>

<script type="application/ld+json">
<?php echo json_encode($howto_schema, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES); ?>
</script>