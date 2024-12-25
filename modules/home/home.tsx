import React from "react"
import { Articles } from "./articles"
import { Menu } from "@/components/common/menu"
import { Description } from "@/components/common/description"

interface Props {}

function Home(props: Props) {
  const {} = props

  return (
    <>
      <Description />
      <Menu />
      <Articles />
    </>
  )
}

export default Home
