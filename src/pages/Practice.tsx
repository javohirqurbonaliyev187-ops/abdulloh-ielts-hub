import { Link } from "react-router-dom";
import { AppLayout } from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { 
  Headphones, BookOpen, PenTool, Mic, ArrowRight, CheckCircle, Clock, Target, Trophy, Play
} from "lucide-react";

const skillModules = [
  {
    id: "listening", name: "Listening", icon: Headphones, color: "listening",
    description: "Develop your listening comprehension with authentic audio passages, native speaker recordings, and strategic test-taking techniques.",
    stats: { tests: 40, minutes: 30, avgScore: 7.0 },
    features: ["40+ Practice Tests with Transcripts", "Native Speaker Audio", "Time Management Strategies", "Note-Taking Techniques", "Question Type Mastery"],
    tips: "Focus on keywords, don't get stuck on one answer, and keep writing while listening.",
  },
  {
    id: "reading", name: "Reading", icon: BookOpen, color: "reading",
    description: "Master academic and general reading passages with proven skimming, scanning, and comprehension strategies.",
    stats: { tests: 60, minutes: 60, avgScore: 7.5 },
    features: ["60+ Academic & General Passages", "Vocabulary Building Tools", "Skimming & Scanning Practice", "All Question Types Covered", "Detailed Explanations"],
    tips: "Skim first, locate keywords, and manage your time across all passages equally.",
  },
  {
    id: "writing", name: "Writing", icon: PenTool, color: "writing",
    description: "Develop coherent essays with AI-powered feedback on grammar, vocabulary, coherence, and task achievement.",
    stats: { tests: 40, minutes: 60, avgScore: 6.5 },
    features: ["Task 1: Reports, Letters, Graphs", "Task 2: Essay Writing", "AI Grammar & Structure Feedback", "Band Score Estimation", "Model Answer Library"],
    tips: "Plan before writing, use varied sentence structures, and always proofread your work.",
  },
  {
    id: "speaking", name: "Speaking", icon: Mic, color: "speaking",
    description: "Build fluency and confidence with voice recording, pronunciation analysis, and authentic speaking prompts.",
    stats: { tests: 40, minutes: 15, avgScore: 7.0 },
    features: ["All 3 Parts Covered", "Voice Recording & Playback", "AI Pronunciation Feedback", "Fluency & Vocabulary Scoring", "Sample Responses"],
    tips: "Speak naturally, extend your answers, and practice with various topics daily.",
  },
];

export default function Practice() {
  return (
    <AppLayout>
      <main className="pb-12">
        <section className="section-padding bg-gradient-to-b from-background to-muted/30">
          <div className="container-main text-center">
            <h1 className="text-4xl md:text-5xl font-display text-foreground mb-4">
              Practice <span className="text-gradient">IELTS Skills</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Choose a skill module to start practicing. Each module includes comprehensive practice materials, strategies, and AI-powered feedback.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              {skillModules.map((skill) => (
                <Button key={skill.id} variant={skill.color as any} size="lg" asChild>
                  <a href={`#${skill.id}`}><skill.icon className="w-5 h-5 mr-2" />{skill.name}</a>
                </Button>
              ))}
            </div>
          </div>
        </section>

        {skillModules.map((skill, index) => (
          <section key={skill.id} id={skill.id} className={`section-padding ${index % 2 === 0 ? "" : "bg-muted/30"}`}>
            <div className="container-main">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className={`space-y-6 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="flex items-center gap-4">
                    <div className={`w-16 h-16 rounded-xl bg-${skill.color}/10 flex items-center justify-center`}>
                      <skill.icon className={`w-8 h-8 text-${skill.color}`} />
                    </div>
                    <div>
                      <h2 className="text-3xl font-display text-foreground">{skill.name}</h2>
                      <p className="text-muted-foreground">Module</p>
                    </div>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">{skill.description}</p>
                  <div className="flex gap-6">
                    <div className="flex items-center gap-2"><Target className={`w-5 h-5 text-${skill.color}`} /><span className="text-sm"><strong>{skill.stats.tests}</strong> Tests</span></div>
                    <div className="flex items-center gap-2"><Clock className={`w-5 h-5 text-${skill.color}`} /><span className="text-sm"><strong>{skill.stats.minutes}</strong> min each</span></div>
                    <div className="flex items-center gap-2"><Trophy className={`w-5 h-5 text-${skill.color}`} /><span className="text-sm">Avg: <strong>{skill.stats.avgScore}</strong></span></div>
                  </div>
                  <ul className="space-y-3">
                    {skill.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <CheckCircle className={`w-5 h-5 text-${skill.color}`} /><span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className={`p-4 rounded-lg bg-${skill.color}/5 border border-${skill.color}/20`}>
                    <p className="text-sm"><strong className={`text-${skill.color}`}>Pro Tip:</strong> <span className="text-muted-foreground">{skill.tips}</span></p>
                  </div>
                  <div className="flex gap-4">
                    <Button variant={skill.color as any} size="lg" asChild>
                      <Link to={`/practice/${skill.id}`}><Play className="w-5 h-5 mr-2" />Start Practice</Link>
                    </Button>
                    <Button variant="outline" size="lg" asChild>
                      <Link to={`/tests/${skill.id}`}>Take Full Test<ArrowRight className="w-4 h-4 ml-2" /></Link>
                    </Button>
                  </div>
                </div>
                <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className={`card-elevated p-8 border-2 border-${skill.color}/20`}>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {[1, 2, 3, 4].map((item) => (
                        <div key={item} className={`aspect-square rounded-lg bg-${skill.color}/5 flex items-center justify-center`}>
                          <div className={`w-12 h-12 rounded-full bg-${skill.color}/10 flex items-center justify-center`}>
                            <span className={`text-lg font-bold text-${skill.color}`}>{item}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="text-center">
                      <p className={`text-sm font-medium text-${skill.color}`}>Test Sections</p>
                      <p className="text-xs text-muted-foreground mt-1">Complete all sections to unlock advanced tests</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </main>
    </AppLayout>
  );
}
