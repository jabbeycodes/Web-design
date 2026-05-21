"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

export default function HomePage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="relative min-h-screen overflow-x-hidden" style={{ background: 'var(--bg)', color: 'var(--text)' }}>
      {/* Ambient orbs */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div
          className="absolute -top-[20%] -left-[10%] w-[60vw] h-[60vw] rounded-full animate-float"
          style={{
            background: "radial-gradient(circle, rgba(245,158,11,0.15) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute top-[30%] -right-[15%] w-[50vw] h-[50vw] rounded-full animate-float-delayed"
          style={{
            background: "radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute bottom-[10%] left-[20%] w-[40vw] h-[40vw] rounded-full animate-float-slow"
          style={{
            background: "radial-gradient(circle, rgba(245,158,11,0.08) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between backdrop-blur-md border-b" style={{ background: 'var(--nav-bg)', borderColor: 'var(--border)' }}>
        <Link href="/" className="text-xl font-bold tracking-tight" style={{ color: 'var(--text)' }}>
          showme<span className="text-amber-500">.sites</span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <a href="#work" className="text-sm transition-colors" style={{ color: 'var(--text-muted)' }}>Work</a>
          <a href="#process" className="text-sm transition-colors" style={{ color: 'var(--text-muted)' }}>Process</a>
          <a href="#pricing" className="text-sm transition-colors" style={{ color: 'var(--text-muted)' }}>Pricing</a>
          <a href="#about" className="text-sm transition-colors" style={{ color: 'var(--text-muted)' }}>About</a>
        </div>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a href="#contact" className="px-5 py-2 rounded-full text-sm font-semibold bg-amber-500 text-black hover:bg-amber-400 transition-colors">
            Start a project
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative z-10 min-h-screen flex flex-col justify-center px-6 pt-20 pb-12 max-w-7xl mx-auto">
        <div className="max-w-4xl">
          <p className="text-amber-500 text-sm font-semibold tracking-widest uppercase mb-6 animate-slide-up">
            AVAILABLE FOR NEW PROJECTS
          </p>
          <h1
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] mb-8 animate-slide-up"
            style={{ animationDelay: "0.1s" }}
          >
            You get the code.{" "}
            <span className="text-amber-500">We just build it fast.</span>
          </h1>
          <p
            className="text-lg sm:text-xl max-w-2xl leading-relaxed mb-10 animate-slide-up"
            style={{ animationDelay: "0.2s", color: 'var(--text-muted)' }}
          >
            High-converting landing pages, marketing sites, and full-stack apps for founders
            who want to ship this month — not next quarter.
          </p>
          <div className="flex flex-wrap gap-4 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <a href="#contact" className="glow-btn px-8 py-4 rounded-full text-black font-bold text-base inline-flex items-center gap-2">
              Book a free strategy call
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </a>
            <a href="#work" className="px-8 py-4 rounded-full font-semibold text-base transition-colors" style={{ border: '1px solid var(--border-medium)', color: 'var(--text)' }}>
              See our work
            </a>
          </div>
        </div>
        <div className="mt-16 lg:mt-20 animate-slide-up" style={{ animationDelay: "0.4s" }}>
          <div className="glass-card rounded-2xl overflow-hidden p-2">
            <Image
              src="/images/mockup-laptop.jpg"
              alt="showme.sites portfolio showcase"
              width={1200}
              height={675}
              className="rounded-xl w-full h-auto"
              priority
            />
          </div>
        </div>
      </section>

      {/* Problem / Solution */}
      <section id="work" className="relative z-10 px-6 py-24 max-w-7xl mx-auto">
        <div className="text-center mb-16 reveal">
          <p className="text-amber-500 text-sm font-semibold tracking-widest uppercase mb-3">YOUR PROBLEM, OUR SOLUTION</p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">From frustration to results.</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {[
            {
              icon: "💻",
              title: "Your website looks outdated and unprofessional",
              desc: "First impressions matter. An old, slow site costs you credibility before visitors read a word.",
              solution: "We build modern, fast-loading sites that instantly communicate quality and trust.",
            },
            {
              icon: "📉",
              title: "Visitors leave without taking action",
              desc: "Confusing navigation, weak CTAs, and poor mobile experience kill conversions.",
              solution: "Strategic design with clear paths to conversion — every page optimized for results.",
            },
            {
              icon: "⏰",
              title: "Projects drag on for months with no end in sight",
              desc: "Agencies that over-promise and under-deliver waste your time and budget.",
              solution: "Fixed timelines with weekly deliverables. You'll see progress, not promises.",
            },
            {
              icon: "🔧",
              title: "You don't know how to update or maintain your site",
              desc: "Paying for every tiny change is expensive and frustrating.",
              solution: "Built on modern stacks you own. We train your team or handle it with our retainer.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="glass-card rounded-2xl p-7 reveal"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-muted)' }}>{item.desc}</p>
              <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl px-4 py-3">
                <p className="text-amber-400 text-sm font-medium">✓ {item.solution}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="relative z-10 px-6 py-24 max-w-7xl mx-auto">
        <div className="text-center mb-16 reveal">
          <p className="text-amber-500 text-sm font-semibold tracking-widest uppercase mb-3">WHAT WE DO</p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">Services designed to scale.</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { icon: "🎯", title: "Landing Pages", desc: "High-converting single-page sites that turn visitors into leads and customers." },
            { icon: "📱", title: "Marketing Sites", desc: "Multi-page experiences with blogs, case studies, and SEO-optimized content." },
            { icon: "🚀", title: "SaaS MVPs", desc: "Full-stack apps with auth, databases, payments, and dashboards. Ship in weeks." },
            { icon: "🛒", title: "E-commerce", desc: "Scalable online stores with cart, checkout, and inventory management." },
            { icon: "🎨", title: "Brand Design", desc: "Visual identity, logo, and design systems that make you stand out." },
            { icon: "📊", title: "Analytics Setup", desc: "Conversion tracking, heatmaps, and performance monitoring." },
          ].map((s, i) => (
            <div
              key={i}
              className="glass-card rounded-2xl p-7 reveal group"
              style={{ transitionDelay: `${i * 75}ms` }}
            >
              <div className="text-3xl mb-4">{s.icon}</div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-amber-500 transition-colors">{s.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Us */}
      <section className="relative z-10 px-6 py-24 max-w-7xl mx-auto">
        <div className="text-center mb-16 reveal">
          <p className="text-amber-500 text-sm font-semibold tracking-widest uppercase mb-3">WHY CHOOSE US</p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">Expertise, Innovation, & Exceptional Service</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: "⚡", title: "Ship in Weeks, Not Months", desc: "Our design-in-browser approach means you see real progress fast." },
            { icon: "🔒", title: "You Own Everything", desc: "Full code ownership. Deploy anywhere. No vendor lock-in." },
            { icon: "📈", title: "Built to Convert", desc: "Every decision — from layout to copy — is optimized for results." },
            { icon: "🌍", title: "US Market Expertise", desc: "American payment methods, user behavior, and market dynamics." },
            { icon: "🎯", title: "No Scope Creep", desc: "Fixed-price packages with clear deliverables. No surprises." },
            { icon: "💬", title: "Direct Communication", desc: "Talk to the builder, not a project manager. Fast feedback loops." },
            { icon: "🔧", title: "Modern Tech Stack", desc: "Next.js, Supabase, Vercel — fast, scalable, and future-proof." },
            { icon: "🤝", title: "Post-Launch Support", desc: "Monthly retainers for updates, monitoring, and growth." },
          ].map((item, i) => (
            <div
              key={i}
              className="glass-card rounded-xl p-6 reveal"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="text-2xl mb-3">{item.icon}</div>
              <h4 className="font-bold text-base mb-2">{item.title}</h4>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="relative z-10 px-6 py-24 max-w-7xl mx-auto">
        <div className="text-center mb-16 reveal">
          <p className="text-amber-500 text-sm font-semibold tracking-widest uppercase mb-3">OUR WORK</p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">Projects we've shipped.</h2>
          <p className="mt-4 max-w-2xl mx-auto" style={{ color: 'var(--text-muted)' }}>Real products for real founders. From community platforms to marketing sites.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { img: "/images/portfolio-1.jpg", title: "Fintech Dashboard", desc: "Real-time analytics platform" },
            { img: "/images/portfolio-2.jpg", title: "E-commerce Store", desc: "Headless Shopify storefront" },
            { img: "/images/portfolio-3.jpg", title: "Community Platform", desc: "Events + social feed" },
            { img: "/images/portfolio-4.jpg", title: "SaaS Marketing Site", desc: "B2B lead generation" },
            { img: "/images/portfolio-5.jpg", title: "Brand Identity", desc: "Visual system + guidelines" },
            { img: "/images/portfolio-6.jpg", title: "Mobile App UI", desc: "Flutter + native design" },
            { img: "/images/portfolio-7.jpg", title: "Enterprise Portal", desc: "Custom admin dashboard" },
          ].map((project, i) => (
            <div
              key={i}
              className="glass-card rounded-2xl overflow-hidden reveal group"
              style={{ transitionDelay: `${i * 75}ms` }}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-lg font-bold text-white">{project.title}</h3>
                  <p className="text-sm text-neutral-400">{project.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="relative z-10 px-6 py-24 max-w-7xl mx-auto">
        <div className="text-center mb-16 reveal">
          <p className="text-amber-500 text-sm font-semibold tracking-widest uppercase mb-3">PRICING</p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">No surprises. No hidden fees.</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              name: "Starter",
              who: "Founders who need to launch fast",
              price: "$600 – $900",
              features: [
                "1 custom landing page (up to 8 sections)",
                "Mobile + desktop responsive",
                "Contact form + lead capture",
                "Speed optimized (90+ Lighthouse)",
                "Basic SEO + metadata",
                "Delivery: 5 business days",
              ],
              notIncluded: ["CMS/blog", "Auth/login", "Database", "Payments"],
              popular: false,
            },
            {
              name: "Growth",
              who: "Startups validating a new product",
              price: "$2,500 – $4,500",
              features: [
                "Everything in Starter, plus:",
                "Multi-page site (up to 5 pages)",
                "Blog with CMS",
                "Auth (login/signup)",
                "Dashboard + admin panel",
                "Stripe or Paystack payments",
                "Delivery: 2 weeks",
              ],
              notIncluded: ["Custom API", "Mobile app", "Complex workflows"],
              popular: true,
            },
            {
              name: "Scale",
              who: "Teams ready to convert at volume",
              price: "$4,500 – $7,500",
              features: [
                "Everything in Growth, plus:",
                "Unlimited pages",
                "Custom API + database",
                "Advanced analytics",
                "A/B testing setup",
                "Email automation (Resend)",
                "Delivery: 3–4 weeks",
              ],
              notIncluded: ["Native mobile apps", "AI/ML features"],
              popular: false,
            },
            {
              name: "Enterprise",
              who: "Custom scope, dedicated team",
              price: "$7,500+",
              features: [
                "Full-stack SaaS application",
                "Custom design system",
                "Multiple integrations",
                "Performance + security audit",
                "Priority support (SLA)",
                "Monthly retainer available",
              ],
              notIncluded: [],
              popular: false,
            },
          ].map((tier, i) => (
            <div
              key={i}
              className={`glass-card rounded-2xl p-6 reveal relative ${
                tier.popular ? "lg:scale-105 z-10" : ""
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-amber-500 text-black text-xs font-bold">
                  MOST POPULAR
                </div>
              )}
              <p className="text-xs mb-2" style={{ color: 'var(--text-muted)' }}>{tier.who}</p>
              <h3 className="text-xl font-bold mb-1">{tier.name}</h3>
              <div className="flex items-baseline gap-1 mb-5">
                <span className="text-3xl font-extrabold text-amber-500">{tier.price}</span>
                {tier.price !== "Custom" && <span className="text-sm" style={{ color: 'var(--text-muted)' }}> / project</span>}
              </div>
              <ul className="space-y-2.5 mb-5">
                {tier.features.map((f, j) => (
                  <li key={j} className="text-sm flex items-start gap-2" style={{ color: 'var(--text)' }}>
                    <svg width="16" height="16" viewBox="0 0 16 16" className="mt-0.5 text-amber-500 shrink-0" fill="none">
                      <path d="M2 8l4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              {tier.notIncluded.length > 0 && (
                <div className="mb-5">
                  <p className="text-xs mb-2" style={{ color: 'var(--text-muted)' }}>Not included:</p>
                  <ul className="space-y-1">
                    {tier.notIncluded.map((ni, j) => (
                      <li key={j} className="text-sm flex items-start gap-2" style={{ color: 'var(--text-muted)' }}>
                        <svg width="16" height="16" viewBox="0 0 16 16" className="mt-0.5 shrink-0" style={{ color: 'var(--text-subtle)' }} fill="none">
                          <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                        {ni}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <a
                href="#contact"
                className={`block text-center w-full py-3 rounded-xl font-semibold transition-colors ${
                  tier.popular
                    ? "bg-amber-500 text-black hover:bg-amber-400"
                    : "border"
                }`}
                style={tier.popular ? {} : { borderColor: 'var(--border-medium)' }}
              >
                {tier.price === "Custom" ? "Contact Us" : "Get Started"}
              </a>
            </div>
          ))}
        </div>

        {/* Trust signals */}
        <div className="mt-16 grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto reveal">
          <div className="flex items-center gap-4">
            <svg className="w-10 h-10 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <p className="text-2xl font-bold text-amber-500">100% fixed price</p>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>No hourly surprises. Quote upfront, pay once.</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <svg className="w-10 h-10 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <p className="text-2xl font-bold text-amber-500">50% upfront</p>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Start with 50%, pay the rest at delivery.</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <svg className="w-10 h-10 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <div>
              <p className="text-2xl font-bold text-amber-500">Direct builder</p>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Talk to the person building it. No middlemen.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="relative z-10 px-6 py-24 max-w-7xl mx-auto">
        <div className="glass-card rounded-3xl p-8 md:p-16 text-center reveal">
          <p className="text-amber-500 text-sm font-semibold tracking-widest uppercase mb-4">READY TO LAUNCH?</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's build something that converts.</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8" style={{ color: 'var(--text-muted)' }}>
            Book a free 30-minute strategy call. We'll audit your current site, map out a plan, and give you a clear price range — no surprises, no obligations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:info@shwme.app" className="glow-btn px-8 py-4 rounded-full text-black font-bold inline-flex items-center gap-2">
              Book a strategy call
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </a>
            <a href="mailto:info@shwme.app" className="px-8 py-4 rounded-full font-semibold transition-colors" style={{ border: '1px solid var(--border-medium)', color: 'var(--text)' }}>
              info@shwme.app
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t px-6 py-12" style={{ borderColor: 'var(--footer-border)' }}>
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link href="/" className="text-lg font-bold tracking-tight" style={{ color: 'var(--text)' }}>
            showme<span className="text-amber-500">.sites</span>
          </Link>
          <div className="flex items-center gap-6">
            <a href="#work" className="text-sm transition-colors" style={{ color: 'var(--text-subtle)' }}>Work</a>
            <a href="#pricing" className="text-sm transition-colors" style={{ color: 'var(--text-subtle)' }}>Pricing</a>
            <a href="#about" className="text-sm transition-colors" style={{ color: 'var(--text-subtle)' }}>About</a>
            <a href="mailto:info@shwme.app" className="text-sm transition-colors" style={{ color: 'var(--text-subtle)' }}>info@shwme.app</a>
          </div>
          <p className="text-xs" style={{ color: 'var(--text-subtle)' }}>© 2026 showme.sites. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
