import { Button } from "@/components/ui/button";
import { Sparkles, Heart, PenTool } from "lucide-react";
import heroImage from "@assets/generated_images/Spiritual_meditation_nature_scene_20007ef5.png";

export default function HeroSection() {
  const handleStartManifesting = () => {
    console.log('Start manifesting clicked');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background/40 to-accent/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="flex justify-center mb-6">
          <div className="flex items-center space-x-2 bg-primary/10 backdrop-blur-sm px-4 py-2 rounded-full">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">AI-Powered Manifestation</span>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
          Write Your Dreams
          <br />
          <span className="text-primary-foreground">Into Reality</span>
        </h1>

        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          Transform your deepest wishes into personalized manifestation scripts, 
          then practice them with beautiful calligraphy worksheets.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
          <Button 
            size="lg" 
            className="text-lg px-8 py-4 bg-primary/90 hover:bg-primary backdrop-blur-sm"
            onClick={handleStartManifesting}
            data-testid="button-start-manifesting"
          >
            <PenTool className="mr-2 h-5 w-5" />
            Start My Manifestation
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="text-lg px-8 py-4 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
            data-testid="button-view-examples"
          >
            View Examples
          </Button>
        </div>

        {/* Feature Pills */}
        <div className="flex flex-wrap justify-center gap-4">
          <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
            <Heart className="h-4 w-4 text-red-400" />
            <span className="text-white text-sm">Personalized AI</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
            <PenTool className="h-4 w-4 text-blue-400" />
            <span className="text-white text-sm">Beautiful Calligraphy</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
            <Sparkles className="h-4 w-4 text-yellow-400" />
            <span className="text-white text-sm">Instant Download</span>
          </div>
        </div>
      </div>
    </section>
  );
}