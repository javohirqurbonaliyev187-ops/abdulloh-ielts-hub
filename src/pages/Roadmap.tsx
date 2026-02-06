import { useState } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, Lock, Flame, Trophy, Star, Target, Calendar, ChevronRight, Gift } from "lucide-react";

const roadmapWeeks = [
  {
    week: 1,
    title: "Foundation Building",
    description: "Establish core skills and test familiarity",
    days: [
      { day: 1, task: "Diagnostic Test - All Skills", xp: 100, completed: true },
      { day: 2, task: "Listening: Question Types Overview", xp: 50, completed: true },
      { day: 3, task: "Reading: Skimming & Scanning", xp: 50, completed: true },
      { day: 4, task: "Writing Task 1: Introduction", xp: 75, completed: true },
      { day: 5, task: "Speaking Part 1: Personal Topics", xp: 60, completed: false },
      { day: 6, task: "Practice Test: Listening", xp: 80, completed: false },
      { day: 7, task: "Review & Vocabulary", xp: 40, completed: false },
    ],
    badge: "🎯 Foundation Badge",
    unlocked: true,
  },
  {
    week: 2,
    title: "Skill Development",
    description: "Deep dive into each skill area",
    days: [
      { day: 8, task: "Listening: Note-Taking Skills", xp: 50, completed: false },
      { day: 9, task: "Reading: Matching Questions", xp: 50, completed: false },
      { day: 10, task: "Writing Task 2: Essay Structure", xp: 75, completed: false },
      { day: 11, task: "Speaking Part 2: Cue Cards", xp: 60, completed: false },
      { day: 12, task: "Practice Test: Reading", xp: 80, completed: false },
      { day: 13, task: "Grammar Focus Day", xp: 50, completed: false },
      { day: 14, task: "Full Mock Test", xp: 150, completed: false },
    ],
    badge: "📚 Scholar Badge",
    unlocked: true,
  },
  {
    week: 3,
    title: "Advanced Techniques",
    description: "Master complex question types",
    days: [
      { day: 15, task: "Listening: Multiple Choice", xp: 50, completed: false },
      { day: 16, task: "Reading: True/False/Not Given", xp: 60, completed: false },
      { day: 17, task: "Writing: Coherence & Cohesion", xp: 75, completed: false },
      { day: 18, task: "Speaking Part 3: Discussion", xp: 70, completed: false },
      { day: 19, task: "Practice Test: Writing", xp: 100, completed: false },
      { day: 20, task: "Vocabulary Expansion", xp: 50, completed: false },
      { day: 21, task: "Review & Practice", xp: 40, completed: false },
    ],
    badge: "⚡ Advanced Badge",
    unlocked: false,
  },
  {
    week: 4,
    title: "Exam Readiness",
    description: "Final preparation and mock exams",
    days: [
      { day: 22, task: "Full Mock Test #1", xp: 150, completed: false },
      { day: 23, task: "Review & Weak Areas", xp: 50, completed: false },
      { day: 24, task: "Full Mock Test #2", xp: 150, completed: false },
      { day: 25, task: "Speaking Practice Session", xp: 80, completed: false },
      { day: 26, task: "Final Review: All Skills", xp: 60, completed: false },
      { day: 27, task: "Full Mock Test #3", xp: 150, completed: false },
      { day: 28, task: "Exam Day Preparation", xp: 50, completed: false },
    ],
    badge: "🏆 Ready Badge",
    unlocked: false,
  },
];

const achievements = [
  { name: "First Steps", description: "Complete your first practice", icon: "🎯", earned: true },
  { name: "Week Warrior", description: "7-day streak", icon: "🔥", earned: true },
  { name: "Listener", description: "Complete 10 listening tests", icon: "🎧", earned: false },
  { name: "Bookworm", description: "Complete 10 reading passages", icon: "📖", earned: false },
  { name: "Wordsmith", description: "Write 10 essays", icon: "✍️", earned: false },
  { name: "Orator", description: "Complete 10 speaking sessions", icon: "🎤", earned: false },
];

export default function Roadmap() {
  const [activeWeek, setActiveWeek] = useState(1);
  const completedDays = 4;
  const totalDays = 28;
  const earnedXP = roadmapWeeks.flatMap(w => w.days).filter(d => d.completed).reduce((acc, d) => acc + d.xp, 0);

  return (
    <AppLayout>
      <main className="pb-12 px-4 md:px-8">
        <div className="container-main pt-4">
          <div className="mb-8">
            <h1 className="text-3xl font-display text-foreground mb-2">
              Your 30-Day <span className="text-gradient">Learning Roadmap</span>
            </h1>
            <p className="text-muted-foreground">
              Follow this structured plan to maximize your IELTS preparation.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-4 mb-8">
            <div className="card-elevated p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">{completedDays}/{totalDays}</div>
                  <div className="text-xs text-muted-foreground">Days Completed</div>
                </div>
              </div>
              <Progress value={(completedDays / totalDays) * 100} className="h-2" />
            </div>
            <div className="card-elevated p-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-warning/10 flex items-center justify-center">
                  <Star className="w-5 h-5 text-warning" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">{earnedXP}</div>
                  <div className="text-xs text-muted-foreground">XP Earned</div>
                </div>
              </div>
            </div>
            <div className="card-elevated p-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center">
                  <Flame className="w-5 h-5 text-success" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">4</div>
                  <div className="text-xs text-muted-foreground">Day Streak</div>
                </div>
              </div>
            </div>
            <div className="card-elevated p-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-info/10 flex items-center justify-center">
                  <Trophy className="w-5 h-5 text-info" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">2</div>
                  <div className="text-xs text-muted-foreground">Badges Earned</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Weekly Roadmap */}
            <div className="lg:col-span-2 space-y-6">
              {/* Week Tabs */}
              <div className="flex gap-2 overflow-x-auto pb-2">
                {roadmapWeeks.map((week) => (
                  <button
                    key={week.week}
                    onClick={() => week.unlocked && setActiveWeek(week.week)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${
                      activeWeek === week.week
                        ? "bg-accent text-accent-foreground"
                        : week.unlocked
                        ? "bg-muted text-foreground hover:bg-muted/80"
                        : "bg-muted/50 text-muted-foreground cursor-not-allowed"
                    }`}
                  >
                    {!week.unlocked && <Lock className="w-4 h-4" />}
                    Week {week.week}
                  </button>
                ))}
              </div>

              {/* Active Week Content */}
              {roadmapWeeks.filter(w => w.week === activeWeek).map((week) => (
                <div key={week.week} className="card-elevated p-6">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h2 className="text-xl font-display text-foreground mb-1">
                        {week.title}
                      </h2>
                      <p className="text-muted-foreground">{week.description}</p>
                    </div>
                    <div className="text-2xl">{week.badge.split(" ")[0]}</div>
                  </div>

                  <div className="space-y-3">
                    {week.days.map((day) => (
                      <div
                        key={day.day}
                        className={`flex items-center gap-4 p-4 rounded-lg transition-all ${
                          day.completed
                            ? "bg-success/5 border border-success/20"
                            : "bg-muted/50 hover:bg-muted"
                        }`}
                      >
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          day.completed ? "bg-success text-white" : "bg-muted-foreground/20"
                        }`}>
                          {day.completed ? (
                            <CheckCircle className="w-5 h-5" />
                          ) : (
                            <span className="text-sm font-medium text-muted-foreground">
                              {day.day}
                            </span>
                          )}
                        </div>
                        <div className="flex-1">
                          <p className={`font-medium ${day.completed ? "text-success" : "text-foreground"}`}>
                            {day.task}
                          </p>
                          <p className="text-xs text-muted-foreground">Day {day.day}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className={`text-sm font-medium ${day.completed ? "text-success" : "text-accent"}`}>
                            +{day.xp} XP
                          </span>
                          {!day.completed && (
                            <Button variant="ghost" size="sm">
                              <ChevronRight className="w-4 h-4" />
                            </Button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Today's Focus */}
              <div className="card-elevated p-5 border-2 border-accent/20">
                <div className="flex items-center gap-2 mb-4">
                  <Target className="w-5 h-5 text-accent" />
                  <h3 className="font-semibold text-foreground">Today's Focus</h3>
                </div>
                <div className="p-4 rounded-lg bg-accent/5 mb-4">
                  <p className="font-medium text-foreground mb-1">
                    Speaking Part 1: Personal Topics
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Practice answering questions about yourself, your hobbies, and daily routines.
                  </p>
                </div>
                <Button variant="hero" className="w-full">
                  Start Today's Task
                </Button>
              </div>

              {/* Achievements */}
              <div className="card-elevated p-5">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-foreground">Achievements</h3>
                  <Gift className="w-5 h-5 text-muted-foreground" />
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className={`aspect-square rounded-lg flex flex-col items-center justify-center p-2 ${
                        achievement.earned
                          ? "bg-accent/10 border border-accent/20"
                          : "bg-muted/50 opacity-50"
                      }`}
                      title={achievement.description}
                    >
                      <span className="text-2xl mb-1">{achievement.icon}</span>
                      <span className="text-xs text-center text-muted-foreground">
                        {achievement.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Weekly Badges */}
              <div className="card-elevated p-5">
                <h3 className="font-semibold text-foreground mb-4">Weekly Badges</h3>
                <div className="space-y-3">
                  {roadmapWeeks.map((week) => (
                    <div
                      key={week.week}
                      className={`flex items-center gap-3 p-3 rounded-lg ${
                        week.unlocked ? "bg-muted/50" : "bg-muted/30 opacity-50"
                      }`}
                    >
                      <span className="text-xl">{week.badge.split(" ")[0]}</span>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-foreground">
                          {week.badge.replace(week.badge.split(" ")[0], "").trim()}
                        </p>
                        <p className="text-xs text-muted-foreground">Week {week.week}</p>
                      </div>
                      {!week.unlocked && <Lock className="w-4 h-4 text-muted-foreground" />}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </AppLayout>
  );
}
