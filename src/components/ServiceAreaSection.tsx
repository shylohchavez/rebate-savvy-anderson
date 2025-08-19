import { MapPin, Phone, Mail } from "lucide-react";

export const ServiceAreaSection = () => {
  const counties = [
    "Gordon (HQ)", "Bartow", "Catoosa", "Chattooga", "Cherokee", "Cobb", "Dade", "Dawson", "DeKalb",
    "Fannin", "Fayette", "Floyd", "Forsyth", "Fulton", "Gilmer", "Haralson", "Heard", "Henry", "Lamar",
    "Meriwether", "Murray", "Paulding", "Pickens", "Pike", "Polk", "Spalding", "Troup", "Union", "Walker",
    "Whitfield", "Carroll", "Coweta", "Douglas", "Gwinnett", "Hall", "Clayton", "Rockdale", "Newton",
    "Butts", "Jasper", "Upson", "Harris", "Randolph", "Taylor", "Talbot", "Schley"
  ];

  return (
    <section className="py-section bg-anderson-cream/30" id="service-area">
      <div className="container max-w-content mx-auto px-4">
        <div className="text-center mb-8">
          <div className="border-t-4 border-anderson-purple w-16 mx-auto mb-6"></div>
          <h2 className="text-h2 font-bold mb-4 text-anderson-purple">
            Proudly Serving North Georgia
          </h2>
          <p className="text-lg text-charcoal mb-6 max-w-3xl mx-auto">
            Anderson Heating, Air & Insulation serves homeowners across North Georgia. 
            Contact us today to see how we can help with your home energy rebate project.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-anderson-orange" />
              <a 
                href="tel:+17066290749"
                className="text-anderson-purple hover:text-anderson-lilac font-semibold transition-colors"
              >
                706‑629‑0749
              </a>
            </div>
            <span className="hidden sm:block text-muted-foreground">•</span>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-anderson-orange" />
              <a 
                href="mailto:rebates@johnandersonservice.com"
                className="text-anderson-purple hover:text-anderson-lilac font-semibold transition-colors"
              >
                rebates@johnandersonservice.com
              </a>
            </div>
          </div>
        </div>
        
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-soft border border-anderson-purple/10">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 text-sm">
            {counties.map((county, index) => (
              <div 
                key={index}
                className="bg-anderson-cream/50 rounded-lg p-3 text-center border border-anderson-purple/10 hover:bg-anderson-cream/70 transition-colors"
              >
                <span className="font-medium text-charcoal">{county}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-anderson-purple/10 rounded-lg">
            <p className="text-sm text-charcoal text-center">
              <MapPin className="w-4 h-4 inline mr-2 text-anderson-orange" />
              If you're nearby but not listed, call <a href="tel:+17066290749" className="text-anderson-purple hover:text-anderson-lilac font-semibold">706‑629‑0749</a>—we can help or refer.
            </p>
          </div>
        </div>
        
        <div className="text-center mt-6">
          <p className="text-sm text-muted-foreground">
            <strong className="text-charcoal">Business Address:</strong> 519 Pine St, Calhoun, GA 30701<br />
            <strong className="text-charcoal">Website:</strong> <a href="https://www.johnandersonservice.com" className="text-anderson-purple hover:text-anderson-lilac">www.johnandersonservice.com</a>
          </p>
        </div>
      </div>
    </section>
  );
};