import { Check, Calendar } from "lucide-react";

const items = [
  "Secure OAuth 2.0 authentication",
  "Multiple Google accounts support",
  "Auto-generated Google Meet links",
  "Real-time attendee status tracking",
];

export function IntegrationSection() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">
              Seamless Google Calendar integration
            </h2>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
              Connect multiple Google accounts and let Kroft do the heavy
              lifting. Your busy times are automatically blocked, and new
              bookings create calendar events with video links.
            </p>

            <ul className="mt-8 space-y-3">
              {items.map((label) => (
                <li key={label} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex size-6 items-center justify-center rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400">
                    <Check className="size-4" />
                  </span>
                  <span className="text-sm leading-6 text-zinc-700 dark:text-zinc-300">
                    {label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-6 -z-10 rounded-3xl bg-linear-to-b from-blue-50 to-transparent dark:from-blue-950/30" />

            <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
              <div className="flex items-center gap-3 border-b border-zinc-200 bg-white px-5 py-4 dark:border-zinc-800 dark:bg-zinc-950">
                <span className="inline-flex size-9 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
                  <Calendar className="size-5" />
                </span>

                <div>
                  <div className="text-sm font-semibold text-zinc-900 dark:text-white">
                    Google Calendar
                  </div>
                  <div className="text-xs text-zinc-500 dark:text-zinc-400">
                    Connected
                  </div>
                </div>
              </div>

              <div className="space-y-3 p-5">
                {[
                  {
                    time: "9:00 AM",
                    title: "Team Standup",
                    tone: "bg-blue-500",
                  },
                  {
                    time: "11:00 AM",
                    title: "Client Call",
                    tone: "bg-purple-500",
                  },
                  { time: "2:00 PM", title: "Available", tone: "bg-green-500" },
                  {
                    time: "4:00 PM",
                    title: "Review Meeting",
                    tone: "bg-zinc-400",
                  },
                ].map((row) => (
                  <div
                    key={`${row.time}-${row.title}`}
                    className="flex items-center justify-between rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 dark:border-zinc-800 dark:bg-zinc-950/30"
                  >
                    <div className="flex items-center gap-3">
                      <span className={`size-2.5 rounded-full ${row.tone}`} />
                      <div className="text-sm font-medium text-zinc-900 dark:text-white">
                        {row.title}
                      </div>
                    </div>
                    <div className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                      {row.time}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
