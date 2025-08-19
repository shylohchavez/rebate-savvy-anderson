import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Who decides my income eligibility?",
    answer: "Georgia's Home Energy Rebates team reviews your documents and confirms eligibility. Anderson prepares project paperwork but does not approve income."
  },
  {
    question: "What's the HEAR deadline?",
    answer: "HEAR applications must be submitted within 90 days of your invoice date."
  },
  {
    question: "Can I get a rebate for just an electrical panel or wiring?",
    answer: "No. Panels and wiring must be paired with another eligible HEAR measure or a HER project."
  },
  {
    question: "What replacements are not allowed?",
    answer: "Replacing an existing electric stove with another electric or induction stove does not qualify. Replacing an electric dryer with a heat pump dryer or an electric tank water heater with a heat pump water heater can qualify."
  },
  {
    question: "Can I combine HER and HEAR?",
    answer: "You can apply to both, but a single measure cannot be co‑funded. Keep measures distinct; HER projects still must reach the savings threshold."
  },
  {
    question: "Do you charge for assessments?",
    answer: "Sometimes. If an assessment is needed, we tell you the price up front and deliver the report within 48 hours."
  },
  {
    question: "What happens after install?",
    answer: "Georgia may inspect your project. First 5 jobs always inspected; afterward, at least 5% in person and 20% total."
  },
  {
    question: "Will rebates run out?",
    answer: "Funds are limited and first‑come, first‑served. Apply early to secure your spot."
  }
];

export const FAQSection = () => {
  return (
    <section className="py-section">
      <div className="container max-w-content mx-auto px-4">
        <h2 className="text-h2 font-bold text-center mb-12">Frequently Asked Questions</h2>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card shadow-soft rounded-lg border-primary/20 px-6"
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};