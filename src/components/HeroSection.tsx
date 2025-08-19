import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, Calculator, FileText } from "lucide-react";

interface HeroSectionProps {
  onCheckEligibility: () => void;
  onGetEstimate: () => void;
}

export const HeroSection = ({ onCheckEligibility, onGetEstimate }: HeroSectionProps) => {
  return (
    <section className="bg-gradient-hero py-section">
      <div className="container max-w-content mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-hero font-bold leading-tight mb-4 text-foreground">
            Lower Bills. More Comfort. Rebates Made Simple with Anderson.
          </h1>
          <p className="text-body text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            We fix drafty rooms, high bills, and old systems the right way—insulation, air sealing, and modern heat pumps. 
            Georgia's Home Energy Rebates can help lower your cost. Anderson guides the steps; the State confirms eligibility and approves rebates.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <Button 
              variant="hero" 
              size="lg"
              onClick={onCheckEligibility}
              className="min-w-[200px]"
            >
              <Calculator className="w-5 h-5" />
              Check My Rebate Eligibility
            </Button>
            <Button 
              variant="trust" 
              size="lg"
              onClick={onGetEstimate}
              className="min-w-[200px]"
            >
              <FileText className="w-5 h-5" />
              Get My No‑Cost Estimate
            </Button>
            <Button 
              variant="phone" 
              size="lg"
              asChild
              className="min-w-[160px]"
            >
              <a href="tel:+15551234567">
                <Phone className="w-5 h-5" />
                Call Anderson Now
              </a>
            </Button>
          </div>

          <p className="text-sm text-muted-foreground mb-6 max-w-2xl mx-auto">
            HEAR applications must be submitted within 90 days of your invoice date. 
            Rebates depend on eligibility, pre‑approval, and available funding.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <Badge variant="secondary" className="px-4 py-2">
              Whole‑home experts
            </Badge>
            <Badge variant="secondary" className="px-4 py-2">
              Licensed • Insured • Local
            </Badge>
            <Badge variant="secondary" className="px-4 py-2">
              We prep your paperwork package
            </Badge>
            <Badge variant="secondary" className="px-4 py-2">
              State quality checks
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};