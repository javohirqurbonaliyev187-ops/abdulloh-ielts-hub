import { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Headphones,
  BookOpen,
  PenTool,
  Mic,
  Clock,
  Play,
  CheckCircle,
  Lock,
  Trophy,
  Star,
  ArrowRight,
} from "lucide-react";

const mockTests = [
  {
    id: 1,
    title: "Full IELTS Mock Test 1",
    description: "Complete practice exam covering all four skills",
    duration: "2h 45min",
    sections: [
      { name: "Listening", icon: Headphones, duration: "30 min", questions: 40, completed: true, score: 7.5 },
      { name: "Reading", icon: BookOpen, duration: "60 min", questions: 40, completed: true, score: 8.0 },
      { name: "Writing", icon: PenTool, duration: "60 min", questions: 2, completed: false },
      { name: "Speaking", icon: Mic, duration: "15 min", questions: 3, completed: false },
    ],
    difficulty: "Medium",
    attempts: 156,
    avgScore: 6.8,
  },
  {
    id: 2,
    title: "Academic Reading Focus",
    description: "Intensive reading practice with complex passages",
    duration: "60 min",
    sections: [
      { name: "Reading", icon: BookOpen, duration: "60 min", questions: 40, completed: false },
    ],
    difficulty: "Hard",
    attempts: 89,
    avgScore: 6.5,
  },
  {
    id: 3,
    title: "Listening Mastery",
    description: "Advanced listening exercises with native speakers",
    duration: "40 min",
    sections: [
      { name: "Listening", icon: Headphones, duration: "40 min", questions: 40, completed: false },
    ],
    difficulty: "Medium",
    attempts: 234,
    avgScore: 7.0,
  },
  {
    id: 4,
    title: "Writing Task Bundle",
    description: "Task 1 and Task 2 with AI feedback",
    duration: "60 min",
    sections: [
      { name: "Writing", icon: PenTool, duration: "60 min", questions: 2, completed: false },
    ],
    difficulty: "Hard",
    attempts: 67,
    avgScore: 6.2,
  },
  {
    id: 5,
    title: "Speaking Interview Prep",
    description: "Full speaking test simulation with recording",
    duration: "15 min",
    sections: [
      { name: "Speaking", icon: Mic, duration: "15 min", questions: 3, completed: false },
    ],
    difficulty: "Medium",
    attempts: 145,
    avgScore: 6.9,
  },
  {
    id: 6,
    title: "Full IELTS Mock Test 2",
    description: "Second full practice exam with new content",
    duration: "2h 45min",
    sections: [
      { name: "Listening", icon: Headphones, duration: "30 min", questions: 40, completed: false },
      { name: "Reading", icon: BookOpen, duration: "60 min", questions: 40, completed: false },
      { name: "Writing", icon: PenTool, duration: "60 min", questions: 2, completed: false },
      { name: "Speaking", icon: Mic, duration: "15 min", questions: 3, completed: false },
    ],
    difficulty: "Hard",
    attempts: 98,
    avgScore: 6.6,
    locked: true,
  },
];

const difficultyColors = {
  Easy: "bg-success/10 text-success",
  Medium: "bg-warning/10 text-warning",
  Hard: "bg-destructive/10 text-destructive",
};

export default function Tests() {
  const [filter, setFilter] = useState<"all" | "listening" | "reading" | "writing" | "speaking">("all");

  const filteredTests = mockTests.filter((test) => {
    if (filter === "all") return true;
    return test.sections.some((s) => s.name.toLowerCase() === filter);
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20 pb-12 px-4 md:px-8">
        <div className="container-main">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-display text-foreground mb-2">
              Mock <span className="text-gradient">Tests</span>
            </h1>
            <p className="text-muted-foreground">
              Take full practice exams under real test conditions.
            </p>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="card-elevated p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-info/10 flex items-center justify-center">
                  <Play className="w-5 h-5 text-info" />
                </div>
                <div>
                  <div className="text-xl font-bold text-foreground">3</div>
                  <div className="text-xs text-muted-foreground">Tests Taken</div>
                </div>
              </div>
            </div>
            <div className="card-elevated p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center">
                  <Trophy className="w-5 h-5 text-success" />
                </div>
                <div>
                  <div className="text-xl font-bold text-foreground">7.5</div>
                  <div className="text-xs text-muted-foreground">Best Score</div>
                </div>
              </div>
            </div>
            <div className="card-elevated p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Star className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="text-xl font-bold text-foreground">6.8</div>
                  <div className="text-xs text-muted-foreground">Avg Score</div>
                </div>
              </div>
            </div>
            <div className="card-elevated p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-xl font-bold text-foreground">4.5h</div>
                  <div className="text-xs text-muted-foreground">Practice Time</div>
                </div>
              </div>
            </div>
          </div>

          {/* Filters */}
          <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
            {["all", "listening", "reading", "writing", "speaking"].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f as any)}
                className={`px-4 py-2 rounded-lg font-medium capitalize transition-all whitespace-nowrap ${
                  filter === f
                    ? "bg-accent text-accent-foreground"
                    : "bg-muted text-foreground hover:bg-muted/80"
                }`}
              >
                {f === "all" ? "All Tests" : f}
              </button>
            ))}
          </div>

          {/* Tests Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTests.map((test) => (
              <div
                key={test.id}
                className={`card-elevated p-6 ${test.locked ? "opacity-60" : ""}`}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="font-display text-lg text-foreground mb-1">
                      {test.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {test.description}
                    </p>
                  </div>
                  {test.locked && (
                    <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center">
                      <Lock className="w-4 h-4 text-muted-foreground" />
                    </div>
                  )}
                </div>

                {/* Meta */}
                <div className="flex items-center gap-4 mb-4 text-sm">
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{test.duration}</span>
                  </div>
                  <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${difficultyColors[test.difficulty as keyof typeof difficultyColors]}`}>
                    {test.difficulty}
                  </span>
                </div>

                {/* Sections */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {test.sections.map((section, idx) => (
                    <div
                      key={idx}
                      className={`flex items-center gap-1.5 px-2 py-1 rounded-lg text-xs ${
                        section.completed
                          ? "bg-success/10 text-success"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      <section.icon className="w-3 h-3" />
                      <span>{section.name}</span>
                      {section.completed && section.score && (
                        <span className="font-semibold ml-1">{section.score}</span>
                      )}
                    </div>
                  ))}
                </div>

                {/* Progress (for multi-section tests) */}
                {test.sections.length > 1 && (
                  <div className="mb-4">
                    <div className="flex justify-between text-xs text-muted-foreground mb-1">
                      <span>Progress</span>
                      <span>{test.sections.filter(s => s.completed).length}/{test.sections.length} completed</span>
                    </div>
                    <Progress 
                      value={(test.sections.filter(s => s.completed).length / test.sections.length) * 100} 
                      className="h-2" 
                    />
                  </div>
                )}

                {/* Stats */}
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-4 pt-4 border-t border-border">
                  <span>{test.attempts} attempts</span>
                  <span>Avg: {test.avgScore} band</span>
                </div>

                {/* CTA */}
                <Button
                  variant={test.locked ? "outline" : "hero"}
                  className="w-full"
                  disabled={test.locked}
                >
                  {test.locked ? (
                    <>
                      <Lock className="w-4 h-4 mr-2" />
                      Unlock with Premium
                    </>
                  ) : test.sections.some(s => s.completed) ? (
                    <>
                      Continue Test
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4 mr-2" />
                      Start Test
                    </>
                  )}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
