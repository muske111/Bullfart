import React from 'react';
import { Coins, Rocket, Users, Shield, Twitter, MessageCircle } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white text-amber-900 relative overflow-hidden">
      {/* Bull Background */}
      <div 
        className="absolute inset-0 opacity-10 bg-cover bg-center z-0 floating-bg"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/18923586/pexels-photo-18923586.png")',
          backgroundRepeat: 'repeat',
          backgroundSize: '400px',
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-7xl font-bangers mb-4 text-amber-900 tracking-wider">
              $BFR - BULFART
            </h1>
            <p className="text-3xl font-righteous mb-8 text-amber-800">The Most Explosive Meme Coin in Crypto!</p>
            <div className="flex justify-center gap-4 mb-8">
              <a href="#" className="bg-amber-600 hover:bg-amber-700 text-white font-righteous font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105">
                Buy Now
              </a>
              <a href="#" className="border-2 border-amber-600 hover:bg-amber-600/20 text-amber-800 font-righteous font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105">
                View Chart
              </a>
            </div>
            <div className="max-w-md mx-auto mb-12 relative">
              <img 
                src="https://github.com/muske111/Bullfart/blob/main/DALL·E%202025-05-13%2013.03.04%20-%20A%20humorous%20and%20cartoonish%20image%20of%20a%20bull%20releasing%20a%20fart%20cloud,%20with%20the%20fart%20cloud%20shaped%20like%20a%20coin%20labeled%20'BullFart%20Coin.'%20The%20bull%20is%20standing.webp" 
                alt="Bull Market" 
                className="rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-amber-50 p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all">
              <Coins className="w-12 h-12 text-amber-800 mb-4" />
              <h3 className="text-2xl font-bangers mb-2 text-amber-900 tracking-wide">100M Total Supply</h3>
              <p className="font-righteous text-amber-800">Limited supply creates scarcity and potential for growth</p>
            </div>
            <div className="bg-amber-50 p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all">
              <Shield className="w-12 h-12 text-amber-800 mb-4" />
              <h3 className="text-2xl font-bangers mb-2 text-amber-900 tracking-wide">LP Locked</h3>
              <p className="font-righteous text-amber-800">Liquidity locked for 1 year ensuring trading stability</p>
            </div>
            <div className="bg-amber-50 p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all">
              <Users className="w-12 h-12 text-amber-800 mb-4" />
              <h3 className="text-2xl font-bangers mb-2 text-amber-900 tracking-wide">Community Driven</h3>
              <p className="font-righteous text-amber-800">Power to the people - community governance enabled</p>
            </div>
            <div className="bg-amber-50 p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all">
              <Rocket className="w-12 h-12 text-amber-800 mb-4" />
              <h3 className="text-2xl font-bangers mb-2 text-amber-900 tracking-wide">Moon Mission</h3>
              <p className="font-righteous text-amber-800">Strategic marketing and development roadmap</p>
            </div>
          </div>
        </div>

        {/* Tokenomics */}
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-5xl font-bangers text-center mb-12 text-amber-900 tracking-wide">Tokenomics</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-amber-50 p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all">
              <h3 className="text-3xl font-bangers mb-4 text-amber-900 tracking-wide">Buy Tax: 0%</h3>
              <p className="font-righteous text-amber-800 text-lg">No taxes on buys! Trade freely!</p>
            </div>
            <div className="bg-amber-50 p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all">
              <h3 className="text-3xl font-bangers mb-4 text-amber-900 tracking-wide">Sell Tax: 0%</h3>
              <p className="font-righteous text-amber-800 text-lg">No taxes on sells! Trade freely!</p>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="container mx-auto px-4 py-16">
          <div className="flex justify-center gap-6">
            <a href="https://x.com/i/communities/1922225963641012244" className="text-amber-800 hover:text-amber-600 transition-colors transform hover:scale-125">
              <Twitter className="w-8 h-8" />
            </a>
            <a href="https://t.me/bull_fart" className="text-amber-800 hover:text-amber-600 transition-colors transform hover:scale-125">
              <MessageCircle className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;