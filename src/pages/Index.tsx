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
    "serviceArea": [
      "Gordon", "Bartow", "Floyd", "Murray", "Whitfield", "Chattooga", "Pickens", "Cherokee", "Walker"
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
      {"@type": "AdministrativeArea", "name": "Gordon County, GA"},
      {"@type": "AdministrativeArea", "name": "Bartow County, GA"},
      {"@type": "AdministrativeArea", "name": "Floyd County, GA"},
      {"@type": "AdministrativeArea", "name": "Murray County, GA"},
      {"@type": "AdministrativeArea", "name": "Whitfield County, GA"},
      {"@type": "AdministrativeArea", "name": "Chattooga County, GA"},
      {"@type": "AdministrativeArea", "name": "Pickens County, GA"},
      {"@type": "AdministrativeArea", "name": "Cherokee County, GA"},
      {"@type": "AdministrativeArea", "name": "Walker County, GA"}
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
      {"@type":"Question","name":"Who can apply?","acceptedAnswer":{"@type":"Answer","text":"Any Georgia resident living in a single-family or multifamily home that is their primary address can apply. Manufactured homes and condos also qualify."}},
      {"@type":"Question","name":"What's the difference between HER and HEAR?","acceptedAnswer":{"@type":"Answer","text":"HER is whole-home energy savings and open to all incomes. HEAR is for specific electric upgrades and is limited to households at or below 150% of Area Median Income (bigger help below 80%)."}},
      {"@type":"Question","name":"How is income checked?","acceptedAnswer":{"@type":"Answer","text":"Either categorical eligibility with a benefits letter or direct income verification using recent tax forms, pay stubs, or bank statements. Each adult (18+) provides income info."}},
      {"@type":"Question","name":"Do renters qualify?","acceptedAnswer":{"@type":"Answer","text":"Yes. Renters can apply. Multifamily buildings have extra rules that owners must meet."}},
      {"@type":"Question","name":"Is this program guaranteed?","acceptedAnswer":{"@type":"Answer","text":"No. All rebates depend on eligibility, correct paperwork, and available funds. Georgia reviews and approves applications."}},
      {"@type":"Question","name":"What home improvements are covered?","acceptedAnswer":{"@type":"Answer","text":"HEAR covers ENERGY STAR heat pumps, heat pump water heaters and dryers, electric ranges/cooktops/ovens, insulation, air sealing, ventilation, electric panels, and wiring."}},
      {"@type":"Question","name":"How much money can I get back?","acceptedAnswer":{"@type":"Answer","text":"HEAR caps include up to $8,000 for a heat pump, $1,750 for a heat pump water heater, up to $4,000 for an electric panel, and a $14,000 total cap. HER pays based on energy savings (up to $4,000, or up to $8,000 for low-to-moderate income)."}},
      {"@type":"Question","name":"Can I get a rebate for just an electrical panel or wiring?","acceptedAnswer":{"@type":"Answer","text":"No. Panels and wiring must be paired with another HEAR measure or be part of a HER project."}},
      {"@type":"Question","name":"Can I replace my old electric stove with a new electric stove and get a rebate?","acceptedAnswer":{"@type":"Answer","text":"Generally no. Electric-to-electric cooking replacements do not qualify. Exceptions include upgrading to a heat pump water heater or heat pump dryer from electric resistance units."}},
      {"@type":"Question","name":"Do ventilation upgrades qualify?","acceptedAnswer":{"@type":"Answer","text":"Ventilation must be paired with air or duct sealing, or blower-door modeling must show very low leakage."}},
      {"@type":"Question","name":"Can I combine HER and HEAR?","acceptedAnswer":{"@type":"Answer","text":"Yes, but a single measure cannot be co-funded by both. Separate projects are allowed. HER projects must reach at least 20% energy savings."}},
      {"@type":"Question","name":"Can I stack with other incentives?","acceptedAnswer":{"@type":"Answer","text":"Yes. Other rebates can be combined; they must appear as separate line items on the invoice."}},
      {"@type":"Question","name":"How do I apply?","acceptedAnswer":{"@type":"Answer","text":"Contact an approved contractor such as Anderson. We design your project and submit through the official Neighborly portal. You complete your profile and income step."}},
      {"@type":"Question","name":"Is pre-approval needed?","acceptedAnswer":{"@type":"Answer","text":"Yes—your project is submitted for a rebate reservation and review before installation."}},
      {"@type":"Question","name":"What timelines should I know?","acceptedAnswer":{"@type":"Answer","text":"HEAR applications must be submitted within 90 days of the project invoice date (or coupon issuance for point-of-sale)."}},
      {"@type":"Question","name":"How long does review and payment take?","acceptedAnswer":{"@type":"Answer","text":"Typical review is 3–5 business days once your profile and proposal are in. Payments usually arrive 10–14 days after installation and QA/QC are complete."}},
      {"@type":"Question","name":"Do you charge for assessments?","acceptedAnswer":{"@type":"Answer","text":"Sometimes. If there is a fee, we tell you upfront and deliver a written report within 48 hours."}},
      {"@type":"Question","name":"What testing is required?","acceptedAnswer":{"@type":"Answer","text":"Heat pumps require a Manual J load calculation. Insulation, air sealing, and ventilation need blower-door modeling and a CAZ report when applicable."}},
      {"@type":"Question","name":"Will my project be inspected?","acceptedAnswer":{"@type":"Answer","text":"Yes. The first five jobs for a new contractor are always inspected; after that, at least 5% are inspected in person and 20% total are inspected."}},
      {"@type":"Question","name":"Can I do the work myself?","acceptedAnswer":{"@type":"Answer","text":"DIY is very limited. Homeowners can self-install one ENERGY STAR kitchen appliance and apply for up to $840. Contractors can apply for needed wiring tied to that DIY project."}},
      {"@type":"Question","name":"What is the midstream option?","acceptedAnswer":{"@type":"Answer","text":"Approved distributors may deduct part of the HEAR rebate at point-of-sale for certain equipment; the rest flows through the contractor."}},
      {"@type":"Question","name":"Are manufactured homes eligible?","acceptedAnswer":{"@type":"Answer","text":"Yes, if the home is your primary residence in Georgia."}},
      {"@type":"Question","name":"What will be on my final invoice?","acceptedAnswer":{"@type":"Answer","text":"Line-item equipment and labor, model numbers, dates, address, total cost, rebate amount, testing/modeling, and other incentives. You sign and date it."}},
      {"@type":"Question","name":"Are funds limited?","acceptedAnswer":{"@type":"Answer","text":"Yes. Georgia received a set amount for HER and HEAR, and funds are subject to availability."}},
      {"@type":"Question","name":"How do I start?","acceptedAnswer":{"@type":"Answer","text":"Call (706) 629-0749 or visit johnandersonservice.com to schedule your no-cost estimate."}}
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
                   <p className="font-semibold text-lg text-secondary-foreground mb-2">
                     <a href="tel:+17066290749" className="hover:text-primary transition-colors">
                       (706) 629‑0749
                     </a>
                   </p>
                   <p>
                      <a 
                        href="mailto:workorders@johnandersonservice.com"
                        className="text-primary hover:text-primary-light"
                      >
                        workorders@johnandersonservice.com
                      </a>
                   </p>
                  <p className="mt-2 text-xs">Licensed & Insured HVAC Contractor</p>
                  <p className="text-xs">Serving North Georgia Counties</p>
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
