import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { X, Download, Eye, CreditCard, Sparkles } from "lucide-react";

interface PreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  worksheetType: 'affirmation' | 'script';
  price: string;
  selectedFont?: string;
}

export default function PreviewModal({ isOpen, onClose, worksheetType, price, selectedFont = 'elegant-script' }: PreviewModalProps) {
  const [showCheckout, setShowCheckout] = useState(false);

  if (!isOpen) return null;

  const handlePurchase = () => {
    setShowCheckout(true);
    console.log('Purchase initiated for:', worksheetType);
  };

  const mockAffirmations = [
    'I am perfectly aligned with abundance and success flows to me effortlessly.',
    'Every day, I attract prosperity and opportunities into my life.',
    'I am worthy of all the good that comes my way.'
  ];

  const mockScript = `This morning, I wake up feeling completely at peace with my financial abundance. The sunlight streams through my window, and I can feel the energy of prosperity flowing through every cell of my body.

I walk to my home office and check my business account. A smile spreads across my face as I see the steady growth that reflects my perfect alignment with prosperity. The numbers on the screen are more than just digits - they represent the manifestation of my highest intentions and the universe's generous response to my clarity and purpose.

Throughout the day, I move with confidence and grace, knowing that abundance is my natural state. I make decisions from a place of overflow rather than scarcity, and every choice I make multiplies the prosperity in my life.`;

  const cardContent = worksheetType === 'affirmation' ? mockAffirmations : [mockScript];

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
      <div className="max-w-5xl w-full max-h-[90vh] overflow-hidden">
        {/* Close Button */}
        <div className="flex justify-end mb-4">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={onClose}
            className="bg-black/20 text-white hover:bg-black/40"
            data-testid="button-close-preview"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* Greeting Card */}
        <div className="greeting-card greeting-card-border rounded-2xl overflow-hidden">
          {/* Decorative Corners */}
          <div className="greeting-card-corner top-left"></div>
          <div className="greeting-card-corner top-right"></div>
          <div className="greeting-card-corner bottom-left"></div>
          <div className="greeting-card-corner bottom-right"></div>

          {/* Card Header */}
          <div className="text-center py-8 border-b border-primary/20">
            <div className="flex justify-center mb-4">
              <Sparkles className="h-8 w-8 text-primary mystical-symbol" />
            </div>
            <h2 className="text-4xl font-serif font-bold text-primary mb-2">
              My Personal Manifestation
            </h2>
            <p className="text-lg text-muted-foreground">
              {worksheetType === 'affirmation' ? 'Affirmation Practice' : 'Manifestation Script'}
            </p>
            <div className="flex justify-center mt-4">
              <Badge variant="outline" className="bg-background/50 flex items-center space-x-2">
                <Sparkles className="h-3 w-3" />
                <span>Free to View • Pay to Download</span>
                <Sparkles className="h-3 w-3" />
              </Badge>
            </div>
          </div>

          {/* Card Content */}
          <div className="p-8 space-y-8 max-h-96 overflow-y-auto">
            {worksheetType === 'affirmation' ? (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-serif font-semibold text-primary mb-4">
                    Practice Your Affirmations
                  </h3>
                  <p className="text-muted-foreground">
                    Trace, practice, and embody these powerful statements
                  </p>
                </div>

                {mockAffirmations.map((affirmation, index) => (
                  <div key={index} className="space-y-4">
                    <div className="text-center">
                      <h4 className="font-semibold text-foreground mb-3">
                        Affirmation {index + 1}
                      </h4>
                      <div className={`text-xl text-primary ${selectedFont} font-semibold`}>
                        {affirmation}
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">Trace:</p>
                      <div className={`text-lg calligraphy-practice ${selectedFont} opacity-30`}>
                        {affirmation}
                      </div>
                      
                      <p className="text-sm text-muted-foreground">Practice:</p>
                      <div className="calligraphy-practice"></div>
                      <div className="calligraphy-practice"></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-serif font-semibold text-primary mb-4">
                    Immersive Manifestation Experience
                  </h3>
                  <p className="text-muted-foreground">
                    A detailed script to guide your visualization practice
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="text-lg leading-relaxed text-foreground">
                    {mockScript.split('\n\n').map((paragraph, index) => (
                      <p key={index} className={`mb-6 ${selectedFont}`}>
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h4 className="font-semibold text-foreground mb-4">Reflection Space:</h4>
                  <div className="space-y-3">
                    <div className="calligraphy-practice"></div>
                    <div className="calligraphy-practice"></div>
                    <div className="calligraphy-practice"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Card Footer */}
          <div className="border-t border-primary/20 p-6 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5">
            {!showCheckout ? (
              <div className="text-center space-y-4">
                <div className="flex justify-center space-x-8 text-sm text-muted-foreground">
                  <span>✓ High-quality PDF</span>
                  <span>✓ Print-ready format</span>
                  <span>✓ Lifetime access</span>
                </div>
                
                <div className="flex items-center justify-center space-x-6">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-primary">{price}</p>
                    <p className="text-sm text-muted-foreground">one-time purchase</p>
                  </div>
                  <Button 
                    size="lg" 
                    onClick={handlePurchase}
                    className="px-8"
                    data-testid="button-purchase-worksheet"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF
                  </Button>
                </div>
                
                <p className="text-xs text-muted-foreground">
                  Your beautiful {worksheetType === 'affirmation' ? 'affirmation practice sheet' : 'manifestation script'} will be instantly available for download
                </p>
              </div>
            ) : (
              <div className="text-center">
                <div className="bg-primary/10 p-6 rounded-lg mb-4">
                  <CreditCard className="h-12 w-12 text-primary mx-auto mb-4 mystical-symbol" />
                  <h3 className="text-xl font-semibold mb-2">Secure Checkout</h3>
                  <p className="text-muted-foreground">Processing your order...</p>
                </div>
                <Button 
                  variant="outline" 
                  onClick={() => setShowCheckout(false)}
                  data-testid="button-back-to-preview"
                >
                  Back to Preview
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}