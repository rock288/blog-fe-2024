import { ModeToggle } from "./mode-toggle"
import { MyInfo } from "./my-info"

export function Header() {
  return (
    <header className="flex justify-between py-2">
      {/* <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Home
      </h1> */}
      <MyInfo />
      <ModeToggle />
    </header>
  )
}
