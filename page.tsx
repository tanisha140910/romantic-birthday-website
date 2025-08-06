'use client'

import { useState, useEffect, useRef } from 'react'
import { Heart, Camera, Cake } from 'lucide-react'
import Image from 'next/image'

export default function RomanticBirthdayPage() {
  const [hearts, setHearts] = useState<Array<{ id: number; left: number; delay: number }>>([])

  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)

  useEffect(() => {
    // Generate floating hearts
    const heartArray = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5
    }))
    setHearts(heartArray)
  }, [])

  useEffect(() => {
    // Auto-play audio when component mounts
    if (audioRef.current) {
      audioRef.current.play().catch(() => {
        // If autoplay fails, we'll show the play button
        setIsPlaying(false)
      })
      setIsPlaying(true)
    }
  }, [])

  // 🖼️ EDIT IMAGES HERE - Replace these URLs with new photos
  // Just replace the blob URLs with new image URLs
  const samplePhotos = [
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250806-WA0011.jpg-t4iTmGYxrunxdUNErupFh6tvaiVXli.jpeg', // Photo 1 - NEW IMAGE
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250806-WA0009.jpg-qHTJfKaijoHlzA0ePMMT9cUVMNCqCT.jpeg', // Photo 2 - Replace this URL
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250806-WA0007.jpg-Nd05c7A8FvEPgE6mVl1zPhvWrqKhZx.jpeg', // Photo 3 - Replace this URL
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250806-WA0007.jpg-qeeDDUeQWDonuHIy3zpEuKim6ujW3D.jpeg', // Photo 4 - Replace this URL
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250806-WA0008.jpg-ZfmaEbWW48Fi7LCF9kBL3UhRkoCtUX.jpeg', // Photo 5 - Replace this URL
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250806-WA0011.jpg-t4iTmGYxrunxdUNErupFh6tvaiVXli.jpeg'  // Photo 6 - NEW IMAGE (same as first)
  ]

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-rose-100 relative overflow-hidden">
      {/* Background Music - Full Saiyaara Reprise Song */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onLoadedData={() => console.log('Full Saiyaara Reprise song loaded successfully')}
        onError={(e) => console.error('Audio error:', e)}
      >
        <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Saiyaara%20Reprise%20-%20Female%20_%20Full%20Song%20Audio%20_%20Saiyaara%20_%20Tanishk%2C%20Faheem%2C%20Arslan%20_%20Shreya%20_%20Irshad%20%5BZOQaMp4ef14%5D-NrbLJhFbnZnCNL7iseffB6t1l1WNlV.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      {/* Audio Controls */}
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        <button
          onClick={toggleAudio}
          className="bg-white/80 backdrop-blur-sm hover:bg-white/90 text-pink-500 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          title={isPlaying ? 'Pause Music' : 'Play Music'}
        >
          {isPlaying ? (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          )}
        </button>
        
        <button
          onClick={toggleMute}
          className="bg-white/80 backdrop-blur-sm hover:bg-white/90 text-pink-500 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          title={isMuted ? 'Unmute' : 'Mute'}
        >
          {isMuted ? (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
            </svg>
          )}
        </button>
      </div>

      {/* Floating Hearts Background */}
      <div className="fixed inset-0 pointer-events-none">
        {hearts.map((heart) => (
          <div
            key={heart.id}
            className="absolute animate-float opacity-20"
            style={{
              left: `${heart.left}%`,
              animationDelay: `${heart.delay}s`,
              animationDuration: '8s'
            }}
          >
            <Heart className="w-6 h-6 text-pink-400 fill-pink-300" />
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-8 animate-bounce-slow">
              <Heart className="w-16 h-16 text-pink-500 fill-pink-400 mx-auto mb-6" />
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-rose-500 bg-clip-text text-transparent mb-8 animate-pulse-slow">
              HAPPY BIRTHDAY TANU
            </h1>

            <div className="mb-8">
              <p className="text-3xl md:text-4xl font-bold text-pink-600 mb-4">14/09/10</p>
            </div>
            
            <div className="flex justify-center space-x-4 mb-12">
              <Heart className="w-8 h-8 text-pink-400 fill-pink-300 animate-ping" />
              <Heart className="w-10 h-10 text-rose-400 fill-rose-300 animate-pulse" />
              <Heart className="w-8 h-8 text-purple-400 fill-purple-300 animate-ping" />
            </div>

            <p className="text-2xl md:text-3xl text-gray-700 font-light italic mb-12">
              To the most beautiful soul I know ✨
            </p>
          </div>
        </section>

        {/* New Birthday Message Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-pink-100">
              <Heart className="w-12 h-12 text-pink-500 fill-pink-400 mx-auto mb-8" />
              
              <h2 className="text-4xl font-bold text-gray-800 mb-8 font-serif">
                A Special Message for You
              </h2>
              
              <div className="prose prose-lg mx-auto text-gray-700 leading-relaxed">
                <p className="text-xl italic font-light mb-6">
                  "Wishing you a day filled with love, laughter, and all the joy you truly deserve. 
                  You light up the lives of everyone around you with your kindness and positivity."
                </p>
                
                <p className="text-lg mb-6">
                  I'm so grateful to have you as my friend, and I hope this year brings you amazing adventures, 
                  new dreams, and memories you'll cherish forever.
                </p>
                
                <p className="text-xl font-medium text-pink-600">
                  Happy Birthday, Beautiful! May this year bring you endless reasons to smile. 💕
                </p>
              </div>
              
              <div className="flex justify-center space-x-2 mt-8">
                {[...Array(5)].map((_, i) => (
                  <Heart key={i} className="w-6 h-6 text-pink-400 fill-pink-300 animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Birthday Cake Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-pink-50 to-purple-50">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-12 font-serif">
              Make a Wish! 🎂
            </h2>

            <p className="text-3xl md:text-4xl font-bold text-pink-600 mb-8">14/09/25</p>
            
            <div className="relative inline-block">
              <div className="bg-white rounded-3xl p-12 shadow-2xl">
                <div className="relative">
                  <Cake className="w-32 h-32 text-pink-400 mx-auto mb-8" />
                  <Image
                    src="/beautiful-birthday-cake.png"
                    alt="Birthday Cake"
                    width={200}
                    height={200}
                    className="mx-auto rounded-2xl shadow-lg"
                  />
                </div>
              </div>
              
              {/* Surrounding Hearts */}
              <div className="absolute -top-4 -left-4">
                <Heart className="w-8 h-8 text-pink-400 fill-pink-300 animate-bounce" />
              </div>
              <div className="absolute -top-4 -right-4">
                <Heart className="w-6 h-6 text-rose-400 fill-rose-300 animate-pulse" />
              </div>
              <div className="absolute -bottom-4 -left-4">
                <Heart className="w-6 h-6 text-purple-400 fill-purple-300 animate-ping" />
              </div>
              <div className="absolute -bottom-4 -right-4">
                <Heart className="w-8 h-8 text-pink-400 fill-pink-300 animate-bounce" />
              </div>
              <div className="absolute top-1/2 -left-8">
                <Heart className="w-5 h-5 text-rose-400 fill-rose-300 animate-pulse" />
              </div>
              <div className="absolute top-1/2 -right-8">
                <Heart className="w-5 h-5 text-purple-400 fill-purple-300 animate-ping" />
              </div>
            </div>
            
            <p className="text-xl text-gray-600 mt-8 italic">
              Close your eyes, make a wish, and blow out the candles! ✨
            </p>
          </div>
        </section>

        {/* Photo Gallery Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Camera className="w-12 h-12 text-pink-500 mx-auto mb-6" />
              <h2 className="text-4xl font-bold text-gray-800 mb-4 font-serif">
                Beautiful Memories
              </h2>
              <p className="text-xl text-gray-600 italic">
                Every picture tells our story 📸
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {samplePhotos.map((photo, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500"
                >
                  <Image
                    src={photo || "/placeholder.svg"}
                    alt={`Memory ${index + 1}`}
                    width={300}
                    height={300}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-pink-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Heart className="w-6 h-6 text-white fill-white" />
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <p className="text-lg text-gray-600 italic">
                "Life is a collection of moments, and with you, every moment is magical" 💫
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-4 bg-gradient-to-r from-pink-100 to-purple-100">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center space-x-3 mb-6">
              {[...Array(7)].map((_, i) => (
                <Heart key={i} className="w-5 h-5 text-pink-400 fill-pink-300 animate-pulse" style={{ animationDelay: `${i * 0.3}s` }} />
              ))}
            </div>
            <p className="text-lg text-gray-600 italic">
              Made with endless love and countless hearts 💕
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Happy Birthday, Beautiful! Here's to another year of amazing adventures together ✨
            </p>
            
            {/* Shine Jamwal Name */}
            <div className="mt-8 pt-6 border-t border-pink-200">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-rose-600 bg-clip-text text-transparent">
                Shine Jamwal
              </h3>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
