import { useState } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { Languages, BookOpen, ChevronRight } from "lucide-react";

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const levels = [
  { id: 1, name: "Level 1 – Foundation", words: 200, color: "hsl(142, 76%, 36%)" },
  { id: 2, name: "Level 2 – Elementary", words: 300, color: "hsl(217, 91%, 60%)" },
  { id: 3, name: "Level 3 – Intermediate", words: 400, color: "hsl(280, 65%, 60%)" },
  { id: 4, name: "Level 4 – Upper-Int", words: 350, color: "hsl(38, 92%, 50%)" },
  { id: 5, name: "Level 5 – Advanced", words: 300, color: "hsl(24, 95%, 53%)" },
  { id: 6, name: "Level 6 – Academic", words: 250, color: "hsl(0, 72%, 51%)" },
];

const sampleWords = [
  { word: "Abandon", definition: "To leave completely and finally", example: "Many people abandon their goals.", ielts: "Common in Reading passages about social trends." },
  { word: "Abstract", definition: "Existing in thought or as an idea", example: "The concept is quite abstract.", ielts: "Frequently appears in Academic Reading." },
  { word: "Accumulate", definition: "To gather or collect over time", example: "Snow began to accumulate on the roads.", ielts: "Used in Writing Task 1 graph descriptions." },
];

export default function Vocabulary() {
  const [activeLetter, setActiveLetter] = useState("A");
  const [activeLevel, setActiveLevel] = useState(1);

  return (
    <AppLayout>
      <main className="pb-12">
        <section className="section-padding bg-gradient-to-b from-background to-muted/30">
          <div className="container-main text-center">
            <h1 className="text-4xl md:text-5xl font-display text-foreground mb-4">
              IELTS <span className="text-gradient">Vocabulary</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Master essential IELTS vocabulary organized A–Z across 6 levels with definitions, examples, and IELTS usage context.
            </p>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-main">
            {/* Level Selector */}
            <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
              {levels.map((level) => (
                <button
                  key={level.id}
                  onClick={() => setActiveLevel(level.id)}
                  className={`px-4 py-2 rounded-lg font-medium text-sm whitespace-nowrap transition-all ${
                    activeLevel === level.id
                      ? "text-accent-foreground"
                      : "bg-muted text-foreground hover:bg-muted/80"
                  }`}
                  style={activeLevel === level.id ? { backgroundColor: level.color, color: "white" } : {}}
                >
                  {level.name} ({level.words})
                </button>
              ))}
            </div>

            {/* A-Z Navigator */}
            <div className="flex flex-wrap gap-1.5 mb-8">
              {alphabet.map((letter) => (
                <button
                  key={letter}
                  onClick={() => setActiveLetter(letter)}
                  className={`w-9 h-9 rounded-lg text-sm font-bold transition-all ${
                    activeLetter === letter
                      ? "bg-accent text-accent-foreground"
                      : "bg-muted text-foreground hover:bg-muted/80"
                  }`}
                >
                  {letter}
                </button>
              ))}
            </div>

            {/* Word List */}
            <div className="space-y-4">
              {sampleWords.map((item) => (
                <div key={item.word} className="card-elevated p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Languages className="w-6 h-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-foreground mb-1">{item.word}</h3>
                      <p className="text-muted-foreground mb-2">{item.definition}</p>
                      <p className="text-sm italic text-muted-foreground mb-2">"{item.example}"</p>
                      <div className="flex items-center gap-2 text-xs">
                        <BookOpen className="w-3.5 h-3.5 text-accent" />
                        <span className="text-accent font-medium">{item.ielts}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </AppLayout>
  );
}
