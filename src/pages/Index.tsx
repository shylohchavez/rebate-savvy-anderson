import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ProgramsSection } from "@/components/ProgramsSection";
import { EligibilitySection } from "@/components/EligibilitySection";
import { UpgradesSection } from "@/components/UpgradesSection";
import { ProcessSection } from "@/components/ProcessSection";
import { FAQSection } from "@/components/FAQSection";
import { CTASection } from "@/components/CTASection";
import { ServiceAreaSection } from "@/components/ServiceAreaSection";
import { LeadModal } from "@/components/LeadModal";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { Helmet } from "react-helmet-async";

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollToEligibility = () => {
    const element = document.getElementById('eligibility');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openEstimateModal = () => {
    setIsModalOpen(true);
  };

  // Enhanced structured data with Anderson company info
  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.johnandersonservice.com/#organization",
    "name": "Anderson Heating, Air & Insulation",
    "alternateName": "John Anderson Service Co.",
    "url": "https://www.johnandersonservice.com",
    "logo": "https://www.johnandersonservice.com/wp-content/uploads/anderson-web-transparent_logo-color.png",
    "image": "https://www.johnandersonservice.com/wp-content/uploads/anderson-web-transparent_logo-color.png",
    "telephone": "+1-706-629-0749",
    "email": "workorders@johnandersonservice.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "519 Pine St",
      "addressLocality": "Calhoun",
      "addressRegion": "GA",
      "postalCode": "30701",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 34.5023,
      "longitude": -84.9516
    },
    "areaServed": [
      "Banks County, GA", "Barrow County, GA", "Carroll County, GA", "Catoosa County, GA", 
      "Chattooga County, GA", "Cherokee County, GA", "Clarke County, GA", "Clayton County, GA", 
      "Cobb County, GA", "Coweta County, GA", "Dade County, GA", "Dawson County, GA", 
      "DeKalb County, GA", "Douglas County, GA", "Elbert County, GA", "Fannin County, GA", 
      "Fayette County, GA", "Floyd County, GA", "Forsyth County, GA", "Franklin County, GA", 
      "Fulton County, GA", "Gilmer County, GA", "Gordon County, GA", "Gwinnett County, GA", 
      "Habersham County, GA", "Hall County, GA", "Haralson County, GA", "Hart County, GA", 
      "Heard County, GA", "Henry County, GA", "Jackson County, GA", "Lumpkin County, GA", 
      "Madison County, GA", "Murray County, GA", "Newton County, GA", "Oconee County, GA", 
      "Paulding County, GA", "Pickens County, GA", "Rockdale County, GA", "Stephens County, GA", 
      "Towns County, GA", "Troup County, GA", "Walker County, GA", "Walton County, GA", 
      "White County, GA", "Whitfield County, GA"
    ],
    "serviceType": [
      "HVAC Installation",
      "Heat Pump Installation", 
      "Insulation Services",
      "Air Sealing",
      "Home Energy Assessment"
    ],
    "hasCredential": "Licensed & Insured HVAC Contractor"
  };

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Anderson Heating, Air & Insulation",
    "alternateName": "John Anderson Service Co.",
    "url": "https://www.johnandersonservice.com",
    "logo": "https://www.johnandersonservice.com/wp-content/uploads/anderson-web-transparent_logo-color.png",
    "telephone": "+1-706-629-0749",
    "email": "workorders@johnandersonservice.com",
    "areaServed": [
      {"@type": "AdministrativeArea", "name": "Banks County, GA"},
      {"@type": "AdministrativeArea", "name": "Barrow County, GA"},
      {"@type": "AdministrativeArea", "name": "Carroll County, GA"},
      {"@type": "AdministrativeArea", "name": "Catoosa County, GA"},
      {"@type": "AdministrativeArea", "name": "Chattooga County, GA"},
      {"@type": "AdministrativeArea", "name": "Cherokee County, GA"},
      {"@type": "AdministrativeArea", "name": "Clarke County, GA"},
      {"@type": "AdministrativeArea", "name": "Clayton County, GA"},
      {"@type": "AdministrativeArea", "name": "Cobb County, GA"},
      {"@type": "AdministrativeArea", "name": "Coweta County, GA"},
      {"@type": "AdministrativeArea", "name": "Dade County, GA"},
      {"@type": "AdministrativeArea", "name": "Dawson County, GA"},
      {"@type": "AdministrativeArea", "name": "DeKalb County, GA"},
      {"@type": "AdministrativeArea", "name": "Douglas County, GA"},
      {"@type": "AdministrativeArea", "name": "Elbert County, GA"},
      {"@type": "AdministrativeArea", "name": "Fannin County, GA"},
      {"@type": "AdministrativeArea", "name": "Fayette County, GA"},
      {"@type": "AdministrativeArea", "name": "Floyd County, GA"},
      {"@type": "AdministrativeArea", "name": "Forsyth County, GA"},
      {"@type": "AdministrativeArea", "name": "Franklin County, GA"},
      {"@type": "AdministrativeArea", "name": "Fulton County, GA"},
      {"@type": "AdministrativeArea", "name": "Gilmer County, GA"},
      {"@type": "AdministrativeArea", "name": "Gordon County, GA"},
      {"@type": "AdministrativeArea", "name": "Gwinnett County, GA"},
      {"@type": "AdministrativeArea", "name": "Habersham County, GA"},
      {"@type": "AdministrativeArea", "name": "Hall County, GA"},
      {"@type": "AdministrativeArea", "name": "Haralson County, GA"},
      {"@type": "AdministrativeArea", "name": "Hart County, GA"},
      {"@type": "AdministrativeArea", "name": "Heard County, GA"},
      {"@type": "AdministrativeArea", "name": "Henry County, GA"},
      {"@type": "AdministrativeArea", "name": "Jackson County, GA"},
      {"@type": "AdministrativeArea", "name": "Lumpkin County, GA"},
      {"@type": "AdministrativeArea", "name": "Madison County, GA"},
      {"@type": "AdministrativeArea", "name": "Murray County, GA"},
      {"@type": "AdministrativeArea", "name": "Newton County, GA"},
      {"@type": "AdministrativeArea", "name": "Oconee County, GA"},
      {"@type": "AdministrativeArea", "name": "Paulding County, GA"},
      {"@type": "AdministrativeArea", "name": "Pickens County, GA"},
      {"@type": "AdministrativeArea", "name": "Rockdale County, GA"},
      {"@type": "AdministrativeArea", "name": "Stephens County, GA"},
      {"@type": "AdministrativeArea", "name": "Towns County, GA"},
      {"@type": "AdministrativeArea", "name": "Troup County, GA"},
      {"@type": "AdministrativeArea", "name": "Walker County, GA"},
      {"@type": "AdministrativeArea", "name": "Walton County, GA"},
      {"@type": "AdministrativeArea", "name": "White County, GA"},
      {"@type": "AdministrativeArea", "name": "Whitfield County, GA"}
    ]
  };

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Anderson Heating, Air & Insulation",
    "url": "https://www.johnandersonservice.com",
    "publisher": {
      "@id": "https://www.johnandersonservice.com/#organization"
    }
  };

  const servicesData = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Heat Pump Installation",
      "provider": {
        "@id": "https://www.johnandersonservice.com/#organization"
      },
      "areaServed": "Northwest Georgia",
      "description": "Professional heat pump installation with Georgia energy rebate guidance"
    },
    {
      "@context": "https://schema.org", 
      "@type": "Service",
      "name": "Insulation & Air Sealing",
      "provider": {
        "@id": "https://www.johnandersonservice.com/#organization"
      },
      "areaServed": "Northwest Georgia",
      "description": "Whole-home insulation and air sealing services for energy efficiency"
    },
    {
      "@context": "https://schema.org",
      "@type": "Service", 
      "name": "Home Energy Assessment",
      "provider": {
        "@id": "https://www.johnandersonservice.com/#organization"
      },
      "areaServed": "Northwest Georgia",
      "description": "Comprehensive home energy audits and efficiency recommendations"
    }
  ];

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Who decides my income eligibility?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Georgia's Home Energy Rebates team reviews your documents and confirms eligibility. Anderson prepares project paperwork but does not approve income."
        }
      },
      {
        "@type": "Question",
        "name": "What's the HEAR deadline?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "HEAR applications must be submitted within 90 days of your invoice date."
        }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Georgia Home Energy Rebates (HER & HEAR) | Anderson Heating, Air & Insulation</title>
        <meta name="description" content="Cut bills and boost comfort with Anderson's whole-home approach. We guide Georgia HER & HEAR rebates and handle the hard parts. Funds are limited—check eligibility today." />
        <meta name="keywords" content="Georgia home energy rebates, HER, HEAR, heat pump installation, insulation, air sealing, Anderson HVAC, Gordon County" />
        <link rel="canonical" href="https://www.johnandersonservice.com/hear-her/" />
        
        <meta property="og:title" content="Georgia Home Energy Rebates with Anderson" />
        <meta property="og:description" content="Lower bills. More comfort. Rebates made simple with Anderson. Georgia confirms eligibility; we guide the steps." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.johnandersonservice.com/hear-her/" />
        <meta property="og:image" content="https://www.johnandersonservice.com/wp-content/uploads/anderson-web-transparent_logo-color.png" />
        
        <script type="application/ld+json">
          {JSON.stringify(localBusinessData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(organizationData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(websiteData)}
        </script>
        {servicesData.map((service, index) => (
          <script key={index} type="application/ld+json">
            {JSON.stringify(service)}
          </script>
        ))}
        <script type="application/ld+json">
          {JSON.stringify(faqData)}
        </script>
      </Helmet>

      <main className="min-h-screen bg-background">
        <Header />
        
        <HeroSection 
          onCheckEligibility={scrollToEligibility}
          onGetEstimate={openEstimateModal}
        />
        
        <ProgramsSection />
        
        <EligibilitySection />
        
        <UpgradesSection />
        
        <ProcessSection />
        
        <ServiceAreaSection />
        
        <FAQSection />
        
        <CTASection 
          onCheckEligibility={scrollToEligibility}
          onGetEstimate={openEstimateModal}
        />

        <footer className="py-12 bg-accent/30 border-t border-primary/20">
          <div className="container max-w-content mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Anderson Company Info */}
              <div className="text-center md:text-left">
                <div className="mb-4">
                  <img 
                    src="/lovable-uploads/c367d70b-f17b-40dd-8bc3-c5d78000a6f3.png" 
                    alt="Anderson Heating, Air & Insulation - The Paws-itive Choice" 
                    className="h-24 w-auto mx-auto md:mx-0"
                    style={{ padding: '4px' }} /* Safe zone */
                    onError={(e) => {
                      console.log('Footer logo failed to load');
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
                <div className="text-sm text-muted-foreground">
                  <p className="font-semibold text-foreground mb-2">Anderson Heating, Air & Insulation</p>
                  <p className="mb-1">DBA John Anderson Service Co.</p>
                  <p className="mb-2">519 Pine St, Calhoun, GA 30701</p>
                  <p className="font-semibold text-lg text-secondary-foreground mb-2">706-629-0749</p>
                  <p>
                    <a 
                      href="mailto:workorders@johnandersonservice.com"
                      className="text-primary hover:text-primary-light"
                    >
                      workorders@johnandersonservice.com
                    </a>
                  </p>
                  <p className="mt-2 text-xs">Licensed & Insured HVAC Contractor</p>
                  <p className="text-xs">Serving 46 Counties Across Georgia</p>
                </div>
              </div>

              {/* Compliance & Resources */}
              <div className="text-center md:text-right">
                <div className="mb-4">
                  <p className="text-sm font-semibold text-foreground mb-2">Official Georgia Program Resources:</p>
                  <div className="text-sm space-y-1">
                    <p>
                      <a 
                        href="https://energyrebates.georgia.gov/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary-light"
                      >
                        Georgia Energy Rebates Home
                      </a>
                    </p>
                    <p>
                      <a 
                        href="https://energyrebates.georgia.gov/contact-us" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary-light"
                      >
                        Contact Center: (877) 348-5237
                      </a>
                    </p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  <strong className="text-foreground">Compliance:</strong> Anderson is a participating contractor. Customers complete their own application and income verification; 
                  Georgia reviews and approves rebates. We provide guidance, detailed invoices, photos, and reports to make it easy.
                </p>
                <p className="text-xs text-muted-foreground">
                  Last updated: {new Date().toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
        </footer>

        <LeadModal 
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />

        <StickyMobileCTA 
          onCheckEligibility={scrollToEligibility}
          onGetEstimate={openEstimateModal}
        />
      </main>
    </>
  );
};

export default Index;
