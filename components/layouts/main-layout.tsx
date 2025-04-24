"use client"

import type React from "react"

import { createContext, useState, useEffect } from "react"
import Sidebar from "@/components/sidebar/sidebar"
import TopBar from "@/components/top-bar"
import Player from "@/components/player/player"
import BrowseView from "@/components/browse-view"

// Create a context to share navigation state
export const NavigationContext = createContext<{
  history: string[]
  currentIndex: number
  navigateTo: (page: string) => void
  goBack: () => void
  goForward: () => void
  goHome: () => void
  canGoBack: boolean
  canGoForward: boolean
  currentPage: string
}>({
  history: [],
  currentIndex: -1,
  navigateTo: () => {},
  goBack: () => {},
  goForward: () => {},
  goHome: () => {},
  canGoBack: false,
  canGoForward: false,
  currentPage: "home",
})

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const [currentSong, setCurrentSong] = useState<any>(null)
  const [showBrowse, setShowBrowse] = useState(false)

  // Navigation state
  const [history, setHistory] = useState<string[]>(["home"])
  const [currentIndex, setCurrentIndex] = useState(0)

  const currentPage = history[currentIndex] || "home"
  const canGoBack = currentIndex > 0
  const canGoForward = currentIndex < history.length - 1

  // Navigation functions
  const navigateTo = (page: string) => {
    // If we're not at the end of the history, truncate it
    const newHistory = history.slice(0, currentIndex + 1)
    setHistory([...newHistory, page])
    setCurrentIndex(newHistory.length)
  }

  const goBack = () => {
    if (canGoBack) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  const goForward = () => {
    if (canGoForward) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const goHome = () => {
    // If we're already on home, do nothing
    if (currentPage === "home") return

    navigateTo("home")
  }

  // Toggle browse view
  const toggleBrowse = () => {
    if (!showBrowse) {
      navigateTo("browse")
    } else {
      // If we're already on browse, go back to previous page
      goBack()
    }
    setShowBrowse(!showBrowse)
  }

  // Update showBrowse based on current page
  useEffect(() => {
    setShowBrowse(currentPage === "browse")
  }, [currentPage])

  // Render content based on current page
  const renderContent = () => {
    switch (currentPage) {
      case "home":
        return children
      case "browse":
        return <BrowseView />
      default:
        return children
    }
  }

  return (
    <NavigationContext.Provider
      value={{
        history,
        currentIndex,
        navigateTo,
        goBack,
        goForward,
        goHome,
        canGoBack,
        canGoForward,
        currentPage,
      }}
    >
      <div className="h-screen flex flex-col">
        <div className="flex-1 overflow-hidden flex flex-col">
          <TopBar toggleBrowse={toggleBrowse} />
          <div className="flex flex-1 overflow-hidden p-2">
            <Sidebar />
            <main className="flex-1 overflow-auto ml-2">{renderContent()}</main>
          </div>
        </div>
        <Player currentSong={currentSong} />
      </div>
    </NavigationContext.Provider>
  )
}
