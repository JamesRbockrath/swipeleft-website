import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'swipeleft ai — Contractors for Consulting Firms',
  description:
    'Swipe left on hiring headaches. We staff elite contractors for consulting firms only. AI handles the busywork; senior experts handle the judgment. Transparent 20% markup cap.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans">
        <header className="bg-white/95 backdrop-blur shadow-sm sticky top-0 z-50">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Primary">
            <div className="flex justify-between items-center h-40 sm:h-48">
              {/* Logo (2x size) */}
              <div className="flex items-center">
                <a href="/" className="flex items-center" aria-label="swipeleft ai home">
                  <img
                    src="/logo.png"
                    alt="swipeleft ai — contractors for consulting firms"
                    className="h-32 sm:h-36 md:h-40 w-auto"
                  />
                </a>
              </div>

              {/* Navigation */}
              <div className="hidden md:flex items-center space-x-10">
                <a
                  href="#how-it-works-firms"
                  className="text-gray-700 hover:text-green-600 transition font-medium"
                >
                  How It Works
                </a>
                <a
                  href="#opportunities"
                  className="text-gray-700 hover:text-green-600 transition font-medium"
                >
                  Opportunities
                </a>
                <a
                  href="#about"
                  className="text-gray-700 hover:text-green-600 transition font-medium"
                >
                  About
                </a>
                <a
                  href="#join"
                  className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition font-semibold"
                >
                  Join Network
                </a>
              </div>
            </div>
          </nav>
        </header>

        {children}

        <footer className="bg-gray-900 text-white py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-10 mb-10">
              <div>
                <div className="mb-6">
                  <img
                    src="/logo.png"
                    alt="swipeleft ai"
                    className="h-24 sm:h-28 md:h-32 w-auto brightness-0 invert"
                  />
                </div>
                <p className="text-gray-400">
                  Human judgment. AI efficiency. Transparent pricing.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <a href="#how-it-works-firms" className="hover:text-white transition">
                      How It Works
                    </a>
                  </li>
                  <li>
                    <a href="#opportunities" className="hover:text-white transition">
                      Open Roles
                    </a>
                  </li>
                  <li>
                    <a href="#join" className="hover:text-white transition">
                      Join Network
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Contact</h4>
                <p className="text-gray-400">Austin, TX</p>
                <p className="text-gray-400">
                  <a href="mailto:info@swipeleft.ai" className="hover:text-white transition">
                    info@swipeleft.ai
                  </a>
                </p>
              </div>
            </div>

            <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
              <p>© 2025 SwipeLeft AI LLC · Austin, Texas</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
