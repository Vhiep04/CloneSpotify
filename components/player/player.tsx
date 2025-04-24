"use client"

import { useState } from "react"
import { ListMusic, Maximize, Mic2, Pause, Play, Repeat, Shuffle, SkipBack, SkipForward, Volume2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"

interface PlayerProps {
  currentSong: any
}

export default function Player({ currentSong }: PlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(70)
  const [progress, setProgress] = useState(0)

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <div className="h-[90px] bg-black border-t border-neutral-800 px-4 flex items-center">
      <div className="flex items-center gap-4 w-1/3">{/* Song info would go here */}</div>

      <div className="flex-1 flex flex-col items-center gap-2">
        <div className="flex items-center gap-5">
          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
            <Shuffle className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
            <SkipBack className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="bg-white text-black rounded-full hover:scale-105 transition"
            onClick={togglePlay}
          >
            {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          </Button>
          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
            <SkipForward className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
            <Repeat className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex items-center gap-2 w-full max-w-md">
          <span className="text-xs text-gray-400">0:00</span>
          <Slider
            value={[progress]}
            max={100}
            step={1}
            className="cursor-pointer"
            onValueChange={(value) => setProgress(value[0])}
          />
          <span className="text-xs text-gray-400">3:45</span>
        </div>
      </div>

      <div className="flex items-center gap-3 w-1/3 justify-end">
        <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
          <Mic2 className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
          <ListMusic className="h-4 w-4" />
        </Button>
        <div className="flex items-center gap-2 w-28">
          <Volume2 className="h-4 w-4 text-gray-400" />
          <Slider
            value={[volume]}
            max={100}
            step={1}
            className="cursor-pointer"
            onValueChange={(value) => setVolume(value[0])}
          />
        </div>
        <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
          <Maximize className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
