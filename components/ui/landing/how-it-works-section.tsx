const steps = [
  {
    title: "Set your availability",
    description:
      "Use the visual calendar to drag and create time blocks when you're free to meet.",
  },
  {
    title: "Create meeting types",
    description:
      "Define different meeting types like consultations, quick chats, or discovery calls. Set custom durations for each type.",
  },
  {
    title: "Share your link",
    description:
      "Share your personalized booking link. Guests select a meeting type, pick an available slot in their timezone, and book instantly.",
  },
  {
    title: "Meet with confidence",
    description:
      "Receive booking confirmations with auto-generated video links. Track attendee responses and manage all your bookings in one place.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">
            How Kroft works
          </h2>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            Get up and running in minutes. No complicated setup required.
          </p>
        </div>

        <div className="mt-12 grid gap-x-10 gap-y-10 md:grid-cols-2">
          {steps.map((step, idx) => (
            <div key={step.title} className="flex gap-4">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-blue-500 text-sm font-bold text-white">
                {String(idx + 1).padStart(2, "0")}
              </div>

              <div>
                <h3 className="text-base font-semibold text-zinc-900 dark:text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
