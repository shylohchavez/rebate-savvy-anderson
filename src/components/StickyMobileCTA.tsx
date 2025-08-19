import { Button } from "@/components/ui/button";
import { Calculator, Phone } from "lucide-react";

interface StickyMobileCTAProps {
  onCheckEligibility: () => void;
  onGetEstimate: () => void;
}

export const StickyMobileCTA = ({ onCheckEligibility }: StickyMobileCTAProps) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-anderson-purple/20 p-3 z-50 md:hidden shadow-strong">
      <div className="flex gap-2 justify-center">
        <Button 
          onClick={onCheckEligibility}
          className="flex-1 max-w-[180px] bg-anderson-purple hover:bg-anderson-purple/90 text-white rounded-full text-sm font-semibold"
        >
          <Calculator className="w-4 h-4 mr-2" />
          Check Rebate Eligibility
        </Button>
        <Button 
          asChild
          className="flex-1 max-w-[140px] bg-anderson-orange hover:bg-anderson-orange/90 text-white rounded-full text-sm font-semibold"
        >
          <a href="tel:+17066290749" className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            Call 706‑629‑0749
          </a>
        </Button>
      </div>
    </div>
  );
};