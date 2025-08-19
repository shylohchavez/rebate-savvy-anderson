
import { Button } from "@/components/ui/button";
import { Calculator, FileText, Clock, Phone } from "lucide-react";

interface CTASectionProps {
  onCheckEligibility: () => void;
  onGetEstimate: () => void;
}

export const CTASection = ({ onCheckEligibility, onGetEstimate }: CTASectionProps) => {
  return (
    <section className="py-section bg-gradient-cta text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary-foreground/90 to-secondary-foreground opacity-95"></div>
      <div className="container max-w-content mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="flex justify-center mb-4">
            <div className="bg-white/20 p-4 rounded-full">
              <Clock className="w-12 h-12 text-white" />
            </div>
          </div>
          <h2 className="text-h2 font-bold mb-4 text-white">Start Today—Funds Are Limited</h2>
          <p className="text-body text-white/90 mb-8 leading-relaxed">
            Getting started now helps you meet program dates and speeds up approval. 
            Don't wait—secure your rebate opportunity today.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <Button 
              size="xl"
              onClick={onGetEstimate}
              className="min-w-[240px] bg-white text-secondary-foreground hover:bg-white/90 rounded-full font-semibold shadow-medium"
            >
              <FileText className="w-5 h-5" />
              <span>Get My No‑Cost Estimate</span>
            </Button>
            <Button 
              size="xl"
              onClick={onCheckEligibility}
              className="min-w-[240px] border-2 border-white bg-transparent text-white hover:bg-white hover:text-secondary-foreground rounded-full font-semibold shadow-medium"
            >
              <Calculator className="w-5 h-5" />
              <span>Check My Rebate Eligibility</span>
            </Button>
            <Button 
              size="xl"
              asChild
              className="min-w-[200px] border-2 border-white bg-transparent text-white hover:bg-white hover:text-secondary-foreground rounded-full font-semibold shadow-medium"
            >
              <a href="tel:+17066290749" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <span>Call 706‑629‑0749</span>
              </a>
            </Button>
          </div>

          {/* Anderson Branding */}
          <div className="mt-8 pt-6 border-t border-white/20">
            <div className="text-white/80 text-sm font-semibold tracking-wider">
              ANDERSON HEATING • AIR • INSULATION
            </div>
            <div className="text-white/70 text-xs mt-1">
              DBA John Anderson Service Co. • Licensed & Insured
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
