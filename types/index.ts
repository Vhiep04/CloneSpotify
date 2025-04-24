export interface LibraryItem {
  id: string
  name: string
  type: string
  imageUrl: string
}

export interface Playlist {
  id: string
  title: string
  description: string
  imageUrl: string
  badge?: string
}

export interface Album {
  id: string
  title: string
  artist: string
  imageUrl: string
}

export interface FeaturedPlaylist {
  id: string
  title: string
  description: string
  imageUrl: string
  iconUrl: string
  type: string
  source: string
}
