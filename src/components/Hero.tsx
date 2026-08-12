import { ArrowRight, Play } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#84ff57]/5 via-transparent to-transparent" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#84ff57]/10 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
          <div className="w-2 h-2 bg-[#84ff57] rounded-full animate-pulse" />
          <span className="text-sm text-white/70">AI-Powered Pose Detection</span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
          Master Your
          <span className="text-[#84ff57]"> Yoga </span>
          Practice
        </h1>

        <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto mb-10">
          Real-time AI pose detection helps you perfect your form, prevent injuries, and track your progress on every yoga journey.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="group flex items-center gap-2 px-8 py-4 bg-[#84ff57] text-black font-semibold rounded-2xl hover:bg-[#9cff70] transition-all">
            Start Free Trial
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="group flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-2xl hover:bg-white/10 transition-all">
            <Play className="w-5 h-5" />
            Watch Demo
          </button>
        </div>
      </div>
    </section>
  )
}