import React from "react"
import { Articles } from "./articles"
import { Menu } from "@/components/common/menu"
import { Description } from "@/components/common/description"

function Home() {
  return (
    <>
      <Description />
      <Menu />
      <Articles />
    </>
  )
}

export default Home
