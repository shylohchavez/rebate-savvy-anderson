import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="bg-white shadow-soft border-b border-border sticky top-0 z-50">
      <div className="container max-w-content mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Anderson Logo */}
          <div className="flex items-center">
            <div className="bg-primary/10 p-3 rounded-lg border border-primary/20">
              {/* Placeholder for Anderson logo - replace with actual logo */}
              <div className="text-primary font-bold text-xl tracking-wide">
                Anderson
              </div>
              <div className="text-secondary-foreground text-xs font-semibold tracking-wider">
                HEATING • AIR • INSULATION
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="flex items-center gap-4">
            <div className="hidden md:block text-right">
              <p className="text-sm text-muted-foreground">Call for Service</p>
              <p className="font-semibold text-foreground text-lg">
                (555) 123-4567
              </p>
            </div>
            <Button 
              variant="anderson" 
              size="lg"
              className="rounded-full"
              asChild
            >
              <a href="tel:+15551234567" className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span className="hidden sm:inline">Call Now</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};