import React from 'react'

type CardProps = {
  title: string
  description?: string
  children?: React.ReactNode
}

export default function Card({ title, description, children }: CardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <div className="flex items-start space-x-4">
          <div className="flex-none w-14 h-14 rounded-md bg-indigo-50 flex items-center justify-center text-indigo-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold">{title}</h3>
            {description && <p className="mt-2 text-gray-600">{description}</p>}
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
