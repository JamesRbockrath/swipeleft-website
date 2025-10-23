import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SwipeLeft AI - Human Judgment. AI Efficiency.',
  description:
    'Swipe left on hiring headaches. AI handles the busywork; we handle the judgment. Faster placements, better fit, and a transparent 20% markup cap.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {/* Nav */}
        <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Control nav height here; logo scales to fit */}
            <div className="flex h-20 md:h-24 lg:h-28 items-center justify-between">
              <a href="/" className="flex items-center shrink-0">
                {/* Logo height tracks the nav heights above */}
                <img
                  src="/logo.png"
                  alt="SwipeLeft AI - Recruiting & Staffing"
                  className="h-12 md:h-16 lg:h-20 w-auto"
                />
              </a>

              <div className="hidden md:flex items-center space-x-8">
                <a href="#how-it-works" className="py-2 text-gray-700 hover:text-green-600 font-medium transition">
                  How It Works
                </a>
                <a href="#opportunities" className="py-2 text-gray-700 hover:text-green-600 font-medium transition">
                  Opportunities
                </a>
                <a href="#about" className="py-2 text-gray-700 hover:text-green-600 font-medium transition">
                  About
                </a>
                <a
                  href="#join"
                  className="py-2 px-6 rounded-lg bg-green-600 text-white hover:bg-green-700 font-semibold transition"
                >
                  Join Network
                </a>
              </div>
            </div>
          </div>
        </nav>

        {children}

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12 mt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 mb-10">
              <div>
                <div className="mb-4">
                  <img
                    src="/logo.png"
                    alt="SwipeLeft AI"
                    className="h-12 md:h-14 lg:h-16 w-auto brightness-0 invert"
                  />
                </div>
                <p className="text-gray-400">
                  Human Judgment. AI Efficiency. Transparent Pricing.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#how-it-works" className="hover:text-white transition">How It Works</a></li>
                  <li><a href="#opportunities" className="hover:text-white transition">Opportunities</a></li>
                  <li><a href="#about" className="hover:text-white transition">About</a></li>
                  <li><a href="#join" className="hover:text-white transition">Join Network</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Contact</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="mailto:info@swipeleft.ai" className="hover:text-white transition">info@swipeleft.ai</a></li>
                  <li>Austin, Texas</li>
                </ul>
              </div>
            </div>

            <div className="border-t border-white/10 pt-6 text-sm text-gray-500">
              © {new Date().getFullYear()} SwipeLeft AI. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
