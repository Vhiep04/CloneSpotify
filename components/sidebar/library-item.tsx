import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import type { LibraryItem as LibraryItemType } from "@/types"

interface LibraryItemProps {
  item: LibraryItemType
  isCollapsed?: boolean
  searchQuery?: string
}

export default function LibraryItem({ item, isCollapsed = false, searchQuery = "" }: LibraryItemProps) {
  // Function to highlight matching text
  const highlightText = (text: string, query: string) => {
    if (!query) return <span>{text}</span>

    const parts = text.split(new RegExp(`(${query})`, "gi"))

    return (
      <>
        {parts.map((part, index) => {
          const isMatch = part.toLowerCase() === query.toLowerCase()
          return (
            <span key={index} className={isMatch ? "bg-blue-600" : ""}>
              {part}
            </span>
          )
        })}
      </>
    )
  }

  return (
    <div
      className={`flex items-center ${
        isCollapsed ? "justify-center" : "gap-3"
      } p-2 hover:bg-neutral-800 rounded-md cursor-pointer`}
    >
      <Avatar className={`${isCollapsed ? "h-10 w-10" : "h-12 w-12"} rounded-md`}>
        <AvatarImage src={item.imageUrl || "/placeholder.svg"} alt={item.name} />
        <AvatarFallback className="rounded-md">{item.name.charAt(0)}</AvatarFallback>
      </Avatar>

      {!isCollapsed && (
        <div>
          <div className="font-semibold">{highlightText(item.name, searchQuery)}</div>
          <div className="text-sm text-gray-400">{item.type}</div>
        </div>
      )}
    </div>
  )
}
