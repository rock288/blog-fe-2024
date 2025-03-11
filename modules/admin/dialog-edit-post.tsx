import React from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { DialogClose, DialogTrigger } from "@radix-ui/react-dialog"
import { Button } from "@/components/ui/button"
import { Article } from "@/types/articles"
import { EditPost } from "./edit-post"

interface Props {
  post: Article
}

function DialogEditPost({ post }: Props) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            <EditPost post={post} />
          </DialogDescription>
        </DialogHeader>

        <DialogClose asChild>
          <Button type="button" variant="secondary">
            Close
          </Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  )
}

export default DialogEditPost
