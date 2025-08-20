import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { GefaBadge } from "@/components/energy-rebates/GefaBadge";
import { HERvsHEARComparison } from "@/components/energy-rebates/HERvsHEARComparison";
import { RebateFinder } from "@/components/energy-rebates/RebateFinder";
import { BundledSavingsGraphic } from "@/components/energy-rebates/BundledSavingsGraphic";
import { TechAdvantageList } from "@/components/energy-rebates/TechAdvantageList";
import { ProofAndLongevity } from "@/components/energy-rebates/ProofAndLongevity";
import { DocChecklist } from "@/components/energy-rebates/DocChecklist";
import { KeyMeasuresList } from "@/components/energy-rebates/KeyMeasuresList";
import { LeadModal } from "@/components/LeadModal";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { Button } from "@/components/ui/button";
import { Calculator, FileText, Phone } from "lucide-react";
import { COMPANY } from "@/lib/company";

// Config constants
const IS_GEFA_APPROVED = false;
const PRIMARY_COLOR = "anderson-purple";
const CTA_TEXT_PRIMARY = "Get a Free Rebate Consultation";

const EnergyRebates = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollToRebateFinder = () => {
    const element = document.getElementById('rebate-finder');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openConsultationModal = () => {
    setIsModalOpen(true);
  };

  // Enhanced structured data for Energy Rebates
  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${COMPANY.website}/#organization`,
    "name": COMPANY.legal_name,
    "alternateName": COMPANY.dba,
    "url": COMPANY.website,
    "logo": `${COMPANY.website}/wp-content/uploads/anderson-web-transparent_logo-color.png`,
    "telephone": COMPANY.phone_href,
    "email": COMPANY.email,
    "serviceType": [
      "Georgia Energy Rebates Consultation",
      "HER Program Guidance", 
      "HEAR Program Guidance",
      "Heat Pump Installation",
      "Insulation Services",
      "Air Sealing",
      "Home Energy Assessment"
    ],
    "hasCredential": "Georgia Home Energy Rebates Specialist"
  };

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What's the difference between HER and HEAR?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "HER (Home Energy Rebates) is for whole-home projects with no income limit and requires energy savings modeling. HEAR (Home Electrification and Appliance Rebates) is for specific upgrades and is income-based, generally for households at or below 150% of Area Median Income."
        }
      },
      {
        "@type": "Question",
        "name": "How much can I save with Georgia energy rebates?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "HEAR offers up to $8,000 for heat pumps, $1,750 for heat pump water heaters, up to $4,000 for electrical panels, with a $14,000 total cap. HER pays based on energy savings up to $4,000, or up to $8,000 for low-to-moderate income households."
        }
      },
      {
        "@type": "Question",
        "name": "Can I combine HER and HEAR rebates?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, but a single measure cannot be co-funded by both programs. You can have separate projects under each program. HER projects must achieve at least 20% energy savings."
        }
      }
    ]
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": COMPANY.website
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Energy Rebates",
        "item": `${COMPANY.website}/energy-rebates`
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>GEFA Home Energy Rebate Experts in North GA | John Anderson Service</title>
        <meta name="description" content="Your GEFA-approved contractor for HER & HEAR rebates in North Georgia. We handle the paperwork for heat pumps, insulation, and more. Maximize your savings up to $14,000." />
        <meta name="keywords" content="Georgia home energy rebates, HER, HEAR, heat pump rebates, insulation rebates, Anderson HVAC, energy savings" />
        <link rel="canonical" href={`${COMPANY.website}/energy-rebates`} />
        
        <meta property="og:title" content="Georgia Home Energy Rebates—Made Simple" />
        <meta property="og:description" content="Slash energy bills, boost comfort, and let our team handle eligibility, testing, and paperwork." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${COMPANY.website}/energy-rebates`} />
        
        <script type="application/ld+json">
          {JSON.stringify(localBusinessData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbData)}
        </script>
      </Helmet>

      <main className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="py-section bg-gradient-hero relative">
          <div className="container max-w-content mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-8">
                <div className="flex-1">
                  <h1 className="text-hero font-bold mb-6 text-foreground text-center">
                    Georgia Home Energy Rebates—Made Simple
                  </h1>
                  <p className="text-body text-muted-foreground mb-6 leading-relaxed text-center">
                    Slash energy bills, boost comfort, and let our team handle eligibility, testing, and paperwork.
                  </p>
                </div>
                
                <div className="flex-shrink-0 flex justify-center lg:justify-end">
                  <GefaBadge isApproved={IS_GEFA_APPROVED} />
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-wrap justify-center gap-4 mb-6">
                <Button 
                  variant="anderson" 
                  size="xl"
                  onClick={openConsultationModal}
                  className="min-w-[280px] rounded-full"
                >
                  <Calculator className="w-5 h-5" />
                  {CTA_TEXT_PRIMARY}
                </Button>
                <Button 
                  variant="anderson-secondary" 
                  size="xl"
                  onClick={scrollToRebateFinder}
                  className="min-w-[240px] rounded-full"
                >
                  <FileText className="w-5 h-5" />
                  Start the Rebate Finder
                </Button>
                <Button 
                  variant="anderson-ghost" 
                  size="xl"
                  asChild
                  className="min-w-[180px] rounded-full"
                >
                  <a href={`tel:${COMPANY.phone_href}`} className="flex items-center gap-2">
                    <Phone className="w-5 h-5" />
                    Call {COMPANY.phone_display}
                  </a>
                </Button>
              </div>

              <p className="text-sm text-muted-foreground text-center">
                <strong>This is an estimate—final eligibility is determined by GEFA.</strong> Rebates subject to GEFA rules and final approval.
              </p>
            </div>
          </div>
        </section>

        {/* HER vs HEAR Comparison */}
        <HERvsHEARComparison onLearnMore={scrollToRebateFinder} />

        {/* Rebate Finder */}
        <RebateFinder />

        {/* Bundled Savings */}
        <BundledSavingsGraphic onMaximizeRebate={scrollToRebateFinder} />

        {/* Technical Advantage */}
        <TechAdvantageList />

        {/* Proof & Longevity */}
        <ProofAndLongevity />

        {/* Documentation */}
        <DocChecklist onLetUsHandle={openConsultationModal} ctaText={CTA_TEXT_PRIMARY} />

        {/* Key Measures */}
        <KeyMeasuresList />

        {/* Final CTA Section */}
        <section className="py-section bg-accent/30">
          <div className="container max-w-content mx-auto px-4 text-center">
            <h2 className="text-section-title font-bold mb-4 text-foreground">
              Ready to Start Saving?
            </h2>
            <p className="text-body text-muted-foreground mb-8 max-w-2xl mx-auto">
              Don't wait—Georgia energy rebate funds are limited and available on a first-come, first-served basis.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                variant="anderson" 
                size="xl"
                onClick={openConsultationModal}
                className="min-w-[280px] rounded-full"
              >
                <Calculator className="w-5 h-5" />
                {CTA_TEXT_PRIMARY}
              </Button>
              <Button 
                variant="anderson-ghost" 
                size="xl"
                asChild
                className="min-w-[180px] rounded-full"
              >
                <a href={`tel:${COMPANY.phone_href}`} className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call {COMPANY.phone_display}
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 bg-accent/50 border-t border-primary/20">
          <div className="container max-w-content mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Anderson Company Info */}
              <div className="text-center md:text-left">
                <div className="mb-4">
                  <img 
                    src="/lovable-uploads/8ce0adc9-4809-459c-b2fa-5c3761fffc0e.png" 
                    alt="Anderson Heating, Air & Insulation - The Paws-itive Choice" 
                    className="h-24 w-auto mx-auto md:mx-0"
                  />
                </div>
                <div className="text-sm text-muted-foreground">
                  <p className="font-semibold text-foreground mb-2">{COMPANY.legal_name}</p>
                  <p className="mb-1">DBA {COMPANY.dba}</p>
                  <p className="mb-2">{COMPANY.address}</p>
                  <p className="font-semibold text-lg text-secondary-foreground mb-2">
                    <a href={`tel:${COMPANY.phone_href}`} className="hover:text-primary transition-colors">
                      {COMPANY.phone_display}
                    </a>
                  </p>
                  <p>
                    <a 
                      href={`mailto:${COMPANY.email}`}
                      className="text-primary hover:text-primary-light"
                    >
                      {COMPANY.email}
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
                  <strong className="text-foreground">Compliance:</strong> Information provided is for guidance. Eligibility and rebate amounts are determined by GEFA upon review of your application. Program rules may change.
                </p>
                <p className="text-xs text-muted-foreground">
                  For state application assistance, contact the Georgia Home Energy Rebates Contact Center: Mon–Fri 9am–6pm ET, (877) 348‑5237.
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
          onCheckEligibility={scrollToRebateFinder}
          onGetEstimate={openConsultationModal}
        />
      </main>
    </>
  );
};

export default EnergyRebates;