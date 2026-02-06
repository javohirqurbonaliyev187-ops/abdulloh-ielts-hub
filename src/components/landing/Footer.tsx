import { Link } from "react-router-dom";
import { GraduationCap, Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
const footerLinks = {
  product: [{
    label: "Features",
    href: "/features"
  }, {
    label: "Practice Tests",
    href: "/practice"
  }, {
    label: "Pricing",
    href: "/pricing"
  }, {
    label: "AI Tools",
    href: "/ai-tools"
  }],
  skills: [{
    label: "Listening",
    href: "/practice/listening"
  }, {
    label: "Reading",
    href: "/practice/reading"
  }, {
    label: "Writing",
    href: "/practice/writing"
  }, {
    label: "Speaking",
    href: "/practice/speaking"
  }],
  resources: [{
    label: "Blog",
    href: "/blog"
  }, {
    label: "Study Tips",
    href: "/tips"
  }, {
    label: "FAQ",
    href: "/faq"
  }, {
    label: "Contact",
    href: "/contact"
  }],
  legal: [{
    label: "Privacy Policy",
    href: "/privacy"
  }, {
    label: "Terms of Service",
    href: "/terms"
  }, {
    label: "Cookie Policy",
    href: "/cookies"
  }]
};
const socialLinks = [{
  icon: Facebook,
  href: "#",
  label: "Facebook"
}, {
  icon: Twitter,
  href: "#",
  label: "Twitter"
}, {
  icon: Instagram,
  href: "#",
  label: "Instagram"
}, {
  icon: Youtube,
  href: "#",
  label: "YouTube"
}];
export function Footer() {
  return <footer className="bg-primary text-primary-foreground">
      <div className="container-main section-padding">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-lg font-bold leading-tight">
                  IELTS
                </span>
                <span className="text-xs text-accent font-semibold -mt-1">
                  with Abdulloh
                </span>
              </div>
            </Link>
            <p className="text-primary-foreground/70 max-w-md">
              Your trusted partner in IELTS preparation. Achieve your target 
              band score with AI-powered learning and expert guidance.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <Mail className="w-4 h-4" />
                <span>fatkhullaevabdulloh0@gmail.com
              </span>
              </div>
              <div className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <Phone className="w-4 h-4" />
                <span>+998946547557</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <MapPin className="w-4 h-4" />
                <span>Tashkent, Uzbekistan</span>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map(link => <li key={link.label}>
                  <Link to={link.href} className="text-primary-foreground/70 hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>)}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Skills</h4>
            <ul className="space-y-3">
              {footerLinks.skills.map(link => <li key={link.label}>
                  <Link to={link.href} className="text-primary-foreground/70 hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>)}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map(link => <li key={link.label}>
                  <Link to={link.href} className="text-primary-foreground/70 hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>)}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-foreground/50">
            © 2024 IELTS with Abdulloh. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map(social => <a key={social.label} href={social.href} aria-label={social.label} className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-colors">
                <social.icon className="w-5 h-5" />
              </a>)}
          </div>
        </div>
      </div>
    </footer>;
}