const categories = [
  { name: 'Vinyasa Flow', count: 24, color: 'from-blue-500/20 to-purple-500/20' },
  { name: 'Hatha Yoga', count: 18, color: 'from-orange-500/20 to-red-500/20' },
  { name: 'Power Yoga', count: 16, color: 'from-green-500/20 to-teal-500/20' },
  { name: 'Restorative', count: 12, color: 'from-pink-500/20 to-rose-500/20' },
  { name: 'Yin Yoga', count: 10, color: 'from-purple-500/20 to-indigo-500/20' },
  { name: 'Ashtanga', count: 14, color: 'from-yellow-500/20 to-amber-500/20' },
]

export default function WorkoutCategories() {
  return (
    <section id="workouts" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Workout Categories</h2>
          <p className="text-white/60">Choose from a variety of yoga styles</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {categories.map((cat) => (
            <div key={cat.name} className={`p-6 rounded-2xl bg-gradient-to-br ${cat.color} border border-white/10 hover:border-white/20 cursor-pointer transition-all`}>              
              <h3 className="font-semibold mb-1">{cat.name}</h3>
              <p className="text-sm text-white/60">{cat.count} sessions</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}