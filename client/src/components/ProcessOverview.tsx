import { Card } from "@/components/ui/card";
import { MessageCircle, Palette, Download } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    title: "Share Your Dreams",
    description: "Tell our AI about your deepest wishes and goals. Through gentle conversation, we'll understand your unique vision.",
    color: "text-blue-500"
  },
  {
    icon: Palette,
    title: "Choose Your Style",
    description: "Select from beautiful calligraphy fonts - Chinese brush strokes, elegant English scripts, or modern handwriting styles.",
    color: "text-purple-500"
  },
  {
    icon: Download,
    title: "Practice & Manifest",
    description: "Download your personalized worksheet and write your way to manifestation. Each stroke brings your dreams closer.",
    color: "text-green-500"
  }
];

export default function ProcessOverview() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transform your intentions into reality through the power of mindful writing
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="p-8 text-center hover-elevate transition-all duration-300">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-card rounded-full flex items-center justify-center">
                  <step.icon className={`h-8 w-8 ${step.color}`} />
                </div>
              </div>
              
              <div className="mb-4">
                <div className="text-2xl font-bold text-muted-foreground mb-2">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground">
                  {step.title}
                </h3>
              </div>
              
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}