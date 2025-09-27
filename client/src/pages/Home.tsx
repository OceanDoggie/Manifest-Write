import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProcessOverview from "@/components/ProcessOverview";
import ConversationInterface from "@/components/ConversationInterface";
import FontSelector from "@/components/FontSelector";
import PricingCards from "@/components/PricingCards";
import PreviewModal from "@/components/PreviewModal";

export default function Home() {
  const [currentStep, setCurrentStep] = useState<'landing' | 'conversation' | 'fonts' | 'pricing'>('landing');
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const navigateToStep = (step: typeof currentStep) => {
    setCurrentStep(step);
    console.log('Navigating to step:', step);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {currentStep === 'landing' && (
        <>
          <HeroSection />
          <ProcessOverview />
          <PricingCards />
          
          {/* Navigation CTAs */}
          <section className="py-24 text-center">
            <div className="max-w-4xl mx-auto px-6">
              <h2 className="text-4xl font-serif font-bold text-foreground mb-8">
                Ready to Transform Your Dreams?
              </h2>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <button 
                  onClick={() => navigateToStep('conversation')}
                  className="px-8 py-4 bg-primary text-primary-foreground rounded-lg hover-elevate transition-all duration-300 text-lg font-semibold"
                  data-testid="button-start-conversation"
                >
                  Start My Manifestation Journey
                </button>
                <button 
                  onClick={() => setIsPreviewOpen(true)}
                  className="px-8 py-4 border border-border text-foreground rounded-lg hover-elevate transition-all duration-300 text-lg"
                  data-testid="button-preview-worksheet"
                >
                  Preview Sample Worksheet
                </button>
              </div>
            </div>
          </section>
        </>
      )}

      {currentStep === 'conversation' && (
        <section className="py-24">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <button 
                onClick={() => navigateToStep('landing')}
                className="text-muted-foreground hover:text-foreground transition-colors mb-4"
                data-testid="button-back-to-landing"
              >
                ← Back to Home
              </button>
              <h1 className="text-4xl font-serif font-bold text-foreground mb-4">
                Tell Us About Your Dreams
              </h1>
              <p className="text-xl text-muted-foreground">
                Share your deepest wishes and we'll create something magical just for you
              </p>
            </div>
            <ConversationInterface />
          </div>
        </section>
      )}

      {currentStep === 'fonts' && (
        <section className="py-24">
          <div className="mb-8 text-center">
            <button 
              onClick={() => navigateToStep('conversation')}
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="button-back-to-conversation"
            >
              ← Back to Conversation
            </button>
          </div>
          <FontSelector />
        </section>
      )}

      {currentStep === 'pricing' && (
        <section className="py-24">
          <div className="mb-8 text-center">
            <button 
              onClick={() => navigateToStep('fonts')}
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="button-back-to-fonts"
            >
              ← Back to Font Selection
            </button>
          </div>
          <PricingCards />
        </section>
      )}

      {/* Demo Navigation (for prototype) */}
      <div className="fixed bottom-6 right-6 bg-card border border-border rounded-lg p-4 shadow-lg">
        <p className="text-sm font-medium text-foreground mb-3">Demo Navigation:</p>
        <div className="flex flex-col space-y-2">
          <button 
            onClick={() => navigateToStep('landing')}
            className={`px-3 py-1 text-sm rounded transition-colors ${
              currentStep === 'landing' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            Landing
          </button>
          <button 
            onClick={() => navigateToStep('conversation')}
            className={`px-3 py-1 text-sm rounded transition-colors ${
              currentStep === 'conversation' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            AI Chat
          </button>
          <button 
            onClick={() => navigateToStep('fonts')}
            className={`px-3 py-1 text-sm rounded transition-colors ${
              currentStep === 'fonts' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            Font Selection
          </button>
          <button 
            onClick={() => navigateToStep('pricing')}
            className={`px-3 py-1 text-sm rounded transition-colors ${
              currentStep === 'pricing' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            Pricing
          </button>
        </div>
      </div>

      <PreviewModal 
        isOpen={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
        worksheetType="affirmation"
        price="$1.49"
      />
    </div>
  );
}