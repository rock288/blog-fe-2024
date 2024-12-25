import { Header } from "./header"

export function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="container mx-auto max-w-prose">
      <Header />
      {children}
    </div>
  )
}
