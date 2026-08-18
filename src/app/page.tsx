"use client";

import { motion } from "framer-motion";
import { ShieldCheck, FileText, ScanSearch, TriangleAlert, PenLine, ArrowRight, Circle } from "lucide-react";

const spring = { type: "spring", stiffness: 260, damping: 25 } as const;

type Tone = "ok" | "amber" | "red";

const toneStyles: Record<Tone, string> = {
  ok: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/20",
  amber: "bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500/20",
  red: "bg-rose-500/10 text-rose-700 dark:text-rose-300 border-rose-500/20",
};

const stages: {
  icon: React.ReactNode;
  label: string;
  title: string;
  detail: string;
  pill: string;
  tone: Tone;
  ref: string;
}[] = [
  {
    icon: <FileText className="w-4 h-4" />,
    label: "ENCOUNTER NOTE",
    title: "Read the physician's note",
    detail: "Level 4 established-patient visit. Extracted complexity and documented time.",
    pill: "CPT 99215 proposed",
    tone: "ok",
    ref: "Ref: Note line 4b",
  },
  {
    icon: <ScanSearch className="w-4 h-4" />,
    label: "PAYER RULES",
    title: "Checked against this payer",
    detail: "Ran 99215 against the payer's denial history for the attached diagnosis.",
    pill: "Denied 6 of last 8",
    tone: "amber",
    ref: "Payer policy #4021",
  },
  {
    icon: <TriangleAlert className="w-4 h-4" />,
    label: "DERIVED RISK",
    title: "Computed denial risk",
    detail: "The paired diagnosis doesn't support the level billed under this policy.",
    pill: "High denial probability",
    tone: "red",
    ref: "Derived · dates + policy",
  },
  {
    icon: <PenLine className="w-4 h-4" />,
    label: "STAGED CORRECTION",
    title: "Prepared a fix",
    detail: "Suggested a supported alternative with the note line that backs it. Nothing sent.",
    pill: "Draft ready for review",
    tone: "amber",
    ref: "Staged · not submitted",
  },
  {
    icon: <ShieldCheck className="w-4 h-4" />,
    label: "HUMAN SIGN-OFF",
    title: "Stops at a biller",
    detail: "A biller reviews and signs off before anything is submitted.",
    pill: "Awaiting approval",
    tone: "ok",
    ref: "Gate · required",
  },
];

const figures = [
  { fig: "01", title: "Read the note", body: "Prevo parses the raw note and proposes ICD-10 and CPT codes, each tied to the line it came from." },
  { fig: "02", title: "Check the payer", body: "Every code runs against that payer's denial history and current rules, not a generic list." },
  { fig: "03", title: "Stop at a person", body: "Risky claims are flagged and staged with a fix. A biller signs off before submission." },
];

export default function Home() {
  return (
    <div className="relative min-h-screen text-slate-900 dark:text-slate-100 overflow-x-hidden bg-[#f7f8fa] dark:bg-[#0a0c10] transition-colors">
      <div aria-hidden className="pointer-events-none absolute -top-40 -left-40 w-[38rem] h-[38rem] rounded-full bg-emerald-400/20 dark:bg-emerald-500/10 blur-[120px]" />
      <div aria-hidden className="pointer-events-none absolute top-20 right-0 w-[34rem] h-[34rem] rounded-full bg-indigo-400/20 dark:bg-indigo-500/10 blur-[120px]" />

      <header className="sticky top-4 z-30 px-4">
        <div className="mx-auto max-w-6xl flex items-center justify-between rounded-full border border-slate-200/70 dark:border-white/10 bg-white/70 dark:bg-slate-900/50 backdrop-blur-xl px-6 py-3 shadow-lg shadow-slate-900/5">
          <span className="flex items-center gap-2 mono text-[15px] font-bold tracking-tight">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            PREVO
          </span>
          <nav className="hidden sm:flex items-center gap-7 text-[13.5px] text-slate-600 dark:text-slate-300">
            {["How it works", "Approval model", "Talk to us"].map((l) => (
              <a key={l} href="#" className="relative group">
                {l}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-current transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <motion.a
              href="https://claim-jit.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={spring}
              className="hidden sm:inline-flex rounded-full border border-slate-200/70 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur px-4 py-2 text-[13.5px] font-medium"
            >
              Try it out
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={spring}
              className="rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-4 py-2 text-[13.5px] font-medium"
            >
              Schedule a demo
            </motion.a>
          </div>
        </div>
      </header>

      <section className="relative mx-auto max-w-6xl px-6 pt-20 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200/70 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur px-3 py-1 mono text-[11.5px] text-slate-600 dark:text-slate-300 mb-6"
            >
              <Circle className="w-2 h-2 fill-emerald-500 text-emerald-500" />
              CLAIMS REVIEW — INDEPENDENT CLINICS
            </motion.div>

            <h1 className="text-[40px] sm:text-[52px] leading-[1.05] font-semibold tracking-tight mb-6">
              {"Every claim, checked before it's ever sent.".split(" ").map((w, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  className="inline-block mr-[0.25em]"
                >
                  {w}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-[16.5px] leading-relaxed text-slate-600 dark:text-slate-300 mb-8 max-w-lg"
            >
              Prevo reads the physician&apos;s note, assigns the codes, and checks them
              against your payer&apos;s actual denial rules before a claim goes out the
              door. A biller still signs off on every one.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap items-center gap-5"
            >
              <motion.a
                href="#contact"
                whileTap={{ scale: 0.97 }}
                transition={spring}
                className="sheen-parent relative overflow-hidden inline-flex items-center gap-2 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-6 py-3 text-[14.5px] font-medium shadow-xl shadow-slate-900/20"
              >
                <span className="sheen absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent" />
                See it on your own claims
              </motion.a>
              <a href="#how" className="group inline-flex items-center gap-1.5 text-[14.5px] font-medium">
                How the checks work
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          </div>

          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ ...spring, delay: 0.3 }}
              className="rounded-2xl border border-slate-200/80 dark:border-white/10 bg-white/70 dark:bg-slate-900/60 backdrop-blur-xl shadow-2xl shadow-slate-900/10 overflow-hidden"
            >
              <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200/70 dark:border-white/10">
                <div className="flex items-center gap-2 mono text-[12px] text-slate-600 dark:text-slate-300">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  PREVO — CLAIM REVIEW
                </div>
                <div className="mono text-[11px] rounded-full bg-slate-100 dark:bg-white/5 px-2 py-0.5 text-slate-500 dark:text-slate-400">
                  checked in 2.4s
                </div>
              </div>

              <div className="relative p-4">
                <div className="absolute left-[30px] top-6 bottom-6 w-px bg-gradient-to-b from-emerald-400/40 via-slate-300/50 to-slate-300/10 dark:via-white/10" />
                <div className="space-y-2.5">
                  {stages.map((s, i) => (
                    <motion.div
                      key={s.label}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.015, y: -2 }}
                      transition={{ ...spring, delay: 0.4 + i * 0.5 }}
                      className="relative flex gap-3 rounded-xl border border-slate-200/70 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur p-3"
                    >
                      <div className="relative z-10 flex-shrink-0 w-8 h-8 rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900 grid place-items-center">
                        {s.icon}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="mono text-[10.5px] text-slate-400 dark:text-slate-500 mb-0.5">{s.label}</div>
                        <div className="text-[13.5px] font-medium">{s.title}</div>
                        <div className="text-[12px] leading-relaxed text-slate-500 dark:text-slate-400 mt-0.5">{s.detail}</div>
                        <div className="flex items-center gap-2 mt-2 flex-wrap">
                          <span className={`mono text-[10.5px] rounded-full border px-2 py-0.5 ${toneStyles[s.tone]}`}>{s.pill}</span>
                          <span className="mono text-[10px] text-slate-400 dark:text-slate-500">{s.ref}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="how" className="relative mx-auto max-w-6xl px-6 py-16">
        <div className="mono text-[12px] text-slate-500 dark:text-slate-400 mb-3">HOW IT WORKS</div>
        <h2 className="text-[28px] font-semibold tracking-tight mb-10">One claim, from note to sign-off</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {figures.map((f, i) => (
            <motion.div
              key={f.fig}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              whileHover={{ scale: 1.015, y: -2 }}
              transition={{ ...spring, delay: i * 0.08 }}
              className="rounded-2xl border border-slate-200/80 dark:border-white/10 bg-white/70 dark:bg-slate-900/60 backdrop-blur-xl shadow-xl shadow-slate-900/5 p-6"
            >
              <div className="mono text-[12px] text-slate-400 mb-4">FIGURE {f.fig}</div>
              <h3 className="text-[18px] font-semibold mb-2">{f.title}</h3>
              <p className="text-[13.5px] leading-relaxed text-slate-600 dark:text-slate-300">{f.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="contact" className="relative mx-auto max-w-6xl px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={spring}
          className="rounded-3xl border border-slate-200/80 dark:border-white/10 bg-white/70 dark:bg-slate-900/60 backdrop-blur-xl shadow-2xl shadow-slate-900/10 px-8 py-16 text-center"
        >
          <div className="mono text-[12px] text-slate-500 dark:text-slate-400 mb-4">GET STARTED</div>
          <h2 className="text-[30px] sm:text-[36px] font-semibold tracking-tight mb-4">Bring us your last month of denials.</h2>
          <p className="text-[15px] text-slate-600 dark:text-slate-300 max-w-xl mx-auto mb-8">
            We&apos;ll show you, on your own claims, which ones Prevo would have caught before they went out.
          </p>
          <motion.a
            href="mailto:hello@prevo.health"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={spring}
            className="inline-flex items-center gap-2 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-7 py-3.5 text-[14.5px] font-medium shadow-xl shadow-slate-900/20"
          >
            hello@prevo.health
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </section>

      <footer className="relative border-t border-slate-200/70 dark:border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-8 flex items-center justify-between mono text-[12px] text-slate-500 dark:text-slate-400">
          <span>PREVO</span>
          <span>BUILT FOR CLINICS WITH 1–10 PROVIDERS</span>
        </div>
      </footer>
    </div>
  );
}
