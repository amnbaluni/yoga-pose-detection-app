import { Download, Apple, Smartphone } from 'lucide-react'

export default function DownloadCTA() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="p-12 rounded-3xl bg-gradient-to-br from-[#84ff57]/10 to-[#84ff57]/5 border border-[#84ff57]/20">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Transform Your Practice?</h2>
          <p className="text-white/60 mb-8 max-w-xl mx-auto">
            Download YogaAI today and experience the future of yoga training.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="flex items-center gap-2 px-6 py-3 bg-[#84ff57] text-black font-semibold rounded-xl hover:bg-[#9cff70] transition-colors">
              <Apple className="w-5 h-5" />
              App Store
            </button>
            <button className="flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/15 transition-colors border border-white/10">
              <Smartphone className="w-5 h-5" />
              Google Play
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}