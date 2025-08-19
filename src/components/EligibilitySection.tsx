import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle, AlertCircle } from "lucide-react";

export const EligibilitySection = () => {
  const [householdSize, setHouseholdSize] = useState<string>("");
  const [income, setIncome] = useState<string>("");
  const [result, setResult] = useState<string>("");

  // Gordon County AMI limits
  const AMI80 = [43750, 50000, 56250, 62450, 67450, 72450, 77450, 82450];
  const AMI150 = [104200, 104200, 105450, 117150, 126550, 135900, 145300, 154650];

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    const hh = parseInt(householdSize, 10);
    const inc = parseFloat(income);
    
    if (!hh || !inc) {
      setResult("");
      return;
    }

    let message = "";
    if (inc <= AMI80[hh - 1]) {
      message = "You may qualify for enhanced HEAR rebates (≤80% AMI).";
    } else if (inc <= AMI150[hh - 1]) {
      message = "You may qualify for HEAR (≤150% AMI).";
    } else {
      message = "You may still be eligible for HER (whole‑home savings).";
    }
    
    setResult(message + " Final eligibility is confirmed by the State.");
  };

  return (
    <section id="eligibility" className="py-section bg-gradient-trust">
      <div className="container max-w-content mx-auto px-4">
        <h2 className="text-h2 font-bold text-center mb-8">Who Can Qualify?</h2>
        
        <div className="max-w-3xl mx-auto mb-8">
          <ul className="grid md:grid-cols-3 gap-4 text-center">
            <li className="flex flex-col items-center p-4 bg-card rounded-lg shadow-soft">
              <CheckCircle className="w-8 h-8 text-primary mb-2" />
              <span>Live in a single‑family or multifamily home in Georgia</span>
            </li>
            <li className="flex flex-col items-center p-4 bg-card rounded-lg shadow-soft">
              <CheckCircle className="w-8 h-8 text-primary mb-2" />
              <span>Work with a participating contractor like Anderson</span>
            </li>
            <li className="flex flex-col items-center p-4 bg-card rounded-lg shadow-soft">
              <CheckCircle className="w-8 h-8 text-primary mb-2" />
              <span>You complete your application and income verification; the State reviews and approves</span>
            </li>
          </ul>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle className="text-h3">Gordon County Income Limits (Quick Reference)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-card rounded-lg overflow-hidden shadow-soft">
                  <thead>
                    <tr className="bg-accent text-primary">
                      <th className="p-3 text-left font-semibold">Household Size</th>
                      {[1, 2, 3, 4, 5, 6, 7, 8].map(size => (
                        <th key={size} className="p-3 text-center font-semibold">{size}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="p-3 font-semibold text-primary">Income 80%</td>
                      {AMI80.map((amount, index) => (
                        <td key={index} className="p-3 text-center">${amount.toLocaleString()}</td>
                      ))}
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-primary">Income 150%</td>
                      {AMI150.map((amount, index) => (
                        <td key={index} className="p-3 text-center">${amount.toLocaleString()}</td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Other counties differ. We'll check your county's HUD limits.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle className="text-h3">Quick Check: Do I Qualify?</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleCalculate} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="household-size">Household size</Label>
                  <Select value={householdSize} onValueChange={setHouseholdSize}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select..." />
                    </SelectTrigger>
                    <SelectContent>
                      {[1, 2, 3, 4, 5, 6, 7, 8].map(size => (
                        <SelectItem key={size} value={size.toString()}>{size}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="income">Total household income (yearly)</Label>
                  <Input
                    id="income"
                    type="number"
                    placeholder="e.g., 62500"
                    value={income}
                    onChange={(e) => setIncome(e.target.value)}
                  />
                </div>

                <Button type="submit" className="w-full">
                  Check
                </Button>

                {result && (
                  <div className="bg-primary-light/30 border border-primary/20 rounded-lg p-4 flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-foreground">{result}</p>
                  </div>
                )}

                <p className="text-sm text-muted-foreground">
                  This is an estimate for <strong>Gordon County</strong> only. The State confirms eligibility. 
                  You may still qualify for HER even if you're above HEAR limits.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};