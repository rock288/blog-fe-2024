import { Header } from "./header"

export function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="prose mx-auto max-w-prose pb-16">
      <Header />
      {children}
    </div>
  )
}
