import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SwipeLeft AI - Human Judgment. AI Efficiency.',
  description: 'Swipe left on hiring headaches. AI handles the busywork; we handle the judgment. Faster placements, better fit, and a transparent 20% markup cap.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans">
        <nav className="bg-white shadow-sm sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-48">
              {/* ↑ Changed from h-20 to h-36 to fit bigger logo */}
              <div className="flex items-center">
                <a href="/" className="flex items-center">
                  <img 
                    src="/logo.png" 
                    alt="SwipeLeft AI - Recruiting & Staffing" 
                    className="h-48 w-auto"
                  />
                </a>
              </div>
              <div className="hidden md:flex space-x-8">
                <a href="#how-it-works" className="text-gray-700 hover:text-green-600 transition font-medium">How It Works</a>
                <a href="#opportunities" className="text-gray-700 hover:text-green-600 transition font-medium">Opportunities</a>
                <a href="#about" className="text-gray-700 hover:text-green-600 transition font-medium">About</a>
                <a href="#join" className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition font-semibold">Join Network</a>
              </div>
            </div>
          </div>
        </nav>
        {children}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="mb-4">
                  <img 
                    src="/logo.png" 
                    alt="SwipeLeft AI" 
                    className="h-48 w-auto brightness-0 invert"
                  />
                </div>
                <p className="text-gray-400">Human Judgment. AI Efficiency. Transparent Pricing.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#how-it-works" className="hover:text-white transition">How It Works</a></li>
                  <li><a href="#opportunities" className="hover:text-white transition">Open Roles</a></li>
                  <li><a href="#join" className="hover:text-white transition">Join Network</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Contact</h4>
                <p className="text-gray-400">Austin, TX</p>
                <p className="text-gray-400">info@swipeleft.ai</p>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
              <p>© 2025 SwipeLeft AI LLC | Austin, Texas</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}