import React, { useEffect, useState } from 'react';
import { Coins, Rocket, Users, Shield, Twitter, MessageCircle } from 'lucide-react';

function App() {
  const [grassBlades, setGrassBlades] = useState<Array<{ left: number; height: number; delay: number }>>([]);

  useEffect(() => {
    const blades = Array.from({ length: 150 }, () => ({
      left: Math.random() * 100,
      height: 30 + Math.random() * 30,
      delay: Math.random() * 2
    }));
    setGrassBlades(blades);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 text-white relative overflow-hidden">
      {/* Farmland Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Dynamic Sky */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700" />
        
        {/* Moon with glow effect */}
        <div className="absolute top-10 right-20 w-32 h-32">
          <div className="absolute inset-0 bg-gray-300 rounded-full blur-xl opacity-30 animate-pulse" />
          <div className="absolute inset-2 bg-gray-200 rounded-full blur-lg opacity-40" />
        </div>
        
        {/* Animated Clouds */}
        <div className="absolute top-10 left-1/4 w-40 h-16 bg-gray-400/30 rounded-full blur-md opacity-60 cloud-float-1" />
        <div className="absolute top-24 left-1/2 w-56 h-20 bg-gray-400/30 rounded-full blur-md opacity-50 cloud-float-2" />
        <div className="absolute top-16 right-1/4 w-48 h-16 bg-gray-400/30 rounded-full blur-md opacity-55 cloud-float-3" />
        <div className="absolute top-32 right-1/3 w-32 h-12 bg-gray-400/30 rounded-full blur-md opacity-45 cloud-float-4" />
        
        {/* Rolling Hills with green gradient */}
        <div className="absolute bottom-0 w-full h-64 bg-gradient-to-r from-green-900 via-green-800 to-green-900 rounded-t-[100%] transform translate-y-32" />
        <div className="absolute bottom-0 w-full h-48 bg-gradient-to-r from-green-800 via-green-700 to-green-800 rounded-t-[100%] transform translate-y-24" />
        <div className="absolute bottom-0 w-full h-32 bg-gradient-to-r from-green-700 via-green-600 to-green-700 rounded-t-[100%] transform translate-y-16" />
        
        {/* Animated Grass Line */}
        <div className="grass-container">
          {grassBlades.map((blade, index) => (
            <div
              key={index}
              className="grass-blade"
              style={{
                left: `${blade.left}%`,
                height: `${blade.height}px`,
                animationDelay: `${blade.delay}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-7xl font-bangers mb-4 text-white tracking-wider">
              $BFR - BULFART
            </h1>
            <p className="text-3xl font-righteous mb-8 text-gray-200">The Most Explosive Meme Coin in Crypto!</p>
            <div className="flex justify-center gap-4 mb-8">
              <a href="#" className="bg-white hover:bg-gray-200 text-gray-900 font-righteous font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105">
                Buy Now
              </a>
              <a href="#" className="border-2 border-white hover:bg-white/20 text-white font-righteous font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105">
                View Chart
              </a>
            </div>
            <div className="max-w-md mx-auto mb-12 relative eating-bull">
              <img 
                src="https://raw.githubusercontent.com/muske111/Bullfart/main/bullfart.webp" 
                alt="Bull Market" 
                className="rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent rounded-2xl"></div>
              
              {/* Grass below the bull image */}
              <div className="absolute -bottom-8 left-0 right-0 overflow-hidden h-16">
                {grassBlades.map((blade, index) => (
                  <div
                    key={`image-grass-${index}`}
                    className="grass-blade"
                    style={{
                      left: `${blade.left}%`,
                      height: `${blade.height * 0.7}px`,
                      animationDelay: `${blade.delay}s`
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all">
              <Coins className="w-12 h-12 text-gray-200 mb-4" />
              <h3 className="text-2xl font-bangers mb-2 text-white tracking-wide">100M Total Supply</h3>
              <p className="font-righteous text-gray-200">Limited supply creates scarcity and potential for growth</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all">
              <Shield className="w-12 h-12 text-gray-200 mb-4" />
              <h3 className="text-2xl font-bangers mb-2 text-white tracking-wide">LP Locked</h3>
              <p className="font-righteous text-gray-200">Liquidity locked for 1 year ensuring trading stability</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all">
              <Users className="w-12 h-12 text-gray-200 mb-4" />
              <h3 className="text-2xl font-bangers mb-2 text-white tracking-wide">Community Driven</h3>
              <p className="font-righteous text-gray-200">Power to the people - community governance enabled</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all">
              <Rocket className="w-12 h-12 text-gray-200 mb-4" />
              <h3 className="text-2xl font-bangers mb-2 text-white tracking-wide">Moon Mission</h3>
              <p className="font-righteous text-gray-200">Strategic marketing and development roadmap</p>
            </div>
          </div>
        </div>

        {/* Tokenomics */}
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-5xl font-bangers text-center mb-12 text-white tracking-wide">Tokenomics</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all">
              <h3 className="text-3xl font-bangers mb-4 text-white tracking-wide">Buy Tax: 0%</h3>
              <p className="font-righteous text-gray-200 text-lg">No taxes on buys! Trade freely!</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all">
              <h3 className="text-3xl font-bangers mb-4 text-white tracking-wide">Sell Tax: 0%</h3>
              <p className="font-righteous text-gray-200 text-lg">No taxes on sells! Trade freely!</p>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="container mx-auto px-4 py-16">
          <div className="flex justify-center gap-6">
            <a href="https://x.com/i/communities/1922225963641012244" className="text-gray-200 hover:text-white transition-colors transform hover:scale-125">
              <Twitter className="w-8 h-8" />
            </a>
            <a href="https://t.me/bull_fart" className="text-gray-200 hover:text-white transition-colors transform hover:scale-125">
              <MessageCircle className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;