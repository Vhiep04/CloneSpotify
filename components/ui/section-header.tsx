interface SectionHeaderProps {
  title: string
}

export default function SectionHeader({ title }: SectionHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-2xl font-bold">{title}</h2>
      <button className="text-sm text-gray-400 hover:text-white">Show all</button>
    </div>
  )
}
