"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";

const PROMPT = "Birthday flyer for Mia turning 7 — jungle theme, add a photo";

type Stage = "typing" | "building" | "done" | "resetting";

export default function PromptDemo() {
  const [typed, setTyped] = useState("");
  const [stage, setStage] = useState<Stage>("typing");
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    setTyped("");
    setStage("typing");

    let i = 0;
    const typeTimer = setInterval(() => {
      i += 1;
      setTyped(PROMPT.slice(0, i));
      if (i >= PROMPT.length) {
        clearInterval(typeTimer);
        setTimeout(() => setStage("building"), 350);
      }
    }, 28);

    return () => clearInterval(typeTimer);
  }, [cycle]);

  useEffect(() => {
    if (stage !== "building") return;
    const t = setTimeout(() => setStage("done"), 1400);
    return () => clearTimeout(t);
  }, [stage]);

  useEffect(() => {
    if (stage !== "done") return;
    const t = setTimeout(() => setStage("resetting"), 3200);
    return () => clearTimeout(t);
  }, [stage]);

  useEffect(() => {
    if (stage !== "resetting") return;
    const t = setTimeout(() => setCycle((c) => c + 1), 500);
    return () => clearTimeout(t);
  }, [stage]);

  const showDesign = stage === "building" || stage === "done";

  return (
    <div className="relative rounded-xl2 border border-brand-line bg-white p-3 shadow-pop">
      <div className="grid grid-cols-1 gap-3 md:grid-cols-[220px_1fr]">
        {/* prompt input side */}
        <div className="flex flex-col justify-between rounded-xl bg-brand-blueDark p-4">
          <div>
            <div className="mb-3 flex items-center gap-1.5 text-white/50">
              <Sparkles size={13} />
              <span className="font-mono text-[10px] uppercase tracking-[0.16em]">
                Prompt
              </span>
            </div>
            <p className="font-mono text-[13px] leading-relaxed text-white">
              {typed}
              <span className="ml-0.5 inline-block h-[13px] w-[2px] translate-y-[2px] bg-brand-blue animate-blink" />
            </p>
          </div>
          <div className="mt-6 flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-brand-red" />
            <span className="text-[11px] text-white/40">
              {stage === "typing" ? "typing…" : "generating design"}
            </span>
          </div>
        </div>

        {/* generated design side */}
        <div className="relative overflow-hidden rounded-xl bg-brand-blueTint">
          <AnimatePresence mode="wait">
            {showDesign && (
              <motion.div
                key={cycle}
                initial={{ opacity: 0 }}
                animate={{ opacity: stage === "resetting" ? 0 : 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="relative flex h-full min-h-[240px] items-center justify-center p-5"
              >
                {/* flyer mock */}
                <div className="relative h-full w-full max-w-[220px] overflow-hidden rounded-lg bg-[#123524] shadow-lg">
                  <motion.div
                    className="absolute -left-6 -top-8 h-24 w-24 rounded-full bg-[#1F6B45]"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.9 }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                  />
                  <motion.div
                    className="absolute -right-8 bottom-6 h-20 w-20 rounded-full bg-[#E9B44C]"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.85 }}
                    transition={{ delay: 0.25, duration: 0.5 }}
                  />
                  <motion.div
                    className="absolute inset-x-3 top-4"
                    initial={{ y: -8, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.45, duration: 0.4 }}
                  >
                    <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#E9B44C]">
                      You're invited
                    </p>
                    <p className="font-display text-[22px] font-bold leading-tight text-white">
                      Mia's 7th Birthday
                    </p>
                  </motion.div>

                  <motion.div
                    className="absolute left-3 top-24 h-14 w-14 rounded-md border-2 border-dashed border-white/40"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.65, duration: 0.4 }}
                  >
                    <span className="flex h-full items-center justify-center font-mono text-[8px] text-white/50">
                      photo
                    </span>
                  </motion.div>

                  <motion.div
                    className="absolute bottom-3 right-3 rounded-full bg-white/95 px-2.5 py-1"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.85, duration: 0.4 }}
                  >
                    <span className="font-mono text-[9px] font-medium text-[#123524]">
                      Sat · Aug 8 · 2 PM
                    </span>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {!showDesign && (
            <div className="flex h-full min-h-[240px] items-center justify-center">
              <div className="flex items-center gap-2 text-brand-slate">
                <div className="h-2 w-2 animate-pulse rounded-full bg-brand-blue" />
                <span className="font-mono text-[11px]">waiting for prompt</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
