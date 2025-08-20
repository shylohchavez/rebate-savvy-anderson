import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { CheckCircle } from "lucide-react";

export const EligibilitySection = () => {
  const [selectedCounty, setSelectedCounty] = useState<string>("gordon");

  // County income data for all 47 counties
  const countyIncomeData: Record<string, { name: string; ami80: number[]; ami150: number[] }> = {
    banks: {
      name: "Banks County",
      ami80: [45050, 51500, 57950, 64350, 69500, 74650, 79800, 84950],
      ami150: [104200, 104200, 108700, 120750, 130450, 140100, 149750, 159400]
    },
    barrow: {
      name: "Barrow County", 
      ami80: [63950, 73100, 82250, 91350, 98700, 106000, 113300, 120600],
      ami150: [119950, 137050, 154200, 171300, 185050, 198750, 212450, 226150]
    },
    bartow: {
      name: "Bartow County",
      ami80: [63950, 73100, 82250, 91350, 98700, 106000, 113300, 120600],
      ami150: [119950, 137050, 154200, 171300, 185050, 198750, 212450, 226150]
    },
    carroll: {
      name: "Carroll County",
      ami80: [63950, 73100, 82250, 91350, 98700, 106000, 113300, 120600],
      ami150: [119950, 137050, 154200, 171300, 185050, 198750, 212450, 226150]
    },
    catoosa: {
      name: "Catoosa County",
      ami80: [53500, 61150, 68800, 76400, 82550, 88650, 94750, 100850],
      ami150: [104200, 114600, 128950, 143250, 154750, 166200, 177650, 189100]
    },
    chattooga: {
      name: "Chattooga County",
      ami80: [42700, 48800, 54900, 60950, 65850, 70750, 75600, 80500],
      ami150: [104200, 104200, 104200, 114300, 123450, 132600, 141750, 150900]
    },
    cherokee: {
      name: "Cherokee County",
      ami80: [63950, 73100, 82250, 91350, 98700, 106000, 113300, 120600],
      ami150: [119950, 137050, 154200, 171300, 185050, 198750, 212450, 226150]
    },
    clarke: {
      name: "Clarke County",
      ami80: [52850, 60400, 67950, 75450, 81500, 87550, 93600, 99600],
      ami150: [104200, 113200, 127350, 141450, 152800, 164100, 175400, 186750]
    },
    clayton: {
      name: "Clayton County",
      ami80: [63950, 73100, 82250, 91350, 98700, 106000, 113300, 120600],
      ami150: [119950, 137050, 154200, 171300, 185050, 198750, 212450, 226150]
    },
    cobb: {
      name: "Cobb County",
      ami80: [63950, 73100, 82250, 91350, 98700, 106000, 113300, 120600],
      ami150: [119950, 137050, 154200, 171300, 185050, 198750, 212450, 226150]
    },
    coweta: {
      name: "Coweta County",
      ami80: [63950, 73100, 82250, 91350, 98700, 106000, 113300, 120600],
      ami150: [119950, 137050, 154200, 171300, 185050, 198750, 212450, 226150]
    },
    dade: {
      name: "Dade County",
      ami80: [53500, 61150, 68800, 76400, 82550, 88650, 94750, 100850],
      ami150: [104200, 114600, 128950, 143250, 154750, 166200, 177650, 189100]
    },
    dawson: {
      name: "Dawson County",
      ami80: [63950, 73100, 82250, 91350, 98700, 106000, 113300, 120600],
      ami150: [119950, 137050, 154200, 171300, 185050, 198750, 212450, 226150]
    },
    dekalb: {
      name: "DeKalb County",
      ami80: [63950, 73100, 82250, 91350, 98700, 106000, 113300, 120600],
      ami150: [119950, 137050, 154200, 171300, 185050, 198750, 212450, 226150]
    },
    douglas: {
      name: "Douglas County",
      ami80: [63950, 73100, 82250, 91350, 98700, 106000, 113300, 120600],
      ami150: [119950, 137050, 154200, 171300, 185050, 198750, 212450, 226150]
    },
    elbert: {
      name: "Elbert County",
      ami80: [42700, 48800, 54900, 60950, 65850, 70750, 75600, 80500],
      ami150: [104200, 104200, 104200, 114300, 123450, 132600, 141750, 150900]
    },
    fannin: {
      name: "Fannin County",
      ami80: [42700, 48800, 54900, 60950, 65850, 70750, 75600, 80500],
      ami150: [104200, 104200, 104200, 114300, 123450, 132600, 141750, 150900]
    },
    fayette: {
      name: "Fayette County",
      ami80: [63950, 73100, 82250, 91350, 98700, 106000, 113300, 120600],
      ami150: [119950, 137050, 154200, 171300, 185050, 198750, 212450, 226150]
    },
    floyd: {
      name: "Floyd County",
      ami80: [44400, 50750, 57100, 63400, 68500, 73550, 78650, 83700],
      ami150: [104200, 104200, 107100, 118950, 128500, 138000, 147500, 157050]
    },
    forsyth: {
      name: "Forsyth County",
      ami80: [63950, 73100, 82250, 91350, 98700, 106000, 113300, 120600],
      ami150: [119950, 137050, 154200, 171300, 185050, 198750, 212450, 226150]
    },
    franklin: {
      name: "Franklin County",
      ami80: [42700, 48800, 54900, 60950, 65850, 70750, 75600, 80500],
      ami150: [104200, 104200, 104200, 114300, 123450, 132600, 141750, 150900]
    },
    fulton: {
      name: "Fulton County",
      ami80: [63950, 73100, 82250, 91350, 98700, 106000, 113300, 120600],
      ami150: [119950, 137050, 154200, 171300, 185050, 198750, 212450, 226150]
    },
    gilmer: {
      name: "Gilmer County",
      ami80: [48500, 55400, 62350, 69250, 74800, 80350, 85900, 91450],
      ami150: [104200, 104200, 116950, 129900, 140300, 150700, 161100, 171500]
    },
    gordon: {
      name: "Gordon County",
      ami80: [43750, 50000, 56250, 62450, 67450, 72450, 77450, 82450],
      ami150: [104200, 104200, 105450, 117150, 126550, 135900, 145300, 154650]
    },
    gwinnett: {
      name: "Gwinnett County",
      ami80: [63950, 73100, 82250, 91350, 98700, 106000, 113300, 120600],
      ami150: [119950, 137050, 154200, 171300, 185050, 198750, 212450, 226150]
    },
    habersham: {
      name: "Habersham County",
      ami80: [47600, 54400, 61200, 68000, 73450, 78900, 84350, 89800],
      ami150: [104200, 104200, 114750, 127500, 137700, 147900, 158100, 168300]
    },
    hall: {
      name: "Hall County",
      ami80: [56700, 64800, 72900, 80950, 87450, 93950, 100400, 106900],
      ami150: [106300, 121450, 136650, 151800, 163950, 176100, 188250, 200400]
    },
    haralson: {
      name: "Haralson County",
      ami80: [46450, 53050, 59700, 66300, 71650, 76950, 82250, 87550],
      ami150: [104200, 104200, 111950, 124350, 134300, 144250, 154200, 164150]
    },
    hart: {
      name: "Hart County",
      ami80: [45050, 51450, 57900, 64300, 69450, 74600, 79750, 84900],
      ami150: [104200, 104200, 108550, 120600, 130250, 139900, 149550, 159200]
    },
    heard: {
      name: "Heard County",
      ami80: [63950, 73100, 82250, 91350, 98700, 106000, 113300, 120600],
      ami150: [119950, 137050, 154200, 171300, 185050, 198750, 212450, 226150]
    },
    henry: {
      name: "Henry County",
      ami80: [63950, 73100, 82250, 91350, 98700, 106000, 113300, 120600],
      ami150: [119950, 137050, 154200, 171300, 185050, 198750, 212450, 226150]
    },
    jackson: {
      name: "Jackson County",
      ami80: [58100, 66400, 74700, 82950, 89600, 96250, 102900, 109500],
      ami150: [108900, 124450, 140000, 155550, 168000, 180450, 192900, 205350]
    },
    lumpkin: {
      name: "Lumpkin County",
      ami80: [49900, 57000, 64150, 71250, 76950, 82650, 88350, 94050],
      ami150: [104200, 106950, 120300, 133650, 144350, 155050, 165750, 176450]
    },
    madison: {
      name: "Madison County",
      ami80: [52850, 60400, 67950, 75450, 81500, 87550, 93600, 99600],
      ami150: [104200, 113200, 127350, 141450, 152800, 164100, 175400, 186750]
    },
    murray: {
      name: "Murray County",
      ami80: [43750, 50000, 56250, 62450, 67450, 72450, 77450, 82450],
      ami150: [104200, 104200, 105450, 117150, 126550, 135900, 145300, 154650]
    },
    newton: {
      name: "Newton County",
      ami80: [63950, 73100, 82250, 91350, 98700, 106000, 113300, 120600],
      ami150: [119950, 137050, 154200, 171300, 185050, 198750, 212450, 226150]
    },
    oconee: {
      name: "Oconee County",
      ami80: [52850, 60400, 67950, 75450, 81500, 87550, 93600, 99600],
      ami150: [104200, 113200, 127350, 141450, 152800, 164100, 175400, 186750]
    },
    paulding: {
      name: "Paulding County",
      ami80: [63950, 73100, 82250, 91350, 98700, 106000, 113300, 120600],
      ami150: [119950, 137050, 154200, 171300, 185050, 198750, 212450, 226150]
    },
    pickens: {
      name: "Pickens County",
      ami80: [63950, 73100, 82250, 91350, 98700, 106000, 113300, 120600],
      ami150: [119950, 137050, 154200, 171300, 185050, 198750, 212450, 226150]
    },
    rockdale: {
      name: "Rockdale County",
      ami80: [63950, 73100, 82250, 91350, 98700, 106000, 113300, 120600],
      ami150: [119950, 137050, 154200, 171300, 185050, 198750, 212450, 226150]
    },
    stephens: {
      name: "Stephens County",
      ami80: [43150, 49300, 55450, 61600, 66550, 71500, 76400, 81350],
      ami150: [104200, 104200, 104200, 115500, 124750, 134000, 143250, 152500]
    },
    towns: {
      name: "Towns County",
      ami80: [43750, 50000, 56250, 62450, 67450, 72450, 77450, 82450],
      ami150: [104200, 104200, 105450, 117150, 126550, 135900, 145300, 154650]
    },
    troup: {
      name: "Troup County",
      ami80: [46900, 53600, 60300, 66950, 72350, 77700, 83050, 88400],
      ami150: [104200, 104200, 113000, 125550, 135600, 145650, 155700, 165750]
    },
    walker: {
      name: "Walker County",
      ami80: [53500, 61150, 68800, 76400, 82550, 88650, 94750, 100850],
      ami150: [104200, 114600, 128950, 143250, 154750, 166200, 177650, 189100]
    },
    walton: {
      name: "Walton County",
      ami80: [63950, 73100, 82250, 91350, 98700, 106000, 113300, 120600],
      ami150: [119950, 137050, 154200, 171300, 185050, 198750, 212450, 226150]
    },
    white: {
      name: "White County",
      ami80: [46100, 52700, 59300, 65850, 71150, 76400, 81700, 86950],
      ami150: [104200, 104200, 111150, 123450, 133350, 143250, 153100, 163000]
    },
    whitfield: {
      name: "Whitfield County",
      ami80: [44750, 51150, 57550, 63900, 69050, 74150, 79250, 84350],
      ami150: [104200, 104200, 107900, 119850, 129450, 139050, 148650, 158250]
    }
  };

  const currentCountyData = countyIncomeData[selectedCounty];

  return (
    <section id="eligibility" className="py-section bg-gradient-trust">
      <div className="container max-w-content mx-auto px-4">
        <h2 className="text-h2 font-bold text-center mb-8">Check Your HEAR Program Eligibility</h2>
        
        <div className="max-w-3xl mx-auto mb-8">
          <p className="text-center text-lg mb-6">
            The Home Electrification and Appliance Rebates (HEAR) program is income-based. Select your county below to see the maximum annual household income limits to qualify.
          </p>
          
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
              <span>Complete your application and income verification for State approval</span>
            </li>
          </ul>
        </div>

        <Card className="shadow-medium max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-h3 text-center">County Income Eligibility Limits</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="county-select" className="text-base font-semibold">Select Your County:</Label>
              <Select value={selectedCounty} onValueChange={setSelectedCounty}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose your county..." />
                </SelectTrigger>
                <SelectContent className="max-h-60">
                  {Object.entries(countyIncomeData).map(([key, data]) => (
                    <SelectItem key={key} value={key}>{data.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {currentCountyData && (
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-card rounded-lg overflow-hidden shadow-soft">
                  <thead>
                    <tr className="bg-accent text-primary">
                      <th className="p-3 text-left font-semibold">Household Size</th>
                      <th className="p-3 text-center font-semibold">Max Income for 100% Rebate<br/>(&lt;80% AMI)</th>
                      <th className="p-3 text-center font-semibold">Max Income for 50% Rebate<br/>(&lt;150% AMI)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((size, index) => (
                      <tr key={size} className={index < 7 ? "border-b border-border" : ""}>
                        <td className="p-3 font-semibold text-primary">{size}</td>
                        <td className="p-3 text-center">${currentCountyData.ami80[index]?.toLocaleString()}</td>
                        <td className="p-3 text-center">${currentCountyData.ami150[index]?.toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            <div className="bg-muted/50 rounded-lg p-4">
              <p className="text-sm text-muted-foreground">
                <strong>Important:</strong> Income limits are based on Area Median Income (AMI) as defined for the program and are subject to change. This chart is for informational purposes only. Final eligibility is determined by the State of Georgia.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};