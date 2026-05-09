"use client";
import React, { useState } from 'react';
import { ShoppingCart, Edit3, Save, Leaf, Flame, Wind, CheckCircle } from 'lucide-react';

export default function SpiceWebsite() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  
  const [content, setContent] = useState({
    heroTitle: "Nyumbani Fresh Blends",
    heroSub: "Hand-crafted spice layers that bring the warmth of a Kenyan home to every meal.",
    aboutText: "Grown in the rich soils of Kenya, our blends are more than just seasoning; they are a legacy of flavor passed down through generations.",
  });

  const handleUpdate = (key, value) => {
    setContent({ ...content, [key]: value });
  };

  return (
    <div className="min-h-screen font-sans">
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tighter text-[#922724]">NYUMBANI</h1>
          <div className="flex items-center gap-8">
            <button onClick={() => setIsAdmin(!isAdmin)} className="text-xs font-mono uppercase bg-stone-100 px-2 py-1 rounded hover:bg-stone-200">
              {isAdmin ? "Exit Admin" : "Admin Login"}
            </button>
            <div className="relative cursor-pointer" onClick={() => alert("Checkout system initializing...")}>
              <ShoppingCart className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#922724] text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center animate-bounce">
                  {cartCount}
                </span>
              )}
            </div>
          </div>
        </div>
      </nav>

      <header className="relative h-screen flex items-center justify-center overflow-hidden bg-stone-900">
        <div className="absolute inset-0 opacity-40">
          <img src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          {isAdmin ? (
            <input className="bg-white/20 text-white text-6xl font-bold text-center border-2 border-dashed border-white/50 w-full mb-4" value={content.heroTitle} onChange={(e) => handleUpdate('heroTitle', e.target.value)} />
          ) : (
            <h2 className="text-6xl md:text-8xl font-serif text-white mb-6 drop-shadow-lg">{content.heroTitle}</h2>
          )}
          {isAdmin ? (
            <textarea className="bg-white/20 text-white text-xl text-center border-2 border-dashed border-white/50 w-full" value={content.heroSub} onChange={(e) => handleUpdate('heroSub', e.target.value)} />
          ) : (
            <p className="text-xl md:text-2xl text-stone-200 font-light italic">{content.heroSub}</p>
          )}
          <button className="mt-10 px-8 py-4 bg-[#922724] text-white rounded-full hover:bg-[#7a211e] transition-all transform hover:scale-105 uppercase tracking-widest text-sm font-bold">Explore the Collection</button>
        </div>
      </header>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-center">
          <div className="flex flex-col items-center p-8 border border-stone-100 rounded-2xl hover:shadow-xl transition-shadow">
            <Leaf className="w-12 h-12 text-green-700 mb-6" />
            <h3 className="text-xl font-bold mb-4 uppercase tracking-tighter">100% Organic</h3>
            <p className="text-stone-500">Purely Kenyan, sourced directly from small-scale farmers.</p>
          </div>
          <div className="flex flex-col items-center p-8 border border-stone-100 rounded-2xl hover:shadow-xl transition-shadow">
            <Flame className="w-12 h-12 text-[#922724] mb-6" />
            <h3 className="text-xl font-bold mb-4 uppercase tracking-tighter">Small Batches</h3>
            <p className="text-stone-500">Hand-blended weekly for maximum freshness.</p>
          </div>
          <div className="flex flex-col items-center p-8 border border-stone-100 rounded-2xl hover:shadow-xl transition-shadow">
            <Wind className="w-12 h-12 text-blue-400 mb-6" />
            <h3 className="text-xl font-bold mb-4 uppercase tracking-tighter">Aroma Sealed</h3>
            <p className="text-stone-500">Preserving the vibrant Kenyan sun in every jar.</p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-stone-100">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-serif mb-12 italic text-[#922724]">Our Story</h2>
          {isAdmin ? (
            <textarea className="bg-white border-2 border-dashed border-stone-400 p-4 w-full h-32 mb-8" value={content.aboutText} onChange={(e) => handleUpdate('aboutText', e.target.value)} />
          ) : (
            <p className="text-2xl leading-relaxed text-stone-700 font-light mb-12">{content.aboutText}</p>
          )}
          <div className="bg-white p-12 rounded-3xl shadow-2xl border border-stone-200">
            <h3 className="text-2xl font-bold mb-6">Build Your Custom Fresh Box</h3>
            <p className="mb-8 text-stone-500 uppercase tracking-widest text-sm">Select quantity to start your transaction</p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
               <button onClick={() => setCartCount(cartCount + 1)} className="w-full md:w-auto px-12 py-4 border-2 border-[#922724] text-[#922724] font-bold rounded-full hover:bg-[#922724] hover:text-white transition-colors">Add to Cart</button>
               <button className="w-full md:w-auto px-12 py-4 bg-stone-900 text-white font-bold rounded-full" onClick={() => alert("Redirecting to Checkout...")}>Complete Purchase</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
