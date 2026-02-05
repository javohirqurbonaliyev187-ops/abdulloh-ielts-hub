import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Headphones, BookOpen, PenTool, Mic, ArrowRight, CheckCircle } from "lucide-react";

const skills = [
  {
    id: "listening",
    name: "Listening",
    icon: Headphones,
    description: "Train your ears with authentic audio passages and improve comprehension skills.",
    color: "listening",
    features: ["40+ Practice Tests", "Audio Transcripts", "Time Management Tips"],
    buttonVariant: "listening" as const,
  },
  {
    id: "reading",
    name: "Reading",
    icon: BookOpen,
    description: "Master passage analysis, skimming, and scanning techniques for maximum accuracy.",
    color: "reading",
    features: ["60+ Passages", "Question Type Strategies", "Vocabulary Builder"],
    buttonVariant: "reading" as const,
  },
  {
    id: "writing",
    name: "Writing",
    icon: PenTool,
    description: "Develop coherent essays and reports with AI-powered grammar and structure feedback.",
    color: "writing",
    features: ["Task 1 & 2 Practice", "AI Feedback", "Model Answers"],
    buttonVariant: "writing" as const,
  },
  {
    id: "speaking",
    name: "Speaking",
    icon: Mic,
    description: "Build fluency and confidence with interactive speaking exercises and pronunciation coaching.",
    color: "speaking",
    features: ["Voice Recording", "Pronunciation Coach", "Sample Responses"],
    buttonVariant: "speaking" as const,
  },
];

export function SkillsSection() {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-main">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-display text-foreground">
            Master All Four <span className="text-gradient">IELTS Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive training modules designed to improve each skill area with 
            targeted practice and expert strategies.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.id}
              className={`card-skill bg-${skill.color}-soft/50 border-${skill.color}/20 hover:border-${skill.color}/50 group`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-${skill.color}/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <skill.icon className={`w-7 h-7 text-${skill.color}`} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-2">
                {skill.name}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {skill.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {skill.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <CheckCircle className={`w-4 h-4 text-${skill.color}`} />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                variant={skill.buttonVariant}
                size="sm"
                className="w-full"
                asChild
              >
                <Link to={`/practice/${skill.id}`}>
                  Start Practice
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
