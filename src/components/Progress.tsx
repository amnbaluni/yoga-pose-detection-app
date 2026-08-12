export default function Progress() {
  const stats = [
    { label: 'Sessions Completed', value: '127' },
    { label: 'Hours Practiced', value: '89' },
    { label: 'Poses Mastered', value: '42' },
    { label: 'Current Streak', value: '14 days' },
  ]

  return (
    <section id="progress" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Track Your Progress</h2>
          <p className="text-white/60">See how far you've come in your yoga journey</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center">
              <div className="text-3xl font-bold text-[#84ff57] mb-2">{stat.value}</div>
              <div className="text-sm text-white/60">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}