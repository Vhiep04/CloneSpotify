import type { FeaturedPlaylist } from "@/types"

interface FeaturedCardProps {
  playlist: FeaturedPlaylist
}

export default function FeaturedCard({ playlist }: FeaturedCardProps) {
  return (
    <div className="relative h-[300px] rounded-lg overflow-hidden group cursor-pointer">
      <img
        src={playlist.imageUrl || "/placeholder.svg?height=300&width=600"}
        alt={playlist.title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/30 flex items-end p-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <img
              src={playlist.iconUrl || "/placeholder.svg?height=40&width=40"}
              alt={playlist.title}
              className="w-10 h-10 rounded"
            />
            <div className="text-sm">
              <div>
                {playlist.type} • {playlist.source}
              </div>
            </div>
          </div>
          <h2 className="text-3xl font-bold mb-2">{playlist.title}</h2>
          <p className="text-sm">{playlist.description}</p>
        </div>
      </div>
    </div>
  )
}
