import { Header } from "./header"

type Props = {
  site?: string
}

export function Layout({
  children,
  site,
}: Readonly<{
  children: React.ReactNode
}> &
  Props) {
  return (
    <div className="prose mx-auto max-w-prose pb-16">
      <Header site={site} />
      {children}
    </div>
  )
}
