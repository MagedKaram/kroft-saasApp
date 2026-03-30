import { Calendar } from "lucide-react";
import Link from "next/link";
import { Button } from "../button";
import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";

export default function LandingHeader() {
  return (
    <header className="fixed top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm dark:bg-zinc-950 ">
      <div className="mx-auto flex h-16 max-w-7xl  items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex gap-2 items-center">
            <div className="flex size-9 items-center  justify-center rounded-lg bg-blue-500">
              <Calendar className="size-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white">
              Kroft
            </span>
          </Link>
          <Link
            href="/pricing"
            className="text-sm font-medium text-zinc-700 hover:text-blue-500 dark:text-zinc-300 dark:hover:text-blue-400"
          >
            Pricing
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <Show when="signed-out">
            <SignInButton mode="modal">
              <Button variant="outline" size="lg">
                Sign In
              </Button>
            </SignInButton>
            <SignUpButton mode="modal">
              <Button
                variant="outline"
                size="lg"
                className="bg-blue-500 hover:bg-blue-600 text-white"
              >
                Get Started
              </Button>
            </SignUpButton>
          </Show>

          <Show when="signed-in">
            <Button
              variant="outline"
              size="lg"
              className="bg-blue-500 hover:bg-blue-600 text-white"
            >
              <Link href="/dashboard">Dashboard</Link>
            </Button>
          </Show>
        </div>
      </div>
    </header>
  );
}
