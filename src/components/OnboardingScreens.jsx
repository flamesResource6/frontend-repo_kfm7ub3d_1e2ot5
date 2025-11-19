import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ShieldCheck, Sparkles, Wallet, CheckCircle2 } from 'lucide-react'

const steps = [
  {
    key: 'welcome',
    title: 'Byajbook',
    subtitle: 'Smart, simple finance for everyone',
    body: 'Track cashflow, cards and collections in one calm place.',
    icon: <Wallet className="w-12 h-12 text-emerald-500" />,
  },
  {
    key: 'security',
    title: 'Bank‑grade security',
    subtitle: 'Your data stays yours',
    body: '256‑bit encryption, secure cloud backups, and granular privacy controls.',
    icon: <ShieldCheck className="w-12 h-12 text-sky-500" />,
  },
  {
    key: 'features',
    title: 'Automated insights',
    subtitle: 'Let numbers speak clearly',
    body: 'Smart categorization, late‑fee alerts, and cashflow forecasts.',
    icon: <Sparkles className="w-12 h-12 text-teal-500" />,
  },
  {
    key: 'ready',
    title: 'Ready to begin?',
    subtitle: 'Create your secure workspace',
    body: 'It only takes a minute. You can change everything later.',
    icon: <CheckCircle2 className="w-12 h-12 text-emerald-500" />,
  },
]

const Card = ({ children }) => (
  <div className="rounded-3xl bg-white/80 backdrop-blur-sm shadow-lg ring-1 ring-emerald-100/60 p-6">
    {children}
  </div>
)

const Dot = ({ active }) => (
  <div className={`h-2 w-2 rounded-full transition-all ${active ? 'w-6 bg-emerald-500' : 'bg-emerald-200'}`} />
)

const OnboardingScreens = () => {
  const [index, setIndex] = React.useState(0)
  const step = steps[index]

  const next = () => setIndex((i) => Math.min(i + 1, steps.length - 1))
  const prev = () => setIndex((i) => Math.max(i - 1, 0))

  return (
    <div className="h-full w-full bg-gradient-to-b from-sky-50 via-emerald-50 to-white">
      {/* Top brand area */}
      <div className="flex items-center justify-between px-6 pt-6">
        <div className="flex items-center gap-3">
          <div className="grid place-content-center h-10 w-10 rounded-2xl bg-gradient-to-br from-emerald-400 to-sky-400 text-white font-semibold shadow-md">
            B
          </div>
          <div>
            <div className="text-slate-900 font-semibold tracking-tight">Byajbook</div>
            <div className="text-xs text-slate-500 -mt-0.5">Finance, simplified</div>
          </div>
        </div>
        <button
          className="text-xs text-slate-500 hover:text-slate-700 transition"
          onClick={() => setIndex(steps.length - 1)}
        >
          Skip
        </button>
      </div>

      {/* Main content card */}
      <div className="px-5 mt-4">
        <Card>
          <div className="flex items-center gap-4">
            {step.icon}
            <div>
              <h2 className="text-xl font-semibold text-slate-900 tracking-tight">{step.title}</h2>
              <p className="text-sm text-slate-500">{step.subtitle}</p>
            </div>
          </div>

          <div className="my-6">
            <AnimatePresence mode="wait">
              <motion.p
                key={step.key}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.28 }}
                className="text-slate-600"
              >
                {step.body}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Vector-style illustration substitute */}
          <div className="relative mt-2 mb-4 grid place-content-center">
            <div className="h-32 w-full rounded-2xl bg-gradient-to-br from-emerald-50 to-sky-50 ring-1 ring-emerald-100/60 shadow-inner"/>
            <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-90">
              <div className="h-10 w-16 rounded-xl bg-emerald-200/70"/>
              <div className="h-16 w-28 rounded-2xl bg-sky-200/70"/>
              <div className="h-10 w-16 rounded-xl bg-teal-200/70"/>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {steps.map((_, i) => (
                <Dot key={i} active={i === index} />
              ))}
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={prev}
                disabled={index === 0}
                className="px-3 py-2 text-sm rounded-xl text-slate-600 disabled:opacity-40 hover:bg-slate-100"
              >
                Back
              </button>
              <button
                onClick={next}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-sky-500 text-white text-sm shadow-md hover:brightness-110 active:scale-[.99]"
              >
                {index === steps.length - 1 ? 'Get Started' : 'Next'}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </Card>
      </div>

      {/* Flow steps mock */}
      <div className="px-5 mt-4 grid grid-cols-3 gap-3">
        {['Verify', 'Connect', 'Personalize'].map((label, i) => (
          <div key={label} className={`rounded-2xl p-3 text-center shadow-sm ring-1 ${i <= index ? 'bg-white ring-emerald-100' : 'bg-white/70 ring-emerald-100/60'}`}>
            <div className={`text-[11px] font-medium ${i <= index ? 'text-emerald-600' : 'text-slate-500'}`}>{label}</div>
          </div>
        ))}
      </div>

      {/* Safe footer spacing */}
      <div className="h-6" />
    </div>
  )
}

export default OnboardingScreens
