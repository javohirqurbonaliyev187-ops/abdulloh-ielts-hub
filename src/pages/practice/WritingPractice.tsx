import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  PenTool,
  Clock,
  CheckCircle,
  AlertCircle,
  Lightbulb,
  Send,
  RotateCcw,
  BookOpen,
  ChevronRight,
  Sparkles,
} from "lucide-react";

const writingTasks = [
  { id: 1, type: "Task 1", title: "Bar Chart Analysis", completed: true, score: 6.5 },
  { id: 2, type: "Task 2", title: "Opinion Essay: Technology", completed: true, score: 7.0 },
  { id: 3, type: "Task 1", title: "Line Graph Description", completed: false },
  { id: 4, type: "Task 2", title: "Discussion Essay: Education", completed: false },
  { id: 5, type: "Task 1", title: "Process Diagram", completed: false },
];

const currentTask = {
  id: 3,
  type: "Task 1",
  title: "Line Graph Description",
  instructions: `The graph below shows the number of tourists visiting a city from 2010 to 2020.

Summarise the information by selecting and reporting the main features, and make comparisons where relevant.

Write at least 150 words.`,
  timeLimit: 20,
  wordLimit: 150,
  tips: [
    "Start with an overview of the main trends",
    "Include specific data to support your points",
    "Use a variety of vocabulary for describing trends",
    "Compare and contrast different data points",
  ],
};

const aiFeedback = {
  overallBand: 7.0,
  criteria: [
    { name: "Task Achievement", score: 7.0, feedback: "Good coverage of main features with clear overview." },
    { name: "Coherence & Cohesion", score: 7.0, feedback: "Well-organized with effective use of cohesive devices." },
    { name: "Lexical Resource", score: 6.5, feedback: "Good vocabulary range but some repetition noted." },
    { name: "Grammar", score: 7.0, feedback: "Good control with only minor errors." },
  ],
  suggestions: [
    "Consider using more varied vocabulary for 'increase' (e.g., surge, climb, rise)",
    "Add more specific data comparisons between years",
    "The conclusion could be more concise",
  ],
};

export default function WritingPractice() {
  const [essay, setEssay] = useState("");
  const [timeLeft, setTimeLeft] = useState(20 * 60); // 20 minutes in seconds
  const [showFeedback, setShowFeedback] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const wordCount = essay.trim().split(/\s+/).filter(Boolean).length;

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setShowFeedback(true);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20 pb-12 px-4 md:px-8">
        <div className="container-main">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar - Task List */}
            <div className="lg:col-span-1">
              <div className="card-elevated p-4 sticky top-24">
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <PenTool className="w-5 h-5 text-writing" />
                  Writing Tasks
                </h3>
                <div className="space-y-2">
                  {writingTasks.map((task) => (
                    <button
                      key={task.id}
                      className={`w-full flex items-center justify-between p-3 rounded-lg transition-all text-left ${
                        task.id === 3
                          ? "bg-writing/10 border border-writing/30"
                          : "hover:bg-muted"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        {task.completed ? (
                          <CheckCircle className="w-5 h-5 text-success" />
                        ) : (
                          <div className="w-5 h-5 rounded-full border-2 border-muted-foreground/30" />
                        )}
                        <div>
                          <p className="text-xs text-muted-foreground">{task.type}</p>
                          <p className="text-sm font-medium text-foreground">
                            {task.title}
                          </p>
                        </div>
                      </div>
                      {task.score && (
                        <span className="text-sm font-semibold text-success">
                          {task.score}
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3 space-y-6">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-sm font-medium text-writing">{currentTask.type}</span>
                  <h1 className="text-2xl font-display text-foreground">
                    {currentTask.title}
                  </h1>
                </div>
                <div className="flex items-center gap-4">
                  <div className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                    timeLeft < 300 ? "bg-destructive/10 text-destructive" : "bg-muted text-foreground"
                  }`}>
                    <Clock className="w-4 h-4" />
                    <span className="font-mono font-semibold">{formatTime(timeLeft)}</span>
                  </div>
                </div>
              </div>

              {/* Task Instructions */}
              <div className="card-elevated p-6 border-2 border-writing/20">
                <h3 className="font-semibold text-foreground mb-3">Instructions</h3>
                <p className="text-foreground whitespace-pre-line leading-relaxed">
                  {currentTask.instructions}
                </p>
                
                {/* Image placeholder for graph */}
                <div className="mt-4 p-8 rounded-lg bg-muted/50 border border-border flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <BookOpen className="w-12 h-12 mx-auto mb-2 opacity-50" />
                    <p className="text-sm">Line graph showing tourist numbers 2010-2020</p>
                  </div>
                </div>
              </div>

              {/* Tips */}
              <div className="p-4 rounded-lg bg-writing/5 border border-writing/20">
                <div className="flex items-center gap-2 mb-2">
                  <Lightbulb className="w-4 h-4 text-writing" />
                  <span className="font-medium text-foreground text-sm">Writing Tips</span>
                </div>
                <ul className="grid md:grid-cols-2 gap-2">
                  {currentTask.tips.map((tip, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-writing mt-0.5 shrink-0" />
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Writing Area */}
              <div className="card-elevated p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-foreground">Your Response</h3>
                  <div className={`text-sm ${
                    wordCount >= currentTask.wordLimit ? "text-success" : "text-muted-foreground"
                  }`}>
                    {wordCount} / {currentTask.wordLimit}+ words
                  </div>
                </div>

                <Textarea
                  placeholder="Start writing your response here..."
                  className="min-h-[300px] resize-none text-base leading-relaxed"
                  value={essay}
                  onChange={(e) => setEssay(e.target.value)}
                />

                <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                  <Button variant="outline" onClick={() => setEssay("")}>
                    <RotateCcw className="w-4 h-4 mr-2" />
                    Clear
                  </Button>
                  <Button
                    variant="writing"
                    onClick={handleSubmit}
                    disabled={wordCount < 50 || isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Sparkles className="w-4 h-4 mr-2 animate-spin" />
                        Analyzing...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Submit for AI Feedback
                      </>
                    )}
                  </Button>
                </div>
              </div>

              {/* AI Feedback */}
              {showFeedback && (
                <div className="card-elevated p-6 border-2 border-success/30 animate-slide-up">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-success" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl text-foreground">AI Feedback</h3>
                      <p className="text-muted-foreground">Estimated Band Score</p>
                    </div>
                    <div className="ml-auto text-right">
                      <div className="text-4xl font-bold text-success">{aiFeedback.overallBand}</div>
                      <div className="text-xs text-muted-foreground">Overall Band</div>
                    </div>
                  </div>

                  {/* Criteria Breakdown */}
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    {aiFeedback.criteria.map((criterion, index) => (
                      <div key={index} className="p-4 rounded-lg bg-muted/30">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium text-foreground">{criterion.name}</span>
                          <span className="text-lg font-bold text-foreground">{criterion.score}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{criterion.feedback}</p>
                      </div>
                    ))}
                  </div>

                  {/* Suggestions */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-writing" />
                      Suggestions for Improvement
                    </h4>
                    <ul className="space-y-2">
                      {aiFeedback.suggestions.map((suggestion, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <ChevronRight className="w-4 h-4 text-writing mt-0.5 shrink-0" />
                          {suggestion}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
