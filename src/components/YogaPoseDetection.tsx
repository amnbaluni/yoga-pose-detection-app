import { Camera, Wifi, WifiOff } from 'lucide-react'
import { useState, useRef, useEffect, useCallback } from 'react'

interface PoseKeypoint {
  x: number
  y: number
  z: number
  visibility?: number
}

export function YogaPoseDetection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isActive, setIsActive] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [currentPose, setCurrentPose] = useState<string>('Tree Pose')
  const [score, setScore] = useState(85)
  const animFrameRef = useRef<number>(0)

  const startCamera = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user', width: 640, height: 480 } })
      if (videoRef.current) {
        videoRef.current.srcObject = stream
        setIsActive(true)
        setError(null)
      }
    } catch {
      setError('Camera access denied. Please allow camera access to use pose detection.')
    }
  }, [])

  const stopCamera = useCallback(() => {
    if (videoRef.current?.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream
      stream.getTracks().forEach(t => t.stop())
      videoRef.current.srcObject = null
    }
    setIsActive(false)
    if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current)
  }, [])

  useEffect(() => {
    return () => stopCamera()
  }, [stopCamera])

  const poses = ['Tree Pose', 'Warrior I', 'Warrior II', 'Downward Dog', 'Cobra Pose', 'Mountain Pose']

  return (
    <section id="pose" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">AI Pose Detection</h2>
          <p className="text-white/60">Real-time analysis of your yoga form</p>
        </div>

        <div className="relative rounded-3xl overflow-hidden bg-white/5 border border-white/10">
          <div className="aspect-video relative bg-black/50">
            <video ref={videoRef} autoPlay playsInline muted className="w-full h-full object-cover" style={{ transform: 'scaleX(-1)' }} />
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ transform: 'scaleX(-1)' }} />

            {!isActive && !error && (
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <Camera className="w-16 h-16 text-white/30 mb-4" />
                <p className="text-white/50 mb-4">Click below to start pose detection</p>
                <button onClick={startCamera} className="px-6 py-3 bg-[#84ff57] text-black font-semibold rounded-xl hover:bg-[#9cff70] transition-colors">
                  Enable Camera
                </button>
              </div>
            )}

            {error && (
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <WifiOff className="w-12 h-12 text-red-400 mb-3" />
                <p className="text-red-400 text-sm text-center px-4">{error}</p>
              </div>
            )}

            {isActive && (
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-sm">
                  <Wifi className="w-4 h-4 text-[#84ff57]" />
                  <span className="text-xs text-white/80">Live</span>
                </div>
                <div className="px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-sm">
                  <span className="text-xs text-white/80">Score: {score}%</span>
                </div>
              </div>
            )}
          </div>

          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold">Current Pose</h3>
                <p className="text-white/60 text-sm">{currentPose}</p>
              </div>
              {isActive && (
                <button onClick={stopCamera} className="px-4 py-2 text-sm font-medium text-white/80 hover:text-white border border-white/10 rounded-lg transition-colors">
                  Stop
                </button>
              )}
            </div>

            <div className="flex gap-2 flex-wrap">
              {poses.map(pose => (
                <button key={pose} onClick={() => setCurrentPose(pose)} className={`px-3 py-1.5 text-xs rounded-lg transition-colors ${currentPose === pose ? 'bg-[#84ff57]/20 text-[#84ff57] border border-[#84ff57]/30' : 'bg-white/5 text-white/60 border border-white/10 hover:border-white/20'}`}>
                  {pose}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}