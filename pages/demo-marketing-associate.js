demo-marketing-associate.js  import { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

const MarketingAssociateDemo = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'ai',
      text: "Hi! I'm your AI Marketing Associate. I can help you with content creation, social media strategies, email campaigns, and market analysis. What marketing challenge can I help you solve today?",
      timestamp: new Date().toLocaleTimeString()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const router = useRouter();

  const demoScenarios = [
    {
      trigger: 'social media strategy',
      response: "I'll create a comprehensive social media strategy for you! Here's what I recommend:\n\n📱 **Platform Strategy:**\n• LinkedIn: Professional content, industry insights (3x/week)\n• Twitter: Quick tips, engagement with industry leaders (daily)\n• Instagram: Behind-the-scenes, company culture (2x/week)\n\n📊 **Content Pillars:**\n• Educational content (40%)\n• Company updates (30%)\n• Industry news & trends (20%)\n• User-generated content (10%)\n\n🎯 **KPIs to Track:**\n• Engagement rate (target: 3-5%)\n• Follower growth (target: 10% monthly)\n• Website traffic from social (target: 25% increase)\n\nWould you like me to create specific content for any platform?"
    },
    {
      trigger: 'email campaign',
      response: "Perfect! I'll draft an email campaign for you. Here's a product launch sequence:\n\n📧 **Email 1: Teaser (7 days before)**\nSubject: Something big is coming...\nPreview: Get ready for a game-changer\n\n📧 **Email 2: Announcement (3 days before)**\nSubject: [Product Name] launches in 3 days!\nContent: Features, benefits, early bird offer\n\n📧 **Email 3: Launch Day**\nSubject: 🚀 [Product Name] is LIVE!\nContent: Direct CTA, social proof, urgency\n\n📧 **Email 4: Follow-up (3 days after)**\nSubject: Don't miss out on [Product Name]\nContent: Testimonials, FAQ, last chance\n\n📈 **Expected Results:**\n• Open rate: 25-30%\n• Click rate: 8-12%\n• Conversion rate: 3-5%\n\nShall I write the full copy for any of these emails?"
    }
  ];

  const quickPrompts = [
    "Create a social media strategy for my tech startup",
    "Write an email campaign for our product launch",
    "Analyze our competitors' marketing strategies",
    "Generate blog post ideas for our SaaS company"
  ];

  const handleSendMessage = async (message = inputMessage) => {
    if (!message.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      sender: 'user',
      text: message,
      timestamp: new Date().toLocaleTimeString()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    setTimeout(() => {
      const matchedScenario = demoScenarios.find(scenario => 
        message.toLowerCase().includes(scenario.trigger)
      );

      const aiResponse = {
        id: messages.length + 2,
        sender: 'ai',
        text: matchedScenario ? matchedScenario.response : 
          "That's a great question! As your AI Marketing Associate, I can help you with:\n\n• Content creation & copywriting\n• Social media strategy & management\n• Email marketing campaigns\n• SEO & content optimization\n• Market research & competitor analysis\n• Brand positioning & messaging\n• Performance analytics & reporting\n\nCould you be more specific about what you'd like help with?",
        timestamp: new Date().toLocaleTimeString()
      };

      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 2000);
  };

  return (
    <>
      <Head>
        <title>AI Marketing Associate Demo - HireAIStaff</title>
        <meta name="description" content="Experience how our AI Marketing Associate works. See real-time marketing strategy, content creation, and campaign planning." />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-6">
              <h1 className="text-2xl font-bold text-gray-900">HireAIStaff</h1>
              <nav className="hidden md:flex space-x-8">
                <a href="/" className="text-gray-500 hover:text-gray-900">Home</a>
                <a href="/roles" className="text-gray-500 hover:text-gray-900">Roles</a>
                <a href="/pricing" className="text-gray-500 hover:text-gray-900">Pricing</a>
              </nav>
            </div>
          </div>
        </header>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">AI Marketing Associate Demo</h2>
            <p className="text-xl text-gray-600 mb-6">Experience how our AI Marketing Associate can transform your marketing efforts</p>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8">
              <p className="text-yellow-800">🎯 This is a live demo! Try asking about social media strategy or email campaigns.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-lg h-96 flex flex-col">
                <div className="bg-indigo-600 text-white p-4 rounded-t-lg">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-400 rounded-full mr-3"></div>
                    <h3 className="font-semibold">AI Marketing Associate</h3>
                    <span className="ml-2 text-indigo-200 text-sm">Online</span>
                  </div>
                </div>

                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {messages.map((message) => (
                    <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${message.sender === 'user' ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-900'}`}>
                        <p className="whitespace-pre-line">{message.text}</p>
                        <p className={`text-xs mt-1 ${message.sender === 'user' ? 'text-indigo-200' : 'text-gray-500'}`}>{message.timestamp}</p>
                      </div>
                    </div>
                  ))}
                  
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="bg-gray-100 text-gray-900 px-4 py-2 rounded-lg">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="border-t p-4">
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      placeholder="Ask about marketing strategies, campaigns, or analysis..."
                      className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <button
                      onClick={() => handleSendMessage()}
                      className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
                    >
                      Send
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Try These Examples</h3>
                <div className="space-y-2">
                  {quickPrompts.map((prompt, index) => (
                    <button
                      key={index}
                      onClick={() => handleSendMessage(prompt)}
                      className="w-full text-left p-3 text-sm bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg shadow-lg p-6 text-white">
                <h3 className="font-semibold mb-2">Ready to Hire?</h3>
                <p className="text-sm mb-4 text-indigo-100">Get your own AI Marketing Associate for just $29/month</p>
                <button
                  onClick={() => router.push('/pricing?role=marketing-associate')}
                  className="w-full bg-white text-indigo-600 font-semibold py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Hire Now - $29/month
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MarketingAssociateDemo;
