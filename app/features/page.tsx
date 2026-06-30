import React from 'react'
import Card from '../../components/Card'

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold">Product Features</h1>
          <p className="text-gray-600 mt-2">Responsive two-column layout — stacks on mobile, side-by-side at md breakpoint.</p>
        </header>

        <section className="grid gap-6 md:grid-cols-2">
          <Card title="Fast Performance" description="Optimized rendering and lazy-loading keep pages snappy even with many recipes.">
            <div className="mt-4 flex items-center space-x-3">
              <a className="inline-flex items-center px-3 py-1.5 bg-indigo-600 text-white text-sm rounded-md" href="#">Learn more</a>
              <span className="text-sm text-gray-500">Trusted by thousands</span>
            </div>
          </Card>

          <Card title="Adaptive Layout" description="Two-column layout at md and above, stacking on mobile for clear readability.">
            <div className="mt-4">
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center"><span className="inline-block w-2 h-2 bg-gray-300 rounded-full mr-3"></span>Mobile-first design</li>
                <li className="flex items-center"><span className="inline-block w-2 h-2 bg-gray-300 rounded-full mr-3"></span>Accessible markup</li>
              </ul>
            </div>
          </Card>

          <Card title="Customizable" description="Easily swap icons, actions and content. Cards follow a simple, reusable pattern." />

          <Card title="Secure" description="Built with secure defaults and best practices in mind." />
        </section>
      </div>
    </main>
  )
}
