import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>MindGrid AI — Hire an AI employee in 60 seconds</title>
        <meta name="description" content="MindGrid AI lets you onboard specialized AI knowledge workers instantly — no recruitment, no training, just results." />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>

      <div className="bg-gradient-to-b from-gray-50 to-white text-gray-900 font-sans" style={{WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale'}}>
        
        {/* Header */}
        <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-500 flex items-center justify-center text-white font-bold">MG</div>
            <div>
              <div className="text-xl font-semibold">MindGrid AI</div>
              <div className="text-xs text-gray-500">AI Knowledge Worker-as-a-Service</div>
            </div>
          </div>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#features" className="hover:underline">Features</a>
            <a href="#roles" className="hover:underline">Roles</a>
            <a href="#pricing" className="hover:underline">Pricing</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
          <div className="hidden md:inline-flex gap-3">
            <a href="#contact" className="px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm">Get Started</a>
          </div>
        </header>

        {/* Hero */}
        <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Hire an AI employee in <span className="text-indigo-600">60 seconds</span></h1>
            <p className="mt-4 text-gray-600 text-lg">MindGrid AI lets you onboard specialized AI knowledge workers instantly — no recruitment, no training, just results.</p>
            <div className="mt-6 flex gap-3">
              <a href="#contact" className="px-5 py-3 rounded-lg bg-indigo-600 text-white font-medium">Start Free Trial</a>
              <a href="#roles" className="px-5 py-3 rounded-lg border font-medium text-gray-700">View AI Roles</a>
            </div>
            <div className="mt-8 text-sm text-gray-500">Trusted by early adopters and growth teams worldwide</div>
            <div className="mt-6 flex gap-4 text-sm text-gray-600">
              <div className="bg-white p-3 rounded-lg shadow">
                <div className="font-semibold">Quick setup</div>
                <div className="text-xs">Onboard in under 5 minutes</div>
              </div>
              <div className="bg-white p-3 rounded-lg shadow">
                <div className="font-semibold">Secure</div>
                <div className="text-xs">Encrypted workspaces & audit logs</div>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-2xl p-6">
            <h3 className="font-semibold text-lg mb-2">Live Demo (static)</h3>
            <div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-700">
              <p><strong>Task:</strong> Summarize latest market trends in renewable energy.</p>
              <p className="mt-3"><strong>AI Research Analyst:</strong> "Global renewable energy investment grew 18% in Q2 2025, driven by solar storage innovations. Notable trends: hybrid solar-hydro plants, AI-driven grid optimization, and advanced PV recycling." </p>
            </div>
            <div className="mt-4 flex gap-2">
              <button className="px-3 py-2 bg-indigo-600 text-white rounded">Try Demo</button>
              <button className="px-3 py-2 border rounded">Request Access</button>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="max-w-6xl mx-auto px-6 py-12">
          <h2 className="text-2xl font-bold">Platform Features</h2>
          <p className="mt-2 text-gray-600">Everything you need to make AI your next hire.</p>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="font-semibold">Role-based AI Profiles</h4>
              <p className="text-sm text-gray-600 mt-2">Hire AI Marketing, Legal, Finance, Support, or R&D specialists instantly.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="font-semibold">Custom Knowledge Base</h4>
              <p className="text-sm text-gray-600 mt-2">Feed your AI with company docs, brand guides, and SOPs for tailored output.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="font-semibold">Automation Hooks</h4>
              <p className="text-sm text-gray-600 mt-2">Integrations with Google Workspace, Slack, HubSpot, Zapier & more.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="font-semibold">Multi-modal Output</h4>
              <p className="text-sm text-gray-600 mt-2">Text, charts, reports, spreadsheets, and presentations.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="font-semibold">Compliance & Security</h4>
              <p className="text-sm text-gray-600 mt-2">Encrypted, isolated AI workspaces with audit logs for teams.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="font-semibold">Performance Insights</h4>
              <p className="text-sm text-gray-600 mt-2">Track tasks completed, hours saved, and ROI metrics.</p>
            </div>
          </div>
        </section>

        {/* Roles */}
        <section id="roles" className="max-w-6xl mx-auto px-6 py-12">
          <h2 className="text-2xl font-bold">Available AI Roles</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="font-semibold">AI Marketing Associate</h4>
              <p className="text-sm text-gray-600 mt-2">Content creation, ad copy, and social media scheduling.</p>
              <div className="mt-4"><a href="#contact" className="inline-block px-3 py-2 bg-indigo-600 text-white rounded">Hire this role</a></div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="font-semibold">AI Legal Assistant</h4>
              <p className="text-sm text-gray-600 mt-2">Draft contracts, summarize legal docs, compliance checks.</p>
              <div className="mt-4"><a href="#contact" className="inline-block px-3 py-2 border rounded">Hire this role</a></div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="font-semibold">AI Financial Analyst</h4>
              <p className="text-sm text-gray-600 mt-2">Financial modeling, forecasting, and market analysis.</p>
              <div className="mt-4"><a href="#contact" className="inline-block px-3 py-2 border rounded">Hire this role</a></div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="font-semibold">AI Customer Support Rep</h4>
              <p className="text-sm text-gray-600 mt-2">Respond to customer queries, summarize support tickets.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="font-semibold">AI R&D Researcher</h4>
              <p className="text-sm text-gray-600 mt-2">Technical literature reviews, patent scans, trend analysis.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="font-semibold">Custom Role</h4>
              <p className="text-sm text-gray-600 mt-2">Tailor an AI employee for your unique workflows.</p>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="max-w-6xl mx-auto px-6 py-12">
          <h2 className="text-2xl font-bold">Pricing</h2>
          <p className="mt-2 text-gray-600">Simple monthly plans per AI role.</p>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow flex flex-col">
              <div className="text-lg font-semibold">Starter</div>
              <div className="mt-2 text-indigo-600 font-bold text-xl">$199 / mo</div>
              <ul className="mt-4 space-y-1 text-sm text-gray-600">
                <li>• 1 AI role</li>
                <li>• Basic integrations</li>
                <li>• Email support</li>
              </ul>
              <a href="#contact" className="mt-6 px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm text-center">Select</a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow flex flex-col">
              <div className="text-lg font-semibold">Pro</div>
              <div className="mt-2 text-indigo-600 font-bold text-xl">$499 / mo</div>
              <ul className="mt-4 space-y-1 text-sm text-gray-600">
                <li>• 3 AI roles</li>
                <li>• Full integrations & API</li>
                <li>• Priority support</li>
              </ul>
              <a href="#contact" className="mt-6 px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm text-center">Select</a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow flex flex-col">
              <div className="text-lg font-semibold">Enterprise</div>
              <div className="mt-2 text-indigo-600 font-bold text-xl">Custom</div>
              <ul className="mt-4 space-y-1 text-sm text-gray-600">
                <li>• Unlimited roles</li>
                <li>• Private hosting</li>
                <li>• SLA & onboarding</li>
              </ul>
              <a href="#contact" className="mt-6 px-4 py-2 border rounded-lg text-sm text-center">Contact Sales</a>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="max-w-6xl mx-auto px-6 py-12">
          <h2 className="text-2xl font-bold">Get Started</h2>
          <p className="mt-2 text-gray-600">Tell us about your needs and we'll onboard your AI employee today.</p>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <form className="bg-white p-6 rounded-lg shadow space-y-4">
              <div>
                <label className="text-sm font-medium">Name</label>
                <input className="mt-1 block w-full rounded border border-gray-200 p-2" placeholder="Your name" />
              </div>
              <div>
                <label className="text-sm font-medium">Email</label>
                <input className="mt-1 block w-full rounded border border-gray-200 p-2" placeholder="you@company.com" />
              </div>
              <div>
                <label className="text-sm font-medium">Desired AI Role</label>
                <input className="mt-1 block w-full rounded border border-gray-200 p-2" placeholder="e.g., AI Marketing Associate" />
              </div>
              <div>
                <label className="text-sm font-medium">Message</label>
                <textarea className="mt-1 block w-full rounded border border-gray-200 p-2" rows={4} placeholder="What do you want your AI employee to do?"></textarea>
              </div>
              <button className="px-4 py-2 bg-indigo-600 text-white rounded">Send</button>
            </form>

            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="font-semibold">Founder — Rahul Chhallare</h4>
              <p className="text-sm text-gray-600 mt-2">Ex-AI lead, builder of production ML systems. Available for advisory and partnerships.</p>
              <div className="mt-4 text-sm text-gray-500">Office: Remote • Services: Global</div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} MindGrid AI — AI Knowledge Worker-as-a-Service.
        </footer>
      </div>
    </>
  )
}