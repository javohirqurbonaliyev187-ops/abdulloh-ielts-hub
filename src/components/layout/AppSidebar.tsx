import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  GraduationCap,
  Home,
  FileText,
  PenTool,
  BookOpen,
  Languages,
  MessageCircle,
  ChevronDown,
  ChevronRight,
  Headphones,
  Mic,
  X,
} from "lucide-react";

interface AppSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  {
    id: "tutor",
    label: "IELTS Tutor",
    icon: Home,
    href: "/dashboard",
  },
  {
    id: "tests",
    label: "IELTS Test",
    icon: FileText,
    href: "/tests",
    badge: "1000+",
    children: [
      { label: "Listening", href: "/tests?section=listening", icon: Headphones },
      { label: "Reading", href: "/tests?section=reading", icon: BookOpen },
      { label: "Writing", href: "/tests?section=writing", icon: PenTool },
      { label: "Speaking", href: "/tests?section=speaking", icon: Mic },
    ],
  },
  {
    id: "practice",
    label: "IELTS Practice",
    icon: PenTool,
    href: "/practice",
    badge: "1000+",
    children: [
      { label: "Listening", href: "/practice/listening", icon: Headphones },
      { label: "Reading", href: "/practice/reading", icon: BookOpen },
      { label: "Writing", href: "/practice/writing", icon: PenTool },
      { label: "Speaking", href: "/practice/speaking", icon: Mic },
    ],
  },
  {
    id: "lessons",
    label: "IELTS Lessons",
    icon: BookOpen,
    href: "/lessons",
    children: [
      { label: "Beginner", href: "/lessons/beginner" },
      { label: "Elementary", href: "/lessons/elementary" },
      { label: "Pre-Intermediate", href: "/lessons/pre-intermediate" },
      { label: "Intermediate", href: "/lessons/intermediate" },
      { label: "Pre-IELTS", href: "/lessons/pre-ielts" },
      { label: "IELTS", href: "/lessons/ielts" },
    ],
  },
  {
    id: "vocabulary",
    label: "IELTS Vocabulary",
    icon: Languages,
    href: "/vocabulary",
  },
  {
    id: "instructor",
    label: "Ask an Instructor",
    icon: MessageCircle,
    href: "/instructor",
    badge: "AI",
  },
];

export function AppSidebar({ isOpen, onClose }: AppSidebarProps) {
  const location = useLocation();
  const [expandedItems, setExpandedItems] = useState<string[]>(["tests", "practice"]);
  const [question, setQuestion] = useState("");

  const toggleExpand = (id: string) => {
    setExpandedItems((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const isActive = (href: string) => location.pathname === href || location.pathname.startsWith(href + "/");

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-72 z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ backgroundColor: "hsl(222, 47%, 15%)" }}
      >
        {/* Header */}
        <div className="p-5 border-b" style={{ borderColor: "hsl(222, 47%, 25%)" }}>
          <div className="flex items-center justify-between mb-4">
            <Link to="/" className="flex items-center gap-2" onClick={onClose}>
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "hsl(38, 92%, 50%)" }}
              >
                <GraduationCap className="w-6 h-6" style={{ color: "hsl(222, 47%, 15%)" }} />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-white leading-tight">IELTS</span>
                <span className="text-xs font-semibold -mt-0.5" style={{ color: "hsl(38, 92%, 50%)" }}>
                  with Abdulloh
                </span>
              </div>
            </Link>
            <button onClick={onClose} className="text-white/60 hover:text-white p-1">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Ask Instructor Input */}
          <div className="space-y-2">
            <Input
              placeholder="Ask me a question..."
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className="bg-white/10 border-white/10 text-white placeholder:text-white/40 h-9 text-sm"
            />
            <Button
              className="w-full h-9 text-sm font-bold rounded-lg"
              style={{ backgroundColor: "hsl(0, 72%, 51%)", color: "white" }}
              onClick={() => {
                if (question.trim()) setQuestion("");
              }}
            >
              ASK INSTRUCTOR
            </Button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="p-3 space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);
            const expanded = expandedItems.includes(item.id);
            const hasChildren = item.children && item.children.length > 0;

            return (
              <div key={item.id}>
                <div
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer transition-all duration-200 ${
                    active
                      ? "bg-white/15 text-white"
                      : "text-white/70 hover:bg-white/10 hover:text-white"
                  }`}
                  onClick={() => {
                    if (hasChildren) {
                      toggleExpand(item.id);
                    } else {
                      onClose();
                    }
                  }}
                >
                  <Icon className="w-5 h-5 flex-shrink-0" style={active ? { color: "hsl(38, 92%, 50%)" } : {}} />
                  <span className="flex-1 text-sm font-medium">{item.label}</span>
                  {item.badge && (
                    <span
                      className="text-[10px] px-1.5 py-0.5 rounded-full font-bold"
                      style={{
                        backgroundColor: item.badge === "AI" ? "hsl(0, 72%, 51%)" : "hsl(38, 92%, 50%)",
                        color: item.badge === "AI" ? "white" : "hsl(222, 47%, 15%)",
                      }}
                    >
                      {item.badge}
                    </span>
                  )}
                  {hasChildren && (
                    <span className="text-white/40">
                      {expanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                    </span>
                  )}
                </div>

                {/* Children */}
                {hasChildren && expanded && (
                  <div className="ml-4 mt-1 space-y-0.5 border-l border-white/10 pl-3">
                    {item.children!.map((child) => {
                      const ChildIcon = child.icon;
                      const childActive = location.pathname === child.href || location.search.includes(child.href.split("?")[1] || "");
                      return (
                        <Link
                          key={child.href}
                          to={child.href}
                          onClick={onClose}
                          className={`flex items-center gap-2.5 px-3 py-2 rounded-md text-sm transition-colors ${
                            childActive
                              ? "text-white bg-white/10"
                              : "text-white/50 hover:text-white hover:bg-white/5"
                          }`}
                        >
                          {ChildIcon && <ChildIcon className="w-4 h-4" />}
                          <span>{child.label}</span>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Bottom Section */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t" style={{ borderColor: "hsl(222, 47%, 25%)" }}>
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              className="flex-1 text-xs border-white/20 text-white hover:bg-white/10"
              asChild
            >
              <Link to="/login" onClick={onClose}>Sign In</Link>
            </Button>
            <Button
              size="sm"
              className="flex-1 text-xs font-bold"
              style={{ backgroundColor: "hsl(38, 92%, 50%)", color: "hsl(222, 47%, 15%)" }}
              asChild
            >
              <Link to="/register" onClick={onClose}>Sign Up</Link>
            </Button>
          </div>
        </div>
      </aside>
    </>
  );
}
