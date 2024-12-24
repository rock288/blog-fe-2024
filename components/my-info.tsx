import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function MyInfo() {
  return (
    <section data-title="avatar" className="flex justify-between p-2">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </section>
  )
}
