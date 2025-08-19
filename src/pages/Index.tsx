import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ProgramsSection } from "@/components/ProgramsSection";
import { EligibilitySection } from "@/components/EligibilitySection";
import { UpgradesSection } from "@/components/UpgradesSection";
import { ProcessSection } from "@/components/ProcessSection";
import { FAQSection } from "@/components/FAQSection";
import { CTASection } from "@/components/CTASection";
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

  // Add structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Anderson Heating, Air & Insulation",
    "url": "https://example.com",
    "telephone": "+1-555-123-4567",
    "areaServed": [
      {
        "@type": "AdministrativeArea",
        "name": "Gordon County, GA"
      },
      {
        "@type": "AdministrativeArea", 
        "name": "Northwest Georgia"
      }
    ]
  };

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
        <meta name="keywords" content="Georgia home energy rebates, HER, HEAR, heat pump installation, insulation, air sealing, Anderson HVAC" />
        <link rel="canonical" href="https://example.com/energy-rebates" />
        
        <meta property="og:title" content="Georgia Home Energy Rebates with Anderson" />
        <meta property="og:description" content="Lower bills. More comfort. Rebates made simple with Anderson. Georgia confirms eligibility; we guide the steps." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://example.com/energy-rebates" />
        
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
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
        
        <FAQSection />
        
        <CTASection 
          onCheckEligibility={scrollToEligibility}
          onGetEstimate={openEstimateModal}
        />

        <footer className="py-12 bg-accent/30 border-t border-primary/20">
          <div className="container max-w-content mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Anderson Logo & Contact */}
              <div className="text-center md:text-left">
                <div className="mb-4">
                  <img 
                    src="/lovable-uploads/c367d70b-f17b-40dd-8bc3-c5d78000a6f3.png" 
                    alt="Anderson Heating, Air & Insulation logo (The Paws-itive Choice)" 
                    className="h-24 w-auto mx-auto md:mx-0"
                    onError={(e) => {
                      console.log('Footer logo failed to load');
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
                <div className="text-sm text-muted-foreground">
                  <p className="font-semibold text-foreground mb-1">Licensed & Insured HVAC Contractor</p>
                  <p>Serving Gordon County & Northwest Georgia</p>
                  <p className="font-semibold text-lg text-secondary-foreground mt-2">(555) 123-4567</p>
                </div>
              </div>

              {/* Compliance */}
              <div className="text-center md:text-right">
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  <strong className="text-foreground">Compliance:</strong> Anderson is a participating contractor. Customers complete their own application and income step; 
                  the State reviews and approves rebates. We provide a checklist, detailed invoice, photos, and reports to make it easy.
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
