import { Header } from "./header"
import { Menu } from "./menu"

export function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="container mx-auto max-w-prose">
      <Header />
      <Menu />
      {children}
    </div>
  )
}
