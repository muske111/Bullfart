import React from 'react';
import { Rocket, Coins, Fire } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-900 via-orange-800 to-orange-700 text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bangers mb-4">$BFR</h1>
          <p className="text-2xl font-righteous mb-8">The Most Explosive Meme Coin 💥</p>
          <div className="max-w-md mx-auto mb-8">
            <img 
              src="https://images.pexels.com/photos/1154619/pexels-photo-1154619.jpeg"
              alt="Bull" 
              className="rounded-2xl shadow-2xl w-full"
            />
          </div>
          <div className="flex justify-center gap-4">
            <button className="bg-white text-orange-900 font-bold py-3 px-8 rounded-full hover:bg-orange-100 transition">
              Buy Now
            </button>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="bg-white/10 p-6 rounded-xl text-center backdrop-blur-sm">
            <Fire className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-bangers mb-2">Explosive Growth</h3>
            <p className="font-righteous">Ready to take off 🚀</p>
          </div>
          <div className="bg-white/10 p-6 rounded-xl text-center backdrop-blur-sm">
            <Rocket className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-bangers mb-2">To The Moon</h3>
            <p className="font-righteous">No stopping this bull</p>
          </div>
          <div className="bg-white/10 p-6 rounded-xl text-center backdrop-blur-sm">
            <Coins className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-bangers mb-2">1M Supply</h3>
            <p className="font-righteous">Limited edition tokens</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;