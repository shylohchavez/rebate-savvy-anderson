import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const ProgramsSection = () => {
  return (
    <section className="py-section">
      <div className="container max-w-content mx-auto px-4">
        <h2 className="text-h2 font-bold text-center mb-8 text-primary">What Are HER & HEAR?</h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <Card className="shadow-soft border-l-4 border-l-secondary-foreground bg-white">
            <CardHeader>
              <CardTitle className="text-h3 text-primary">HER = Home Efficiency Rebates</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Whole‑home projects that make your house use less energy. The more energy you save, the bigger the rebate. 
                <strong className="text-foreground"> All incomes can apply.</strong>
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-soft border-l-4 border-l-primary bg-white">
            <CardHeader>
              <CardTitle className="text-h3 text-primary">HEAR = Home Electrification & Appliance Rebates</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Helps pay for certain electric upgrades, like <strong className="text-secondary-foreground">heat pumps</strong>, 
                <strong className="text-secondary-foreground"> heat pump water heaters</strong>, and 
                <strong className="text-secondary-foreground"> heat pump dryers</strong>. Income rules apply:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Household income ≤ <strong className="text-primary">150% AMI</strong> may qualify</li>
                <li>Income ≤ <strong className="text-primary">80% AMI</strong> (or categorical eligibility) may get higher rebates</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="bg-accent/50 border-l-4 border-l-secondary-foreground rounded-lg p-6">
          <h3 className="text-h3 font-semibold mb-4 text-primary">Key facts</h3>
          <ul className="list-disc pl-6 space-y-2 text-foreground">
            <li>HER is open to all incomes; rebates are based on measured whole‑home savings.</li>
            <li>HEAR covers specific electric upgrades and has income rules.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};