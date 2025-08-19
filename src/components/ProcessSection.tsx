import { Card, CardContent } from "@/components/ui/card";
import { 
  Phone, 
  FileCheck, 
  Wrench, 
  Shield, 
  CreditCard 
} from "lucide-react";

const steps = [
  {
    icon: Phone,
    title: "Quick Call & Plan",
    description: "We listen and build your plan. If an in‑home assessment is needed, we tell you the cost up front and deliver your report within 48 hours.",
    color: "text-blue-500"
  },
  {
    icon: FileCheck,
    title: "Reserve Your Rebate",
    description: "We submit project details; you complete your profile and income step in the Neighborly portal.",
    color: "text-green-500"
  },
  {
    icon: Wrench,
    title: "Professional Install",
    description: "We install to high standards. Heat pumps include Manual J; envelope work includes blower door & CAZ tests.",
    color: "text-orange-500"
  },
  {
    icon: Shield,
    title: "Quality Check",
    description: "Georgia inspects projects. First 5 jobs for a new contractor are inspected; after that, at least 5% in person and 20% total.",
    color: "text-purple-500"
  },
  {
    icon: CreditCard,
    title: "Rebate Processed",
    description: "Typical review in 3–5 business days; payments usually 10–14 days after QA/QC.",
    color: "text-emerald-500"
  }
];

export const ProcessSection = () => {
  return (
    <section className="py-section bg-gradient-trust">
      <div className="container max-w-content mx-auto px-4">
        <h2 className="text-h2 font-bold text-center mb-12">How It Works (5 Simple Steps)</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <Card key={index} className="shadow-soft border-primary/20 hover:shadow-medium transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center">
                          <span className="text-lg font-bold text-primary">{index + 1}</span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <IconComponent className={`w-6 h-6 ${step.color}`} />
                          <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};