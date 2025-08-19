import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, Calculator, FileText, Shield, Home, FileCheck, Award } from "lucide-react";

interface HeroSectionProps {
  onCheckEligibility: () => void;
  onGetEstimate: () => void;
}

export const HeroSection = ({ onCheckEligibility, onGetEstimate }: HeroSectionProps) => {
  return (
    <section className="py-section bg-gradient-hero relative">
      <div className="container max-w-content mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-hero font-bold mb-6 text-foreground">
              Lower Bills. More Comfort. Rebates Made Simple with Anderson.
            </h1>
            <p className="text-body text-muted-foreground mb-8 leading-relaxed">
              We fix drafty rooms and high bills the right way—insulation, air sealing, and heat pumps. 
              Georgia rebates can lower your cost. Anderson guides the steps; the State confirms 
              eligibility and approves rebates.
            </p>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-6">
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
                <a href="tel:+15551234567" className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call Anderson Now
                </a>
              </Button>
            </div>

            <p className="text-sm text-muted-foreground mb-6">
              HEAR applications must be submitted within 90 days of your invoice date. 
              Rebates depend on eligibility, pre‑approval, and available funding.
            </p>
          </div>

          {/* Anderson Brand Mark */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-soft border border-primary/10">
                <img 
                  src="/lovable-uploads/c367d70b-f17b-40dd-8bc3-c5d78000a6f3.png" 
                  alt="Anderson Heating, Air & Insulation logo (The Paws-itive Choice)" 
                  className="h-32 w-auto mx-auto"
                  onError={(e) => {
                    console.log('Hero logo failed to load');
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
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
            State Quality Checks
          </Badge>
        </div>
      </div>
    </section>
  );
};