import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Zap, 
  Droplets, 
  Shirt, 
  ChefHat, 
  Home, 
  Plug,
  ExternalLink,
  AlertTriangle
} from "lucide-react";

export const KeyMeasuresList = () => {
  const measures = [
    {
      icon: Zap,
      title: "Heat Pump for Space Heating & Cooling",
      whatQualifies: "ENERGY STAR certified central heat pumps and ductless mini-splits",
      whatToKnow: "Must be properly sized with Manual J calculation. Biggest rebate potential.",
      warning: null,
      serviceLink: null
    },
    {
      icon: Droplets,
      title: "Heat Pump Water Heaters",
      whatQualifies: "ENERGY STAR certified heat pump water heaters (HPWH)",
      whatToKnow: "Can replace electric resistance units. Installation may require electrical upgrades.",
      warning: null,
      serviceLink: null
    },
    {
      icon: Shirt,
      title: "Heat Pump Clothes Dryers",
      whatQualifies: "ENERGY STAR certified heat pump dryers",
      whatToKnow: "Can replace existing electric dryers. No ventilation needed for some models.",
      warning: "Electric→electric replacement allowed for HP dryers",
      serviceLink: null
    },
    {
      icon: ChefHat,
      title: "Electric Stove/Cooktop/Range",
      whatQualifies: "ENERGY STAR certified electric cooking appliances",
      whatToKnow: "Must replace gas units. Induction models offer highest efficiency.",
      warning: "Electric→electric replacement not allowed",
      serviceLink: null
    },
    {
      icon: Home,
      title: "Insulation • Air Sealing • Ventilation",
      whatQualifies: "Insulation upgrades, air sealing work, and balanced ventilation systems",
      whatToKnow: "Requires blower door testing and CAZ safety testing. Works well with HER.",
      warning: "Ventilation must be paired with air/duct sealing or very low leakage",
      serviceLink: null
    },
    {
      icon: Plug,
      title: "Electric Panel • Electric Wiring",
      whatQualifies: "Panel upgrades and wiring to support other electric measures",
      whatToKnow: "Must be paired with another qualifying measure. Licensed electrician required.",
      warning: "Cannot be standalone—must pair with another measure",
      serviceLink: null
    }
  ];

  return (
    <section className="py-section bg-background">
      <div className="container max-w-content mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-section-title font-bold mb-4 text-foreground">
            Upgrades That Can Qualify
          </h2>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto">
            Georgia energy rebates cover these specific measures. Each has unique requirements and pairing rules.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {measures.map((measure, index) => {
            const IconComponent = measure.icon;
            
            return (
              <Card key={index} className="bg-white/60 backdrop-blur-sm border border-primary/20 hover:shadow-soft transition-shadow h-full">
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-3">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-base leading-tight">{measure.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-foreground mb-1">What qualifies:</p>
                    <p className="text-xs text-muted-foreground">{measure.whatQualifies}</p>
                  </div>
                  
                  <div>
                    <p className="text-xs font-semibold text-foreground mb-1">What to know:</p>
                    <p className="text-xs text-muted-foreground">{measure.whatToKnow}</p>
                  </div>

                  {measure.warning && (
                    <div className="flex items-start gap-2 p-2 bg-yellow-50 border border-yellow-200 rounded-md">
                      <AlertTriangle className="w-4 h-4 text-yellow-600 flex-shrink-0 mt-0.5" />
                      <p className="text-xs text-yellow-800">{measure.warning}</p>
                    </div>
                  )}

                  {measure.serviceLink && (
                    <div className="pt-2">
                      <a 
                        href={measure.serviceLink}
                        className="text-xs text-primary hover:text-primary-light flex items-center gap-1"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Learn more about our services <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-6">
              <h3 className="font-semibold text-primary mb-3">Combination Rules</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>You can combine HER and HEAR, but no double-funding of the same measure</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>HER projects must achieve at least 20% energy savings</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Panel/wiring must be paired with another qualifying measure</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-anderson-purple/5 border-anderson-purple/20">
            <CardContent className="p-6">
              <h3 className="font-semibold text-anderson-purple mb-3">Important Notes</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-anderson-purple rounded-full mt-2 flex-shrink-0"></div>
                  <span>All equipment must be ENERGY STAR certified where applicable</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-anderson-purple rounded-full mt-2 flex-shrink-0"></div>
                  <span>Installation must be by licensed contractors (except limited DIY)</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-anderson-purple rounded-full mt-2 flex-shrink-0"></div>
                  <span>Pre-approval required before installation begins</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Footer note */}
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            <strong>Final eligibility and rebate amounts are determined by GEFA.</strong> Some measures have pairing rules or model requirements. We'll confirm everything for you.
          </p>
        </div>
      </div>
    </section>
  );
};