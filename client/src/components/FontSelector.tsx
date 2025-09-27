import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

interface FontOption {
  id: string;
  name: string;
  category: 'Chinese' | 'English';
  style: string;
  preview: string;
  description: string;
}

const fontOptions: FontOption[] = [
  {
    id: 'chinese-kai',
    name: 'Traditional Kaishu',
    category: 'Chinese',
    style: 'font-serif',
    preview: '我轻松地创造出与我价值对齐的收入流',
    description: 'Classic Chinese calligraphy, perfect for traditional manifestations'
  },
  {
    id: 'chinese-xing',
    name: 'Flowing Xingshu',
    category: 'Chinese', 
    style: 'font-serif italic',
    preview: '我值得拥有丰盛的生活和内心的平静',
    description: 'Semi-cursive style that flows like water'
  },
  {
    id: 'english-script',
    name: 'Elegant Script',
    category: 'English',
    style: 'font-serif italic',
    preview: 'I am perfectly aligned with abundance',
    description: 'Beautiful flowing cursive for English affirmations'
  },
  {
    id: 'english-print',
    name: 'Clear Print',
    category: 'English',
    style: 'font-sans',
    preview: 'Success flows to me effortlessly',
    description: 'Clean, readable handwriting style'
  }
];

export default function FontSelector() {
  const [selectedFont, setSelectedFont] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<'Chinese' | 'English' | 'All'>('All');

  const filteredFonts = fontOptions.filter(font => 
    selectedCategory === 'All' || font.category === selectedCategory
  );

  const handleFontSelect = (fontId: string) => {
    setSelectedFont(fontId);
    console.log('Font selected:', fontId);
  };

  const handleGenerateWorksheet = () => {
    if (selectedFont) {
      console.log('Generating worksheet with font:', selectedFont);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-serif font-bold text-foreground mb-4">
          Choose Your Calligraphy Style
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Select the perfect font for your manifestation practice. Each style carries its own energy and beauty.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex justify-center space-x-4 mb-8">
        {(['All', 'Chinese', 'English'] as const).map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? 'default' : 'outline'}
            onClick={() => setSelectedCategory(category)}
            data-testid={`button-category-${category.toLowerCase()}`}
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Font Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {filteredFonts.map((font) => (
          <Card 
            key={font.id} 
            className={`p-6 cursor-pointer transition-all duration-300 hover-elevate ${
              selectedFont === font.id ? 'ring-2 ring-primary bg-primary/5' : ''
            }`}
            onClick={() => handleFontSelect(font.id)}
            data-testid={`card-font-${font.id}`}
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {font.name}
                </h3>
                <Badge variant="secondary" className="text-xs">
                  {font.category}
                </Badge>
              </div>
              {selectedFont === font.id && (
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                  <Check className="h-4 w-4 text-primary-foreground" />
                </div>
              )}
            </div>

            {/* Preview Text */}
            <div className="mb-4 p-4 bg-muted/30 rounded-lg min-h-20 flex items-center justify-center">
              <p className={`text-xl ${font.style} text-center text-foreground`}>
                {font.preview}
              </p>
            </div>

            <p className="text-sm text-muted-foreground">
              {font.description}
            </p>
          </Card>
        ))}
      </div>

      {/* Generate Button */}
      {selectedFont && (
        <div className="text-center">
          <Button 
            size="lg" 
            onClick={handleGenerateWorksheet}
            data-testid="button-generate-worksheet"
          >
            Generate My Worksheet
          </Button>
        </div>
      )}
    </div>
  );
}