import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Heart } from "lucide-react";

const pricingOptions = [
  {
    id: 'affirmation',
    name: 'Affirmation Worksheet',
    price: '$1.49',
    description: 'Perfect for daily practice',
    features: [
      '1-3 powerful affirmations',
      'Single page A4 format',
      'Tracing & practice sections',
      'Daily check-in space',
      'Instant download'
    ],
    icon: Heart,
    popular: false
  },
  {
    id: 'script',
    name: 'Manifestation Script',
    price: '$2.99',
    description: 'Deep transformational practice',
    features: [
      'Full 300-500 word script',
      '2-3 pages A4 format',
      'Multiple practice sections',
      'Weekly progress tracker',
      'Bonus guided meditation text',
      'Instant download'
    ],
    icon: Star,
    popular: true
  },
  {
    id: 'bundle',
    name: '7-Day Journey',
    price: '$4.99',
    description: 'Complete transformation package',
    features: [
      'Daily affirmations + script',
      '7 complete worksheets',
      'Progress tracking pages',
      'Reflection journal prompts',
      'Success celebration page',
      'Instant download bundle'
    ],
    icon: Check,
    popular: false
  }
];

export default function PricingCards() {
  const handlePurchase = (optionId: string) => {
    console.log('Purchase clicked for:', optionId);
  };

  return (
    <section className="py-24 relative mystical-symbol-bg">
      <div className="absolute inset-0 bg-gradient-to-br from-muted/10 via-accent/5 to-primary/5"></div>
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Choose Your Practice
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Start your manifestation journey with beautifully crafted worksheets
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingOptions.map((option) => (
            <Card 
              key={option.id} 
              className={`p-8 relative pearl-crystal-bg pearl-shimmer liquid-glow hover-elevate transition-all duration-300 mystical-symbol-bg ${
                option.popular ? 'ring-2 ring-primary scale-105' : ''
              }`}
            >
              {option.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary">
                  Most Popular
                </Badge>
              )}

              <div className="text-center mb-8">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <option.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-serif font-bold text-foreground mb-2">
                  {option.name}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {option.description}
                </p>
                <div className="text-4xl font-bold text-primary mb-2">
                  {option.price}
                </div>
                <p className="text-sm text-muted-foreground">one-time purchase</p>
              </div>

              <ul className="space-y-3 mb-8">
                {option.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <Check className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className="w-full"
                variant={option.popular ? 'default' : 'outline'}
                onClick={() => handlePurchase(option.id)}
                data-testid={`button-purchase-${option.id}`}
              >
                {option.popular ? 'Get Started' : 'Choose Plan'}
              </Button>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            All purchases include lifetime access and can be reprinted unlimited times
          </p>
        </div>
      </div>
    </section>
  );
}