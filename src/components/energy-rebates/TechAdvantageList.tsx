import { Card, CardContent } from "@/components/ui/card";
import { 
  Calculator, 
  Wind, 
  Shield, 
  BarChart3, 
  DollarSign, 
  Award,
  Camera
} from "lucide-react";

export const TechAdvantageList = () => {
  const techItems = [
    {
      icon: Calculator,
      title: "Manual J Load Calculations",
      description: "Right‑sized equipment for comfort & efficiency."
    },
    {
      icon: Wind,
      title: "Blower Door Testing",
      description: "Verifies airtightness before/after work."
    },
    {
      icon: Shield,
      title: "CAZ Safety Testing",
      description: "Combustion safety where applicable."
    },
    {
      icon: BarChart3,
      title: "SnuggPro Modeling",
      description: "Required for HER projects."
    },
    {
      icon: DollarSign,
      title: "Fuel‑Switching Calculator",
      description: "Shows the economics of moving to a heat pump."
    },
    {
      icon: Award,
      title: "AHRI/ENERGY STAR Verification",
      description: "Exact model matches for compliance."
    }
  ];

  return (
    <section className="py-section bg-accent/30">
      <div className="container max-w-content mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-section-title font-bold mb-4 text-foreground">
            How We Get Your Rebate Approved
          </h2>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto">
            We handle the technical requirements that get applications approved the first time.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {techItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <Card key={index} className="bg-white/80 backdrop-blur-sm border border-primary/20 hover:shadow-soft transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2 text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
            <Camera className="w-6 h-6 text-primary" />
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Complete Documentation:</strong> We submit geotagged photos, certificates, detailed invoices, and all required reports so your application is complete the first time.
          </p>
        </div>
      </div>
    </section>
  );
};