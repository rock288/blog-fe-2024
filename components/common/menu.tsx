"use client"

import Link, { LinkProps } from "next/link"
import { usePathname } from "next/navigation"
import { PropsWithChildren } from "react"

const links = [
  {
    href: "/",
    name: "Home",
  },
  {
    href: "/about-me",
    name: "About me",
  },
]

function LinkUI(props: PropsWithChildren<LinkProps> & { active: boolean }) {
  return (
    <Link
      className={`underline font-bold ${
        props.active ? "no-underline text-green-600" : ""
      }`}
      {...props}
    />
  )
}

export function Menu() {
  const pathName = usePathname()

  return (
    <section data-tile="menu" className="flex flex-end gap-2 p-2">
      {links.map((item, index) => (
        <LinkUI key={index} href={item.href} active={item.href === pathName}>
          {item.name}
        </LinkUI>
      ))}
    </section>
  )
}
