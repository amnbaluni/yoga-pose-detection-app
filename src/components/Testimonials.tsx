import { Star } from 'lucide-react'

const testimonials = [
  { name: 'Sarah M.', role: 'Yoga Instructor', text: 'YogaAI has completely transformed how I teach. The real-time feedback is incredible!', rating: 5 },
  { name: 'James K.', role: 'Beginner', text: 'As someone new to yoga, having AI guide my form gives me so much confidence.', rating: 5 },
  { name: 'Priya R.', role: 'Advanced Practitioner', text: 'The pose detection accuracy is remarkable. It catches subtle alignment issues I never noticed.', rating: 5 },
]

export default function Testimonials() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Loved by Yogis</h2>
          <p className="text-white/60">Join thousands of practitioners improving their practice</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#84ff57] text-[#84ff57]" />
                ))}
              </div>
              <p className="text-white/80 mb-4">"{t.text}"</p>
              <div>
                <div className="font-semibold">{t.name}</div>
                <div className="text-sm text-white/60">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}