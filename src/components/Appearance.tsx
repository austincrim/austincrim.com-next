import { Appearance as TAppearance } from '.prisma/client'
import Image from 'next/image'

export default function Appearance({
  appearance
}: {
  appearance: TAppearance
}) {
  return (
    <a
      className="grid grid-cols-1 gap-8 transition-colors text-secondary hover:text-primary"
      href={appearance.appearanceUrl}
    >
      <span className="text-lg font-semibold">{appearance.title}</span>
      <Image
        className="object-cover"
        width="480"
        height="270"
        src={appearance.imgUrl}
        alt={appearance.imgAlt}
      />
    </a>
  )
}
