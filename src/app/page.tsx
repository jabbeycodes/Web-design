"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const slideInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const heroText = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

const glowPulse = {
  animate: {
    boxShadow: [
      "0 0 20px rgba(245,158,11,0.3)",
      "0 0 40px rgba(245,158,11,0.5)",
      "0 0 20px rgba(245,158,11,0.3)",
    ],
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
  },
};

export default function HomePage() {
  const { scrollYProgress } = useScroll();
  const navOpacity = useTransform(scrollYProgress, [0, 0.05], [0.8, 0.95]);

  return (
    <main
      className="relative min-h-screen overflow-x-hidden"
      style={{ background: "var(--bg)", color: "var(--text)" }}
    >
      {/* Animated ambient orbs */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <motion.div
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -20, 30, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -left-[10%] w-[60vw] h-[60vw] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(245,158,11,0.15) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <motion.div
          animate={{
            x: [0, -30, 20, 0],
            y: [0, 30, -20, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-[30%] -right-[15%] w-[50vw] h-[50vw] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[10%] left-[20%] w-[40vw] h-[40vw] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(245,158,11,0.08) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
      </div>

      {/* Navigation */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between backdrop-blur-md border-b"
        style={{ opacity: navOpacity, background: "var(--nav-bg)", borderColor: "var(--border)" }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link
          href="/"
          className="text-xl font-bold tracking-tight"
          style={{ color: "var(--text)" }}
        >
          showme<span className="text-amber-500">.sites</span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {["Work", "Process", "Pricing", "About"].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm transition-colors relative group"
              style={{ color: "var(--text-muted)" }}
              whileHover={{ color: "var(--text)" }}
            >
              {item}
              <motion.span
                className="absolute -bottom-1 left-0 h-0.5 bg-amber-500"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.2 }}
              />
            </motion.a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <motion.a
            href="#contact"
            className="px-5 py-2 rounded-full text-sm font-semibold bg-amber-500 text-black hover:bg-amber-400 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start a project
          </motion.a>
        </div>
      </motion.nav>

      {/* Hero */}
      <section className="relative z-10 min-h-screen flex flex-col justify-center px-6 pt-20 pb-12 max-w-7xl mx-auto">
        <motion.div
          className="max-w-4xl"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={fadeInUp}
            className="text-amber-500 text-sm font-semibold tracking-widest uppercase mb-6"
          >
            AVAILABLE FOR NEW PROJECTS
          </motion.p>
          <motion.h1
            variants={fadeInUp}
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] mb-8"
          >
            You get the code.{" "}
            <span className="text-amber-500">We just build it fast.</span>
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-lg sm:text-xl max-w-2xl leading-relaxed mb-10"
            style={{ color: "var(--text-muted)" }}
          >
            High-converting landing pages, marketing sites, and full-stack apps
            for founders who want to ship this month — not next quarter.
          </motion.p>
          <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
            <motion.a
              href="#contact"
              className="px-8 py-4 rounded-full text-black font-bold text-base inline-flex items-center gap-2 bg-amber-500"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(245,158,11,0.4)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Book a free strategy call
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </motion.a>
            <motion.a
              href="#work"
              className="px-8 py-4 rounded-full font-semibold text-base transition-colors"
              style={{ border: "1px solid var(--border-medium)", color: "var(--text)" }}
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(255,255,255,0.05)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              See our work
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Animated Stats */}
        <motion.div
          className="mt-16 flex flex-wrap gap-10"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {[
            { v: "15+", l: "Projects Shipped" },
            { v: "4.9★", l: "Client Rating" },
            { v: "30%", l: "Avg. Conversion Lift" },
          ].map((s, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <motion.div
                className="text-3xl font-extrabold text-amber-500"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.5 + i * 0.2,
                  type: "spring",
                }}
              >
                {s.v}
              </motion.div>
              <div
                className="text-xs uppercase tracking-wider font-semibold mt-1"
                style={{ color: "var(--text-muted)" }}
              >
                {s.l}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Hero image with parallax */}
        <motion.div
          className="mt-16 lg:mt-20"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.div
            className="rounded-2xl overflow-hidden p-2"
            style={{
              background:
                "linear-gradient(135deg, rgba(245,158,11,0.1), rgba(6,182,212,0.1))",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src="/images/mockup-laptop.jpg"
              alt="showme.sites portfolio showcase"
              width={1200}
              height={675}
              className="rounded-xl w-full h-auto"
              priority
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Tech stack marquee */}
      <section className="relative z-10 py-12 border-y border-white/[0.06] overflow-hidden backdrop-blur-sm">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex whitespace-nowrap"
        >
          {[...Array(2)].map((_, dup) => (
            <div key={dup} className="flex items-center gap-12 px-6">
              {[
                "Next.js",
                "React",
                "TypeScript",
                "Supabase",
                "Vercel",
                "Tailwind CSS",
                "Stripe",
                "PostgreSQL",
                "Flutter",
                "Node.js",
                "Figma",
              ].map((tech) => (
                <span
                  key={`${dup}-${tech}`}
                  className="text-sm font-semibold tracking-wide flex items-center gap-3"
                  style={{ color: "var(--text-muted)" }}
                >
                  <motion.span
                    className="w-1.5 h-1.5 rounded-full bg-amber-500/60"
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  {tech}
                </span>
              ))}
            </div>
          ))}
        </motion.div>
      </section>

      {/* Problem / Solution */}
      <section id="work" className="relative z-10 px-6 py-24 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-amber-500 text-sm font-semibold tracking-widest uppercase mb-3">
            YOUR PROBLEM, OUR SOLUTION
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            From frustration to results.
          </h2>
        </motion.div>
        <motion.div
          className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {[
            {
              icon: "💻",
              title: "Your website looks outdated and unprofessional",
              desc: "First impressions matter. An old, slow site costs you credibility before visitors read a word.",
              solution:
                "We build modern, fast-loading sites that instantly communicate quality and trust.",
            },
            {
              icon: "📉",
              title: "Visitors leave without taking action",
              desc: "Confusing navigation, weak CTAs, and poor mobile experience kill conversions.",
              solution:
                "Strategic design with clear paths to conversion — every page optimized for results.",
            },
            {
              icon: "⏰",
              title: "Projects drag on for months with no end in sight",
              desc: "Agencies that over-promise and under-deliver waste your time and budget.",
              solution:
                "Fixed timelines with weekly deliverables. You'll see progress, not promises.",
            },
            {
              icon: "🔧",
              title: "You don't know how to update or maintain your site",
              desc: "Paying for every tiny change is expensive and frustrating.",
              solution:
                "Built on modern stacks you own. We train your team or handle it with our retainer.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              whileHover={{
                y: -8,
                boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
              }}
              className="rounded-2xl p-7 transition-all duration-300"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
              }}
            >
              <motion.div
                className="text-3xl mb-4"
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: "spring" }}
              >
                {item.icon}
              </motion.div>
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-muted)" }}>
                {item.desc}
              </p>
              <div className="rounded-xl px-4 py-3" style={{ background: "rgba(245,158,11,0.1)" }}>
                <p className="text-amber-400 text-sm font-medium">
                  ✓ {item.solution}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Services */}
      <section className="relative z-10 px-6 py-24 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-amber-500 text-sm font-semibold tracking-widest uppercase mb-3">
            WHAT WE DO
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Services designed to scale.
          </h2>
        </motion.div>
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {[
            {
              icon: "🎯",
              title: "Landing Pages",
              desc: "High-converting single-page sites that turn visitors into leads and customers.",
            },
            {
              icon: "📱",
              title: "Marketing Sites",
              desc: "Multi-page experiences with blogs, case studies, and SEO-optimized content.",
            },
            {
              icon: "🚀",
              title: "SaaS MVPs",
              desc: "Full-stack apps with auth, databases, payments, and dashboards. Ship in weeks.",
            },
            {
              icon: "🛒",
              title: "E-commerce",
              desc: "Scalable online stores with cart, checkout, and inventory management.",
            },
            {
              icon: "🎨",
              title: "Brand Design",
              desc: "Visual identity, logo, and design systems that make you stand out.",
            },
            {
              icon: "📊",
              title: "Analytics Setup",
              desc: "Conversion tracking, heatmaps, and performance monitoring.",
            },
          ].map((service, i) => (
            <motion.div
              key={i}
              variants={scaleIn}
              whileHover={{
                y: -5,
                borderColor: "rgba(245,158,11,0.3)",
              }}
              className="rounded-2xl p-7 transition-all duration-300 cursor-default"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
              }}
            >
              <motion.div
                className="text-3xl mb-4"
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ type: "spring" }}
              >
                {service.icon}
              </motion.div>
              <h3 className="text-lg font-bold mb-2">{service.title}</h3>
              <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                {service.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Process */}
      <section id="process" className="relative z-10 px-6 py-24 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-amber-500 text-sm font-semibold tracking-widest uppercase mb-3">
            HOW WE WORK
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Ship in weeks, not quarters.
          </h2>
        </motion.div>
        <motion.div
          className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {[
            {
              num: "01",
              title: "Discovery",
              desc: "We scope your project, define success metrics, and create a clear roadmap.",
            },
            {
              num: "02",
              title: "Design",
              desc: "Figma prototypes + component library. You see it before we build it.",
            },
            {
              num: "03",
              title: "Build",
              desc: "Next.js + Supabase. Weekly demos. You watch it come alive.",
            },
            {
              num: "04",
              title: "Launch",
              desc: "Vercel deploy, analytics connected, performance optimized. You own the code.",
            },
          ].map((step, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="relative"
            >
              <motion.div
                className="text-6xl font-extrabold mb-4"
                style={{ color: "rgba(245,158,11,0.2)" }}
                whileHover={{ scale: 1.1, color: "rgba(245,158,11,0.4)" }}
              >
                {step.num}
              </motion.div>
              <h3 className="text-lg font-bold mb-2">{step.title}</h3>
              <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                {step.desc}
              </p>
              {i < 3 && (
                <div
                  className="hidden md:block absolute top-8 -right-3 w-6 h-px"
                  style={{ background: "var(--border)" }}
                />
              )}
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Portfolio */}
      <section className="relative z-10 px-6 py-24 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-amber-500 text-sm font-semibold tracking-widest uppercase mb-3">
            RECENT WORK
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Projects we're proud of.
          </h2>
        </motion.div>
        <motion.div
          className="grid md:grid-cols-2 gap-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {[
            {
              title: "ShowMe App",
              tags: ["Flutter", "Supabase", "Stripe"],
              desc: "The flagship product — a skill marketplace with compounds, payments, and live events.",
            },
            {
              title: "The ShowMe Blog",
              tags: ["Next.js", "AI Content", "SEO"],
              desc: "Africa's #1 AI/Business/Tech platform with 4+ automated posts daily.",
            },
            {
              title: "Jirapa Executive Realty",
              tags: ["Next.js", "Gallery", "JWT Auth"],
              desc: "Real estate showcase with 100+ property photos and admin panel.",
            },
            {
              title: "Mission Control",
              tags: ["Next.js", "Convex", "Real-time"],
              desc: "Real-time agent status dashboard with live heartbeat monitoring.",
            },
          ].map((project, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              whileHover={{ y: -8 }}
              className="rounded-2xl overflow-hidden group cursor-pointer"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
              }}
            >
              <div className="aspect-video relative overflow-hidden">
                <div
                  className="absolute inset-0 flex items-center justify-center text-4xl"
                  style={{
                    background: "linear-gradient(135deg, var(--surface), var(--surface-2))",
                  }}
                >
                  📱
                </div>
                <motion.div
                  className="absolute inset-0 bg-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="p-6">
                <div className="flex gap-2 mb-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded-full"
                      style={{
                        background: "rgba(245,158,11,0.1)",
                        color: "var(--text-muted)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                  {project.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="relative z-10 px-6 py-24 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-amber-500 text-sm font-semibold tracking-widest uppercase mb-3">
            PRICING
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Fixed price. No surprises.
          </h2>
        </motion.div>
        <motion.div
          className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {[
            {
              name: "Starter",
              price: "$900",
              desc: "Landing page or simple marketing site",
              features: [
                "Single page or up to 3 pages",
                "Mobile-responsive",
                "Contact form + basic SEO",
                "1 revision round",
                "2-week delivery",
              ],
            },
            {
              name: "Growth",
              price: "$2,500",
              desc: "Multi-page site with CMS",
              features: [
                "Up to 10 pages",
                "Blog with CMS",
                "Newsletter signup",
                "Analytics setup",
                "2 revision rounds",
                "4-week delivery",
              ],
              popular: true,
            },
            {
              name: "Custom",
              price: "$5,000+",
              desc: "SaaS MVP or complex web app",
              features: [
                "Full-stack application",
                "Auth + database + payments",
                "Admin dashboard",
                "Custom integrations",
                "Ongoing support available",
              ],
            },
          ].map((plan, i) => (
            <motion.div
              key={i}
              variants={scaleIn}
              whileHover={{
                y: -8,
                boxShadow: plan.popular
                  ? "0 20px 40px rgba(245,158,11,0.2)"
                  : "0 20px 40px rgba(0,0,0,0.2)",
              }}
              className={`rounded-2xl p-7 relative transition-all duration-300 ${
                plan.popular
                  ? "border-2 border-amber-500/50"
                  : "border border-white/[0.06]"
              }`}
              style={{ background: "var(--surface)" }}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-amber-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              <h3 className="text-lg font-bold mb-1">{plan.name}</h3>
              <div className="text-3xl font-extrabold text-amber-500 mb-1">
                {plan.price}
              </div>
              <p className="text-sm mb-6" style={{ color: "var(--text-muted)" }}>
                {plan.desc}
              </p>
              <ul className="space-y-2 mb-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <span className="text-amber-500 mt-0.5">✓</span>
                    <span style={{ color: "var(--text-muted)" }}>{feature}</span>
                  </li>
                ))}
              </ul>
              <motion.a
                href="#contact"
                className={`block text-center py-3 rounded-xl font-semibold transition-colors ${
                  plan.popular
                    ? "bg-amber-500 text-black hover:bg-amber-400"
                    : "border border-white/20 hover:bg-white/5"
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get started
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Testimonial */}
      <section className="relative z-10 px-6 py-24 max-w-4xl mx-auto">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="text-6xl mb-6"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            💬
          </motion.div>
          <blockquote className="text-xl sm:text-2xl font-medium leading-relaxed mb-6">
            &ldquo;Josh shipped our landing page in 10 days. It converted 3x better
            than our old site. We went back for the full app.&rdquo;
          </blockquote>
          <div className="flex items-center justify-center gap-3">
            <div
              className="w-10 h-10 rounded-full"
              style={{ background: "var(--surface-2)" }}
            />
            <div className="text-left">
              <p className="font-semibold text-sm">Client Name</p>
              <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                Founder, Startup
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* FAQ */}
      <section className="relative z-10 px-6 py-24 max-w-3xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-amber-500 text-sm font-semibold tracking-widest uppercase mb-3">
            FAQ
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Common questions.
          </h2>
        </motion.div>
        <motion.div
          className="space-y-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            {
              q: "How long does a typical project take?",
              a: "Landing pages: 2 weeks. Marketing sites: 4 weeks. Full-stack apps: 6-8 weeks. We give you a fixed timeline upfront.",
            },
            {
              q: "What if I need changes after launch?",
              a: "You own the code, so you can edit it yourself or hire us for updates. We also offer monthly retainers for ongoing support.",
            },
            {
              q: "Do you work with non-technical founders?",
              a: "Absolutely. We explain everything in plain English and train your team to manage the site after handoff.",
            },
            {
              q: "What tech stack do you use?",
              a: "Next.js + TypeScript + Tailwind for frontend. Supabase or PostgreSQL for backend. Vercel for hosting. It's modern, fast, and future-proof.",
            },
          ].map((faq, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="rounded-xl p-6"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
              }}
            >
              <h3 className="font-bold mb-2">{faq.q}</h3>
              <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                {faq.a}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA */}
      <section
        id="contact"
        className="relative z-10 px-6 py-24 max-w-5xl mx-auto"
      >
        <motion.div
          className="rounded-3xl p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, rgba(245,158,11,0.1), rgba(6,182,212,0.1))",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="absolute -top-1/2 -left-1/2 w-full h-full rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(245,158,11,0.15) 0%, transparent 70%)",
              filter: "blur(80px)",
            }}
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 relative z-10">
            Ready to build something great?
          </h2>
          <p
            className="text-lg max-w-xl mx-auto mb-8 relative z-10"
            style={{ color: "var(--text-muted)" }}
          >
            Book a free 20-minute strategy call. We&apos;ll scope your project,
            suggest the right package, and give you a clear timeline.
          </p>
          <div className="flex flex-wrap gap-4 justify-center relative z-10">
            <motion.a
              href="mailto:info@shwme.app"
              className="px-8 py-4 rounded-full text-black font-bold inline-flex items-center gap-2 bg-amber-500"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(245,158,11,0.4)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Book a free strategy call
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </motion.a>
            <motion.a
              href="mailto:info@shwme.app"
              className="px-8 py-4 rounded-full border border-white/20 font-semibold hover:bg-white/5 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              info@shwme.app
            </motion.a>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/[0.06] px-6 py-12">
        <motion.div
          className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Link
            href="/"
            className="text-lg font-bold tracking-tight"
            style={{ color: "var(--text)" }}
          >
            showme<span className="text-amber-500">.sites</span>
          </Link>
          <div className="flex items-center gap-8 text-sm" style={{ color: "var(--text-muted)" }}>
            {["Work", "Process", "Pricing", "About"].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-white transition-colors"
                whileHover={{ y: -2 }}
              >
                {item}
              </motion.a>
            ))}
            <motion.a
              href="mailto:info@shwme.app"
              className="hover:text-white transition-colors"
              whileHover={{ y: -2 }}
            >
              info@shwme.app
            </motion.a>
          </div>
          <p className="text-xs" style={{ color: "var(--text-muted)" }}>
            © 2026 showme.sites. All rights reserved.
          </p>
        </motion.div>
      </footer>
    </main>
  );
}
