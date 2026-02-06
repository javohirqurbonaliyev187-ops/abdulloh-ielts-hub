import { useState } from "react";
import { Link } from "react-router-dom";
import { AppLayout } from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Headphones, BookOpen, PenTool, Mic, TrendingUp, TrendingDown,
  Clock, Target, Calendar, Trophy, Flame, ChevronRight, Play, Star,
} from "lucide-react";

// Mock user data
const userData = {
  name: "Abdulloh",
  level: "Intermediate",
  streak: 7,
  xp: 2450,
  testsCompleted: 24,
  bestScore: 7.5,
  targetScore: 8.0,
};

const skillData = [
  { id: "listening", name: "Listening", icon: Headphones, score: 7.0, prevScore: 6.5, trend: "up", progress: 70, avgTime: "28 min", testsCompleted: 8, color: "listening" },
  { id: "reading", name: "Reading", icon: BookOpen, score: 7.5, prevScore: 7.0, trend: "up", progress: 75, avgTime: "55 min", testsCompleted: 6, color: "reading" },
  { id: "writing", name: "Writing", icon: PenTool, score: 6.5, prevScore: 6.5, trend: "same", progress: 55, avgTime: "42 min", testsCompleted: 5, color: "writing" },
  { id: "speaking", name: "Speaking", icon: Mic, score: 7.0, prevScore: 7.5, trend: "down", progress: 65, avgTime: "15 min", testsCompleted: 5, color: "speaking" },
];

const recentActivity = [
  { type: "listening", title: "Practice Test #8", score: 7.5, date: "Today" },
  { type: "writing", title: "Task 2 Essay", score: 6.5, date: "Yesterday" },
  { type: "reading", title: "Academic Passage", score: 8.0, date: "2 days ago" },
  { type: "speaking", title: "Part 2 Practice", score: 7.0, date: "3 days ago" },
];

const upcomingTasks = [
  { title: "Complete Listening Test 9", skill: "listening", xp: 50 },
  { title: "Write Task 1 Report", skill: "writing", xp: 75 },
  { title: "Speaking Practice Session", skill: "speaking", xp: 60 },
];

export default function Dashboard() {
  const overallScore = (
    skillData.reduce((acc, skill) => acc + skill.score, 0) / skillData.length
  ).toFixed(1);

  return (
    <AppLayout>
      <main className="pb-12 px-4 md:px-8">
        <div className="container-main pt-4">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-display text-foreground mb-2">
              Welcome back, <span className="text-gradient">{userData.name}</span>!
            </h1>
            <p className="text-muted-foreground">
              Continue your IELTS journey and track your progress.
            </p>
          </div>

          {/* Top Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="card-elevated p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Target className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">{overallScore}</div>
                  <div className="text-xs text-muted-foreground">Overall Band</div>
                </div>
              </div>
            </div>
            <div className="card-elevated p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center">
                  <Trophy className="w-5 h-5 text-success" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">{userData.bestScore}</div>
                  <div className="text-xs text-muted-foreground">Best Score</div>
                </div>
              </div>
            </div>
            <div className="card-elevated p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-warning/10 flex items-center justify-center">
                  <Flame className="w-5 h-5 text-warning" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">{userData.streak}</div>
                  <div className="text-xs text-muted-foreground">Day Streak</div>
                </div>
              </div>
            </div>
            <div className="card-elevated p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-info/10 flex items-center justify-center">
                  <Star className="w-5 h-5 text-info" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">{userData.xp}</div>
                  <div className="text-xs text-muted-foreground">Total XP</div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-display text-foreground">Your Skills</h2>
                <Link to="/practice" className="text-sm text-accent hover:underline flex items-center gap-1">
                  View All <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {skillData.map((skill) => (
                  <Link key={skill.id} to={`/practice/${skill.id}`}
                    className={`card-elevated p-5 border-l-4 border-${skill.color} hover:shadow-prominent transition-all group`}>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-12 h-12 rounded-lg bg-${skill.color}/10 flex items-center justify-center`}>
                          <skill.icon className={`w-6 h-6 text-${skill.color}`} />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">{skill.name}</h3>
                          <p className="text-xs text-muted-foreground">{skill.testsCompleted} tests completed</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1">
                          <span className="text-2xl font-bold text-foreground">{skill.score}</span>
                          {skill.trend === "up" && <TrendingUp className="w-4 h-4 text-success" />}
                          {skill.trend === "down" && <TrendingDown className="w-4 h-4 text-destructive" />}
                        </div>
                        <span className="text-xs text-muted-foreground">Band Score</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground">Progress to Target</span>
                        <span className="font-medium text-foreground">{skill.progress}%</span>
                      </div>
                      <Progress value={skill.progress} className="h-2" />
                    </div>
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Clock className="w-3 h-3" /><span>Avg: {skill.avgTime}</span>
                      </div>
                      <Button variant="ghost" size="sm" className="text-xs group-hover:text-accent">
                        Practice <ChevronRight className="w-3 h-3 ml-1" />
                      </Button>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="card-elevated p-5">
                <h3 className="font-semibold text-foreground mb-4">Target Progress</h3>
                <div className="flex items-center justify-center mb-4">
                  <div className="relative w-32 h-32">
                    <svg className="w-full h-full -rotate-90">
                      <circle cx="64" cy="64" r="56" stroke="currentColor" strokeWidth="12" fill="none" className="text-muted" />
                      <circle cx="64" cy="64" r="56" stroke="currentColor" strokeWidth="12" fill="none" className="text-accent"
                        strokeDasharray={`${(parseFloat(overallScore) / userData.targetScore) * 352} 352`} strokeLinecap="round" />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-3xl font-bold text-foreground">{overallScore}</span>
                      <span className="text-xs text-muted-foreground">/ {userData.targetScore}</span>
                    </div>
                  </div>
                </div>
                <p className="text-center text-sm text-muted-foreground">
                  You're {(userData.targetScore - parseFloat(overallScore)).toFixed(1)} bands away from your target!
                </p>
              </div>

              <div className="card-elevated p-5">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-foreground">Today's Tasks</h3>
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                </div>
                <div className="space-y-3">
                  {upcomingTasks.map((task, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors cursor-pointer">
                      <div className={`w-8 h-8 rounded-lg bg-${task.skill}/10 flex items-center justify-center`}>
                        <Play className={`w-4 h-4 text-${task.skill}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground truncate">{task.title}</p>
                        <p className="text-xs text-muted-foreground">+{task.xp} XP</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card-elevated p-5">
                <h3 className="font-semibold text-foreground mb-4">Recent Activity</h3>
                <div className="space-y-3">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                      <div>
                        <p className="text-sm font-medium text-foreground">{activity.title}</p>
                        <p className="text-xs text-muted-foreground">{activity.date}</p>
                      </div>
                      <div className="text-sm font-semibold text-foreground">{activity.score}</div>
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
