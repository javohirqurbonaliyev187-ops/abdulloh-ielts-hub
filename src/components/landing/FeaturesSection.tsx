import { Brain, Target, BarChart3, Clock, Users, Award, Sparkles, Zap } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Feedback",
    description: "Get instant, detailed feedback on your writing and speaking with advanced AI analysis.",
  },
  {
    icon: Target,
    title: "Adaptive Learning",
    description: "Personalized study paths that adjust to your strengths and weaknesses in real-time.",
  },
  {
    icon: BarChart3,
    title: "Progress Analytics",
    description: "Track your improvement with detailed charts, trends, and performance insights.",
  },
  {
    icon: Clock,
    title: "Timed Practice",
    description: "Realistic test conditions with built-in timers to prepare you for exam pressure.",
  },
  {
    icon: Users,
    title: "Expert Community",
    description: "Join thousands of students and learn from experienced IELTS instructors.",
  },
  {
    icon: Award,
    title: "Certification",
    description: "Earn badges and certificates as you progress through your IELTS journey.",
  },
];

export function FeaturesSection() {
  return (
    <section className="section-padding">
      <div className="container-main">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-foreground">Why Choose Us</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display text-foreground">
            Everything You Need to <span className="text-gradient">Succeed</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Our platform combines cutting-edge technology with proven teaching methods
            to deliver the best IELTS preparation experience.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl bg-card border border-border hover:border-accent/30 hover:shadow-prominent transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 relative overflow-hidden rounded-2xl bg-primary p-8 md:p-12">
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-display text-primary-foreground mb-2">
                Ready to Start Your IELTS Journey?
              </h3>
              <p className="text-primary-foreground/80">
                Join 10,000+ students who have achieved their target band scores.
              </p>
            </div>
            <div className="flex gap-4">
              <button className="btn-hero flex items-center gap-2">
                <Zap className="w-5 h-5" />
                Get Started Free
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
