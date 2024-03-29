import { Project } from '@prisma/client'

export default function ProjectCard({ project }: { project: Project }) {
  const { title, description, repoUrl, appUrl } = project
  return (
    <div className="flex flex-col justify-between py-8 space-y-8 lg:flex-row lg:items-center">
      <div className="flex flex-col">
        <h3 className="text-xl font-semibold tracking-wider text-secondary">
          {title}
        </h3>
        <div className="max-w-xl mt-2">{description}</div>
      </div>

      <div className="flex flex-col items-start mt-8 space-y-2 lg:items-end">
        {repoUrl ? (
          <a
            href={repoUrl}
            className="flex items-center font-medium transition-colors hover:text-muted-hover"
          >
            View Source
          </a>
        ) : (
          <></>
        )}
        {appUrl ? (
          <a
            className="transition-colors text-primary hover:text-secondary"
            href={appUrl}
          >
            Go to Project
          </a>
        ) : (
          <></>
        )}
      </div>
    </div>
  )
}
