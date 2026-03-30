import Link from "next/link";
import { Show, SignUpButton } from "@clerk/nextjs";

import { buttonVariants } from "@/components/ui/button-variants";

export function CTASection() {
  return (
    <section className="bg-blue-500 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to simplify your scheduling?
          </h2>
          <p className="mt-4 text-lg text-blue-100">
            Join thousands of professionals who save hours every week with
            Kroft.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Show when="signed-out">
              <SignUpButton mode="modal">
                <button
                  type="button"
                  className={buttonVariants({
                    size: "lg",
                    className:
                      "w-full bg-white text-base text-blue-600 hover:bg-blue-50 sm:w-auto",
                  })}
                >
                  Get Started Free
                </button>
              </SignUpButton>
            </Show>

            <Show when="signed-in">
              <Link
                href="/dashboard"
                className={buttonVariants({
                  variant: "outline",
                  size: "lg",
                  className:
                    "w-full border-white bg-white/0 text-base text-white hover:bg-white/10 sm:w-auto",
                })}
              >
                Go to Dashboard
              </Link>
            </Show>
          </div>
        </div>
      </div>
    </section>
  );
}
