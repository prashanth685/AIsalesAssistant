import React from "react";
import {
  HiSparkles,
  HiTrendingUp,
  HiChatAlt2,
  HiChartBar,
  HiLightBulb,
} from "react-icons/hi";

const features = [
  {
    title: "AI Email Generator",
    description:
      "Generate highly personalized cold emails and follow-ups that convert prospects into meetings.",
    icon: HiSparkles,
    accent: "from-cyan-500 to-blue-500",
    size: "md:col-span-3",
    image:
      "https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Lead Tracking",
    description:
      "Track buyer intent, email opens, and engagement signals in real time.",
    icon: HiTrendingUp,
    accent: "from-violet-500 to-fuchsia-500",
    size: "md:col-span-3",
  },
  {
    title: "AI Chat Assistant",
    description: "Automate conversations and qualify inbound leads 24/7.",
    icon: HiChatAlt2,
    accent: "from-emerald-500 to-teal-500",
    size: "md:col-span-2",
  },
  {
    title: "Advanced Analytics",
    description:
      "Visualize pipeline performance with actionable AI-driven insights.",
    icon: HiChartBar,
    accent: "from-orange-500 to-amber-500",
    size: "md:col-span-2",
  },
  {
    title: "Smart Insights",
    description:
      "Weekly AI recommendations to optimize campaigns and sales playbooks.",
    icon: HiLightBulb,
    accent: "from-pink-500 to-rose-500",
    size: "md:col-span-2",
  },
];

const Feature = () => {
  return (
    <section
      className="relative overflow-hidden bg-[#070B14] py-28 px-6 md:px-12"
      id="features"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-cyan-500/10 blur-[140px] rounded-full" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-flex items-center rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1 text-sm text-cyan-400 mb-5">
            AI Powered Sales Platform
          </span>

          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight">
            Future-Proof Your{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Sales Stack
            </span>
          </h2>

          <p className="mt-6 text-lg text-slate-400 leading-relaxed">
            Powerful AI tools designed to automate outreach, boost conversions,
            and accelerate revenue growth.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 auto-rows-[260px]">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/40 hover:shadow-[0_20px_80px_rgba(34,211,238,0.15)] ${feature.size}`}
              >
                {/* Hover Gradient */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition duration-500 bg-gradient-to-br ${feature.accent}`}
                />

                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.accent} flex items-center justify-center shadow-lg mb-6`}
                >
                  <Icon className="text-white text-3xl" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>

                  <p className="text-slate-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Image */}
                {feature.image && (
                  <div className="absolute bottom-0 right-0 w-2/3 opacity-30 group-hover:opacity-50 transition duration-500">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="object-cover rounded-tl-3xl"
                    />
                  </div>
                )}

                {/* Glow Effect */}
                <div
                  className={`absolute -bottom-20 -right-20 w-56 h-56 bg-gradient-to-br ${feature.accent} opacity-10 blur-3xl rounded-full`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Feature;
