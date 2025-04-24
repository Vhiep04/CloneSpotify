"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, LayoutGrid, MoreHorizontal, Plus, Search } from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import LibraryItem from "./library-item"
import { libraryItems } from "@/data/library"
import { Input } from "@/components/ui/input"

export default function Sidebar() {
  const [activeTab, setActiveTab] = useState("playlists")
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isSearching, setIsSearching] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [isHovering, setIsHovering] = useState(false)
  const searchInputRef = useRef<HTMLDivElement>(null)
  const sidebarRef = useRef<HTMLDivElement>(null)

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed)
  }

  const toggleSearch = () => {
    setIsSearching(!isSearching)
    if (!isSearching) {
      // Focus the input when search is enabled
      setTimeout(() => {
        const searchInput = document.getElementById("library-search")
        if (searchInput) searchInput.focus()
      }, 100)
    } else {
      setSearchQuery("")
    }
  }

  // Handle click outside of search input
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isSearching && searchInputRef.current && !searchInputRef.current.contains(event.target as Node)) {
        // If there's no search query, hide the search input
        if (!searchQuery) {
          setIsSearching(false)
        }
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isSearching, searchQuery])

  // Filter library items based on search query
  const filteredItems = libraryItems.filter(
    (item) => !isSearching || item.name.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div
      ref={sidebarRef}
      className={`${
        isCollapsed ? "w-[72px]" : "w-[350px]"
      } h-full flex flex-col bg-black transition-all duration-300 rounded-lg`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className={`${isCollapsed ? "p-2" : "p-4"}`}>
        <div className="flex items-center justify-between">
          {!isCollapsed && (
            <>
              <div className="flex items-center gap-2 relative">
                <Button
                  variant="ghost"
                  size="icon"
                  className={`text-gray-400 hover:text-white absolute transition-all duration-300 ${
                    isHovering ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                  }`}
                  onClick={toggleSidebar}
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                <h2 className={`text-xl font-bold transition-all duration-300 ${isHovering ? "ml-10" : "ml-2"}`}>
                  Your Library
                </h2>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                  <Plus className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                  <MoreHorizontal className="h-5 w-5" />
                </Button>
              </div>
            </>
          )}

          {isCollapsed && (
            <div className="flex flex-col items-center w-full gap-4">
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white" onClick={toggleSidebar}>
                <ChevronRight className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Plus className="h-5 w-5" />
              </Button>
            </div>
          )}
        </div>

        {!isCollapsed && (
          <>
            <Tabs defaultValue="playlists" className="mt-4">
              <TabsList className="bg-transparent p-0 gap-2">
                <TabsTrigger
                  value="playlists"
                  className="rounded-full px-3 py-1 data-[state=active]:bg-neutral-800 data-[state=active]:text-white"
                  onClick={() => setActiveTab("playlists")}
                >
                  Playlists
                </TabsTrigger>
                <TabsTrigger
                  value="podcasts"
                  className="rounded-full px-3 py-1 data-[state=active]:bg-neutral-800 data-[state=active]:text-white"
                  onClick={() => setActiveTab("podcasts")}
                >
                  Podcasts
                </TabsTrigger>
                <TabsTrigger
                  value="artists"
                  className="rounded-full px-3 py-1 data-[state=active]:bg-neutral-800 data-[state=active]:text-white"
                  onClick={() => setActiveTab("artists")}
                >
                  Artists
                </TabsTrigger>
              </TabsList>
            </Tabs>

            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center gap-2 flex-1" ref={searchInputRef}>
                {isSearching ? (
                  <div className="flex-1 relative">
                    <Search className="h-4 w-4 absolute left-3 top-2.5 text-gray-400" />
                    <Input
                      id="library-search"
                      className="h-9 bg-neutral-800 border-none focus-visible:ring-0 focus-visible:ring-offset-0 text-sm pl-10"
                      placeholder="Search in Your Library"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                ) : (
                  <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white" onClick={toggleSearch}>
                    <Search className="h-5 w-5" />
                  </Button>
                )}
              </div>

              <Button variant="ghost" className="h-9 text-gray-400 hover:text-white flex items-center gap-2">
                {!isSearching && <span className="text-sm">Recents</span>}
                <LayoutGrid className="h-4 w-4" />
              </Button>
            </div>
          </>
        )}
      </div>

      <ScrollArea className="flex-1">
        <div className={`${isCollapsed ? "px-1" : "px-2"}`}>
          {filteredItems.map((item) => (
            <LibraryItem key={item.id} item={item} isCollapsed={isCollapsed} searchQuery={searchQuery} />
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}
