import React from 'react'
import Spline from '@splinetool/react-spline'

const HeroCover = () => {
  return (
    <div className="relative w-full h-[320px] sm:h-[380px] md:h-[440px] overflow-hidden">
      <Spline scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      {/* Soft gradient veil for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/0 via-white/20 to-white"></div>
    </div>
  )
}

export default HeroCover
