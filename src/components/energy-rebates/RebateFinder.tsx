import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Phone, Mail, ArrowRight } from "lucide-react";
import { toast } from "sonner";

interface FormData {
  county: string;
  zip: string;
  householdSize: string;
  incomePath: 'benefits' | 'estimate' | '';
  qualifyingPrograms: string[];
  estimatedIncome: string;
  projectType: 'whole-home' | 'specific' | '';
  specificUpgrade: string;
  contactPreference: 'call' | 'text' | 'email' | '';
  name: string;
  email: string;
  phone: string;
  consent: boolean;
}

const initialFormData: FormData = {
  county: '',
  zip: '',
  householdSize: '',
  incomePath: '',
  qualifyingPrograms: [],
  estimatedIncome: '',
  projectType: '',
  specificUpgrade: '',
  contactPreference: '',
  name: '',
  email: '',
  phone: '',
  consent: false
};

export const RebateFinder = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [currentStep, setCurrentStep] = useState(1);
  const [showResults, setShowResults] = useState(false);
  const [showLeadForm, setShowLeadForm] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('rebate-finder-data');
    if (saved) {
      try {
        setFormData(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse saved form data');
      }
    }
  }, []);

  // Save to localStorage whenever formData changes
  useEffect(() => {
    localStorage.setItem('rebate-finder-data', JSON.stringify(formData));
  }, [formData]);

  const updateFormData = (field: keyof FormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleQualifyingProgramsChange = (program: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      qualifyingPrograms: checked 
        ? [...prev.qualifyingPrograms, program]
        : prev.qualifyingPrograms.filter(p => p !== program)
    }));
  };

  const nextStep = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    } else {
      generateResults();
    }
  };

  const generateResults = () => {
    setShowResults(true);
    setShowLeadForm(true);
  };

  const getResultCard = () => {
    if (formData.projectType === 'whole-home') {
      return {
        title: "You likely qualify for HER",
        subtitle: "Home Energy Rebates Program",
        reason: "No income cap; savings modeling required.",
        prompt: "Book your free consultation—we'll model your savings and handle paperwork.",
        bgClass: "bg-primary/5 border-primary/20",
        iconClass: "text-primary"
      };
    } else if (formData.projectType === 'specific') {
      if (formData.qualifyingPrograms.length > 0) {
        return {
          title: "You likely qualify for HEAR with enhanced rebates",
          subtitle: "Home Electrification and Appliance Rebates",
          reason: "Enhanced path based on categorical eligibility.",
          prompt: "Schedule your consultation to verify and maximize your rebates.",
          bgClass: "bg-anderson-purple/5 border-anderson-purple/20",
          iconClass: "text-anderson-purple"
        };
      } else {
        return {
          title: "You may qualify for HEAR",
          subtitle: "Home Electrification and Appliance Rebates",
          reason: "Qualification depends on household income at or below ~150% of your Area Median Income.",
          prompt: "We'll verify quickly for you during your consultation.",
          bgClass: "bg-anderson-purple/5 border-anderson-purple/20",
          iconClass: "text-anderson-purple"
        };
      }
    }
    return null;
  };

  const handleSubmitLead = () => {
    if (!formData.name || !formData.email || !formData.phone || !formData.consent) {
      toast.error("Please fill in all required fields and provide consent.");
      return;
    }

    // Create mailto link with form data
    const emailSubject = "Georgia Energy Rebates Consultation Request";
    const emailBody = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
County: ${formData.county}
ZIP: ${formData.zip}
Household Size: ${formData.householdSize}
Income Path: ${formData.incomePath}
${formData.qualifyingPrograms.length > 0 ? `Qualifying Programs: ${formData.qualifyingPrograms.join(', ')}` : ''}
${formData.estimatedIncome ? `Estimated Income: ${formData.estimatedIncome}` : ''}
Project Type: ${formData.projectType}
${formData.specificUpgrade ? `Specific Upgrade: ${formData.specificUpgrade}` : ''}
Contact Preference: ${formData.contactPreference}
    `.trim();

    const mailtoLink = `mailto:shyloh@johnandersonservice.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;

    toast.success("Thank you! Your consultation request has been prepared. We'll contact you soon!");
  };

  const counties = [
    "Gordon", "Bartow", "Floyd", "Murray", "Whitfield", 
    "Chattooga", "Pickens", "Cherokee", "Walker"
  ];

  const qualifyingPrograms = [
    "SNAP (Food Stamps)",
    "TANF (Temporary Assistance)",
    "WIC (Women, Infants, Children)",
    "Medicaid",
    "SSI (Supplemental Security Income)",
    "LIHEAP (Energy Assistance)",
    "Free/Reduced School Lunch",
    "Section 8 Housing",
    "Tribal Energy Assistance"
  ];

  const specificUpgrades = [
    "Heat Pump HVAC",
    "HP Water Heater", 
    "HP Dryer",
    "Electric Stove/Cooktop/Range",
    "Insulation",
    "Air Sealing",
    "Ventilation",
    "Panel/Wiring"
  ];

  const resultCard = getResultCard();

  return (
    <section id="rebate-finder" className="py-section bg-accent/30">
      <div className="container max-w-content mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-section-title font-bold mb-4 text-foreground">
            Rebate Finder / Eligibility Checker
          </h2>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto">
            Answer a few questions to get your likely rebate path and next steps.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {!showResults ? (
            <Card className="bg-white/80 backdrop-blur-sm border border-primary/20">
              <CardHeader>
                <CardTitle className="text-center">
                  Step {currentStep} of 5
                </CardTitle>
                <div className="w-full bg-accent rounded-full h-2">
                  <div 
                    className="bg-primary h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(currentStep / 5) * 100}%` }}
                  />
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {currentStep === 1 && (
                  <div className="space-y-4">
                    <h3 className="font-semibold">Location Information</h3>
                    <div>
                      <Label htmlFor="county">County</Label>
                      <Select value={formData.county} onValueChange={(value) => updateFormData('county', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your county" />
                        </SelectTrigger>
                        <SelectContent>
                          {counties.map(county => (
                            <SelectItem key={county} value={county}>{county}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="zip">ZIP Code</Label>
                      <Input 
                        id="zip"
                        value={formData.zip}
                        onChange={(e) => updateFormData('zip', e.target.value)}
                        placeholder="Enter your ZIP code"
                      />
                    </div>
                  </div>
                )}

                {currentStep === 2 && (
                  <div className="space-y-4">
                    <h3 className="font-semibold">Household Size</h3>
                    <Select value={formData.householdSize} onValueChange={(value) => updateFormData('householdSize', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select household size" />
                      </SelectTrigger>
                      <SelectContent>
                        {Array.from({length: 10}, (_, i) => i + 1).map(size => (
                          <SelectItem key={size} value={size.toString()}>{size} {size === 1 ? 'person' : 'people'}</SelectItem>
                        ))}
                        <SelectItem value="10+">10+ people</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                )}

                {currentStep === 3 && (
                  <div className="space-y-4">
                    <h3 className="font-semibold">Income Path</h3>
                    <div className="space-y-3">
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input 
                          type="radio" 
                          name="incomePath" 
                          value="benefits"
                          checked={formData.incomePath === 'benefits'}
                          onChange={(e) => updateFormData('incomePath', e.target.value)}
                          className="w-4 h-4"
                        />
                        <span>I have a current benefits letter</span>
                      </label>
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input 
                          type="radio" 
                          name="incomePath" 
                          value="estimate"
                          checked={formData.incomePath === 'estimate'}
                          onChange={(e) => updateFormData('incomePath', e.target.value)}
                          className="w-4 h-4"
                        />
                        <span>I don't have a benefits letter</span>
                      </label>
                    </div>

                    {formData.incomePath === 'benefits' && (
                      <div className="mt-4 space-y-2">
                        <p className="text-sm font-medium">Which programs do you currently receive? (Select all that apply)</p>
                        <div className="grid grid-cols-2 gap-2">
                          {qualifyingPrograms.map(program => (
                            <label key={program} className="flex items-center space-x-2 cursor-pointer text-sm">
                              <Checkbox 
                                checked={formData.qualifyingPrograms.includes(program)}
                                onCheckedChange={(checked) => handleQualifyingProgramsChange(program, checked as boolean)}
                              />
                              <span>{program}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    )}

                    {formData.incomePath === 'estimate' && (
                      <div className="mt-4">
                        <Label htmlFor="income">Estimated Annual Household Income</Label>
                        <Select value={formData.estimatedIncome} onValueChange={(value) => updateFormData('estimatedIncome', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select income range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="under-30k">Under $30,000</SelectItem>
                            <SelectItem value="30k-50k">$30,000 - $50,000</SelectItem>
                            <SelectItem value="50k-75k">$50,000 - $75,000</SelectItem>
                            <SelectItem value="75k-100k">$75,000 - $100,000</SelectItem>
                            <SelectItem value="100k-125k">$100,000 - $125,000</SelectItem>
                            <SelectItem value="over-125k">Over $125,000</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    )}
                  </div>
                )}

                {currentStep === 4 && (
                  <div className="space-y-4">
                    <h3 className="font-semibold">Project Type</h3>
                    <div className="space-y-3">
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input 
                          type="radio" 
                          name="projectType" 
                          value="whole-home"
                          checked={formData.projectType === 'whole-home'}
                          onChange={(e) => updateFormData('projectType', e.target.value)}
                          className="w-4 h-4"
                        />
                        <span>Whole-home improvements</span>
                      </label>
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input 
                          type="radio" 
                          name="projectType" 
                          value="specific"
                          checked={formData.projectType === 'specific'}
                          onChange={(e) => updateFormData('projectType', e.target.value)}
                          className="w-4 h-4"
                        />
                        <span>A specific upgrade</span>
                      </label>
                    </div>

                    {formData.projectType === 'specific' && (
                      <div className="mt-4">
                        <Label>Which upgrade are you considering?</Label>
                        <Select value={formData.specificUpgrade} onValueChange={(value) => updateFormData('specificUpgrade', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Choose upgrade type" />
                          </SelectTrigger>
                          <SelectContent>
                            {specificUpgrades.map(upgrade => (
                              <SelectItem key={upgrade} value={upgrade}>{upgrade}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    )}
                  </div>
                )}

                {currentStep === 5 && (
                  <div className="space-y-4">
                    <h3 className="font-semibold">Contact Preference</h3>
                    <Select value={formData.contactPreference} onValueChange={(value) => updateFormData('contactPreference', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="How would you like us to contact you?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="call">Phone call</SelectItem>
                        <SelectItem value="text">Text message</SelectItem>
                        <SelectItem value="email">Email</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                )}

                <div className="flex justify-between pt-4">
                  {currentStep > 1 && (
                    <Button variant="outline" onClick={() => setCurrentStep(currentStep - 1)}>
                      Previous
                    </Button>
                  )}
                  <Button 
                    onClick={nextStep}
                    disabled={
                      (currentStep === 1 && (!formData.county || !formData.zip)) ||
                      (currentStep === 2 && !formData.householdSize) ||
                      (currentStep === 3 && !formData.incomePath) ||
                      (currentStep === 4 && !formData.projectType) ||
                      (currentStep === 5 && !formData.contactPreference)
                    }
                    className="ml-auto"
                  >
                    {currentStep === 5 ? 'Get Results' : 'Next'} <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-6">
              {/* Results Card */}
              {resultCard && (
                <Card className={`${resultCard.bgClass} border-2`}>
                  <CardHeader className="text-center">
                    <div className={`inline-flex items-center justify-center w-16 h-16 ${resultCard.bgClass} rounded-full mb-4 mx-auto`}>
                      <CheckCircle className={`w-8 h-8 ${resultCard.iconClass}`} />
                    </div>
                    <CardTitle className={`text-xl ${resultCard.iconClass}`}>
                      {resultCard.title}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">{resultCard.subtitle}</p>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="mb-4"><strong>Reason:</strong> {resultCard.reason}</p>
                    <p className="mb-6">{resultCard.prompt}</p>
                    
                    <Badge variant="secondary" className="mb-4">
                      Bundled Savings Available
                    </Badge>
                    <p className="text-sm text-muted-foreground mb-4">
                      Add insulation/air sealing with heat pump to maximize value. Same measure cannot be co‑funded across HER and HEAR.
                    </p>
                  </CardContent>
                </Card>
              )}

              {/* Lead Form */}
              {showLeadForm && (
                <Card className="bg-white/90 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-center">Get Your Free Consultation</CardTitle>
                    <p className="text-center text-sm text-muted-foreground">
                      Let's verify your eligibility and handle the paperwork for you.
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Name *</Label>
                        <Input 
                          id="name"
                          value={formData.name}
                          onChange={(e) => updateFormData('name', e.target.value)}
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input 
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => updateFormData('email', e.target.value)}
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone *</Label>
                      <Input 
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => updateFormData('phone', e.target.value)}
                        placeholder="(706) 555-0123"
                      />
                    </div>
                    
                    <div className="flex items-start space-x-2">
                      <Checkbox 
                        id="consent"
                        checked={formData.consent}
                        onCheckedChange={(checked) => updateFormData('consent', checked)}
                      />
                      <Label htmlFor="consent" className="text-sm leading-relaxed">
                        I consent to Anderson contacting me about Georgia energy rebates using the information provided. 
                        I understand this is an estimate and final eligibility is determined by GEFA. *
                      </Label>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                      <Button 
                        onClick={handleSubmitLead}
                        disabled={!formData.name || !formData.email || !formData.phone || !formData.consent}
                        className="flex-1"
                      >
                        <Mail className="w-4 h-4 mr-2" />
                        Submit Request
                      </Button>
                      <Button variant="outline" asChild className="flex-1">
                        <a href="tel:+17066290749" className="flex items-center justify-center">
                          <Phone className="w-4 h-4 mr-2" />
                          Call Now
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}

              <div className="text-center">
                <p className="text-xs text-muted-foreground">
                  <strong>This is an estimate—final eligibility is determined by GEFA.</strong>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};