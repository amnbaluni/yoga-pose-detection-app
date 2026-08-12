import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import WorkoutCategories from '@/components/WorkoutCategories'
import { YogaPoseDetection } from '@/components/YogaPoseDetection'
import Progress from '@/components/Progress'
import Testimonials from '@/components/Testimonials'
import DownloadCTA from '@/components/DownloadCTA'
import Footer from '@/components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white antialiased">
      <Navbar />
      <Hero />
      <Features />
      <WorkoutCategories />
      <YogaPoseDetection />
      <Progress />
      <Testimonials />
      <DownloadCTA />
      <Footer />
    </div>
  )
}
