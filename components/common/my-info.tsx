import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ModeToggle } from "./mode-toggle"
import Link from "next/link"

export function MyInfo() {
  return (
    <section data-title="avatar" className="flex-1">
      <div className="flex justify-between">
        <div className="flex gap-2">
          <Link href="/">
            <Avatar className="w-20 h-20">
              <AvatarImage src="/images/avatar.jpeg" alt="@rock288" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </Link>
          <div className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl dark:text-white text-slate-900">
            <h1>Hello!</h1>
            <h1>I&apos;m Rock288</h1>
          </div>
        </div>
        <ModeToggle />
      </div>
    </section>
  )
}
