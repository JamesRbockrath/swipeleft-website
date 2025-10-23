export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Swipe Left on Hiring Headaches.
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-green-100">
              AI handles the busywork; we handle the judgment. Faster placements, better fit, and a transparent 20% markup cap.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#join" className="bg-white text-green-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl">
                Join Our Network
              </a>
              <a href="#how-it-works" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-600 font-semibold py-3 px-8 rounded-lg transition-all duration-200">
                Learn How It Works
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Human judgment. AI efficiency.
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              SwipeLeft AI is a lean, Austin-based staffing firm built for the new era of tech consulting. We use automation to remove the repetitive parts of recruiting — sourcing, scheduling, initial screening — so our experts can focus on what matters: people.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              The result is faster delivery of exceptional ServiceNow, AI, Data, and Cloud talent — backed by a transparent <span className="font-bold text-green-600">20% markup cap</span> that beats the industry's 30–40%.
            </p>
            <p className="text-xl font-semibold text-green-600 mt-8">
              You'll never pay for overhead or layers, only for quality.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works for Candidates Section */}
      <section id="how-it-works for candidates " className="bg-gray-50">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Candidates: Swipe left on recruiters. Here is the flow.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl font-bold text-green-600 mb-4">1</div>
              <h3 className="text-xl font-bold mb-3">Apply for a position</h3>
              <p className="text-gray-600">Just upload your resume. That's it.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl font-bold text-green-600 mb-4">2</div>
              <h3 className="text-xl font-bold mb-3">AI Pre-Screening</h3>
              <p className="text-gray-600">Pass your AI-assisted phone interview.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl font-bold text-green-600 mb-4">3</div>
              <h3 className="text-xl font-bold mb-3">Human Expert Interview</h3>
              <p className="text-gray-600">Interview with senior technical experts, not a recruiter.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl font-bold text-green-600 mb-4">4</div>
              <h3 className="text-xl font-bold mb-3">Customer Interview</h3>
              <p className="text-gray-600">Interview with the hiring company</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <a href="#join" className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl inline-block">
              Get Started
            </a>
          </div>
        </div>
      </section>

      {/* How It Works for Clients Section */}
      <section id="how-it-works for candidates " className="bg-gray-50">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Hiring Managers: Swipe left on recruiters. Here is the flow.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl font-bold text-green-600 mb-4">1</div>
              <h3 className="text-xl font-bold mb-3">List your position</h3>
              <p className="text-gray-600">Just upload your position description. That's it.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl font-bold text-green-600 mb-4">2</div>
              <h3 className="text-xl font-bold mb-3">Clarification call</h3>
              <p className="text-gray-600">Review position with senior technical experts, not recruiters</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl font-bold text-green-600 mb-4">3</div>
              <h3 className="text-xl font-bold mb-3">Interview qualified candidates</h3>
              <p className="text-gray-600">Pick the best candidate and get to work</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <a href="#join" className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl inline-block">
              Get Started
            </a>
          </div>
        </div>
      </section>

      {/* For Consultants Section */}
      <section id="consultants" className="bg-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
              Swipe left on endless job hunting.
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Work on high-impact AI, automation, and modernization projects without chasing recruiters. Our AI systems surface the roles that match your skills, and a real person makes sure it's the right fit before you meet the client.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="text-center p-6">
                <div className="text-3xl mb-3">💰</div>
                <h3 className="font-bold text-lg mb-2">Fair Rates</h3>
                <p className="text-gray-600">Competitive compensation without the runaround. Industry-leading 20% markup</p>
              </div>
              <div className="text-center p-6">
                <div className="text-3xl mb-3">💬</div>
                <h3 className="font-bold text-lg mb-2">Clear Communication</h3>
                <p className="text-gray-600">Speak with management and technical experts, no strange conversations with recruiters</p>
              </div>
              
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Opportunities Section */}
      <section id="opportunities" className="bg-gray-50">
        <div className="section-container">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Current Contract & Consulting Roles
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Browse active and upcoming roles. We update this list weekly as new projects move into staffing.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">Featured</span>
              <h3 className="text-xl font-bold mt-4 mb-2">AI Consultant</h3>
              <p className="text-gray-600 mb-4">Enterprise AI implementation and strategy</p>
              <div className="text-sm text-gray-500 mb-4">
                <div>📍 Remote</div>
                <div>💰 $150-200/hr</div>
              </div>
              <a href="#join" className="text-green-600 font-semibold hover:text-green-700">Apply Now →</a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">Featured</span>
              <h3 className="text-xl font-bold mt-4 mb-2">ServiceNow Developer</h3>
              <p className="text-gray-600 mb-4">Platform development and integration</p>
              <div className="text-sm text-gray-500 mb-4">
                <div>📍 Hybrid - Austin, TX</div>
                <div>💰 $120-160/hr</div>
              </div>
              <a href="#join" className="text-green-600 font-semibold hover:text-green-700">Apply Now →</a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">Featured</span>
              <h3 className="text-xl font-bold mt-4 mb-2">Data Engineer</h3>
              <p className="text-gray-600 mb-4">Cloud data pipelines and analytics</p>
              <div className="text-sm text-gray-500 mb-4">
                <div>📍 Remote</div>
                <div>💰 $130-180/hr</div>
              </div>
              <a href="#join" className="text-green-600 font-semibold hover:text-green-700">Apply Now →</a>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-600 mb-4">More roles added weekly. Join our network to see all opportunities.</p>
            <a href="#join" className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl inline-block">
              View All Opportunities
            </a>
          </div>
        </div>
      </section>

      {/* For Clients Section */}
      <section id="clients" className="bg-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
              Swipe left on markup bloat.
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Traditional staffing firms charge 30–40% markups to cover layers of overhead. SwipeLeft AI runs lean — AI behind the scenes, experienced consultants up front — so your total markup never exceeds 20%.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              You get transparent pricing, rapid delivery, and quality talent personally vetted by industry experts.
            </p>
          </div>
        </div>
      </section>

      {/* Transparency Promise */}
      <section className="bg-green-600 text-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Our Transparency Promise
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur">
                <div className="text-3xl mb-3">✓</div>
                <p className="font-semibold">Flat 20% maximum markup</p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur">
                <div className="text-3xl mb-3">✓</div>
                <p className="font-semibold">No hidden fees or conversion charges</p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur">
                <div className="text-3xl mb-3">✓</div>
                <p className="font-semibold">Automated efficiency without automation bias</p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur">
                <div className="text-3xl mb-3">✓</div>
                <p className="font-semibold">Every candidate personally interviewed and approved</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Network Section */}
      <section id="join" className="bg-gray-50">
        <div className="section-container">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
              One Application — Infinite Opportunities
            </h2>
            <p className="text-center text-gray-600 mb-12">
              Apply once, and we'll match you to roles that fit your skills and goals. Our AI pre-screens your background so you spend less time chasing work.
            </p>
            
            <form className="bg-white p-8 rounded-xl shadow-lg space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Full Name</label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" placeholder="john@example.com" />
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
                  <option>AI & Machine Learning</option>
                  <option>ServiceNow Development</option>
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
                <label className="block text-sm font-semibold mb-2">Have you worked as a consultant before?</label>
                <div className="flex gap-6">
                  <label className="flex items-center">
                    <input type="radio" name="consultant" value="yes" className="mr-2" />
                    Yes
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="consultant" value="no" className="mr-2" />
                    No
                  </label>
                </div>
              </div>
              
              <button type="submit" className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl w-full">
                Submit & Get Screened
              </button>
              
              <p className="text-sm text-gray-500 text-center">
                Thanks — you're in the pipeline! You'll receive a link to schedule your quick AI technical interview.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="bg-white">
        <div className="section-container">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Smart Tools for Independent Consultants
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Insights and resources to help you succeed
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">How AI Is Changing Technical Recruiting</h3>
              <p className="text-gray-600 mb-4">Discover how automation is reshaping the staffing landscape.</p>
              <a href="#" className="text-green-600 font-semibold hover:text-green-700">Read More →</a>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Top 5 Ways to Raise Your Bill Rate</h3>
              <p className="text-gray-600 mb-4">Proven strategies to increase your consulting rates.</p>
              <a href="#" className="text-green-600 font-semibold hover:text-green-700">Read More →</a>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Contractor Checklists</h3>
              <p className="text-gray-600 mb-4">Taxes, invoices, and tools that save time.</p>
              <a href="#" className="text-green-600 font-semibold hover:text-green-700">Read More →</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
