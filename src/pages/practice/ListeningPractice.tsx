import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Headphones,
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  Clock,
  CheckCircle,
  ChevronRight,
  HelpCircle,
  BookOpen,
} from "lucide-react";

// Mock listening test data
const listeningTests = [
  { id: 1, title: "Practice Test 1", sections: 4, completed: true, score: 7.5 },
  { id: 2, title: "Practice Test 2", sections: 4, completed: true, score: 7.0 },
  { id: 3, title: "Practice Test 3", sections: 4, completed: false },
  { id: 4, title: "Practice Test 4", sections: 4, completed: false },
  { id: 5, title: "Practice Test 5", sections: 4, completed: false },
];

const currentTest = {
  title: "Practice Test 3",
  section: 1,
  totalSections: 4,
  audioLength: "8:45",
  currentTime: "2:30",
  progress: 28,
  questions: [
    {
      id: 1,
      type: "fill-blank",
      text: "The conference will be held at the _____ Hotel.",
      answer: "",
      options: null,
    },
    {
      id: 2,
      type: "multiple-choice",
      text: "What time does the registration open?",
      answer: "",
      options: ["8:00 AM", "8:30 AM", "9:00 AM", "9:30 AM"],
    },
    {
      id: 3,
      type: "fill-blank",
      text: "Participants should bring their _____ for identification.",
      answer: "",
      options: null,
    },
    {
      id: 4,
      type: "multiple-choice",
      text: "How long is the lunch break?",
      answer: "",
      options: ["30 minutes", "45 minutes", "1 hour", "1.5 hours"],
    },
    {
      id: 5,
      type: "fill-blank",
      text: "The keynote speaker is Dr. _____ from Harvard University.",
      answer: "",
      options: null,
    },
  ],
};

export default function ListeningPractice() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showTranscript, setShowTranscript] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20 pb-12 px-4 md:px-8">
        <div className="container-main">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar - Test List */}
            <div className="lg:col-span-1">
              <div className="card-elevated p-4 sticky top-24">
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Headphones className="w-5 h-5 text-listening" />
                  Listening Tests
                </h3>
                <div className="space-y-2">
                  {listeningTests.map((test) => (
                    <button
                      key={test.id}
                      className={`w-full flex items-center justify-between p-3 rounded-lg transition-all text-left ${
                        test.id === 3
                          ? "bg-listening/10 border border-listening/30"
                          : "hover:bg-muted"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        {test.completed ? (
                          <CheckCircle className="w-5 h-5 text-success" />
                        ) : (
                          <div className="w-5 h-5 rounded-full border-2 border-muted-foreground/30" />
                        )}
                        <div>
                          <p className="text-sm font-medium text-foreground">
                            {test.title}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {test.sections} sections
                          </p>
                        </div>
                      </div>
                      {test.score && (
                        <span className="text-sm font-semibold text-success">
                          {test.score}
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
                  <h1 className="text-2xl font-display text-foreground">
                    {currentTest.title}
                  </h1>
                  <p className="text-muted-foreground">
                    Section {currentTest.section} of {currentTest.totalSections}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{currentTest.audioLength}</span>
                  </div>
                  <Button variant="outline" size="sm" onClick={() => setShowTranscript(!showTranscript)}>
                    <BookOpen className="w-4 h-4 mr-2" />
                    Transcript
                  </Button>
                </div>
              </div>

              {/* Audio Player */}
              <div className="card-elevated p-6 border-2 border-listening/20">
                <div className="flex flex-col gap-4">
                  {/* Progress Bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>{currentTest.currentTime}</span>
                      <span>{currentTest.audioLength}</span>
                    </div>
                    <Progress value={currentTest.progress} className="h-2" />
                  </div>

                  {/* Controls */}
                  <div className="flex items-center justify-center gap-4">
                    <Button variant="ghost" size="icon">
                      <SkipBack className="w-5 h-5" />
                    </Button>
                    <Button
                      variant="listening"
                      size="lg"
                      className="w-14 h-14 rounded-full"
                      onClick={() => setIsPlaying(!isPlaying)}
                    >
                      {isPlaying ? (
                        <Pause className="w-6 h-6" />
                      ) : (
                        <Play className="w-6 h-6 ml-1" />
                      )}
                    </Button>
                    <Button variant="ghost" size="icon">
                      <SkipForward className="w-5 h-5" />
                    </Button>
                    <div className="flex items-center gap-2 ml-4">
                      <Volume2 className="w-4 h-4 text-muted-foreground" />
                      <input
                        type="range"
                        className="w-20 accent-listening"
                        defaultValue={80}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Transcript (collapsible) */}
              {showTranscript && (
                <div className="card-elevated p-6 bg-muted/30">
                  <h3 className="font-semibold text-foreground mb-3">Transcript</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Welcome to the International Business Conference 2024. The conference will be held 
                    at the Grand Hyatt Hotel in downtown Manhattan. Registration opens at 8:30 AM 
                    in the main lobby. Please remember to bring your confirmation email and a valid 
                    photo ID for identification purposes. The morning sessions will cover topics 
                    including sustainable business practices and digital transformation...
                  </p>
                </div>
              )}

              {/* Questions */}
              <div className="card-elevated p-6">
                <h3 className="font-semibold text-foreground mb-6 flex items-center gap-2">
                  Questions 1-5
                  <HelpCircle className="w-4 h-4 text-muted-foreground" />
                </h3>

                <div className="space-y-6">
                  {currentTest.questions.map((question, index) => (
                    <div key={question.id} className="p-4 rounded-lg bg-muted/30 border border-border">
                      <div className="flex gap-3">
                        <span className="w-6 h-6 rounded-full bg-listening/10 text-listening flex items-center justify-center text-sm font-semibold">
                          {question.id}
                        </span>
                        <div className="flex-1">
                          <p className="text-foreground mb-3">{question.text}</p>
                          
                          {question.type === "fill-blank" ? (
                            <input
                              type="text"
                              placeholder="Type your answer..."
                              className="input-field max-w-md"
                              value={answers[question.id] || ""}
                              onChange={(e) =>
                                setAnswers({ ...answers, [question.id]: e.target.value })
                              }
                            />
                          ) : (
                            <div className="grid grid-cols-2 gap-2">
                              {question.options?.map((option, i) => (
                                <button
                                  key={i}
                                  onClick={() =>
                                    setAnswers({ ...answers, [question.id]: option })
                                  }
                                  className={`p-3 rounded-lg text-left text-sm transition-all ${
                                    answers[question.id] === option
                                      ? "bg-listening text-white"
                                      : "bg-background border border-border hover:border-listening"
                                  }`}
                                >
                                  <span className="font-medium mr-2">
                                    {String.fromCharCode(65 + i)}.
                                  </span>
                                  {option}
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
                  <Button variant="outline" disabled>
                    Previous Section
                  </Button>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4].map((section) => (
                      <button
                        key={section}
                        className={`w-8 h-8 rounded-lg text-sm font-medium ${
                          section === currentTest.section
                            ? "bg-listening text-white"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {section}
                      </button>
                    ))}
                  </div>
                  <Button variant="listening">
                    Next Section
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
