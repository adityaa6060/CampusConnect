"use client"

import { ArrowRight } from "lucide-react"
import { motion, useReducedMotion } from "framer-motion"
import { SonarGrid } from "./ui/sonar-grid"

const settings = {
  ringWidth: 90,
  speed: 260,
  amplitude: 2.2,
  pingEvery: 2.4,
  interactive: true,
  spacing: 26,
  baseOpacity: 0.28,
  useThemeColor: false,
  color: "#000000",
  eyebrow: "Free Peer-to-Peer Learning on Campus",
  headline: "Learn anything from students like you",
  subline: "Skip the boring lectures. Connect with skilled peers on your campus, book 1-on-1 sessions, and actually learn — for free.",
}

export default function Demo(props: Partial<typeof settings>) {
  const s = { ...settings, ...props }
  const reduce = useReducedMotion()
  const enter = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 14, filter: "blur(6px)" },
          animate: { opacity: 1, y: 0, filter: "blur(0px)" },
          transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
        }

  return (
    <SonarGrid
      id="sonar-grid-demo"
      ringWidth={s.ringWidth}
      speed={s.speed}
      amplitude={s.amplitude}
      pingEvery={s.pingEvery}
      interactive={s.interactive}
      spacing={s.spacing}
      baseOpacity={s.baseOpacity}
      color={s.useThemeColor ? undefined : s.color}
      pingArea={[0.22, 0.18, 0.78, 0.82]}
      className="bg-white flex min-h-[max(560px,100svh)] w-full flex-col font-mono"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_34%_30%_at_50%_50%,#ffffff_0%,transparent_100%)]"
      />
      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col items-center justify-center px-8 py-24 text-center">
        <div className="flex max-w-2xl flex-col items-center">
          <motion.p
            {...enter(0)}
            className="text-black border-black mb-5 inline-flex items-center gap-2 rounded-none border-2 px-3 py-1 text-xs font-bold"
            style={{ boxShadow: '2px 2px 0px #000' }}
          >
            <span aria-hidden="true" className="bg-black size-1.5 rounded-none" />
            {s.eyebrow}
          </motion.p>
          <motion.h1
            {...enter(0.08)}
            className="text-black text-5xl font-bold tracking-tight text-balance sm:text-6xl md:text-7xl"
          >
            {s.headline}
          </motion.h1>
          <motion.p {...enter(0.16)} className="text-black mt-6 max-w-xl text-base text-pretty sm:text-lg font-bold">
            {s.subline}
          </motion.p>
          <motion.div {...enter(0.24)} className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              id="cta-primary"
              data-slot="cta-primary"
              className="group bg-white text-black border-2 border-black inline-flex h-11 cursor-pointer items-center gap-2 rounded-none px-6 text-sm font-bold transition-all duration-200 outline-none hover:bg-black hover:text-white"
              style={{ boxShadow: '4px 4px 0px #000' }}
            >
              Get Started Free
              <ArrowRight
                aria-hidden="true"
                className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </button>
          </motion.div>
        </div>
      </div>
    </SonarGrid>
  )
}
