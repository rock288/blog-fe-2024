import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Description } from "./description"
import { ModeToggle } from "./mode-toggle"

export function MyInfo() {
  return (
    <section data-title="avatar">
      <div className="flex justify-between">
        <div className="flex gap-2">
          <Avatar className="w-20 h-20">
            <AvatarImage src="/images/avatar.jpeg" alt="@rock288" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl">
            <h1>Hello!</h1>
            <h1>I&apos;m Rock288</h1>
          </div>
        </div>
        <ModeToggle />
      </div>
      <Description />
    </section>
  )
}
