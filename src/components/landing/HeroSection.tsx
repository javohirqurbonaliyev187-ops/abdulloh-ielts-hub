import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Star, Users, Trophy, BookOpen } from "lucide-react";
import heroImage from "@/assets/hero-student.jpg";

const stats = [
  { icon: Users, value: "10,000+", label: "Students" },
  { icon: Trophy, value: "8.5+", label: "Avg Band Score" },
  { icon: BookOpen, value: "500+", label: "Practice Tests" },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/30" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container-main relative z-10 px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 animate-slide-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full border border-accent/20">
              <Star className="w-4 h-4 text-accent fill-accent" />
              <span className="text-sm font-medium text-accent">
                #1 Rated IELTS Prep Platform
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display leading-tight text-foreground">
                Master IELTS with{" "}
                <span className="text-gradient">Abdulloh</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
                Your complete pathway to IELTS success. AI-powered practice, 
                personalized feedback, and proven strategies from expert instructors.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/register">
                  Start Free Practice
                  <ArrowRight className="w-5 h-5 ml-1" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link to="/demo">
                  <Play className="w-5 h-5 mr-1" />
                  Watch Demo
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-4">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-foreground">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative lg:block hidden">
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-dramatic">
                <img
                  src={heroImage}
                  alt="Student studying for IELTS"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>

              {/* Floating Card - Band Score */}
              <div className="absolute -left-8 top-1/4 bg-card rounded-xl p-4 shadow-prominent border border-border animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center">
                    <Trophy className="w-6 h-6 text-success" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">8.5</div>
                    <div className="text-xs text-muted-foreground">Band Score</div>
                  </div>
                </div>
              </div>

              {/* Floating Card - Progress */}
              <div className="absolute -right-4 bottom-1/4 bg-card rounded-xl p-4 shadow-prominent border border-border animate-float" style={{ animationDelay: "1s" }}>
                <div className="space-y-2">
                  <div className="text-sm font-medium text-foreground">Weekly Progress</div>
                  <div className="flex gap-1">
                    {[85, 72, 90, 78, 88, 92, 95].map((val, i) => (
                      <div
                        key={i}
                        className="w-3 bg-accent rounded-sm"
                        style={{ height: `${val * 0.4}px` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
