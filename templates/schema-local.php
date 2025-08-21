<?php
// Prevent direct access
if (!defined('ABSPATH')) {
    exit;
}

// LocalBusiness Schema with Service areas
$local_business_schema = array(
    "@context" => "https://schema.org",
    "@type" => "LocalBusiness",
    "@id" => Anderson_Company_Data::SITE_URL . "/#organization",
    "name" => Anderson_Company_Data::COMPANY_NAME,
    "alternateName" => Anderson_Company_Data::DBA,
    "url" => Anderson_Company_Data::SITE_URL,
    "logo" => Anderson_Company_Data::SITE_URL . "/wp-content/uploads/anderson-logo.png",
    "telephone" => Anderson_Company_Data::PHONE_TEL,
    "email" => Anderson_Company_Data::EMAIL,
    "address" => array(
        "@type" => "PostalAddress",
        "streetAddress" => "519 Pine St",
        "addressLocality" => "Calhoun",
        "addressRegion" => "GA",
        "postalCode" => "30701",
        "addressCountry" => "US"
    ),
    "geo" => array(
        "@type" => "GeoCoordinates",
        "latitude" => "34.5029",
        "longitude" => "-84.9310"
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
    "hasCredential" => "Georgia Home Energy Rebates Specialist",
    "aggregateRating" => array(
        "@type" => "AggregateRating",
        "ratingValue" => "4.9",
        "reviewCount" => "150"
    ),
    "openingHoursSpecification" => array(
        array(
            "@type" => "OpeningHoursSpecification",
            "dayOfWeek" => array("Monday", "Tuesday", "Wednesday", "Thursday", "Friday"),
            "opens" => "08:00",
            "closes" => "17:00"
        ),
        array(
            "@type" => "OpeningHoursSpecification", 
            "dayOfWeek" => "Saturday",
            "opens" => "08:00",
            "closes" => "12:00"
        )
    )
);

// Add counties to areaServed
foreach (Anderson_Company_Data::SERVICE_COUNTIES as $county) {
    $local_business_schema['areaServed'][] = array(
        "@type" => "City",
        "name" => $county . " County, Georgia"
    );
}

// Service schema for each main service
$services = array(
    array(
        "@type" => "Service",
        "name" => "Heat Pump Installation",
        "description" => "ENERGY STAR heat pump HVAC systems with Manual J sizing",
        "provider" => array(
            "@id" => Anderson_Company_Data::SITE_URL . "/#organization"
        ),
        "areaServed" => $local_business_schema['areaServed']
    ),
    array(
        "@type" => "Service", 
        "name" => "Insulation & Air Sealing",
        "description" => "Home envelope improvements with blower door and CAZ testing",
        "provider" => array(
            "@id" => Anderson_Company_Data::SITE_URL . "/#organization"
        ),
        "areaServed" => $local_business_schema['areaServed']
    ),
    array(
        "@type" => "Service",
        "name" => "Electrical Panel & Wiring",
        "description" => "Electrical upgrades paired with HEAR measures or HER projects",
        "provider" => array(
            "@id" => Anderson_Company_Data::SITE_URL . "/#organization"
        ),
        "areaServed" => $local_business_schema['areaServed']
    )
);
?>

<script type="application/ld+json">
<?php echo json_encode($local_business_schema, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES); ?>
</script>

<?php foreach ($services as $service): ?>
<script type="application/ld+json">
<?php echo json_encode($service, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES); ?>
</script>
<?php endforeach; ?>