import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Zap, Home, TrendingUp } from "lucide-react";

interface BundledSavingsGraphicProps {
  onMaximizeRebate: () => void;
}

export const BundledSavingsGraphic = ({ onMaximizeRebate }: BundledSavingsGraphicProps) => {
  return (
    <section className="py-section bg-background">
      <div className="container max-w-content mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-section-title font-bold mb-4 text-foreground">
            Bigger Savings When You Bundle
          </h2>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto">
            Start with a high‑efficiency heat pump, then add insulation and air sealing for maximum comfort and rebate value. We'll design the right mix so no measure is double‑counted across programs.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Desktop 3-step flow */}
          <div className="hidden md:flex items-center justify-between mb-8">
            <Card className="flex-1 max-w-xs bg-anderson-purple/5 border-anderson-purple/20">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-anderson-purple/10 rounded-full mb-4">
                  <Zap className="w-8 h-8 text-anderson-purple" />
                </div>
                <h3 className="font-bold mb-2 text-anderson-purple">Start</h3>
                <p className="text-sm text-muted-foreground">High-efficiency Heat Pump</p>
                <p className="text-xs text-anderson-purple font-medium mt-2">(HEAR)</p>
              </CardContent>
            </Card>

            <div className="px-4">
              <ArrowRight className="w-8 h-8 text-primary" />
            </div>

            <Card className="flex-1 max-w-xs bg-primary/5 border-primary/20">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <Home className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold mb-2 text-primary">Add</h3>
                <p className="text-sm text-muted-foreground">Insulation + Air Sealing</p>
                <p className="text-xs text-primary font-medium mt-2">(HER)</p>
              </CardContent>
            </Card>

            <div className="px-4">
              <ArrowRight className="w-8 h-8 text-primary" />
            </div>

            <Card className="flex-1 max-w-xs bg-gradient-to-br from-primary/5 to-anderson-purple/5 border-primary/20">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary/10 to-anderson-purple/10 rounded-full mb-4">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold mb-2 text-foreground">Outcome</h3>
                <p className="text-sm text-muted-foreground">Bigger rebates + lower bills + year‑round comfort</p>
              </CardContent>
            </Card>
          </div>

          {/* Mobile stacked version */}
          <div className="md:hidden space-y-4 mb-8">
            <Card className="bg-anderson-purple/5 border-anderson-purple/20">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-anderson-purple/10 rounded-full mb-4">
                  <Zap className="w-8 h-8 text-anderson-purple" />
                </div>
                <h3 className="font-bold mb-2 text-anderson-purple">1. Start</h3>
                <p className="text-sm text-muted-foreground">High-efficiency Heat Pump (HEAR)</p>
              </CardContent>
            </Card>

            <div className="flex justify-center">
              <ArrowRight className="w-8 h-8 text-primary rotate-90" />
            </div>

            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <Home className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold mb-2 text-primary">2. Add</h3>
                <p className="text-sm text-muted-foreground">Insulation + Air Sealing (HER)</p>
              </CardContent>
            </Card>

            <div className="flex justify-center">
              <ArrowRight className="w-8 h-8 text-primary rotate-90" />
            </div>

            <Card className="bg-gradient-to-br from-primary/5 to-anderson-purple/5 border-primary/20">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary/10 to-anderson-purple/10 rounded-full mb-4">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold mb-2 text-foreground">3. Outcome</h3>
                <p className="text-sm text-muted-foreground">Bigger rebates + lower bills + year‑round comfort</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button 
              variant="anderson" 
              size="lg"
              onClick={onMaximizeRebate}
              className="rounded-full"
            >
              See how to maximize your rebate
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};