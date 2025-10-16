import Link from 'next/link';
import GlassCard from '../components/GlassCard';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center relative overflow-hidden">
      {/* Background effects */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-900/30 via-cyan-900/20 to-purple-900/25 pointer-events-none" />
      <div className="fixed top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="fixed bottom-1/3 right-1/4 w-80 h-80 bg-blue-500/8 rounded-full blur-3xl animate-pulse" />

      <div className="relative z-20 max-w-3xl w-full px-4 py-20">
        <GlassCard className="p-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight">
              Page Not Found
            </h1>
          <div className="text-6xl mb-6">?</div>
          <h2 className="text-2xl font-bold text-white mb-4">
            Hi there, this page doesn&apos;t exist or we&apos;ve done something dumb and broken it.
          </h2>
          <p className="text-gray-300 mb-6">
            Our system also automatically disables pages that are vulnerable to attack in some way.
          </p>

          <div className="max-w-xs mx-auto">
            <Link href="/">
              <button className="w-full px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 hover:opacity-90 transition-all duration-200">
                Return Home
              </button>
            </Link>
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
