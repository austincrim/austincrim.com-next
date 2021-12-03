import { Appearance as TAppearance } from '.prisma/client'

export default function Appearance({
  appearance
}: {
  appearance: TAppearance
}) {
  return (
    <div className="flex flex-col gap-2 md:flex-row md:justify-between md:items-start">
      <a
        className="text-xl transition-colors text-secondary hover:text-primary"
        href={appearance.appearanceUrl}
      >
        {appearance.title}
      </a>
    </div>
  )
}
