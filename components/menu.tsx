import Link, { LinkProps } from "next/link"
import { PropsWithChildren } from "react"

function LinkUI(props: PropsWithChildren<LinkProps>) {
  return <Link className="underline font-bold" {...props} />
}

export function Menu() {
  return (
    <section data-tile="menu" className="flex flex-end gap-2 p-2">
      <LinkUI href="/">Home</LinkUI>
      <LinkUI href="/about-me">About me</LinkUI>
    </section>
  )
}
