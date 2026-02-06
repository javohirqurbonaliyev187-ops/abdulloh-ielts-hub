import { Link } from "react-router-dom";
import { AppLayout } from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { BookOpen, Lock, Play, Star, CheckCircle } from "lucide-react";

const levels = [
  {
    id: "beginner",
    name: "Beginner",
    description: "Start from scratch with basic English foundations",
    lessons: 20,
    color: "hsl(142, 76%, 36%)",
    free: true,
    progress: 0,
  },
  {
    id: "elementary",
    name: "Elementary",
    description: "Build essential grammar and vocabulary skills",
    lessons: 25,
    color: "hsl(217, 91%, 60%)",
    free: false,
    progress: 0,
  },
  {
    id: "pre-intermediate",
    name: "Pre-Intermediate",
    description: "Strengthen your communication abilities",
    lessons: 30,
    color: "hsl(280, 65%, 60%)",
    free: false,
    progress: 0,
  },
  {
    id: "intermediate",
    name: "Intermediate",
    description: "Develop fluency and complex structures",
    lessons: 30,
    color: "hsl(38, 92%, 50%)",
    free: false,
    progress: 0,
  },
  {
    id: "pre-ielts",
    name: "Pre-IELTS",
    description: "Prepare specifically for the IELTS exam format",
    lessons: 35,
    color: "hsl(24, 95%, 53%)",
    free: false,
    progress: 0,
  },
  {
    id: "ielts",
    name: "IELTS",
    description: "Advanced strategies for achieving Band 7+",
    lessons: 40,
    color: "hsl(0, 72%, 51%)",
    free: false,
    progress: 0,
  },
];

export default function Lessons() {
  return (
    <AppLayout>
      <main className="pb-12">
        <section className="section-padding bg-gradient-to-b from-background to-muted/30">
          <div className="container-main text-center">
            <h1 className="text-4xl md:text-5xl font-display text-foreground mb-4">
              IELTS <span className="text-gradient">Lessons</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
              Structured video lessons from Beginner to IELTS level. Each level includes 1000+ practice activities.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full border border-accent/20">
              <Star className="w-4 h-4 text-accent fill-accent" />
              <span className="text-sm font-medium text-accent">
                Video lessons: 26,999 so'm per level
              </span>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-main">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {levels.map((level) => (
                <div key={level.id} className="card-elevated p-6 flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${level.color}20` }}
                    >
                      <BookOpen className="w-6 h-6" style={{ color: level.color }} />
                    </div>
                    <div>
                      <h3 className="font-display text-lg text-foreground">{level.name}</h3>
                      <p className="text-xs text-muted-foreground">{level.lessons} lessons</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-6 flex-1">{level.description}</p>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-accent" />
                      <span>Free introduction lesson</span>
                    </div>
                    {!level.free && (
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Lock className="w-4 h-4" />
                        <span>Video lessons: 26,999 so'm</span>
                      </div>
                    )}
                  </div>

                  <Button
                    variant={level.free ? "hero" : "outline"}
                    className="w-full mt-4"
                    asChild
                  >
                    <Link to={`/lessons/${level.id}`}>
                      {level.free ? (
                        <>
                          <Play className="w-4 h-4 mr-2" />
                          Start Free
                        </>
                      ) : (
                        <>
                          <Lock className="w-4 h-4 mr-2" />
                          Unlock Level
                        </>
                      )}
                    </Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </AppLayout>
  );
}
