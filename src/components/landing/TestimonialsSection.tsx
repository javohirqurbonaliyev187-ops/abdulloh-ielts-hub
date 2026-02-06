import { Star, Quote } from "lucide-react";
const testimonials = [{
  name: "Ismatullayev Asilbek",
  role: "Medical Student",
  score: "8.5",
  image: "https://api.dicebear.com/7.x/avataaars/svg?seed=sardor",
  content: "IELTS with Abdulloh helped me achieve my dream score! The AI feedback on my writing was incredibly detailed and helped me improve quickly."
}, {
  name: "Nodira Yusupova",
  role: "Software Engineer",
  score: "8.0",
  image: "https://api.dicebear.com/7.x/avataaars/svg?seed=nodira",
  content: "The speaking practice with voice recording was a game-changer. I could hear my mistakes and improve my pronunciation day by day."
}, {
  name: "Javlon Rakhimov",
  role: "Graduate Student",
  score: "7.5",
  image: "https://api.dicebear.com/7.x/avataaars/svg?seed=javlon",
  content: "The adaptive learning path knew exactly what I needed to focus on. It saved me time and helped me prepare more efficiently."
}];
export function TestimonialsSection() {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-main">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display text-foreground mb-4">
            Student <span className="text-gradient">Success Stories</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear from students who achieved their target IELTS scores
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="card-elevated p-6">
              <Quote className="w-8 h-8 text-accent/30 mb-4" />
              <p className="text-muted-foreground mb-6 italic">"{t.content}"</p>
              <div className="flex items-center gap-3">
                <img src={t.image} alt={t.name} className="w-10 h-10 rounded-full" />
                <div>
                  <p className="font-semibold text-foreground text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
                <div className="ml-auto flex items-center gap-1">
                  <Star className="w-4 h-4 text-accent fill-accent" />
                  <span className="font-bold text-foreground text-sm">{t.score}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}