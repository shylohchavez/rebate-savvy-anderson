import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Badge } from "@/components/ui/badge";
import { 
  Download, 
  ChevronDown, 
  ChevronUp, 
  Camera, 
  FileText, 
  Zap,
  Droplets,
  Shirt,
  ChefHat,
  Home,
  Plug
} from "lucide-react";

interface DocChecklistProps {
  onLetUsHandle: () => void;
  ctaText: string;
}

export const DocChecklist = ({ onLetUsHandle, ctaText }: DocChecklistProps) => {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleExpanded = (itemId: string) => {
    setExpandedItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const docItems = [
    {
      id: "heat-pump-hvac",
      icon: Zap,
      title: "Heat Pump HVAC",
      requirements: [
        "New equipment + nameplate label photos (with geotagging)",
        "Manual J load calculation report",
        "AHRI certificate showing exact model match",
        "ENERGY STAR certificate",
        "Detailed invoice with line items and labor"
      ]
    },
    {
      id: "hp-water-heater",
      icon: Droplets,
      title: "HP Water Heater", 
      requirements: [
        "New equipment + nameplate label photos (with geotagging)",
        "ENERGY STAR certificate",
        "Detailed invoice with equipment and installation costs",
        "Old equipment removal documentation (if applicable)"
      ]
    },
    {
      id: "electric-appliances",
      icon: ChefHat,
      title: "Electric Stove/Cooktop/Range or HP Dryer",
      requirements: [
        "Equipment photo + nameplate label (with geotagging)",
        "ENERGY STAR certificate for qualifying models",
        "Detailed invoice showing equipment cost and installation",
        "Proof of old equipment removal/disposal"
      ]
    },
    {
      id: "insulation-air-sealing",
      icon: Home,
      title: "Insulation/Air Sealing/Ventilation",
      requirements: [
        "Pre-work and post-work photos (with geotagging)",
        "Blower door test results (before and after CFM50)",
        "CAZ (Combustion Appliance Zone) safety test results",
        "Detailed invoice with square footage and R-values",
        "Material specifications and certificates"
      ]
    },
    {
      id: "panel-wiring",
      icon: Plug,
      title: "Electric Panel/Wiring",
      requirements: [
        "Before and after photos of electrical work (with geotagging)",
        "Permit documentation (if required by local jurisdiction)",
        "Detailed invoice showing panel size, wiring specifications",
        "Must be paired with another qualifying HEAR measure",
        "Licensed electrician certification"
      ]
    }
  ];

  return (
    <section className="py-section bg-accent/30">
      <div className="container max-w-content mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-section-title font-bold mb-4 text-foreground">
            What You'll Need (We'll Handle It)
          </h2>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto">
            Every application must include the right photos, certificates, and reports. We'll collect, label, and submit it all for you—including geotagged photos.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Quick Download */}
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 text-center mb-8">
            <h3 className="font-semibold text-primary mb-4">Quick Download: Documentation Checklist</h3>
            <Button variant="outline" className="mb-4">
              <Download className="w-4 h-4 mr-2" />
              Download PDF Checklist
            </Button>
            <p className="text-sm text-muted-foreground">
              Comprehensive checklist for all rebate-eligible measures and required documentation.
            </p>
          </div>

          {/* Expandable Checklists */}
          <div className="space-y-4 mb-8">
            {docItems.map((item) => {
              const IconComponent = item.icon;
              const isExpanded = expandedItems.includes(item.id);
              
              return (
                <Card key={item.id} className="bg-white/80 backdrop-blur-sm border border-primary/20">
                  <Collapsible open={isExpanded} onOpenChange={() => toggleExpanded(item.id)}>
                    <CollapsibleTrigger asChild>
                      <CardHeader className="cursor-pointer hover:bg-accent/20 transition-colors">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="inline-flex items-center justify-center w-10 h-10 bg-primary/10 rounded-full">
                              <IconComponent className="w-5 h-5 text-primary" />
                            </div>
                            <CardTitle className="text-lg">{item.title}</CardTitle>
                          </div>
                          {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                        </div>
                      </CardHeader>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <CardContent className="pt-0">
                        <ul className="space-y-2">
                          {item.requirements.map((requirement, index) => (
                            <li key={index} className="flex items-start gap-2 text-sm">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-muted-foreground">{requirement}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </CollapsibleContent>
                  </Collapsible>
                </Card>
              );
            })}
          </div>

          {/* Photo Tip */}
          <div className="bg-anderson-purple/5 border border-anderson-purple/20 rounded-lg p-6 mb-8">
            <div className="flex items-start gap-3">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-anderson-purple/10 rounded-full flex-shrink-0">
                <Camera className="w-6 h-6 text-anderson-purple" />
              </div>
              <div>
                <h3 className="font-semibold text-anderson-purple mb-2">Pro Tip: Geotagged Photos</h3>
                <p className="text-sm text-muted-foreground">
                  Turn on camera location (geotagging) before taking photos. This helps verify the work was done at your address and speeds up approval.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <div className="bg-white/80 backdrop-blur-sm border border-primary/20 rounded-lg p-8">
              <h3 className="font-bold text-lg mb-4 text-foreground">Too Much Paperwork?</h3>
              <p className="text-muted-foreground mb-6">
                Skip the hassle. We handle all documentation, testing, and submission requirements.
              </p>
              <Button 
                variant="anderson" 
                size="lg"
                onClick={onLetUsHandle}
                className="rounded-full"
              >
                <FileText className="w-5 h-5 mr-2" />
                {ctaText}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};