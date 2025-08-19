import { Shield, Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface GefaBadgeProps {
  isApproved: boolean;
}

export const GefaBadge = ({ isApproved }: GefaBadgeProps) => {
  return (
    <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-soft border border-primary/20 max-w-[280px]">
      <div className="text-center">
        <div className="mb-4">
          {isApproved ? (
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-3">
              <Check className="w-8 h-8 text-primary" />
            </div>
          ) : (
            <div className="inline-flex items-center justify-center w-16 h-16 bg-anderson-purple/10 rounded-full mb-3">
              <Shield className="w-8 h-8 text-anderson-purple" />
            </div>
          )}
        </div>
        
        <Badge 
          variant="secondary" 
          className="mb-3 px-4 py-2 text-sm font-semibold bg-primary/10 text-primary border border-primary/20"
        >
          {isApproved ? "GEFA‑Approved Contractor" : "Georgia Home Energy Rebates Specialist"}
        </Badge>
        
        <p className="text-xs text-muted-foreground leading-relaxed">
          {isApproved 
            ? "Listed on the state's approved contractor network."
            : "We help homeowners navigate eligibility and documentation. Official approval pending/final verification by GEFA."
          }
        </p>
        
        <div className="mt-3 pt-3 border-t border-primary/10">
          <p className="text-xs text-muted-foreground">
            <strong>Note:</strong> Rebates subject to GEFA rules and final approval.
          </p>
        </div>
      </div>
    </div>
  );
};