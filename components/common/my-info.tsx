import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import TypingEffect from "./typing-effect"
// import { ModeToggle } from "./mode-toggle"

type Props = {
  site?: string
}

export function MyInfo({ site }: Props) {
  return (
    <section data-title="avatar" className="flex-1">
      <div className="flex justify-between">
        <div className="flex gap-2">
          <Link href="/">
            {/* <h1 className="text-2xl">I&apos;m Rock288</h1> */}
            <div className="flex text-2xl font-extrabold">
              <span>rock288.com/</span>
              {site ? <TypingEffect text={site} speed={100} /> : null}
            </div>
          </Link>
        </div>
        {/* <ModeToggle /> */}
      </div>
      <Separator decorative className="my-4 h-[4px]" />
    </section>
  )
}
