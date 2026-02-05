import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sardor Karimov",
    role: "Medical Student",
    score: "8.5",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=sardor",
    content: "IELTS with Abdulloh helped me achieve my dream score! The AI feedback on my writing was incredibly detailed and helped me improve quickly.",
  },
  {
    name: "Nodira Yusupova",
    role: "Software Engineer",
    score: "8.0",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=nodira",
    content: "The speaking practice with voice recording was a game-changer. I could hear my mistakes and improve my pronunciation day by day.",
  },
  {
    name: "Javlon Rakhimov",
    role: "Graduate Student",
    score: "7.5",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=javlon",
    content: "The adaptive learning path knew exactly what I needed to focus on. It saved me time and helped me prepare more efficiently.",
  },
];

export function TestimonialsSection() {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-main">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-display text-foreground">
            Success Stories from Our <span className="text-gradient">Students</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Join thousands of students who have achieved their IELTS goals with our platform.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 border border-border shadow-elevated hover:shadow-prominent transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <Quote className="w-5 h-5 text-accent" />
              </div>

              {/* Content */}
              <p className="text-foreground leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-accent fill-accent" />
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full bg-secondary"
                  />
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-accent">
                    {testimonial.score}
                  </div>
                  <div className="text-xs text-muted-foreground">Band Score</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
