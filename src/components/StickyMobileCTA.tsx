
import { Button } from "@/components/ui/button";
import { Calculator, FileText, Phone } from "lucide-react";

interface StickyMobileCTAProps {
  onCheckEligibility: () => void;
  onGetEstimate: () => void;
}

export const StickyMobileCTA = ({ onCheckEligibility, onGetEstimate }: StickyMobileCTAProps) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-primary/20 p-3 z-50 md:hidden shadow-strong">
      <div className="flex gap-2 justify-center">
        <Button 
          variant="anderson" 
          size="sm"
          onClick={onCheckEligibility}
          className="flex-1 max-w-[110px] rounded-full text-xs"
        >
          <Calculator className="w-3 h-3" />
          Eligibility
        </Button>
        <Button 
          variant="anderson-secondary" 
          size="sm"
          onClick={onGetEstimate}
          className="flex-1 max-w-[110px] rounded-full text-xs"
        >
          <FileText className="w-3 h-3" />
          Estimate
        </Button>
        <Button 
          variant="anderson-ghost" 
          size="sm"
          asChild
          className="flex-1 max-w-[110px] rounded-full text-xs"
        >
          <a href="tel:+17066290749" className="flex items-center gap-1">
            <Phone className="w-3 h-3" />
            706-629-0749
          </a>
        </Button>
      </div>
    </div>
  );
};
