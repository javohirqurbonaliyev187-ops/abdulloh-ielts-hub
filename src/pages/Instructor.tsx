import { useState } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  MessageCircle,
  Send,
  Star,
  Lock,
  Bot,
  User,
} from "lucide-react";

const FREE_LIMIT = 5;

type Message = { role: "bot" | "user"; text: string };

const sampleMessages: Message[] = [
  { role: "bot", text: "Hello! I'm your IELTS AI Instructor. Ask me any question about IELTS preparation, strategies, or practice!" },
];

export default function Instructor() {
  const [messages, setMessages] = useState(sampleMessages);
  const [input, setInput] = useState("");
  const [questionsUsed, setQuestionsUsed] = useState(2);

  const remaining = FREE_LIMIT - questionsUsed;
  const limitReached = remaining <= 0;

  const handleSend = () => {
    if (!input.trim() || limitReached) return;
    setMessages([...messages, { role: "user" as const, text: input }]);
    setQuestionsUsed((q) => q + 1);
    setInput("");
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { role: "bot" as const, text: "That's a great question! In IELTS Writing Task 2, you should always plan your essay before writing. Aim for a clear introduction, 2 body paragraphs, and a conclusion. Use varied vocabulary and complex sentence structures to score higher." },
      ]);
    }, 1000);
  };

  return (
    <AppLayout>
      <main className="pb-12">
        <section className="section-padding">
          <div className="container-main max-w-3xl">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-4xl font-display text-foreground mb-2">
                Ask an <span className="text-gradient">Instructor</span>
              </h1>
              <p className="text-muted-foreground">
                AI-powered IELTS instructor – get instant answers to your questions
              </p>
              <div className="mt-4 flex justify-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-accent" />
                  {remaining} free questions left
                </span>
              </div>
            </div>

            {/* Chat Area */}
            <div className="card-elevated p-0 overflow-hidden">
              <div className="h-96 overflow-y-auto p-5 space-y-4">
                {messages.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        msg.role === "bot" ? "bg-accent/10" : "bg-primary/10"
                      }`}
                    >
                      {msg.role === "bot" ? (
                        <Bot className="w-4 h-4 text-accent" />
                      ) : (
                        <User className="w-4 h-4 text-primary" />
                      )}
                    </div>
                    <div
                      className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm ${
                        msg.role === "bot"
                          ? "bg-muted text-foreground rounded-tl-none"
                          : "bg-primary text-primary-foreground rounded-tr-none"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
              </div>

              {/* Input */}
              <div className="p-4 border-t border-border">
                {limitReached ? (
                  <div className="text-center space-y-3">
                    <div className="flex items-center justify-center gap-2 text-muted-foreground">
                      <Lock className="w-4 h-4" />
                      <span className="text-sm">Free limit reached</span>
                    </div>
                    <div className="flex gap-3 justify-center">
                      <Button variant="hero" size="sm">
                        Monthly – 109,999 so'm
                      </Button>
                      <Button variant="outline" size="sm">
                        Yearly – 1,109,999 so'm
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="flex gap-2">
                    <Input
                      placeholder="Ask your IELTS question..."
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && handleSend()}
                      className="flex-1"
                    />
                    <Button onClick={handleSend} variant="hero" size="icon">
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                )}
              </div>
            </div>

            {/* Pricing Cards */}
            <div className="grid md:grid-cols-2 gap-4 mt-8">
              <div className="card-elevated p-6">
                <h3 className="font-display text-lg text-foreground mb-2">Monthly Plan</h3>
                <p className="text-3xl font-bold text-foreground mb-1">109,999 <span className="text-sm font-normal text-muted-foreground">so'm/mo</span></p>
                <p className="text-sm text-muted-foreground mb-4">Unlimited questions, priority responses</p>
                <Button variant="hero" className="w-full">Subscribe Monthly</Button>
              </div>
              <div className="card-elevated p-6 border-2 border-accent/30">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-display text-lg text-foreground">Yearly Plan</h3>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-accent text-accent-foreground font-bold">SAVE 15%</span>
                </div>
                <p className="text-3xl font-bold text-foreground mb-1">1,109,999 <span className="text-sm font-normal text-muted-foreground">so'm/yr</span></p>
                <p className="text-sm text-muted-foreground mb-4">Best value – unlimited everything</p>
                <Button variant="hero" className="w-full">Subscribe Yearly</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </AppLayout>
  );
}
