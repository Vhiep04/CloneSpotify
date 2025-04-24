"use client"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SectionHeader from "./ui/section-header"
import PlaylistCard from "./cards/playlist-card"
import AlbumCard from "./cards/album-card"
import FeaturedCard from "./cards/featured-card"
import { featuredPlaylists, madeForYou, popularAlbums, recentlyPlayed, recommendedToday, topHits } from "@/data/home"

export default function HomePage() {
  return (
    <div className="pb-10">
      <Tabs defaultValue="all" className="mb-6">
        <TabsList className="bg-transparent p-0 gap-2">
          <TabsTrigger
            value="all"
            className="rounded-full px-4 py-1.5 bg-neutral-800 data-[state=active]:bg-white data-[state=active]:text-black"
          >
            All
          </TabsTrigger>
          <TabsTrigger
            value="music"
            className="rounded-full px-4 py-1.5 bg-neutral-800 data-[state=active]:bg-white data-[state=active]:text-black"
          >
            Music
          </TabsTrigger>
          <TabsTrigger
            value="podcasts"
            className="rounded-full px-4 py-1.5 bg-neutral-800 data-[state=active]:bg-white data-[state=active]:text-black"
          >
            Podcasts
          </TabsTrigger>
        </TabsList>
      </Tabs>

      {/* Featured Banner */}
      <div className="mb-6">
        <div className="relative rounded-lg overflow-hidden">
          <img
            src="/placeholder.svg?height=300&width=1200"
            alt="Featured Banner"
            className="w-full h-[300px] object-cover"
          />
          <div className="absolute bottom-4 left-4">
            <div className="text-sm text-green-400">NGHE TRÊN</div>
            <h2 className="text-6xl font-bold">cay</h2>
            <div className="mt-2 text-sm">KHẮC HƯNG x JIMMII NGUYỄN</div>
          </div>
          <div className="absolute top-2 right-2 bg-black/50 px-2 py-1 rounded text-xs">Sponsored</div>
        </div>
      </div>

      {/* Made For You Section */}
      <section className="mb-8">
        <SectionHeader title="Made For vhiep" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {madeForYou.map((playlist) => (
            <PlaylistCard key={playlist.id} playlist={playlist} />
          ))}
        </div>
      </section>

      {/* Popular Albums Section */}
      <section className="mb-8">
        <SectionHeader title="Popular albums and singles" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {popularAlbums.map((album) => (
            <AlbumCard key={album.id} album={album} />
          ))}
        </div>
      </section>

      {/* Recently Played Section */}
      <section className="mb-8">
        <SectionHeader title="Recently played" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {recentlyPlayed.map((item) => (
            <PlaylistCard key={item.id} playlist={item} />
          ))}
        </div>
      </section>

      {/* Based on Recent Listening */}
      <section className="mb-8">
        <SectionHeader title="Based on your recent listening" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {recommendedToday.map((playlist) => (
            <PlaylistCard key={playlist.id} playlist={playlist} />
          ))}
        </div>
      </section>

      {/* More of what you like */}
      <section className="mb-8">
        <SectionHeader title="More of what you like" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {recommendedToday.slice(0, 5).map((playlist) => (
            <PlaylistCard key={`more-${playlist.id}`} playlist={playlist} />
          ))}
        </div>
      </section>

      {/* Today's biggest hits */}
      <section className="mb-8">
        <SectionHeader title="Today's biggest hits" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {topHits.map((playlist) => (
            <PlaylistCard key={playlist.id} playlist={playlist} />
          ))}
        </div>
      </section>

      {/* Featured Playlists */}
      <section className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredPlaylists.map((playlist) => (
            <FeaturedCard key={playlist.id} playlist={playlist} />
          ))}
        </div>
      </section>
    </div>
  )
}
