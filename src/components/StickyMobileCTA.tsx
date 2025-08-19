import { Button } from "@/components/ui/button";
import { Calculator, FileText } from "lucide-react";

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
          className="flex-1 max-w-[140px] rounded-full"
        >
          <Calculator className="w-4 h-4" />
          Check Eligibility
        </Button>
        <Button 
          variant="anderson-secondary" 
          size="sm"
          onClick={onGetEstimate}
          className="flex-1 max-w-[140px] rounded-full"
        >
          <FileText className="w-4 h-4" />
          Get Estimate
        </Button>
      </div>
    </div>
  );
};