import type { Album, FeaturedPlaylist, Playlist } from "@/types"

export const madeForYou: Playlist[] = [
  {
    id: "1",
    title: 'ANH TRAI "SAY HI", Vũ Thịnh, SOOBIN and more',
    description: "Daily Mix",
    imageUrl: "/placeholder.svg?height=200&width=200&text=01",
    badge: "Daily Mix",
  },
  {
    id: "2",
    title: "RAP VIỆT, Wxrdie, Obito and more",
    description: "Daily Mix",
    imageUrl: "/placeholder.svg?height=200&width=200&text=02",
    badge: "Daily Mix",
  },
  {
    id: "3",
    title: 'ANH TRAI "SAY HI", Mr.Siro, Sơn Tùng M-TP and more',
    description: "Daily Mix",
    imageUrl: "/placeholder.svg?height=200&width=200&text=03",
    badge: "Daily Mix",
  },
  {
    id: "4",
    title: "ROSÉ, BIGBANG, Jimin and more",
    description: "Daily Mix",
    imageUrl: "/placeholder.svg?height=200&width=200&text=04",
    badge: "Daily Mix",
  },
  {
    id: "5",
    title: "Jason Zhang and 華晨宇, ZAYN and more",
    description: "Daily Mix",
    imageUrl: "/placeholder.svg?height=200&width=200&text=05",
    badge: "Daily Mix",
  },
  {
    id: "6",
    title: "Taylor Swift, Lady Gaga, ZAYN and more",
    description: "Daily Mix",
    imageUrl: "/placeholder.svg?height=200&width=200&text=06",
    badge: "Daily Mix",
  },
]

export const popularAlbums: Album[] = [
  {
    id: "1",
    title: "Đánh Đổi",
    artist: "Obito, Shiki",
    imageUrl: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "2",
    title: "THE WXRDIES",
    artist: "Wxrdie",
    imageUrl: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "3",
    title: "Từng Ngày Như Mãi Mãi",
    artist: "buitruonglinh",
    imageUrl: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "4",
    title: "Lặng",
    artist: "Shiki",
    imageUrl: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "5",
    title: "Ai Cũng Phải Bắt Đầu Từ Đâu Đó",
    artist: "HIEUTHUHAI",
    imageUrl: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "6",
    title: "Dữ Liệu Quý",
    artist: "Dương Domic",
    imageUrl: "/placeholder.svg?height=200&width=200",
  },
]

export const recentlyPlayed: Playlist[] = [
  {
    id: "1",
    title: "Liked Songs",
    description: "Your liked songs",
    imageUrl: "/placeholder.svg?height=200&width=200&text=❤️",
  },
  {
    id: "2",
    title: "Tháp rơi tự do 坠机",
    description: "Wxrdie",
    imageUrl: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "3",
    title: "MCK's #1 fan",
    description: "Your favorite tracks",
    imageUrl: "/placeholder.svg?height=200&width=200",
  },
]

export const recommendedToday: Playlist[] = [
  {
    id: "1",
    title: "Hip-hop Việt",
    description: "Dòng chảy rap Việt luôn cuốn cuộn. Ảnh bìa: Obito",
    imageUrl: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "2",
    title: "Những ca khúc hay nhất",
    description: "Từ dòng nhạc đa dạng",
    imageUrl: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "3",
    title: "Hai cây chụm lại nên hơn núi cao",
    description: "Ảnh bìa: Vương Anh Tú",
    imageUrl: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "4",
    title: "Những nghệ sĩ Việt được nghe nhiều nhất năm 2024",
    description: "Top artists in Vietnam",
    imageUrl: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "5",
    title: "Những con track Hip-hop Việt nổi bật năm 2023",
    description: "Best of Vietnamese Hip-hop",
    imageUrl: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "6",
    title: "Một núi niềm vui của nhạc Việt",
    description: "Ảnh bìa: J.A.M",
    imageUrl: "/placeholder.svg?height=200&width=200",
  },
]

export const topHits: Playlist[] = [
  {
    id: "1",
    title: "DESI HITS",
    description: "Top Indian hits",
    imageUrl: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "2",
    title: "Big in Vietnam",
    description: "Top hits in Vietnam",
    imageUrl: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "3",
    title: "Mega Hit Mix",
    description: "Popular hits collection",
    imageUrl: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "4",
    title: "PUNJABI 101",
    description: "Top Punjabi tracks",
    imageUrl: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "5",
    title: "Viral Hits",
    description: "Trending on social media",
    imageUrl: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "6",
    title: "Top 100 Hits",
    description: "Chart toppers",
    imageUrl: "/placeholder.svg?height=200&width=200",
  },
]

export const featuredPlaylists: FeaturedPlaylist[] = [
  {
    id: "1",
    title: "Thiên Hạ Nghe Gì",
    description: "Những gì người bên cạnh đang nghe. Ảnh bìa: RIO, 52Hz",
    imageUrl: "/placeholder.svg?height=300&width=600",
    iconUrl: "/placeholder.svg?height=40&width=40&text=TH",
    type: "Playlist",
    source: "Spotify",
  },
  {
    id: "2",
    title: "Hip-hop Việt",
    description: "Dòng chảy rap Việt luôn cuốn cuộn. Ảnh bìa: Obito",
    imageUrl: "/placeholder.svg?height=300&width=600",
    iconUrl: "/placeholder.svg?height=40&width=40&text=HH",
    type: "Playlist",
    source: "Spotify",
  },
]
