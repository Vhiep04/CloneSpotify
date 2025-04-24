import type { Playlist } from "@/types"

interface PlaylistCardProps {
  playlist: Playlist
}

export default function PlaylistCard({ playlist }: PlaylistCardProps) {
  return (
    <div className="bg-neutral-800/50 p-4 rounded-md hover:bg-neutral-800 transition cursor-pointer group">
      <div className="relative">
        <img
          src={playlist.imageUrl || "/placeholder.svg?height=200&width=200"}
          alt={playlist.title}
          className="w-full aspect-square object-cover rounded-md mb-4"
        />
        {playlist.badge && (
          <div className="absolute top-2 left-2 bg-green-500 text-xs px-2 py-1 rounded-full">{playlist.badge}</div>
        )}
      </div>
      <h3 className="font-semibold truncate">{playlist.title}</h3>
      <p className="text-sm text-gray-400 line-clamp-2 mt-1">{playlist.description}</p>
    </div>
  )
}
