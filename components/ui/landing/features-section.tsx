import {
  BellRing,
  Calendar,
  Clock,
  Globe,
  RefreshCw,
  Video,
} from "lucide-react";

const features = [
  {
    title: "Smart Availability",
    description:
      "Set your availability with an intuitive drag-and-drop calendar. Create time blocks visually and let Kroft handle the rest.",
    Icon: Calendar,
  },
  {
    title: "Google Calendar Sync",
    description:
      "Connect multiple Google accounts to automatically sync busy times and prevent double bookings across all your calendars.",
    Icon: RefreshCw,
  },
  {
    title: "Instant Google Meet",
    description:
      "Every booking automatically generates a Google Meet link. No manual setup required for your video meetings.",
    Icon: Video,
  },
  {
    title: "Flexible Meeting Types",
    description:
      "Create different meeting types with custom durations. Quick 15-minute chats or deep 90-minute consultations.",
    Icon: Clock,
  },
  {
    title: "Timezone Intelligence",
    description:
      "Automatic timezone detection shows guests availability in their local time. No confusion, no missed meetings.",
    Icon: Globe,
  },
  {
    title: "Real-Time Updates",
    description:
      "Track bookings status with live attendee responses. See who accepted, declined, or is still deciding.",
    Icon: BellRing,
  },
];

export function FeaturesSection() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">
            Everything you need to manage your schedule
          </h2>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            Powerful features designed to eliminate scheduling friction and help
            you focus on what matters.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ title, description, Icon }) => (
            <div
              key={title}
              className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/40"
            >
              <div className="flex size-11 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
                <Icon className="size-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-zinc-900 dark:text-white">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
