import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Sparkles, MessageCircle } from "lucide-react";

interface ConversationStep {
  id: string;
  question: string;
  type: 'text' | 'textarea' | 'radio';
  options?: string[];
}

const conversationSteps: ConversationStep[] = [
  {
    id: 'goal',
    question: "What is your deepest wish or goal right now?",
    type: 'textarea'
  },
  {
    id: 'timeline',
    question: "When would you like to achieve this?",
    type: 'radio',
    options: ['Within 1 month', 'Within 3 months', 'Within 6 months', 'Within 1 year', 'I\'m open to divine timing']
  },
  {
    id: 'feeling',
    question: "How do you want to feel when you achieve this?",
    type: 'textarea'
  },
  {
    id: 'style',
    question: "What tone resonates with you?",
    type: 'radio',
    options: ['Gentle & nurturing', 'Powerful & confident', 'Peaceful & flowing', 'Joyful & energetic']
  }
];

export default function ConversationInterface() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [generatedContent, setGeneratedContent] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const currentQuestion = conversationSteps[currentStep];

  const handleAnswer = (value: string) => {
    const newAnswers = { ...answers, [currentQuestion.id]: value };
    setAnswers(newAnswers);
    console.log('Answer recorded:', { question: currentQuestion.id, value });
  };

  const handleNext = () => {
    if (currentStep < conversationSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      generateManifestation();
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const generateManifestation = async () => {
    setIsGenerating(true);
    console.log('Generating manifestation with answers:', answers);
    
    // Mock AI generation
    setTimeout(() => {
      const mockAffirmation = "I am perfectly aligned with abundance and success flows to me effortlessly.";
      const mockScript = "This morning, I wake up feeling completely at peace with my financial abundance. I check my business account and smile as I see the steady growth that reflects my alignment with prosperity. My clients love working with me because I show up authentically and confidently. I feel grateful for this beautiful life I've created, where money flows to me as easily as I breathe. Every decision I make is guided by inner wisdom and leads to greater success.";
      
      setGeneratedContent(`**Affirmation:**
${mockAffirmation}

**Manifestation Script:**
${mockScript}`);
      setIsGenerating(false);
    }, 2000);
  };

  const isComplete = answers[currentQuestion?.id];

  if (generatedContent) {
    return (
      <Card className="max-w-4xl mx-auto p-8">
        <div className="text-center mb-8">
          <Sparkles className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="text-3xl font-serif font-bold text-foreground mb-2">
            Your Personal Manifestation
          </h2>
          <p className="text-muted-foreground">Created just for you based on your unique desires</p>
        </div>

        <div className="bg-muted/30 p-6 rounded-lg mb-8">
          <pre className="whitespace-pre-wrap text-foreground font-sans leading-relaxed">
            {generatedContent}
          </pre>
        </div>

        <div className="flex justify-center space-x-4">
          <Button variant="outline" onClick={() => {
            setGeneratedContent(null);
            setCurrentStep(0);
            setAnswers({});
          }}>
            Create Another
          </Button>
          <Button data-testid="button-create-worksheet">
            Create Worksheet →
          </Button>
        </div>
      </Card>
    );
  }

  return (
    <Card className="max-w-2xl mx-auto p-8">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <MessageCircle className="h-6 w-6 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">
              Step {currentStep + 1} of {conversationSteps.length}
            </span>
          </div>
          <div className="w-32 bg-muted rounded-full h-2">
            <div 
              className="bg-primary rounded-full h-2 transition-all duration-300"
              style={{ width: `${((currentStep + 1) / conversationSteps.length) * 100}%` }}
            />
          </div>
        </div>

        <h2 className="text-2xl font-serif font-semibold text-foreground mb-6">
          {currentQuestion?.question}
        </h2>
      </div>

      <div className="mb-8">
        {currentQuestion?.type === 'textarea' && (
          <Textarea
            placeholder="Share your thoughts..."
            value={answers[currentQuestion.id] || ''}
            onChange={(e) => handleAnswer(e.target.value)}
            className="min-h-32"
            data-testid={`textarea-${currentQuestion.id}`}
          />
        )}

        {currentQuestion?.type === 'text' && (
          <Input
            placeholder="Your answer..."
            value={answers[currentQuestion.id] || ''}
            onChange={(e) => handleAnswer(e.target.value)}
            data-testid={`input-${currentQuestion.id}`}
          />
        )}

        {currentQuestion?.type === 'radio' && (
          <RadioGroup
            value={answers[currentQuestion.id] || ''}
            onValueChange={handleAnswer}
          >
            {currentQuestion.options?.map((option) => (
              <div key={option} className="flex items-center space-x-2">
                <RadioGroupItem 
                  value={option} 
                  id={option}
                  data-testid={`radio-${option.replace(/\s+/g, '-').toLowerCase()}`}
                />
                <Label htmlFor={option} className="cursor-pointer">
                  {option}
                </Label>
              </div>
            ))}
          </RadioGroup>
        )}
      </div>

      <div className="flex justify-between">
        <Button 
          variant="outline" 
          onClick={handleBack}
          disabled={currentStep === 0}
          data-testid="button-back"
        >
          Back
        </Button>
        
        <Button 
          onClick={handleNext}
          disabled={!isComplete || isGenerating}
          data-testid="button-next"
        >
          {isGenerating ? (
            <>
              <Sparkles className="mr-2 h-4 w-4 animate-spin" />
              Generating...
            </>
          ) : (
            currentStep === conversationSteps.length - 1 ? 'Create Manifestation' : 'Next'
          )}
        </Button>
      </div>
    </Card>
  );
}