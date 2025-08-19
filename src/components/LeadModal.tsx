import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LeadModal = ({ isOpen, onClose }: LeadModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    county: "",
    household: "",
    income: "",
    consent: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Thanks for your interest!",
      description: "We'll contact you shortly to discuss your rebate options and schedule your no-cost estimate.",
    });

    setIsSubmitting(false);
    onClose();
    
    // Reset form
    setFormData({
      name: "",
      phone: "",
      email: "",
      address: "",
      county: "",
      household: "",
      income: "",
      consent: false
    });
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl text-primary">Get My No‑Cost Estimate</DialogTitle>
          <p className="text-muted-foreground">
            We'll call you to confirm details and check your rebate options.
          </p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div className="space-y-2">
            <Label htmlFor="name">Name *</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone *</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">Address *</Label>
            <Input
              id="address"
              value={formData.address}
              onChange={(e) => handleInputChange("address", e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="county">County *</Label>
            <Select value={formData.county} onValueChange={(value) => handleInputChange("county", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="gordon">Gordon County</SelectItem>
                <SelectItem value="other">Other Georgia County</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="household">Household Size *</Label>
            <Select value={formData.household} onValueChange={(value) => handleInputChange("household", value)}>
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

          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="income">Estimated Household Income (yearly) *</Label>
            <Input
              id="income"
              type="number"
              placeholder="e.g., 65000"
              value={formData.income}
              onChange={(e) => handleInputChange("income", e.target.value)}
              required
            />
          </div>

          <div className="md:col-span-2 flex items-center space-x-2">
            <Checkbox
              id="consent"
              checked={formData.consent}
              onCheckedChange={(checked) => handleInputChange("consent", checked as boolean)}
              required
            />
            <Label htmlFor="consent" className="text-sm">
              I agree that Anderson may contact me by phone or email about my estimate. *
            </Label>
          </div>

          <div className="md:col-span-2 flex justify-end gap-3 pt-4">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting || !formData.consent}>
              {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};