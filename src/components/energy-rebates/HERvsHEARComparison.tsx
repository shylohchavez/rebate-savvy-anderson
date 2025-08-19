import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Home, Zap, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

interface HERvsHEARComparisonProps {
  onLearnMore: () => void;
}

export const HERvsHEARComparison = ({ onLearnMore }: HERvsHEARComparisonProps) => {
  const [herExpanded, setHerExpanded] = useState(false);
  const [hearExpanded, setHearExpanded] = useState(false);

  return (
    <section className="py-section bg-background">
      <div className="container max-w-content mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-section-title font-bold mb-4 text-foreground">
            Simple HER vs. HEAR Comparison
          </h2>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto">
            Georgia offers two rebate programs. Here's how they work:
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* HER Card */}
          <Card className="border-primary/20 bg-accent/20">
            <CardHeader className="text-center pb-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 mx-auto">
                <Home className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-xl font-bold text-primary">
                HER = Whole‑Home Projects
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>No income limit.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Requires energy‑savings modeling (target ≥20%).</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Great for bundles (insulation + air sealing + HVAC).</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>We manage testing and documentation.</span>
                </li>
              </ul>

              <Collapsible open={herExpanded} onOpenChange={setHerExpanded}>
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" className="w-full mt-4 text-primary hover:text-primary/80">
                    Learn more {herExpanded ? <ChevronUp className="w-4 h-4 ml-2" /> : <ChevronDown className="w-4 h-4 ml-2" />}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-4 pt-4 border-t border-primary/10">
                  <div className="text-sm text-muted-foreground space-y-2">
                    <p><strong>Best for:</strong> Comprehensive home upgrades that improve overall efficiency.</p>
                    <p><strong>Rebate amounts:</strong> Up to $4,000 (up to $8,000 for low-to-moderate income).</p>
                    <p><strong>Requirements:</strong> Must achieve at least 20% whole-home energy savings through modeling.</p>
                    <p><strong>Caution:</strong> Requires professional energy modeling and testing—we handle this for you.</p>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </CardContent>
          </Card>

          {/* HEAR Card */}
          <Card className="border-anderson-purple/20 bg-anderson-purple/5">
            <CardHeader className="text-center pb-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-anderson-purple/10 rounded-full mb-4 mx-auto">
                <Zap className="w-8 h-8 text-anderson-purple" />
              </div>
              <CardTitle className="text-xl font-bold text-anderson-purple">
                HEAR = Specific Upgrades
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-anderson-purple rounded-full mt-2 flex-shrink-0"></div>
                  <span>Income‑based (generally ≤150% AMI).</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-anderson-purple rounded-full mt-2 flex-shrink-0"></div>
                  <span>Eligible: heat pump HVAC, HP water heater, HP dryer, electric stove/cooktop/range, insulation/air sealing/ventilation, panel/wiring.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-anderson-purple rounded-full mt-2 flex-shrink-0"></div>
                  <span>Some replacements restricted (electric→electric generally not allowed except HP dryer/HPWH).</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-anderson-purple rounded-full mt-2 flex-shrink-0"></div>
                  <span>We verify eligibility and required documentation.</span>
                </li>
              </ul>

              <Collapsible open={hearExpanded} onOpenChange={setHearExpanded}>
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" className="w-full mt-4 text-anderson-purple hover:text-anderson-purple/80">
                    Learn more {hearExpanded ? <ChevronUp className="w-4 h-4 ml-2" /> : <ChevronDown className="w-4 h-4 ml-2" />}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-4 pt-4 border-t border-anderson-purple/10">
                  <div className="text-sm text-muted-foreground space-y-2">
                    <p><strong>Best for:</strong> Targeted electric upgrades with bigger rebates for qualifying households.</p>
                    <p><strong>Rebate amounts:</strong> Up to $8,000 for heat pumps, $1,750 for HP water heaters, up to $4,000 for electrical panels ($14,000 total cap).</p>
                    <p><strong>Enhanced rebates:</strong> Higher amounts for households with qualifying benefits or below 80% AMI.</p>
                    <p><strong>Caution:</strong> Income verification required. Some fuel-switching restrictions apply.</p>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button 
            variant="anderson" 
            size="lg"
            onClick={onLearnMore}
            className="rounded-full"
          >
            Not sure which is right? Take the Rebate Finder
          </Button>
        </div>
      </div>
    </section>
  );
};