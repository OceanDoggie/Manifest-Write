import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { X, Download, Eye, CreditCard } from "lucide-react";

interface PreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  worksheetType: 'affirmation' | 'script';
  price: string;
}

export default function PreviewModal({ isOpen, onClose, worksheetType, price }: PreviewModalProps) {
  const [showCheckout, setShowCheckout] = useState(false);

  if (!isOpen) return null;

  const handlePurchase = () => {
    setShowCheckout(true);
    console.log('Purchase initiated for:', worksheetType);
  };

  const mockWorksheetContent = worksheetType === 'affirmation' 
    ? 'I am perfectly aligned with abundance and success flows to me effortlessly.'
    : 'This morning, I wake up feeling completely at peace with my financial abundance. I check my business account and smile as I see the steady growth that reflects my alignment with prosperity...';

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="max-w-4xl w-full max-h-[90vh] overflow-hidden pearl-crystal-bg liquid-glow relative mystical-symbol-bg">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <div className="flex items-center space-x-4">
            <Eye className="h-6 w-6 text-primary" />
            <div>
              <h2 className="text-2xl font-serif font-bold text-foreground">
                Worksheet Preview
              </h2>
              <p className="text-muted-foreground">
                {worksheetType === 'affirmation' ? 'Affirmation' : 'Manifestation Script'} Worksheet
              </p>
            </div>
          </div>
          <Button 
            variant="ghost" 
            size="icon"
            onClick={onClose}
            data-testid="button-close-preview"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* Preview Content */}
        <div className="p-6 max-h-96 overflow-y-auto">
          <div className="bg-white border-2 border-dashed border-muted p-8 rounded-lg">
            <div className="text-center mb-8">
              <Badge variant="secondary" className="mb-4">PREVIEW - WATERMARK WILL BE REMOVED</Badge>
              <h3 className="text-2xl font-serif font-bold mb-2">My Personal Manifestation</h3>
              <p className="text-muted-foreground">Practice worksheet created just for you</p>
            </div>

            {/* Mock Worksheet Content */}
            <div className="space-y-8">
              <div className="border-b pb-6">
                <h4 className="font-semibold mb-4">Tracing Section:</h4>
                <div className="space-y-3">
                  <div className="text-2xl text-muted-foreground/50 font-serif tracking-wider">
                    {mockWorksheetContent.slice(0, 40)}...
                  </div>
                  <div className="border-b border-dotted border-muted h-8"></div>
                  <div className="border-b border-dotted border-muted h-8"></div>
                </div>
              </div>

              <div className="border-b pb-6">
                <h4 className="font-semibold mb-4">Practice Section:</h4>
                <div className="space-y-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="border-b border-dotted border-muted h-8"></div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Daily Check-in:</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="mb-2">Date: _________</p>
                    <p>Today's Intention: _______________</p>
                  </div>
                  <div>
                    <p className="mb-2">Energy Level: ⭐ ⭐ ⭐ ⭐ ⭐</p>
                    <p>Gratitude: _______________</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t bg-muted/20">
          {!showCheckout ? (
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Download includes:</p>
                <p className="text-sm">✓ High-quality PDF ✓ Print-ready format ✓ Lifetime access</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <p className="text-2xl font-bold text-primary">{price}</p>
                  <p className="text-sm text-muted-foreground">one-time purchase</p>
                </div>
                <Button 
                  size="lg" 
                  onClick={handlePurchase}
                  data-testid="button-purchase-worksheet"
                >
                  <CreditCard className="mr-2 h-4 w-4" />
                  Purchase & Download
                </Button>
              </div>
            </div>
          ) : (
            <div className="text-center">
              <div className="bg-primary/10 p-6 rounded-lg mb-4">
                <CreditCard className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Secure Checkout</h3>
                <p className="text-muted-foreground">Redirecting to secure payment...</p>
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
      </Card>
    </div>
  );
}