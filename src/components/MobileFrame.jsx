import React from 'react'

const MobileFrame = ({ children }) => {
  return (
    <div className="mx-auto max-w-md p-4">
      <div className="relative mx-auto h-[720px] w-[360px] rounded-[36px] bg-gradient-to-b from-slate-50 to-white shadow-2xl ring-1 ring-slate-200 overflow-hidden">
        <div className="absolute inset-x-0 top-0 mx-auto mt-2 h-6 w-28 rounded-full bg-slate-200/60"></div>
        <div className="h-full w-full">{children}</div>
      </div>
    </div>
  )
}

export default MobileFrame
