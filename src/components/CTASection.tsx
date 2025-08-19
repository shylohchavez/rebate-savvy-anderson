import { Button } from "@/components/ui/button";
import { Calculator, FileText, Clock } from "lucide-react";

interface CTASectionProps {
  onCheckEligibility: () => void;
  onGetEstimate: () => void;
}

export const CTASection = ({ onCheckEligibility, onGetEstimate }: CTASectionProps) => {
  return (
    <section className="py-section bg-gradient-hero border-t border-primary/20">
      <div className="container max-w-content mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <div className="flex justify-center mb-4">
            <Clock className="w-12 h-12 text-primary" />
          </div>
          <h2 className="text-h2 font-bold mb-4">Start Today—Funds Are Limited</h2>
          <p className="text-body text-muted-foreground mb-8 leading-relaxed">
            Getting started now helps you meet program dates and speeds up approval. 
            Don't wait—secure your rebate opportunity today.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              variant="hero" 
              size="xl"
              onClick={onGetEstimate}
              className="min-w-[240px]"
            >
              <FileText className="w-5 h-5" />
              Get My No‑Cost Estimate
            </Button>
            <Button 
              variant="trust" 
              size="xl"
              onClick={onCheckEligibility}
              className="min-w-[240px]"
            >
              <Calculator className="w-5 h-5" />
              Check My Rebate Eligibility
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};