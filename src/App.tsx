import React from 'react';
import { Rocket, Coins, Dog } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-900 via-red-800 to-red-700 text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bangers mb-4">$MDOG</h1>
          <p className="text-2xl font-righteous mb-8">First Dog Born on Mars 🚀</p>
          <div className="max-w-md mx-auto mb-8">
            <img 
              src="https://images.pexels.com/photos/825949/pexels-photo-825949.jpeg"
              alt="Space Dog" 
              className="rounded-2xl shadow-2xl w-full"
            />
          </div>
          <div className="flex justify-center gap-4">
            <button className="bg-white text-red-900 font-bold py-3 px-8 rounded-full hover:bg-red-100 transition">
              Buy Now
            </button>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="bg-white/10 p-6 rounded-xl text-center backdrop-blur-sm">
            <Rocket className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-bangers mb-2">Mars Mission</h3>
            <p className="font-righteous">First meme coin from the Red Planet</p>
          </div>
          <div className="bg-white/10 p-6 rounded-xl text-center backdrop-blur-sm">
            <Dog className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-bangers mb-2">Space Pup</h3>
            <p className="font-righteous">Born in zero gravity</p>
          </div>
          <div className="bg-white/10 p-6 rounded-xl text-center backdrop-blur-sm">
            <Coins className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-bangers mb-2">1M Supply</h3>
            <p className="font-righteous">Limited edition Mars tokens</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;