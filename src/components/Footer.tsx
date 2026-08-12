export default function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#84ff57] rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-sm">Y</span>
              </div>
              <span className="font-bold">YogaAI</span>
            </div>
            <p className="text-sm text-white/60">AI-powered yoga practice for everyone.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Download</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/5 text-center text-sm text-white/40">
          © 2026 YogaAI. All rights reserved.
        </div>
      </div>
    </footer>
  )
}