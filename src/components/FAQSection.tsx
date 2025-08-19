export const FAQSection = () => {
  return (
    <section id="faq" aria-labelledby="faq-heading" className="py-section">
      <div className="container max-w-content mx-auto px-4">
        <h2 id="faq-heading" className="text-h2 font-bold text-center mb-8">Frequently Asked Questions</h2>
        
        <div className="max-w-4xl mx-auto">
          <p className="text-center mb-12 text-lg">
            <strong>Questions?</strong> Call{" "}
            <a href="tel:+17066290749" className="text-primary hover:underline">
              (706) 629‑0749
            </a>{" "}
            or email{" "}
            <a href="mailto:workorders@johnandersonservice.com" className="text-primary hover:underline">
              workorders@johnandersonservice.com
            </a>
            . We serve Gordon, Bartow, Floyd, Murray, Whitfield, Chattooga, Pickens, Cherokee, and Walker counties in North Georgia.
          </p>

          {/* ELIGIBILITY & INCOME */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-anderson-purple">Eligibility & Income</h3>
            
            <div className="space-y-4">
              <details className="bg-card shadow-soft rounded-lg border border-primary/20 p-6">
                <summary className="text-lg font-semibold cursor-pointer hover:text-primary transition-colors">
                  Who can apply?
                </summary>
                <div className="mt-4 text-muted-foreground leading-relaxed">
                  Any Georgia resident who lives in a single‑family or multifamily home that is their primary address can apply. Manufactured homes and condos also qualify. <em>(Source: GEFA Contractor Handbook §2.1)</em>
                </div>
              </details>

              <details className="bg-card shadow-soft rounded-lg border border-primary/20 p-6">
                <summary className="text-lg font-semibold cursor-pointer hover:text-primary transition-colors">
                  What's the difference between HER and HEAR?
                </summary>
                <div className="mt-4 text-muted-foreground leading-relaxed">
                  HER = whole‑home energy savings. Open to all incomes. HEAR = specific electric upgrades (like a heat pump). For households at or below 150% of Area Median Income (AMI); bigger help if at or below 80% AMI. <em>(§2.2, §2.5.2)</em>
                </div>
              </details>

              <details className="bg-card shadow-soft rounded-lg border border-primary/20 p-6">
                <summary className="text-lg font-semibold cursor-pointer hover:text-primary transition-colors">
                  How is income checked?
                </summary>
                <div className="mt-4 text-muted-foreground leading-relaxed">
                  Two ways: (1) <strong>Categorical eligibility</strong> (you show a benefits letter from a qualifying program), or (2) <strong>direct income verification</strong> (recent tax forms, pay stubs, or bank statements). Each adult (18+) must provide income info. <em>(§2.2)</em>
                </div>
              </details>

              <details className="bg-card shadow-soft rounded-lg border border-primary/20 p-6">
                <summary className="text-lg font-semibold cursor-pointer hover:text-primary transition-colors">
                  Do renters qualify?
                </summary>
                <div className="mt-4 text-muted-foreground leading-relaxed">
                  Yes. Renters can apply. For multifamily buildings, owners must meet extra rules (e.g., many units below 80% AMI). <em>(§2.1, §2.3)</em>
                </div>
              </details>

              <details className="bg-card shadow-soft rounded-lg border border-primary/20 p-6">
                <summary className="text-lg font-semibold cursor-pointer hover:text-primary transition-colors">
                  Is this program guaranteed?
                </summary>
                <div className="mt-4 text-muted-foreground leading-relaxed">
                  No. All rebates depend on eligibility, correct paperwork, and available funds. Georgia reviews and approves applications. <em>(§8.3.1)</em>
                </div>
              </details>
            </div>
          </div>

          {/* WHAT UPGRADES & AMOUNTS */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-anderson-purple">Eligible Upgrades & Rebate Amounts</h3>
            
            <div className="space-y-4">
              <details className="bg-card shadow-soft rounded-lg border border-primary/20 p-6">
                <summary className="text-lg font-semibold cursor-pointer hover:text-primary transition-colors">
                  What home improvements are covered?
                </summary>
                <div className="mt-4 text-muted-foreground leading-relaxed">
                  HEAR covers: ENERGY STAR® heat pumps (HVAC), heat pump water heaters, heat pump dryers, electric ranges/cooktops/ovens, insulation & air sealing & ventilation, electric panels, and wiring. <em>(§2.5.2)</em>
                </div>
              </details>

              <details className="bg-card shadow-soft rounded-lg border border-primary/20 p-6">
                <summary className="text-lg font-semibold cursor-pointer hover:text-primary transition-colors">
                  How much money can I get back?
                </summary>
                <div className="mt-4 text-muted-foreground leading-relaxed">
                  HEAR uses set caps (examples): up to $8,000 for a heat pump HVAC, $1,750 for a heat pump water heater, $4,000 for an electric panel, and a total HEAR cap of $14,000 per home. HER pays based on modeled energy savings (up to $4,000, or up to $8,000 for low‑to‑moderate income). <em>(§2.5.2, §2.5.6)</em>
                </div>
              </details>

              <details className="bg-card shadow-soft rounded-lg border border-primary/20 p-6">
                <summary className="text-lg font-semibold cursor-pointer hover:text-primary transition-colors">
                  Can I get a rebate for just an electrical panel or wiring?
                </summary>
                <div className="mt-4 text-muted-foreground leading-relaxed">
                  No. Panel and wiring upgrades must be paired with another HEAR measure or be part of a HER project. <em>(§2.5.3 table; Appendix 1)</em>
                </div>
              </details>

              <details className="bg-card shadow-soft rounded-lg border border-primary/20 p-6">
                <summary className="text-lg font-semibold cursor-pointer hover:text-primary transition-colors">
                  Can I replace my old electric stove with a new electric stove and get a rebate?
                </summary>
                <div className="mt-4 text-muted-foreground leading-relaxed">
                  Generally no. Replacing electric‑to‑electric cooking does not qualify. Exceptions include upgrading to a <strong>heat pump</strong> water heater or <strong>heat pump</strong> dryer from electric resistance units. <em>(§2.5.3 table; Appendix 1)</em>
                </div>
              </details>

              <details className="bg-card shadow-soft rounded-lg border border-primary/20 p-6">
                <summary className="text-lg font-semibold cursor-pointer hover:text-primary transition-colors">
                  Do ventilation upgrades qualify?
                </summary>
                <div className="mt-4 text-muted-foreground leading-relaxed">
                  Ventilation must be paired with air/duct sealing, or blower‑door modeling must show very low leakage. <em>(Appendix 1)</em>
                </div>
              </details>

              <details className="bg-card shadow-soft rounded-lg border border-primary/20 p-6">
                <summary className="text-lg font-semibold cursor-pointer hover:text-primary transition-colors">
                  Can I combine HER and HEAR?
                </summary>
                <div className="mt-4 text-muted-foreground leading-relaxed">
                  Yes, but one measure cannot be co‑funded by both. You can run separate projects (e.g., insulation under HER and a heat pump under HEAR). HER projects must reach at least 20% energy savings. <em>(§2.5.6)</em>
                </div>
              </details>

              <details className="bg-card shadow-soft rounded-lg border border-primary/20 p-6">
                <summary className="text-lg font-semibold cursor-pointer hover:text-primary transition-colors">
                  Can I stack these rebates with Georgia Power rebates or federal tax credits?
                </summary>
                <div className="mt-4 text-muted-foreground leading-relaxed">
                  Yes. List other incentives as separate line items on your invoice. <em>(§2.5.7)</em>
                </div>
              </details>
            </div>
          </div>

          {/* PROCESS & TIMING */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-anderson-purple">Process & Timing</h3>
            
            <div className="space-y-4">
              <details className="bg-card shadow-soft rounded-lg border border-primary/20 p-6">
                <summary className="text-lg font-semibold cursor-pointer hover:text-primary transition-colors">
                  How do I apply?
                </summary>
                <div className="mt-4 text-muted-foreground leading-relaxed">
                  Contact an approved contractor (like Anderson). We design your project and submit through the official Neighborly portal. You complete your profile and income step. <em>(§3.1)</em>
                </div>
              </details>

              <details className="bg-card shadow-soft rounded-lg border border-primary/20 p-6">
                <summary className="text-lg font-semibold cursor-pointer hover:text-primary transition-colors">
                  Is pre‑approval needed?
                </summary>
                <div className="mt-4 text-muted-foreground leading-relaxed">
                  Yes—your project is submitted for a rebate reservation and review before installation. <em>(§3.2 statuses like "Proposal Submitted" / "Rebate Request Under Review")</em>
                </div>
              </details>

              <details className="bg-card shadow-soft rounded-lg border border-primary/20 p-6">
                <summary className="text-lg font-semibold cursor-pointer hover:text-primary transition-colors">
                  What timelines should I know?
                </summary>
                <div className="mt-4 text-muted-foreground leading-relaxed">
                  HEAR applications must be submitted within <strong>90 days of the project invoice date</strong> (or coupon issuance for point‑of‑sale). <em>(§2.5.2)</em>
                </div>
              </details>

              <details className="bg-card shadow-soft rounded-lg border border-primary/20 p-6">
                <summary className="text-lg font-semibold cursor-pointer hover:text-primary transition-colors">
                  How long does review and payment take?
                </summary>
                <div className="mt-4 text-muted-foreground leading-relaxed">
                  Typical application review is 3–5 business days after we submit your proposal and your profile is complete. Payments are usually 10–14 days after installation and QA/QC are done. <em>(§3.1)</em>
                </div>
              </details>

              <details className="bg-card shadow-soft rounded-lg border border-primary/20 p-6">
                <summary className="text-lg font-semibold cursor-pointer hover:text-primary transition-colors">
                  Do you charge for assessments?
                </summary>
                <div className="mt-4 text-muted-foreground leading-relaxed">
                  Sometimes. If we charge, we tell you upfront and deliver your written report within 48 hours of finishing the assessment. <em>(§2.5.2 and §5.1 allow an assessment fee; report due within 48 hours)</em>
                </div>
              </details>
            </div>
          </div>

          {/* TESTING, STANDARDS & INSPECTIONS */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-anderson-purple">Testing, Standards & Inspections</h3>
            
            <div className="space-y-4">
              <details className="bg-card shadow-soft rounded-lg border border-primary/20 p-6">
                <summary className="text-lg font-semibold cursor-pointer hover:text-primary transition-colors">
                  What testing is required?
                </summary>
                <div className="mt-4 text-muted-foreground leading-relaxed">
                  Heat pumps require a Manual J load calculation. Insulation/air sealing/ventilation need blower‑door modeling and a CAZ (combustion safety) report when applicable. <em>(§2.5.3 tables; §6.2.3)</em>
                </div>
              </details>

              <details className="bg-card shadow-soft rounded-lg border border-primary/20 p-6">
                <summary className="text-lg font-semibold cursor-pointer hover:text-primary transition-colors">
                  Will my project be inspected?
                </summary>
                <div className="mt-4 text-muted-foreground leading-relaxed">
                  Yes. The first five jobs for a new contractor are always inspected. After that, at least 5% of projects get in‑person inspections and 20% total are inspected (mix of desktop and in‑person). <em>(§7.2)</em>
                </div>
              </details>

              <details className="bg-card shadow-soft rounded-lg border border-primary/20 p-6">
                <summary className="text-lg font-semibold cursor-pointer hover:text-primary transition-colors">
                  Who checks for program compliance?
                </summary>
                <div className="mt-4 text-muted-foreground leading-relaxed">
                  Georgia's QA/QC team reviews photos, documents, and permits and may contact you. <em>(§7.2.3)</em>
                </div>
              </details>
            </div>
          </div>

          {/* DIY & MIDSTREAM */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-anderson-purple">DIY & Store Purchases</h3>
            
            <div className="space-y-4">
              <details className="bg-card shadow-soft rounded-lg border border-primary/20 p-6">
                <summary className="text-lg font-semibold cursor-pointer hover:text-primary transition-colors">
                  Can I do the work myself?
                </summary>
                <div className="mt-4 text-muted-foreground leading-relaxed">
                  DIY is very limited. Homeowners can self‑install one ENERGY STAR® kitchen appliance (range, cooktop, oven) and apply for up to $840. Contractors can then apply for any needed wiring tied to that DIY project. <em>(§2.5.4)</em>
                </div>
              </details>

              <details className="bg-card shadow-soft rounded-lg border border-primary/20 p-6">
                <summary className="text-lg font-semibold cursor-pointer hover:text-primary transition-colors">
                  What is the "midstream" option?
                </summary>
                <div className="mt-4 text-muted-foreground leading-relaxed">
                  Approved distributors deduct part of the HEAR rebate at point‑of‑sale for certain equipment (e.g., heat pumps, heat pump water heaters). The rest flows through the contractor. <em>(§2.5.5)</em>
                </div>
              </details>
            </div>
          </div>

          {/* PROPERTY TYPES & LIMITS */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-anderson-purple">Property Types & Limits</h3>
            
            <div className="space-y-4">
              <details className="bg-card shadow-soft rounded-lg border border-primary/20 p-6">
                <summary className="text-lg font-semibold cursor-pointer hover:text-primary transition-colors">
                  Do new homes qualify?
                </summary>
                <div className="mt-4 text-muted-foreground leading-relaxed">
                  These programs are designed for existing homes. We'll review your situation during the assessment. <em>(General context; program focuses on retrofits)</em>
                </div>
              </details>

              <details className="bg-card shadow-soft rounded-lg border border-primary/20 p-6">
                <summary className="text-lg font-semibold cursor-pointer hover:text-primary transition-colors">
                  Are mobile/manufactured homes eligible?
                </summary>
                <div className="mt-4 text-muted-foreground leading-relaxed">
                  Yes, manufactured homes are eligible if they're your primary residence in Georgia. <em>(§2.1)</em>
                </div>
              </details>
            </div>
          </div>

          {/* DOCUMENTS & INVOICES */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-anderson-purple">Documents & Invoices</h3>
            
            <details className="bg-card shadow-soft rounded-lg border border-primary/20 p-6">
              <summary className="text-lg font-semibold cursor-pointer hover:text-primary transition-colors">
                What will be on my final invoice?
              </summary>
              <div className="mt-4 text-muted-foreground leading-relaxed">
                Line‑item equipment and labor, model numbers, dates, address, total project cost, rebate amount, any testing/modeling, and any other incentives. You sign and date it. <em>(§2.5.7; Appendix 4)</em>
              </div>
            </details>
          </div>

          {/* PROGRAM GUARDRAILS */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-anderson-purple">Program Guardrails</h3>
            
            <div className="space-y-4">
              <details className="bg-card shadow-soft rounded-lg border border-primary/20 p-6">
                <summary className="text-lg font-semibold cursor-pointer hover:text-primary transition-colors">
                  Can you say the program is free?
                </summary>
                <div className="mt-4 text-muted-foreground leading-relaxed">
                  No. It is against program rules to call it "free" or guarantee a benefit. Everything is contingent on approval and funds. <em>(§8.3.1)</em>
                </div>
              </details>

              <details className="bg-card shadow-soft rounded-lg border border-primary/20 p-6">
                <summary className="text-lg font-semibold cursor-pointer hover:text-primary transition-colors">
                  Are funds limited?
                </summary>
                <div className="mt-4 text-muted-foreground leading-relaxed">
                  Yes. Georgia received a set amount from DOE for HER and HEAR. Funds are limited and subject to availability. <em>(§1.0 notes DOE allocations to Georgia)</em>
                </div>
              </details>
            </div>
          </div>

          {/* WHY ANDERSON */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-anderson-purple">Why Anderson</h3>
            
            <div className="space-y-4">
              <details className="bg-card shadow-soft rounded-lg border border-primary/20 p-6">
                <summary className="text-lg font-semibold cursor-pointer hover:text-primary transition-colors">
                  What does Anderson do for me?
                </summary>
                <div className="mt-4 text-muted-foreground leading-relaxed">
                  We plan the best fix for comfort and bills, do the required tests, handle the paperwork, and install to high standards—so you get the most help you qualify for. Georgia approves eligibility and rebates.
                </div>
              </details>

              <details className="bg-card shadow-soft rounded-lg border border-primary/20 p-6">
                <summary className="text-lg font-semibold cursor-pointer hover:text-primary transition-colors">
                  How do I start?
                </summary>
                <div className="mt-4 text-muted-foreground leading-relaxed">
                  Call{" "}
                  <a href="tel:+17066290749" className="text-primary hover:underline">
                    (706) 629‑0749
                  </a>{" "}
                  or{" "}
                  <a 
                    href="https://www.johnandersonservice.com" 
                    target="_blank" 
                    rel="noopener"
                    className="text-primary hover:underline"
                  >
                    johnandersonservice.com
                  </a>
                  . Or tap "Get My No‑Cost Estimate."
                </div>
              </details>
            </div>
          </div>

          <div className="bg-anderson-cream/20 rounded-lg p-6 mt-8">
            <p className="text-sm text-muted-foreground">
              <strong>Important:</strong> Anderson is a participating contractor. Customers complete their own application and income step; the State reviews and approves rebates. We provide a checklist, detailed invoice, photos, and reports to make it easy. Program rules and funds can change.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};