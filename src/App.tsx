import React from 'react';
import { Coins, Rocket, Users, Shield, Twitter, Instagram as Telegram } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-900 to-stone-900 text-white relative overflow-hidden">
      {/* Bull Background */}
      <div 
        className="absolute inset-0 opacity-30 bg-cover bg-center z-0 floating-bg"
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
            <h1 className="text-7xl font-bangers mb-4 text-white tracking-wider">
              $BFR - BULFART
            </h1>
            <p className="text-3xl font-righteous mb-8 text-white">The Most Explosive Meme Coin in Crypto! 🐂💨</p>
            <div className="flex justify-center gap-4 mb-8">
              <a href="#" className="bg-amber-600 hover:bg-amber-700 text-white font-righteous font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105">
                Buy Now
              </a>
              <a href="#" className="border-2 border-amber-600 hover:bg-amber-600/20 text-white font-righteous font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105">
                View Chart
              </a>
            </div>
            <div className="max-w-md mx-auto mb-12 relative">
              <img 
                src="https://images.pexels.com/photos/6770610/pexels-photo-6770610.jpeg" 
                alt="Bull Market" 
                className="rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/50 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-amber-950/50 p-6 rounded-xl backdrop-blur-sm transform hover:scale-105 transition-all">
              <Coins className="w-12 h-12 text-white mb-4" />
              <h3 className="text-2xl font-bangers mb-2 text-white tracking-wide">100M Total Supply</h3>
              <p className="font-righteous text-white">Limited supply creates scarcity and potential for growth</p>
            </div>
            <div className="bg-amber-950/50 p-6 rounded-xl backdrop-blur-sm transform hover:scale-105 transition-all">
              <Shield className="w-12 h-12 text-white mb-4" />
              <h3 className="text-2xl font-bangers mb-2 text-white tracking-wide">LP Locked</h3>
              <p className="font-righteous text-white">Liquidity locked for 1 year ensuring trading stability</p>
            </div>
            <div className="bg-amber-950/50 p-6 rounded-xl backdrop-blur-sm transform hover:scale-105 transition-all">
              <Users className="w-12 h-12 text-white mb-4" />
              <h3 className="text-2xl font-bangers mb-2 text-white tracking-wide">Community Driven</h3>
              <p className="font-righteous text-white">Power to the people - community governance enabled</p>
            </div>
            <div className="bg-amber-950/50 p-6 rounded-xl backdrop-blur-sm transform hover:scale-105 transition-all">
              <Rocket className="w-12 h-12 text-white mb-4" />
              <h3 className="text-2xl font-bangers mb-2 text-white tracking-wide">Moon Mission</h3>
              <p className="font-righteous text-white">Strategic marketing and development roadmap</p>
            </div>
          </div>
        </div>

        {/* Tokenomics */}
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-5xl font-bangers text-center mb-12 text-white tracking-wide">Tokenomics</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-amber-950/50 p-6 rounded-xl backdrop-blur-sm transform hover:scale-105 transition-all">
              <h3 className="text-3xl font-bangers mb-4 text-white tracking-wide">Buy Tax: 0%</h3>
              <p className="font-righteous text-white text-lg">No taxes on buys! Trade freely!</p>
            </div>
            <div className="bg-amber-950/50 p-6 rounded-xl backdrop-blur-sm transform hover:scale-105 transition-all">
              <h3 className="text-3xl font-bangers mb-4 text-white tracking-wide">Sell Tax: 0%</h3>
              <p className="font-righteous text-white text-lg">No taxes on sells! Trade freely!</p>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="container mx-auto px-4 py-16">
          <div className="flex justify-center gap-6">
            <a href="#" className="text-white hover:text-amber-200 transition-colors transform hover:scale-125">
              <Twitter className="w-8 h-8" />
            </a>
            <a href="#" className="text-white hover:text-amber-200 transition-colors transform hover:scale-125">
              <Telegram className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;