"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Phase = "landing" | "leaving" | "done";

const words = [
  "programming",
  "UI/UX design",
  "game development",
  "vibecoding",
  "new hobbies",
  "how this site even works",
  "unknown coding languages",
];

// Swaps the last words of "Learning ..." in a loop: old word slides up and
// fades out, the next one rises in from below.
function RotatingWord() {
  const [index, setIndex] = useState(0);
  const [step, setStep] = useState<"idle" | "out" | "in">("idle");

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    let swapTimer: number | undefined;

    const loop = window.setInterval(() => {
      if (reduceMotion) {
        setIndex((i) => (i + 1) % words.length);
        return;
      }
      setStep("out");
      swapTimer = window.setTimeout(() => {
        setIndex((i) => (i + 1) % words.length);
        setStep("in");
      }, 350);
    }, 2800);

    return () => {
      window.clearInterval(loop);
      window.clearTimeout(swapTimer);
    };
  }, []);

  return (
    <span
      key={index}
      className={`inline-block ${
        step === "out" ? "word-out" : step === "in" ? "word-in" : ""
      }`}
    >
      {words[index]}
    </span>
  );
}

export default function Landing({ children }: { children: ReactNode }) {
  const [phase, setPhase] = useState<Phase>("landing");
  const profileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (phase !== "leaving") return;

    // Move keyboard focus to the profile once the Enter button is gone
    profileRef.current?.focus({ preventScroll: true });

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const timer = window.setTimeout(
      () => setPhase("done"),
      reduceMotion ? 0 : 900,
    );
    return () => window.clearTimeout(timer);
  }, [phase]);

  const leaving = phase === "leaving";

  return (
    <>
      {phase !== "done" && (
        <section
          aria-label="Welcome"
          aria-hidden={leaving}
          className={`fixed inset-0 z-50 overflow-y-auto bg-background transition-opacity duration-700 ease-in-out motion-reduce:transition-none ${
            leaving ? "pointer-events-none opacity-0" : "opacity-100"
          }`}
        >
          <div className="mx-auto flex min-h-full w-full max-w-5xl flex-col justify-center px-6 py-12 sm:px-12">
            <h1 className="text-[2.25rem] leading-[0.98] font-bold tracking-tight sm:text-6xl lg:text-8xl">
              <span className="block">Zendrei Martin</span>
              <span className="block">Jac A.</span>
              <span className="block">Perales</span>
            </h1>

            <p className="mt-6 text-xl leading-snug sm:text-3xl">
              <span className="block">
                IT <s className="decoration-2">Professional</s>
                <span className="sr-only"> (crossed out)</span> Amateur
              </span>
              <span className="block">
                Learning <RotatingWord />
              </span>
            </p>

            <div className="mt-8">
              <button
                type="button"
                disabled={phase !== "landing"}
                onClick={() => setPhase("leaving")}
                className="min-w-30 rounded-lg border border-accent-border bg-accent px-8 py-2.5 text-accent-foreground transition-colors hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent motion-reduce:transition-none"
              >
                Enter
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Stays out of the layout (and tab order) until Enter is pressed */}
      <div
        ref={profileRef}
        tabIndex={-1}
        className={`outline-none ${phase === "landing" ? "hidden" : "reveal"}`}
      >
        {children}
      </div>
    </>
  );
}
