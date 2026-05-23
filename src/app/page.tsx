"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import {
  ArrowRight,
  Zap,
  Layout,
  Smartphone,
  ShoppingCart,
  Palette,
  BarChart3,
  Check,
  ChevronDown,
  Quote,
  Star,
  Globe,
  Users,
  Clock,
  TrendingUp,
} from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const services = [
  { icon: Layout, title: "Landing Pages", desc: "High-converting single-page sites that turn visitors into leads." },
  { icon: Smartphone, title: "Marketing Sites", desc: "Multi-page experiences with blogs, case studies, and SEO." },
  { icon: Zap, title: "SaaS MVPs", desc: "Full-stack apps with auth, databases, payments, and dashboards." },
  { icon: ShoppingCart, title: "E-commerce", desc: "Scalable online stores with cart, checkout, and inventory." },
  { icon: Palette, title: "Brand Design", desc: "Visual identity, logo, and design systems that stand out." },
  { icon: BarChart3, title: "Analytics", desc: "Conversion tracking, heatmaps, and performance monitoring." },
];

const processSteps = [
  { num: "01", title: "Discovery", desc: "We scope your project, define success metrics, and create a clear roadmap." },
  { num: "02", title: "Design", desc: "Figma prototypes. You see it before we build it." },
  { num: "03", title: "Build", desc: "Next.js + Supabase. Weekly demos. You watch it come alive." },
  { num: "04", title: "Launch", desc: "Vercel deploy. Analytics connected. You own the code." },
];

const portfolio = [
  { title: "ShowMe App", tags: ["Flutter", "Supabase", "Stripe"], desc: "Skill marketplace with compounds, payments, and live events." },
  { title: "ShowMe Blog", tags: ["Next.js", "AI", "SEO"], desc: "Africa's #1 AI/Business/Tech platform with 4+ daily posts." },
  { title: "Jirapa Realty", tags: ["Next.js", "Gallery", "Auth"], desc: "Real estate showcase with 100+ property photos and admin." },
  { title: "Mission Control", tags: ["Next.js", "Convex", "Real-time"], desc: "Real-time agent status dashboard with live monitoring." },
];

const testimonials = [
  { quote: "Josh shipped our landing page in 10 days. It converted 3x better than our old site.", author: "Client Name", role: "Founder, Startup" },
  { quote: "Professional, fast, and the code is clean. We went back for the full app build.", author: "Another Client", role: "CEO, Fintech" },
];

const pricing = [
  { name: "Starter", price: "$900", desc: "Landing page or simple site", features: ["Single page or up to 3 pages", "Mobile-responsive", "Contact form + basic SEO", "1 revision round", "2-week delivery"], popular: false },
  { name: "Growth", price: "$2,500", desc: "Multi-page site with CMS", features: ["Up to 10 pages", "Blog with CMS", "Newsletter signup", "Analytics setup", "2 revision rounds", "4-week delivery"], popular: true },
  { name: "Custom", price: "$5,000+", desc: "SaaS MVP or complex app", features: ["Full-stack application", "Auth + database + payments", "Admin dashboard", "Custom integrations", "Ongoing support available"], popular: false },
];

const faqs = [
  { q: "How long does a typical project take?", a: "Landing pages: 2 weeks. Marketing sites: 4 weeks. Full-stack apps: 6-8 weeks. We give you a fixed timeline upfront." },
  { q: "What if I need changes after launch?", a: "You own the code, so you can edit it yourself or hire us for updates. We also offer monthly retainers." },
  { q: "Do you work with non-technical founders?", a: "Absolutely. We explain everything in plain English and train your team to manage the site after handoff." },
  { q: "What tech stack do you use?", a: "Next.js + TypeScript + Tailwind for frontend. Supabase for backend. Vercel for hosting. Modern, fast, and future-proof." },
];

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden" style={{ background: "var(--bg)", color: "var(--text)" }}>
      {/* Subtle gradient background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full opacity-15" style={{ background: "radial-gradient(circle, rgba(245,158,11,0.25), transparent 70%)", filter: "blur(100px)" }} />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full opacity-10" style={{ background: "radial-gradient(circle, rgba(6,182,212,0.2), transparent 70%)", filter: "blur(100px)" }} />
      </div>

      {/* Navigation */}
      <motion.nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 backdrop-blur-xl border-b" style={{ background: "var(--nav-bg)", borderColor: "var(--border)" }} initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}>
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-tight" style={{ color: "var(--text)" }}>
            showme<span className="text-amber-500">.sites</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            {["Work", "Process", "Pricing", "About"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium transition-colors hover:text-white" style={{ color: "var(--text-muted)" }}>{item}</a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <motion.a href="#contact" className="px-5 py-2.5 rounded-full text-sm font-semibold bg-amber-500 text-black" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              Start a project
            </motion.a>
          </div>
        </div>
      </motion.nav>

      {/* Hero */}
      <section className="relative z-10 min-h-screen flex flex-col justify-center px-6 pt-32 pb-20 max-w-6xl mx-auto">
        <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="max-w-3xl"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border border-amber-500/20 bg-amber-500/5"
          >
            <Zap className="w-4 h-4 text-amber-500" />
            <span className="text-amber-500 text-sm font-semibold">Available for new projects</span>
          </motion.div>

          <motion.h1 variants={fadeInUp} className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6"
          >
            You get the code.{" "}
            <span className="text-amber-500">We just build it fast.</span>
          </motion.h1>

          <motion.p variants={fadeInUp} className="text-lg sm:text-xl max-w-xl leading-relaxed mb-8" style={{ color: "var(--text-muted)" }}>
            High-converting landing pages, marketing sites, and full-stack apps for founders who want to ship this month.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-wrap gap-4"
          >
            <motion.a href="#contact" className="px-7 py-3.5 rounded-full text-black font-bold bg-amber-500 inline-flex items-center gap-2" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
            >
              Book a free strategy call
              <ArrowRight className="w-4 h-4" />
            </motion.a>
            <motion.a href="#work" className="px-7 py-3.5 rounded-full font-semibold border transition-colors hover:bg-white/5" style={{ borderColor: "var(--border-medium)", color: "var(--text)" }} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
            >
              See our work
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div className="mt-16 flex flex-wrap gap-12" variants={staggerContainer} initial="hidden" animate="visible"
          >
            {[
              { v: "15+", l: "Projects Shipped" },
              { v: "4.9★", l: "Client Rating" },
              { v: "30%", l: "Avg. Conversion Lift" },
            ].map((s, i) => (
              <motion.div key={i} variants={fadeInUp}>
                <div className="text-3xl font-extrabold text-amber-500">{s.v}</div>
                <div className="text-xs uppercase tracking-wider font-semibold mt-1" style={{ color: "var(--text-muted)" }}>{s.l}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Trust Bar */}
      <section className="relative z-10 py-8 border-y border-white/[0.06]" style={{ background: "rgba(18,18,18,0.5)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-center text-sm mb-4" style={{ color: "var(--text-muted)" }}>Trusted by founders building with</p>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            {["Next.js", "React", "TypeScript", "Supabase", "Vercel", "Flutter"].map((tech) => (
              <span key={tech} className="text-sm font-medium" style={{ color: "var(--text-muted)" }}>{tech}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Problem / Solution */}
      <section id="work" className="relative z-10 px-6 py-24 max-w-6xl mx-auto">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
        >
          <p className="text-amber-500 text-sm font-semibold tracking-widest uppercase mb-3">YOUR PROBLEM, OUR SOLUTION</p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">From frustration to results.</h2>
        </motion.div>
        <motion.div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
        >
          {[
            { icon: Globe, title: "Your website looks outdated", desc: "First impressions matter. An old, slow site costs you credibility.", solution: "Modern, fast-loading sites that communicate quality." },
            { icon: TrendingUp, title: "Visitors leave without action", desc: "Confusing navigation and weak CTAs kill conversions.", solution: "Strategic design with clear conversion paths." },
            { icon: Clock, title: "Projects drag for months", desc: "Agencies that over-promise waste your time and budget.", solution: "Fixed timelines with weekly deliverables." },
            { icon: Users, title: "Can't update your own site", desc: "Paying for every tiny change is expensive.", solution: "Modern stacks you own. We train your team." },
          ].map((item, i) => (
            <motion.div key={i} variants={fadeInUp} className="rounded-2xl p-6" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: "rgba(245,158,11,0.1)" }}
              >
                <item.icon className="w-5 h-5 text-amber-500" />
              </div>
              <h3 className="text-base font-bold mb-2">{item.title}</h3>
              <p className="text-sm mb-3" style={{ color: "var(--text-muted)" }}>{item.desc}</p>
              <div className="rounded-lg px-3 py-2 text-sm flex items-center gap-2" style={{ background: "rgba(245,158,11,0.1)", color: "var(--amber)" }}
              >
                <Check className="w-4 h-4 text-amber-500" />
                {item.solution}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Services */}
      <section className="relative z-10 px-6 py-24 max-w-6xl mx-auto">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
        >
          <p className="text-amber-500 text-sm font-semibold tracking-widest uppercase mb-3">WHAT WE DO</p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">Services designed to scale.</h2>
        </motion.div>
        <motion.div className="grid md:grid-cols-3 gap-6" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service, i) => (
            <motion.div key={i} variants={fadeInUp} className="rounded-2xl p-6" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: "rgba(245,158,11,0.1)" }}
              >
                <service.icon className="w-5 h-5 text-amber-500" />
              </div>
              <h3 className="text-base font-bold mb-2">{service.title}</h3>
              <p className="text-sm" style={{ color: "var(--text-muted)" }}>{service.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Process */}
      <section id="process" className="relative z-10 px-6 py-24 max-w-6xl mx-auto">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
        >
          <p className="text-amber-500 text-sm font-semibold tracking-widest uppercase mb-3">HOW WE WORK</p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">Ship in weeks, not quarters.</h2>
        </motion.div>
        <motion.div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
        >
          {processSteps.map((step, i) => (
            <motion.div key={i} variants={fadeInUp} className="relative text-center"
            >
              <div className="text-5xl font-extrabold mb-3" style={{ color: "rgba(245,158,11,0.15)" }}>{step.num}</div>
              <h3 className="text-base font-bold mb-2">{step.title}</h3>
              <p className="text-sm" style={{ color: "var(--text-muted)" }}>{step.desc}</p>
              {i < 3 && (
                <div className="hidden md:block absolute top-8 right-0 w-full h-px" style={{ background: "linear-gradient(90deg, var(--border), transparent)" }} />
              )}
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Portfolio */}
      <section className="relative z-10 px-6 py-24 max-w-6xl mx-auto">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
        >
          <p className="text-amber-500 text-sm font-semibold tracking-widest uppercase mb-3">RECENT WORK</p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">Projects we're proud of.</h2>
        </motion.div>
        <motion.div className="grid md:grid-cols-2 gap-6" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
        >
          {portfolio.map((project, i) => (
            <motion.div key={i} variants={fadeInUp} className="rounded-2xl overflow-hidden group" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={`/images/portfolio-${i + 1}.jpg`}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <div className="flex gap-2 mb-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-1 rounded-full" style={{ background: "rgba(245,158,11,0.1)", color: "var(--text-muted)" }}>
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-base font-bold mb-1">{project.title}</h3>
                <p className="text-sm" style={{ color: "var(--text-muted)" }}>{project.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Testimonials */}
      <section className="relative z-10 px-6 py-24 max-w-6xl mx-auto">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
        >
          <p className="text-amber-500 text-sm font-semibold tracking-widest uppercase mb-3">TESTIMONIALS</p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">What founders say.</h2>
        </motion.div>
        <motion.div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
        >
          {testimonials.map((t, i) => (
            <motion.div key={i} variants={fadeInUp} className="rounded-2xl p-6 relative" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
            >
              <Quote className="w-8 h-8 text-amber-500/30 mb-4" />
              <p className="text-base mb-4 leading-relaxed">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center">
                  <span className="text-amber-500 font-bold text-sm">{t.author[0]}</span>
                </div>
                <div>
                  <p className="text-sm font-semibold">{t.author}</p>
                  <p className="text-xs" style={{ color: "var(--text-muted)" }}>{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="relative z-10 px-6 py-24 max-w-6xl mx-auto">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
        >
          <p className="text-amber-500 text-sm font-semibold tracking-widest uppercase mb-3">PRICING</p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">Fixed price. No surprises.</h2>
        </motion.div>
        <motion.div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
        >
          {pricing.map((plan, i) => (
            <motion.div key={i} variants={fadeInUp} className={`rounded-2xl p-6 relative ${plan.popular ? "border-2 border-amber-500/50" : "border border-white/[0.06]"}`} style={{ background: "var(--surface)" }}
            >
              {plan.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2"><span className="bg-amber-500 text-black text-xs font-bold px-3 py-1 rounded-full">Most Popular</span></div>}
              <h3 className="text-base font-bold mb-1">{plan.name}</h3>
              <div className="text-3xl font-extrabold text-amber-500 mb-1">{plan.price}</div>
              <p className="text-sm mb-5" style={{ color: "var(--text-muted)" }}>{plan.desc}</p>
              <ul className="space-y-2 mb-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                    <span style={{ color: "var(--text-muted)" }}>{feature}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" className={`block text-center py-3 rounded-xl font-semibold text-sm ${plan.popular ? "bg-amber-500 text-black" : "border border-white/20 hover:bg-white/5"}`}>
                Get started
              </a>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* FAQ */}
      <section className="relative z-10 px-6 py-24 max-w-3xl mx-auto">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
        >
          <p className="text-amber-500 text-sm font-semibold tracking-widest uppercase mb-3">FAQ</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Common questions.</h2>
        </motion.div>
        <motion.div className="space-y-4" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
        >
          {faqs.map((faq, i) => (
            <motion.div key={i} variants={fadeInUp} className="rounded-xl p-6" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
            >
              <h3 className="font-bold mb-2">{faq.q}</h3>
              <p className="text-sm" style={{ color: "var(--text-muted)" }}>{faq.a}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA */}
      <section id="contact" className="relative z-10 px-6 py-24 max-w-4xl mx-auto">
        <motion.div
          className="rounded-3xl p-10 sm:p-14 text-center relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, rgba(245,158,11,0.1), rgba(6,182,212,0.08))", border: "1px solid rgba(255,255,255,0.1)" }}
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Ready to build something great?</h2>
          <p className="text-base max-w-lg mx-auto mb-8" style={{ color: "var(--text-muted)" }}>
            Book a free 20-minute strategy call. We'll scope your project and give you a clear timeline.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <motion.a href="mailto:info@shwme.app" className="px-8 py-3.5 rounded-full text-black font-bold bg-amber-500 inline-flex items-center gap-2" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
            >
              Book a free strategy call
              <ArrowRight className="w-4 h-4" />
            </motion.a>
            <motion.a href="mailto:info@shwme.app" className="px-8 py-3.5 rounded-full border border-white/20 font-semibold hover:bg-white/5 transition-colors" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
            >
              info@shwme.app
            </motion.a>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/[0.06] px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-8">
            <div className="text-xl font-bold tracking-tight">
              showme<span className="text-amber-500">.sites</span>
            </div>
            <div className="flex flex-wrap gap-6 text-sm" style={{ color: "var(--text-muted)" }}>
              <a href="#work" className="hover:text-white transition-colors">Work</a>
              <a href="#process" className="hover:text-white transition-colors">Process</a>
              <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
              <a href="mailto:info@shwme.app" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
          <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs" style={{ color: "var(--text-muted)" }}>© 2026 showme.sites. All rights reserved.</p>
            <div className="flex gap-6 text-xs" style={{ color: "var(--text-muted)" }}>
              <a href="/privacy" className="hover:text-white transition-colors">Privacy</a>
              <a href="/terms" className="hover:text-white transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
