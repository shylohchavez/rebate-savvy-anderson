
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, Calculator, FileText, Shield, Home, FileCheck, Award, ExternalLink } from "lucide-react";

interface HeroSectionProps {
  onCheckEligibility: () => void;
  onGetEstimate: () => void;
}

export const HeroSection = ({ onCheckEligibility, onGetEstimate }: HeroSectionProps) => {
  return (
    <section className="py-section bg-gradient-hero relative">
      <div className="container max-w-content mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header with integrated logo */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-8">
            <div className="flex-1">
              <h1 className="text-hero font-bold mb-6 text-foreground text-center">
                A Cozier Home, Lower Bills—Handled by Anderson
              </h1>
              <p className="text-body text-muted-foreground mb-6 leading-relaxed text-center">
                We fix comfort and energy waste the right way—insulation, air sealing, and high‑efficiency heat pumps. 
                Georgia's Home Energy Rebates can help lower your cost. We guide your steps; <strong className="text-anderson-purple">the State confirms eligibility</strong>.
              </p>
            </div>
            
            <div className="flex-shrink-0 flex justify-center lg:justify-end">
              <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-soft border border-anderson-purple/10 max-w-[200px]">
                <img 
                  src="/lovable-uploads/ccc9e78e-7031-4281-aa74-3aa19945fde7.png" 
                  alt="Anderson Heating, Air & Insulation - The Paws-itive Choice" 
                  className="h-24 w-auto mx-auto"
                />
              </div>
            </div>
          </div>

          {/* Official Georgia Program Links */}
          <div className="bg-accent/50 border border-primary/20 rounded-lg p-4 mb-6">
            <h3 className="font-semibold text-primary mb-3 text-sm text-center">Official Georgia Energy Rebates Resources:</h3>
            <div className="grid grid-cols-2 gap-2 text-sm justify-items-center">
              <a 
                href="https://energyrebates.georgia.gov/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-light flex items-center gap-1"
              >
                Program Home <ExternalLink className="w-3 h-3" />
              </a>
              <a 
                href="https://energyrebates.georgia.gov/eligibility" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-light flex items-center gap-1"
              >
                Check Eligibility <ExternalLink className="w-3 h-3" />
              </a>
              <a 
                href="https://energyrebates.georgia.gov/how-do-i-how-apply" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-light flex items-center gap-1"
              >
                How to Apply <ExternalLink className="w-3 h-3" />
              </a>
              <a 
                href="https://energyrebates.georgia.gov/find-approved-contractor" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-light flex items-center gap-1"
              >
                Find Contractors <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <Button 
              variant="anderson" 
              size="xl"
              onClick={onCheckEligibility}
              className="min-w-[240px] rounded-full"
            >
              <Calculator className="w-5 h-5" />
              Check My Rebate Eligibility
            </Button>
            <Button 
              variant="anderson-secondary" 
              size="xl"
              onClick={onGetEstimate}
              className="min-w-[240px] rounded-full"
            >
              <FileText className="w-5 h-5" />
              Get My No‑Cost Estimate
            </Button>
            <Button 
              variant="anderson-ghost" 
              size="xl"
              asChild
              className="min-w-[180px] rounded-full"
            >
              <a href="tel:+17066290749" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call 706-629-0749
              </a>
            </Button>
          </div>

          <p className="text-sm text-muted-foreground mb-6 text-center">
            HEAR applications must be submitted within 90 days of your invoice date. 
            Rebates depend on eligibility, pre‑approval, and available funding.
          </p>

          {/* Service area info */}
          <div className="text-center p-4 bg-primary/5 rounded-lg border border-primary/10">
            <div className="text-sm font-semibold text-primary mb-1">
              Serving North Georgia Counties
            </div>
            <div className="text-xs text-muted-foreground">
              Gordon • Bartow • Floyd • Murray • Whitfield • Chattooga • Pickens • Cherokee • Walker
            </div>
            <div className="text-xs text-muted-foreground mt-1">
              Licensed & Insured
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-3 mt-8 pt-8 border-t border-primary/10">
          <Badge variant="secondary" className="bg-accent text-accent-foreground border border-primary/20">
            <Shield className="w-4 h-4 mr-2" />
            Licensed & Insured
          </Badge>
          <Badge variant="secondary" className="bg-accent text-accent-foreground border border-primary/20">
            <Home className="w-4 h-4 mr-2" />
            Whole‑Home Experts
          </Badge>
          <Badge variant="secondary" className="bg-accent text-accent-foreground border border-primary/20">
            <FileCheck className="w-4 h-4 mr-2" />
            We Prep Your Paperwork
          </Badge>
          <Badge variant="secondary" className="bg-accent text-accent-foreground border border-primary/20">
            <Award className="w-4 h-4 mr-2" />
            Georgia Quality Checks
          </Badge>
        </div>
      </div>
    </section>
  );
};
