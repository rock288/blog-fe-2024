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

interface Props {
  post: Article
  onDelete: (id: string) => void
}

function DialogDeletePost({ post, onDelete }: Props) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive">Delete</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you delete sure?</DialogTitle>
          <DialogDescription>{post?.title}</DialogDescription>
        </DialogHeader>

        <DialogClose asChild>
          <div>
            <Button
              type="button"
              variant="destructive"
              className="mr-2"
              onClick={() => onDelete(post._id)}
            >
              Confirm
            </Button>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </div>
        </DialogClose>
      </DialogContent>
    </Dialog>
  )
}

export default DialogDeletePost
