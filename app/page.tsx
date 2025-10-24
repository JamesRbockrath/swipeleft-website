export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Swipe left on hiring headaches.
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-green-100">
              Swipeleft staffs elite contractors for consulting firms only. AI removes busywork. Our experts judge fit. Industry-leading and transparent 20% markup cap.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#submit-role" className="bg-white text-green-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl">
                Start a Discussion (Firms)
              </a>
              <a href="#join" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-600 font-semibold py-3 px-8 rounded-lg transition-all duration-200">
                Join as a Contractor
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Contractors for consulting firms. Only.
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              We automate sourcing, screening, and scheduling so our senior practitioners focus securing the best 1099 contractors. No W2s, no retained searches.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              ServiceNow, AI/ML, Data, Cloud. Transparent <span className="font-bold text-green-600">20% markup cap</span>.
            </p>
            <p className="text-xl font-semibold text-green-600 mt-8">
              Swipe left on overhead. Pay for quality.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works - Consulting Firms */}
      <section id="how-it-works-firms" className="bg-gray-50">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Clients: Swipe left on explaining basics to recruiters.
            </h2>
            <p className="text-gray-600">Talk to senior staff who know consulting: utilization, margins, SOWs, and client perceptions.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl font-bold text-green-600 mb-4">1</div>
              <h3 className="text-xl font-bold mb-3">Submit role + project proposal</h3>
              <p className="text-gray-600">Include project description, SOW, and role requirements with rate band.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl font-bold text-green-600 mb-4">2</div>
              <h3 className="text-xl font-bold mb-3">Clarify with experts</h3>
              <p className="text-gray-600">Lock skills, scope, milestones, personality, and start date with senior SMEs.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl font-bold text-green-600 mb-4">3</div>
              <h3 className="text-xl font-bold mb-3">Interview and start</h3>
              <p className="text-gray-600">Meet vetted contractors and kick off quickly.</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <a href="#submit-role" className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl inline-block">
              Start a discussion
            </a>
          </div>
        </div>
      </section>

      {/* How It Works - Contractors */}
      <section id="how-it-works-contractors" className="bg-gray-50">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Contractors: Swipe left on non-technical recruiters
            </h2>
            <p className="text-gray-600">Scoped consulting projects. Fast starts.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl font-bold text-green-600 mb-4">1</div>
              <h3 className="text-xl font-bold mb-3">Apply</h3>
              <p className="text-gray-600">Upload resume and portfolio.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl font-bold text-green-600 mb-4">2</div>
              <h3 className="text-xl font-bold mb-3">Complete AI pre-screen</h3>
              <p className="text-gray-600">Map skills to open roles.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl font-bold text-green-600 mb-4">3</div>
              <h3 className="text-xl font-bold mb-3">Complete expert interview</h3>
              <p className="text-gray-600">With senior practitioners only.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl font-bold text-green-600 mb-4">4</div>
              <h3 className="text-xl font-bold mb-3">Client interview</h3>
              <p className="text-gray-600">Meet the hiring manager. Start quickly.</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <a href="#join" className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl inline-block">
              Join as a Contractor
            </a>
          </div>
        </div>
      </section>

      {/* Value Props - Contractors */}
      <section id="contractors" className="bg-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
              Swipe left on low-value work.
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              ServiceNow, AI/ML, Data, Cloud, Automation. Consulting firms and MSPs only.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="text-center p-6">
                <div className="text-3xl mb-3">💰</div>
                <h3 className="font-bold text-lg mb-2">Fair Rates</h3>
                <p className="text-gray-600">Hard 20% client markup cap.</p>
              </div>
              <div className="text-center p-6">
                <div className="text-3xl mb-3">💬</div>
                <h3 className="font-bold text-lg mb-2">Clear Comms</h3>
                <p className="text-gray-600">Direct with delivery leads.</p>
              </div>
              <div className="text-center p-6">
                <div className="text-3xl mb-3">🎯</div>
                <h3 className="font-bold text-lg mb-2">Targeted Work</h3>
                <p className="text-gray-600">SOW-driven outcomes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Opportunities */}
      <section id="opportunities" className="bg-gray-50">
        <div className="section-container">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Current Roles for Consulting Firms
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Sample engagements. Join or submit a role to see all.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">Consulting</span>
              <h3 className="text-xl font-bold mt-4 mb-2">AI Consultant</h3>
              <p className="text-gray-600 mb-4">Enterprise AI advisory + delivery</p>
              <div className="text-sm text-gray-500 mb-4">
                <div>📍 Remote</div>
                <div>💰 $150-200/hr</div>
              </div>
              <a href="#join" className="text-green-600 font-semibold hover:text-green-700">Apply Now →</a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">Consulting</span>
              <h3 className="text-xl font-bold mt-4 mb-2">ServiceNow Developer</h3>
              <p className="text-gray-600 mb-4">Platform build for a global SI</p>
              <div className="text-sm text-gray-500 mb-4">
                <div>📍 Hybrid · Austin, TX</div>
                <div>💰 $120-160/hr</div>
              </div>
              <a href="#join" className="text-green-600 font-semibold hover:text-green-700">Apply Now →</a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">Consulting</span>
              <h3 className="text-xl font-bold mt-4 mb-2">Data Engineer</h3>
              <p className="text-gray-600 mb-4">Cloud pipelines for an analytics firm</p>
              <div className="text-sm text-gray-500 mb-4">
                <div>📍 Remote</div>
                <div>💰 $130-180/hr</div>
              </div>
              <a href="#join" className="text-green-600 font-semibold hover:text-green-700">Apply Now →</a>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-600 mb-4">We staff consulting firms only.</p>
            <a href="#submit-role" className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl inline-block">
              Submit a Role (Firms)
            </a>
          </div>
        </div>
      </section>

      {/* Clients */}
      <section id="clients" className="bg-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Swipe left on markup bloat.
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Traditional staffing costs 30-40% in markup which destroys either client margins or contractor pay. We cap at 20%.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Transparent pricing. Fast delivery. Vetted contractors by senior SMEs.
            </p>
          </div>
        </div>
      </section>

      {/* Transparency */}
      <section className="bg-green-600 text-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Our Transparency Promise
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur">
              <div className="text-3xl mb-3">✓</div>
              <p className="font-semibold">Flat 20% maximum markup</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur">
              <div className="text-3xl mb-3">✓</div>
              <p className="font-semibold">Conversion fee: 20% to 0% over 12 months.</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur">
              <div className="text-3xl mb-3">✓</div>
              <p className="font-semibold">Automation where it helps, experienced humans where it counts</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur">
              <div className="text-3xl mb-3">✓</div>
              <p className="font-semibold">Every contractor interviewed by senior SMEs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Submit Role (Firms) */}
      <section id="submit-role" className="bg-white">
        <div className="section-container">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
              Get your MSA in place - Consulting Firms and MSPs Only
            </h2>
            <p className="text-center text-gray-600 mb-12">
              Then swipe left on slow staffing. Send the JD and Proposal/SOW with project description and roles. Get vetted contractors fast.
            </p>

            <form className="bg-gray-50 p-8 rounded-xl shadow-lg space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Company</label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" placeholder="Your Consulting Firm" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Contact Email</label>
                  <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" placeholder="you@firm.com" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Role Title</label>
                <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" placeholder="e.g., ServiceNow Developer" />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Location</label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" placeholder="Remote / City, State" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Target Bill Rate Band</label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" placeholder="$150-$190/hr" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">SOW / Key Deliverables</label>
                <textarea className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" rows={4} placeholder="Project description, roles needed, core skills, milestones, start date"></textarea>
              </div>

              <button type="submit" className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl w-full">
                Submit Role
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Join Contractor Network */}
      <section id="join" className="bg-gray-50">
        <div className="section-container">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
              Join Our Contractor Network
            </h2>
            <p className="text-center text-gray-600 mb-12">
              Swipe left on job-hunt noise. One application. Consulting projects only.
            </p>

            <form className="bg-white p-8 rounded-xl shadow-lg space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Full Name</label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" placeholder="Jane Doe" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" placeholder="jane@example.com" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">LinkedIn Profile</label>
                <input type="url" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" placeholder="linkedin.com/in/yourprofile" />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Primary Skills</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                  <option>Select your primary expertise</option>
                  <option>ServiceNow</option>
                  <option>AI & Machine Learning</option>
                  <option>Data Engineering</option>
                  <option>Cloud Engineering</option>
                  <option>DevOps & Automation</option>
                </select>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Desired Hourly Rate</label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" placeholder="$150/hr" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Availability Date</label>
                  <input type="date" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Resume Upload</label>
                <input type="file" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Consulting Experience</label>
                <div className="flex gap-6">
                  <label className="flex items-center">
                    <input type="radio" name="consulting-exp" value="yes" className="mr-2" />
                    Yes
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="consulting-exp" value="no" className="mr-2" />
                    No
                  </label>
                </div>
              </div>

              <button type="submit" className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl w-full">
                Submit & Get Screened
              </button>

              <p className="text-sm text-gray-500 text-center">
                You'll get a link to schedule a quick AI technical interview.
              </p>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
