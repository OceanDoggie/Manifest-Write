import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Heart } from "lucide-react";

const pricingOptions = [
  {
    id: 'calligraphy-worksheet',
    name: 'Calligraphy Practice Worksheet',
    price: '$2.99',
    description: 'Beautiful handwriting practice',
    features: [
      'Your personalized affirmations',
      'Beautiful calligraphy fonts',
      'Practice lines & guides',
      'Decorative border design',
      'A4 PDF for printing',
      'Instant download'
    ],
    icon: Heart,
    popular: false,
    type: 'download'
  },
  {
    id: 'immersive-script',
    name: 'Immersive Manifestation Script',
    price: '$4.99',
    description: 'Deep transformation journey',
    features: [
      'Extended 3+ page script',
      'Rich sensory details',
      'Multiple practice sessions',
      'Professional layout',
      'Printable PDF format',
      'Instant download'
    ],
    icon: Star,
    popular: true,
    type: 'download'
  },
  {
    id: 'bundle',
    name: 'Complete Practice Bundle',
    price: '$6.99',
    description: 'Everything you need',
    features: [
      'Calligraphy worksheet',
      'Immersive script PDF',
      '7-day practice guide',
      'Progress tracking sheets',
      'Meditation bonus content',
      'All formats included'
    ],
    icon: Check,
    popular: false,
    type: 'download'
  }
];

const freeFeatures = [
  'AI-generated personalized affirmations',
  'Short manifestation scripts',
  'Font preview & selection',
  'Beautiful card-style layouts',
  'Unlimited regeneration',
  'Online viewing & reading'
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
            Free to Create, Pay to Download
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Generate unlimited personalized content for free. Only pay when you want to download practice worksheets.
          </p>
          
          {/* Free Features Section */}
          <Card className="max-w-4xl mx-auto p-8 pearl-crystal-bg mb-12">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-serif font-bold text-primary mb-4">
                ✨ Always Free ✨
              </h3>
              <p className="text-muted-foreground">
                Everything you need to start manifesting, completely free
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              {freeFeatures.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Check className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="text-center mb-8">
          <h3 className="text-3xl font-serif font-bold text-foreground mb-4">
            Premium Downloads
          </h3>
          <p className="text-muted-foreground">
            Take your practice offline with beautiful, printable formats
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
                Download Now
              </Button>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            All downloads include lifetime access and can be reprinted unlimited times
          </p>
          <p className="text-sm text-muted-foreground">
            Create and preview your content first • Only pay for what you want to download
          </p>
        </div>
      </div>
    </section>
  );
}