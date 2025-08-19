import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Thermometer, 
  Droplets, 
  Shirt, 
  Home, 
  Wind, 
  Zap,
  AlertTriangle,
  CheckCircle2
} from "lucide-react";

const upgrades = [
  {
    icon: Thermometer,
    title: "Heat Pump HVAC",
    description: "One smart system for heating & cooling. Requires a Manual J sizing report.",
    color: "text-red-500"
  },
  {
    icon: Droplets,
    title: "Heat Pump Water Heater",
    description: "Hot water with less energy.",
    color: "text-blue-500"
  },
  {
    icon: Shirt,
    title: "Heat Pump Clothes Dryer",
    description: "Gentler on clothes and bills.",
    color: "text-purple-500"
  },
  {
    icon: Home,
    title: "Insulation & Air Sealing",
    description: "Keeps comfy air inside. Requires blower door & CAZ testing.",
    color: "text-orange-500"
  },
  {
    icon: Wind,
    title: "Ventilation",
    description: "Fresh air done right. Must pair with air/duct sealing or meet low‑leakage test.",
    color: "text-green-500"
  },
  {
    icon: Zap,
    title: "Electric Panel & Wiring",
    description: "Only when paired with another HEAR measure or a HER project.",
    color: "text-yellow-500"
  }
];

export const UpgradesSection = () => {
  return (
    <section className="py-section">
      <div className="container max-w-content mx-auto px-4">
        <h2 className="text-h2 font-bold text-center mb-8">What Upgrades Can Count?</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {upgrades.map((upgrade, index) => {
            const IconComponent = upgrade.icon;
            return (
              <Card key={index} className="shadow-soft hover:shadow-medium transition-all duration-300 border-primary/20">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3 mb-2">
                    <IconComponent className={`w-6 h-6 ${upgrade.color}`} />
                    <CardTitle className="text-lg">{upgrade.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{upgrade.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
          <div className="flex items-start gap-3 mb-4">
            <AlertTriangle className="w-6 h-6 text-amber-600 mt-0.5 flex-shrink-0" />
            <h3 className="text-h3 font-semibold text-amber-800">Important Rules</h3>
          </div>
          <ul className="space-y-3 text-amber-800">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
              <span>
                <strong>Pairing:</strong> Panels & wiring must be paired with another HEAR measure or a HER project.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
              <span>
                <strong>Replacement limits:</strong> No rebate for swapping an electric stove with another electric/induction stove by itself.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
              <span>
                <strong>Testing & docs:</strong> Manual J (heat pumps); blower door & CAZ (insulation, air sealing, ventilation).
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};