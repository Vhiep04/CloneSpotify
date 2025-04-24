import type { Album } from "@/types"

interface AlbumCardProps {
  album: Album
}

export default function AlbumCard({ album }: AlbumCardProps) {
  return (
    <div className="bg-neutral-800/50 p-4 rounded-md hover:bg-neutral-800 transition cursor-pointer group">
      <div className="relative">
        <img
          src={album.imageUrl || "/placeholder.svg?height=200&width=200"}
          alt={album.title}
          className="w-full aspect-square object-cover rounded-md mb-4"
        />
      </div>
      <h3 className="font-semibold truncate">{album.title}</h3>
      <p className="text-sm text-gray-400 mt-1">{album.artist}</p>
    </div>
  )
}
