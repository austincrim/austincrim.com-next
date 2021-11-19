import { Appearance as TAppearance } from '.prisma/client'
import Image from 'next/image'

export default function Appearance({
  appearance
}: {
  appearance: TAppearance
}) {
  return (
    <div>
      <span className="text-xl font-semibold">{appearance.title}</span>
      <Image src={appearance.imgUrl} />
    </div>
  )
}
