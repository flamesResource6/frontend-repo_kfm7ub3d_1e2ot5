import React from 'react'
import HeroCover from './components/HeroCover'
import MobileFrame from './components/MobileFrame'
import OnboardingScreens from './components/OnboardingScreens'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-emerald-50 to-white text-slate-900">
      {/* Hero cover with Spline */}
      <HeroCover />

      {/* Heading area */}
      <div className="px-6 -mt-24 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-3xl bg-white/70 backdrop-blur-md ring-1 ring-emerald-100 shadow-xl p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <div>
                <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Byajbook Onboarding</h1>
                <p className="text-slate-600 mt-2">A clean, friendly first‑time experience in a pastel blue/green theme.</p>
              </div>
              <button className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-sky-500 text-white text-sm shadow-md hover:brightness-110">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile preview frames */}
      <div className="max-w-6xl mx-auto mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <MobileFrame>
          <OnboardingScreens />
        </MobileFrame>
        <MobileFrame>
          <OnboardingScreens />
        </MobileFrame>
        <MobileFrame>
          <OnboardingScreens />
        </MobileFrame>
      </div>

      <div className="py-8 text-center text-slate-500 text-sm">Designed to feel professional, trustworthy, and delightful.</div>
    </div>
  )
}

export default App
