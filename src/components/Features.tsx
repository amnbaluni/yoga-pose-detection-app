import { Camera, Activity, TrendingUp, Shield } from 'lucide-react'

const features = [
  {
    icon: Camera,
    title: 'Real-Time Detection',
    description: 'Advanced AI analyzes your poses in real-time using just your webcam.',
  },
  {
    icon: Activity,
    title: 'Form Correction',
    description: 'Get instant feedback on your alignment and posture adjustments.',
  },
  {
    icon: TrendingUp,
    title: 'Progress Tracking',
    description: 'Track your improvement over time with detailed analytics.',
  },
  {
    icon: Shield,
    title: 'Injury Prevention',
    description: 'Smart alerts help you avoid dangerous positions and protect your body.',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Why YogaAI?</h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Combining cutting-edge AI with ancient wisdom to transform your practice.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div key={feature.title} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#84ff57]/30 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-[#84ff57]/10 flex items-center justify-center mb-4 group-hover:bg-[#84ff57]/20 transition-colors">
                <feature.icon className="w-6 h-6 text-[#84ff57]" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-white/60">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}