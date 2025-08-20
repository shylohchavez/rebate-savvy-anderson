
import { Phone, Menu, X, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { COMPANY } from "@/lib/company";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className="bg-white shadow-soft border-b border-border sticky top-0 z-50">
      <div className="container max-w-content mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Anderson Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/8ce0adc9-4809-459c-b2fa-5c3761fffc0e.png" 
              alt="Anderson Heating, Air & Insulation - The Paws-itive Choice" 
              className="h-16 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            <nav className="flex items-center gap-6">
              <a 
                href="/energy-rebates"
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                Energy Rebates
              </a>
              <button 
                onClick={() => scrollToSection('eligibility')}
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                Check Eligibility
              </button>
              <button 
                onClick={() => scrollToSection('faq')}
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                FAQ
              </button>
              <a 
                href={`${COMPANY.website}/contact-us/`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                Contact
              </a>
            </nav>
            
            <div className="flex items-center gap-2">
              <a 
                href={`mailto:${COMPANY.email}`}
                className="text-anderson-purple hover:text-anderson-lilac transition-colors text-sm font-medium hidden sm:flex items-center gap-1"
              >
                <Mail size={16} />
                {COMPANY.email}
              </a>
              <div className="text-right mr-4">
                <p className="text-sm text-muted-foreground">Call for Service</p>
                <p className="font-semibold text-foreground text-lg">
                  {COMPANY.phone_display}
                </p>
              </div>
            </div>
            
            <Button 
              variant="anderson" 
              size="lg"
              className="rounded-full"
              asChild
            >
              <a href={`tel:${COMPANY.phone_href}`} className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border">
            <nav className="flex flex-col gap-4 mt-4">
              <a 
                href="/energy-rebates"
                className="text-left text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                Energy Rebates
              </a>
              <button 
                onClick={() => scrollToSection('eligibility')}
                className="text-left text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                Check Eligibility
              </button>
              <button 
                onClick={() => scrollToSection('faq')}
                className="text-left text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                FAQ
              </button>
              <a 
                href={`${COMPANY.website}/contact-us/`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                Contact
              </a>
              <a 
                href={`mailto:${COMPANY.email}`}
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                Email Us
              </a>
              <Button 
                variant="anderson" 
                size="lg"
                className="rounded-full w-full"
                asChild
              >
                <a href={`tel:${COMPANY.phone_href}`} className="flex items-center justify-center gap-2">
                  <Phone className="w-4 h-4" />
                  Call {COMPANY.phone_display}
                </a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
