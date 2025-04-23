
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen bg-financial-navy text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-financial-highlight">Market Beacon</span>: 
              <br />Your Financial Compass
            </h1>
            <p className="text-lg mb-8 text-gray-300">
              Professional-grade stock market analysis with real-time data, 
              advanced analytics, and comprehensive portfolio management tools.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/dashboard" className="bg-financial-highlight hover:bg-blue-700 text-white py-3 px-6 rounded-md font-medium transition-colors">
                Get Started
              </Link>
              <Link to="/watchlist" className="bg-transparent border border-white hover:border-financial-highlight hover:text-financial-highlight text-white py-3 px-6 rounded-md font-medium transition-colors">
                View Watchlist
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="bg-white bg-opacity-10 p-6 rounded-xl backdrop-blur-sm">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white bg-opacity-10 p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">S&P 500</span>
                    <span className="text-financial-gain text-xs bg-financial-gain bg-opacity-10 px-2 py-1 rounded">+0.29%</span>
                  </div>
                  <p className="text-2xl font-bold">4,891.15</p>
                  <p className="text-financial-gain">+14.17</p>
                </div>
                <div className="bg-white bg-opacity-10 p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">Nasdaq</span>
                    <span className="text-financial-gain text-xs bg-financial-gain bg-opacity-10 px-2 py-1 rounded">+0.62%</span>
                  </div>
                  <p className="text-2xl font-bold">15,628.95</p>
                  <p className="text-financial-gain">+96.06</p>
                </div>
                <div className="bg-white bg-opacity-10 p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">AAPL</span>
                    <span className="text-financial-gain text-xs bg-financial-gain bg-opacity-10 px-2 py-1 rounded">+0.50%</span>
                  </div>
                  <p className="text-2xl font-bold">189.84</p>
                  <p className="text-financial-gain">+0.94</p>
                </div>
                <div className="bg-white bg-opacity-10 p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">TSLA</span>
                    <span className="text-financial-loss text-xs bg-financial-loss bg-opacity-10 px-2 py-1 rounded">-0.96%</span>
                  </div>
                  <p className="text-2xl font-bold">187.91</p>
                  <p className="text-financial-loss">-1.83</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white text-financial-navy py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Powerful Tools for Smart Investors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-financial-highlight text-white rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M4 11H2v3h2v-3zm5-4H7v7h2V7zm5-5v12h-2V2h2zm-2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1h-2zM6 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm-5 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Real-time Market Data</h3>
              <p className="text-gray-600">Access up-to-the-minute stock quotes, indices, and comprehensive market data to make timely investment decisions.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-financial-highlight text-white rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M0 0h1v15h15v1H0V0Zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07Z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Advanced Analytics</h3>
              <p className="text-gray-600">Powerful tools for technical analysis, pattern recognition, and trend identification to optimize your trading strategy.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-financial-highlight text-white rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Watchlist Monitoring</h3>
              <p className="text-gray-600">Create and track personalized watchlists with custom alerts to never miss critical market movements.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-financial-navy text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Navigate the Markets?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of informed investors using Market Beacon to make data-driven investment decisions.
          </p>
          <Link to="/dashboard" className="bg-financial-highlight hover:bg-blue-700 text-white py-3 px-8 rounded-md font-medium transition-colors text-lg">
            Launch Dashboard
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-white text-lg font-bold mb-2">Market Beacon</h3>
              <p className="text-sm max-w-xs">Professional stock analytics platform providing investors with real-time data and powerful tools.</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
              <div>
                <h4 className="text-white font-medium mb-2">Platform</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link to="/dashboard" className="hover:text-white">Dashboard</Link></li>
                  <li><Link to="/watchlist" className="hover:text-white">Watchlist</Link></li>
                  <li><Link to="/news" className="hover:text-white">Market News</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-medium mb-2">Resources</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="hover:text-white">Documentation</a></li>
                  <li><a href="#" className="hover:text-white">Learning Center</a></li>
                  <li><a href="#" className="hover:text-white">API Access</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-medium mb-2">Company</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="hover:text-white">About</a></li>
                  <li><a href="#" className="hover:text-white">Contact</a></li>
                  <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-6 text-sm text-center">
            &copy; 2025 Market Beacon. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
