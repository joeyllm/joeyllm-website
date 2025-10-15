"use client";
import React from 'react';
export default function Footer() {
  return (
    <footer className="bg-white/8 backdrop-blur-xl border-t border-white/15 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <a className="block hover:text-white transition-colors" href="/privacypolicy">Privacy Policy</a>
              <a className="block hover:text-white transition-colors" href="/terms">Terms of Service</a>
              <a className="block hover:text-white transition-colors" href="/licenses">Open Source Licenses</a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <div>business@joeyllm.com.au</div>
              <div>datacleaning@joeyllm.com.au</div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Community</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <a className="block hover:text-white transition-colors" href="https://discord.gg/F2VsZs6D">Discord</a>
              <a className="block hover:text-white transition-colors" href="https://github.com/joeyllm">GitHub</a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Compliance</h4>
            <div className="text-sm text-gray-400">Compliant with Australian privacy laws</div>
          </div>
        </div>
        <div className="text-center text-gray-400 text-sm border-t border-white/10 pt-8">
          © 2025 JoeyLLM. Open source AI for Australia and beyond.
        </div>
      </div>
    </footer>
  );
}
