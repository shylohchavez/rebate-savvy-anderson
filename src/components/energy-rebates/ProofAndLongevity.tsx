import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Shield, Home, Award } from "lucide-react";

export const ProofAndLongevity = () => {
  const trustSignals = [
    {
      icon: Calendar,
      text: "Serving Georgia since 1978"
    },
    {
      icon: Award,
      text: "45+ Years—Locally Trusted"
    },
    {
      icon: Home,
      text: "Whole-home comfort + IAQ focus"
    },
    {
      icon: Shield,
      text: "Licensed • Insured • Trained on GEFA requirements"
    }
  ];

  const testimonials = [
    {
      text: "Anderson handled everything from start to finish. Got our heat pump rebate without any hassles.",
      author: "Sarah M., Gordon County"
    },
    {
      text: "The team knew exactly what paperwork was needed. Made the whole process easy.",
      author: "Mike R., Floyd County"
    },
    {
      text: "Professional work and they took care of all the rebate documentation. Highly recommend.",
      author: "Jennifer L., Bartow County"
    }
  ];

  return (
    <section className="py-section bg-background">
      <div className="container max-w-content mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-section-title font-bold mb-4 text-foreground">
            Proof & Longevity
          </h2>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto">
            Four decades of service with the expertise Georgia homeowners trust.
          </p>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {trustSignals.map((signal, index) => {
            const IconComponent = signal.icon;
            return (
              <Badge 
                key={index}
                variant="secondary" 
                className="bg-accent text-accent-foreground border border-primary/20 px-4 py-2 text-sm"
              >
                <IconComponent className="w-4 h-4 mr-2" />
                {signal.text}
              </Badge>
            );
          })}
        </div>

        {/* Quality Statement */}
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 text-center mb-12">
          <h3 className="font-semibold text-primary mb-2">Quality Vetted Against State Standards</h3>
          <p className="text-sm text-muted-foreground">
            We follow GEFA requirements and industry best practices to ensure your project meets all program standards.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white/60 backdrop-blur-sm border border-primary/10">
              <CardContent className="p-6">
                <p className="text-sm text-muted-foreground mb-4 italic">
                  "{testimonial.text}"
                </p>
                <p className="text-xs font-medium text-foreground">
                  — {testimonial.author}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};