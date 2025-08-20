import { Shield, Award, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { COMPANY } from "@/lib/company";

export const TrustBar = () => {
  return (
    <section className="py-8 bg-accent/20 border-y border-primary/10">
      <div className="container max-w-content mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-section-title font-bold text-foreground mb-4">
            Your GEFA-Approved Expert in North Georgia
          </h2>
        </div>
        
        {/* Service Area Clarification */}
        <div className="mb-8 p-4 bg-orange-50 border border-orange-200 rounded-lg">
          <p className="text-sm text-foreground mb-2">
            <strong>Please note:</strong> Our GEFA rebate services are exclusively available to homeowners within the counties listed below. We do not service all GEFA-eligible counties in Georgia.
          </p>
          <p className="text-sm text-muted-foreground">
            Proudly serving homeowners in {COMPANY.service_counties_gefa.join(', ')} counties.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 items-center">
          {/* Credentials */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-soft border border-primary/10">
            <div className="text-center">
              <Shield className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-3">Licensed & Certified</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li><strong>State of GA License #:</strong> CNOO3636</li>
                <li><strong>Fully Licensed & Insured for Your Peace of Mind</strong></li>
                <li><strong>BPI Certified Professionals</strong></li>
              </ul>
            </div>
          </div>

          {/* Experience */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-soft border border-primary/10">
            <div className="text-center">
              <Award className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-3">45+ Years Experience</h3>
              <p className="text-sm text-muted-foreground">
                Whole-home comfort and energy efficiency experts serving North Georgia families
              </p>
            </div>
          </div>

          {/* Service Area */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-soft border border-primary/10">
            <div className="text-center">
              <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-3">Limited Service Area</h3>
              <p className="text-sm text-muted-foreground">
                Serving {COMPANY.service_counties_gefa.length} specific counties in North Georgia
              </p>
            </div>
          </div>
        </div>

        {/* Complete County List */}
        <div className="mt-8 p-6 bg-accent/30 rounded-xl border border-primary/10">
          <h4 className="font-semibold text-foreground mb-4 text-center">
            Counties We Serve:
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-2 text-sm">
            {COMPANY.service_counties_gefa.map((county, index) => (
              <div 
                key={index}
                className="bg-white/60 rounded-lg p-2 text-center border border-primary/10"
              >
                <span className="font-medium text-foreground text-xs">{county}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};