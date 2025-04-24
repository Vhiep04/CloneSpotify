"use client"

import { useContext } from "react"
import { ArrowLeft, ArrowRight, Bell, Home, Maximize2, Minimize2, Search, Users, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { NavigationContext } from "./layouts/main-layout"

interface TopBarProps {
  toggleBrowse: () => void
}

export default function TopBar({ toggleBrowse }: TopBarProps) {
  const { goBack, goForward, goHome, canGoBack, canGoForward } = useContext(NavigationContext)

  return (
    <div className="flex items-center justify-between p-4">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className={`${canGoBack ? "text-white" : "text-gray-700"} hover:text-white`}
            onClick={goBack}
            disabled={!canGoBack}
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className={`${canGoForward ? "text-white" : "text-gray-700"} hover:text-white`}
            onClick={goForward}
            disabled={!canGoForward}
          >
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="bg-black/20 text-white rounded-full hover:scale-105 transition-transform"
          onClick={goHome}
        >
          <Home className="h-5 w-5" />
        </Button>
      </div>

      <div className="relative w-[340px]">
        <div className="relative flex items-center">
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <Search className="h-4 w-4" />
          </div>
          <Input
            className="pl-10 pr-0 py-2 bg-[#242424] text-white border-none rounded-full focus-visible:ring-0 focus-visible:ring-offset-0"
            placeholder="What do you want to play?"
          />
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-0 h-full text-gray-400 hover:text-white border-l border-gray-700 rounded-r-full rounded-l-none"
            onClick={toggleBrowse}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <rect width="7" height="7" x="3" y="3" rx="1" />
              <rect width="7" height="7" x="14" y="3" rx="1" />
              <rect width="7" height="7" x="14" y="14" rx="1" />
              <rect width="7" height="7" x="3" y="14" rx="1" />
            </svg>
          </Button>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Button className="bg-white hover:bg-white/90 text-black rounded-full font-bold">Explore Premium</Button>
        <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
          <Bell className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
          <Users className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
          <Avatar className="h-8 w-8">
            <AvatarImage src="/placeholder.svg?height=32&width=32" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </Button>
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white h-8 w-8">
            <Minimize2 className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white h-8 w-8">
            <Maximize2 className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white h-8 w-8">
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
