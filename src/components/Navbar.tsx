import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/cn'

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Workouts', href: '#workouts' },
  { label: 'Pose Detection', href: '#pose' },
  { label: 'Progress', href: '#progress' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#84ff57] rounded-lg flex items-center justify-center">
              <span className="text-black font-bold text-sm">Y</span>
            </div>
            <span className="font-bold text-lg">YogaAI</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-white/70 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
            <button className="px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors">
              Log In
            </button>
            <button className="px-4 py-2 text-sm font-semibold text-black bg-[#84ff57] rounded-xl hover:bg-[#9cff70] transition-colors">
              Get Started
            </button>
          </div>

          <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <div className={cn('md:hidden overflow-hidden transition-all duration-300', open ? 'max-h-80 border-t border-white/5' : 'max-h-0')}>
        <div className="px-4 py-4 space-y-1 bg-black/95 backdrop-blur-xl">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} onClick={() => setOpen(false)} className="block px-4 py-3 text-sm font-medium text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-all">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}