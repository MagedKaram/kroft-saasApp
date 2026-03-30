import Link from "next/link";
import { Sparkles } from "lucide-react";
import { Show, SignInButton, SignUpButton } from "@clerk/nextjs";

import { buttonVariants } from "@/components/ui/button-variants";

import { HeroVisual } from "./hero-visual";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-16 pb-20 sm:pt-16 sm:pb-32">
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-blue-50/80 to-white dark:from-blue-950/20 dark:to-zinc-950" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="mx-auto max-w-3xl text-center lg:mx-0 lg:text-start">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-medium text-blue-700 dark:border-blue-800 dark:bg-blue-950/40 dark:text-blue-300">
              <Sparkles className="size-4" />
              Scheduling made simple
            </div>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-900 sm:text-6xl dark:text-white">
              Schedule meetings{" "}
              <span className="text-blue-500">without the back-and-forth</span>
            </h1>

            <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              Kroft connects to your calendar, shows your availability, and lets
              anyone book time with you instantly.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
              <Show when="signed-out">
                <SignUpButton mode="modal">
                  <button
                    type="button"
                    className={buttonVariants({
                      size: "lg",
                      className:
                        "w-full bg-blue-500 text-base text-white hover:bg-blue-600 sm:w-auto",
                    })}
                  >
                    Start Scheduling Free
                  </button>
                </SignUpButton>

                <SignInButton mode="modal">
                  <button
                    type="button"
                    className={buttonVariants({
                      variant: "outline",
                      size: "lg",
                      className: "w-full text-base sm:w-auto",
                    })}
                  >
                    Sign In
                  </button>
                </SignInButton>
              </Show>

              <Show when="signed-in">
                <Link
                  href="/dashboard"
                  className={buttonVariants({
                    variant: "outline",
                    size: "lg",
                    className:
                      "w-full bg-blue-500 text-base text-white hover:bg-blue-600 sm:w-auto",
                  })}
                >
                  Go to Dashboard
                </Link>
              </Show>
            </div>
          </div>

          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
