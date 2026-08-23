import React from "react";
import {
  MessageSquare,
  Image,
  Video,
  Cpu,
  ArrowRight,
  Sparkles,
  Zap,
  ShieldCheck,
  Download,
  Play,
} from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "AI Chat",
    description:
      "Ask questions, write code, analyze ideas and get intelligent responses.",
  },
  {
    icon: Image,
    title: "Image Generation",
    description:
      "Create stunning images from simple text prompts using powerful AI models.",
  },
  {
    icon: Video,
    title: "Video Generation",
    description:
      "Turn your ideas into AI-generated videos directly from your workspace.",
  },
  {
    icon: Cpu,
    title: "Local AI Models",
    description:
      "Install and run AI models directly on your own machine.",
  },
];

const benefits = [
  {
    icon: Zap,
    title: "Fast & Powerful",
    text: "Designed to make AI workflows simple, fast and accessible.",
  },
  {
    icon: ShieldCheck,
    title: "Private by Design",
    text: "Run supported models locally and keep your data under your control.",
  },
  {
    icon: Download,
    title: "Run Offline",
    text: "Use locally installed models even without an active internet connection.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#08090b] text-white overflow-hidden">
      {/* Background Glow */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-200px] left-[20%] w-[500px] h-[500px] bg-violet-600/10 blur-[140px] rounded-full" />
        <div className="absolute top-[300px] right-[-100px] w-[450px] h-[450px] bg-blue-600/10 blur-[140px] rounded-full" />
      </div>

      {/* Navbar */}
      <nav className="relative z-10 border-b border-white/[0.07] bg-[#08090b]/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center shadow-lg shadow-violet-500/20">
              <Sparkles size={19} />
            </div>

            <span className="text-xl font-semibold tracking-tight">
              Lok<span className="text-violet-400">Ai</span>
            </span>
          </div>

          {/* Navigation */}
          <div className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
            <a
              href="#features"
              className="hover:text-white transition"
            >
              Features
            </a>

            <a
              href="#local-ai"
              className="hover:text-white transition"
            >
              Local AI
            </a>

            <a
              href="#models"
              className="hover:text-white transition"
            >
              Models
            </a>

            <a
              href="#about"
              className="hover:text-white transition"
            >
              About
            </a>
          </div>

          {/* Right */}
          <div className="flex items-center gap-3">
            <button className="hidden sm:block text-sm text-zinc-300 hover:text-white transition">
              Sign in
            </button>

            <button className="px-4 py-2 rounded-lg bg-white text-black text-sm font-medium hover:bg-zinc-200 transition">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <main className="relative z-10">
        <section className="max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-20">
          
          {/* Badge */}
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.04] text-sm text-zinc-300">
              <span className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_10px_#4ade80]" />
              The future of personal AI
            </div>
          </div>

          {/* Heading */}
          <div className="max-w-4xl mx-auto text-center mt-8">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05]">
              One AI workspace.
              <br />

              <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                Unlimited possibilities.
              </span>
            </h1>

            <p className="max-w-2xl mx-auto mt-7 text-lg sm:text-xl text-zinc-400 leading-relaxed">
              Chat with AI, generate images and videos, or run powerful
              models directly on your machine with LokAi.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-9">
              <button className="group px-6 py-3.5 rounded-xl bg-white text-black font-medium hover:bg-zinc-200 transition flex items-center justify-center gap-2">
                Start Creating
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition"
                />
              </button>

              <button className="px-6 py-3.5 rounded-xl border border-white/10 bg-white/[0.04] text-white font-medium hover:bg-white/[0.08] transition flex items-center justify-center gap-2">
                <Play size={17} />
                Explore LokAi
              </button>
            </div>
          </div>

          {/* AI Workspace Preview */}
          <div className="max-w-5xl mx-auto mt-20">
            <div className="relative rounded-2xl border border-white/10 bg-[#101114] shadow-2xl shadow-black/40 overflow-hidden">
              
              {/* Window Header */}
              <div className="h-11 border-b border-white/[0.07] flex items-center px-4 gap-2">
                <span className="w-3 h-3 rounded-full bg-red-400/70" />
                <span className="w-3 h-3 rounded-full bg-yellow-400/70" />
                <span className="w-3 h-3 rounded-full bg-green-400/70" />

                <div className="ml-4 text-xs text-zinc-500">
                  LokAi Workspace
                </div>
              </div>

              <div className="grid md:grid-cols-[210px_1fr] min-h-[430px]">
                
                {/* Sidebar */}
                <div className="hidden md:block border-r border-white/[0.07] p-4">
                  <div className="text-xs text-zinc-500 mb-4">
                    WORKSPACE
                  </div>

                  {[
                    ["Chat", MessageSquare],
                    ["Images", Image],
                    ["Videos", Video],
                    ["Local Models", Cpu],
                  ].map(([name, Icon], index) => (
                    <div
                      key={name}
                      className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm mb-1 ${
                        index === 0
                          ? "bg-white/[0.08] text-white"
                          : "text-zinc-500"
                      }`}
                    >
                      <Icon size={16} />
                      {name}
                    </div>
                  ))}
                </div>

                {/* Chat Area */}
                <div className="flex flex-col">
                  <div className="flex-1 flex items-center justify-center px-6">
                    <div className="text-center max-w-lg">
                      <div className="mx-auto w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-500/20 to-blue-500/20 border border-white/10 flex items-center justify-center mb-5">
                        <Sparkles className="text-violet-400" size={22} />
                      </div>

                      <h3 className="text-2xl font-medium">
                        What can I help you create?
                      </h3>

                      <p className="text-sm text-zinc-500 mt-2">
                        Chat, generate, explore and build with AI.
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-8">
                        {[
                          "Create an image",
                          "Generate a video",
                          "Write some code",
                        ].map((item) => (
                          <div
                            key={item}
                            className="px-4 py-3 rounded-xl border border-white/[0.08] bg-white/[0.02] text-xs text-zinc-400"
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Prompt */}
                  <div className="p-5">
                    <div className="rounded-xl border border-white/10 bg-[#18191d] p-3 flex items-center gap-3">
                      <input
                        type="text"
                        placeholder="Ask LokAi anything..."
                        className="flex-1 bg-transparent outline-none text-sm text-white placeholder:text-zinc-600"
                      />

                      <button className="w-9 h-9 rounded-lg bg-white text-black flex items-center justify-center hover:bg-zinc-200 transition">
                        <ArrowRight size={17} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section
          id="features"
          className="border-t border-white/[0.07] py-24"
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            
            <div className="max-w-2xl">
              <p className="text-sm text-violet-400 font-medium">
                POWERFUL AI TOOLS
              </p>

              <h2 className="text-3xl sm:text-4xl font-semibold mt-3">
                Everything you need,
                <br />
                in one place.
              </h2>

              <p className="text-zinc-500 mt-4 leading-relaxed">
                LokAi brings conversations, creative generation and local
                AI models into a single clean workspace.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.title}
                    className="group p-6 rounded-2xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.15] transition"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/[0.06] flex items-center justify-center group-hover:bg-violet-500/10 transition">
                      <Icon
                        size={19}
                        className="text-zinc-300 group-hover:text-violet-400 transition"
                      />
                    </div>

                    <h3 className="font-medium mt-5">
                      {feature.title}
                    </h3>

                    <p className="text-sm text-zinc-500 mt-2 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Local AI */}
        <section
          id="local-ai"
          className="max-w-7xl mx-auto px-6 lg:px-8 py-24"
        >
          <div className="rounded-3xl border border-white/[0.08] bg-gradient-to-br from-white/[0.05] to-transparent p-8 sm:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              <div>
                <div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-400/10 flex items-center justify-center">
                  <Cpu className="text-violet-400" size={22} />
                </div>

                <h2 className="text-3xl sm:text-4xl font-semibold mt-6">
                  Your AI.
                  <br />
                  Your machine.
                  <br />
                  Your control.
                </h2>

                <p className="text-zinc-500 mt-5 leading-relaxed max-w-lg">
                  Install compatible AI models locally and use them directly
                  from LokAi. Reduce dependency on cloud services and keep
                  your workflows closer to your machine.
                </p>

                <button className="mt-7 px-5 py-3 rounded-xl bg-white text-black text-sm font-medium hover:bg-zinc-200 transition">
                  Explore Local Models
                </button>
              </div>

              {/* Model Card */}
              <div className="rounded-2xl border border-white/[0.08] bg-[#0c0d0f] p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">
                      Installed Models
                    </p>
                    <p className="text-xs text-zinc-600 mt-1">
                      Running locally
                    </p>
                  </div>

                  <span className="text-xs text-green-400">
                    ● Online
                  </span>
                </div>

                <div className="space-y-3 mt-6">
                  {[
                    ["Llama", "Text Generation"],
                    ["SDXL", "Image Generation"],
                    ["Video Model", "Video Generation"],
                  ].map(([name, type]) => (
                    <div
                      key={name}
                      className="flex items-center justify-between p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-white/[0.06] flex items-center justify-center">
                          <Cpu size={16} />
                        </div>

                        <div>
                          <p className="text-sm">{name}</p>
                          <p className="text-xs text-zinc-600 mt-0.5">
                            {type}
                          </p>
                        </div>
                      </div>

                      <span className="text-xs text-green-400">
                        Ready
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="border-t border-white/[0.07] py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.title}>
                    <Icon
                      size={22}
                      className="text-violet-400"
                    />

                    <h3 className="font-medium mt-4">
                      {item.title}
                    </h3>

                    <p className="text-sm text-zinc-500 mt-2 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-4xl mx-auto px-6 py-28 text-center">
          <Sparkles
            className="mx-auto text-violet-400"
            size={25}
          />

          <h2 className="text-4xl sm:text-5xl font-semibold mt-6 tracking-tight">
            Build with AI.
            <br />
            Without limits.
          </h2>

          <p className="text-zinc-500 mt-5">
            Start your AI workspace with LokAi.
          </p>

          <button className="mt-8 px-7 py-3.5 rounded-xl bg-white text-black font-medium hover:bg-zinc-200 transition">
            Get Started
          </button>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/[0.07]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center">
              <Sparkles size={14} />
            </div>

            <span className="text-sm font-medium">
              LokAi
            </span>
          </div>

          <p className="text-xs text-zinc-600">
            © 2026 LokAi. Built for the future of AI.
          </p>
        </div>
      </footer>
    </div>
  );
}