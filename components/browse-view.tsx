"use client"

import { browseCategories } from "@/data/browse"
import { useContext } from "react"
import { NavigationContext } from "./layouts/main-layout"

export default function BrowseView() {
  const { navigateTo } = useContext(NavigationContext)

  const handleCategoryClick = (categoryId: string) => {
    // Navigate to the category page
    navigateTo(`category/${categoryId}`)
  }

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">Browse all</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {browseCategories.map((category) => (
          <div
            key={category.id}
            className="relative overflow-hidden rounded-lg cursor-pointer group"
            style={{ backgroundColor: category.color }}
            onClick={() => handleCategoryClick(category.id)}
          >
            <div className="p-5 h-[200px] flex flex-col">
              <h3 className="text-2xl font-bold text-white">{category.name}</h3>
              <div className="absolute bottom-0 right-0 w-[100px] h-[100px] rotate-[25deg] translate-x-[18%] translate-y-[5%]">
                <img
                  src={category.imageUrl || "/placeholder.svg?height=100&width=100"}
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
