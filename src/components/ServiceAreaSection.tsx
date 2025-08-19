import { MapPin } from "lucide-react";

export const ServiceAreaSection = () => {
  const counties = [
    "Banks", "Barrow", "Carroll", "Catoosa", "Chattooga", "Cherokee", "Clarke", "Clayton", 
    "Cobb", "Coweta", "Dade", "Dawson", "DeKalb", "Douglas", "Elbert", "Fannin", "Fayette", 
    "Floyd", "Forsyth", "Franklin", "Fulton", "Gilmer", "Gordon", "Gwinnett", "Habersham", 
    "Hall", "Haralson", "Hart", "Heard", "Henry", "Jackson", "Lumpkin", "Madison", "Murray", 
    "Newton", "Oconee", "Paulding", "Pickens", "Rockdale", "Stephens", "Towns", "Troup", 
    "Walker", "Walton", "White", "Whitfield"
  ];

  return (
    <section className="py-section bg-accent/30">
      <div className="container max-w-content mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-section-header font-bold mb-4 text-foreground">
            Our Georgia Service Area (46 Counties)
          </h2>
          <p className="text-body text-muted-foreground mb-4">
            Anderson Heating, Air & Insulation proudly serves homeowners across 46 counties in Georgia. 
            Contact us today to see how we can help with your home energy rebate project.
          </p>
          <div className="flex items-center justify-center gap-2 mb-6">
            <MapPin className="w-5 h-5 text-primary" />
            <a 
              href="mailto:workorders@johnandersonservice.com"
              className="text-primary hover:text-primary-light font-semibold"
            >
              workorders@johnandersonservice.com
            </a>
            <span className="text-muted-foreground">•</span>
            <a 
              href="tel:+17066290749"
              className="text-primary hover:text-primary-light font-semibold"
            >
              706-629-0749
            </a>
          </div>
        </div>
        
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-soft border border-primary/10">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 text-sm">
            {counties.map((county, index) => (
              <div 
                key={index}
                className="bg-accent/50 rounded-lg p-3 text-center border border-primary/10"
              >
                <span className="font-medium text-foreground">{county}</span>
                <span className="text-muted-foreground text-xs block">County</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-6">
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">Business Address:</strong> 519 Pine St, Calhoun, GA 30701<br />
            <strong className="text-foreground">Mailing/Service:</strong> Available throughout our 46-county service area
          </p>
        </div>
      </div>
    </section>
  );
};