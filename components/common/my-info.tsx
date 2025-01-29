import Link from "next/link"
import TypingEffect from "./typing-effect"
import { ModeToggle } from "./mode-toggle"

export function MyInfo() {
  return (
    <section data-title="avatar" className="flex-1">
      <div className="flex justify-between">
        <div className="flex gap-2">
          <Link href="/">
            {/* <h1 className="text-2xl">I&apos;m Rock288</h1> */}
            <TypingEffect text="I'm Rock288!" speed={100} />
          </Link>
        </div>
        <ModeToggle />
      </div>
    </section>
  )
}
