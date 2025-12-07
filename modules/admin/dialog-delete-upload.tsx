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
import { UploadType } from "@/types/upload"

interface Props {
  upload: UploadType
  onDelete: (id: string) => void
}

function DialogDeleteUpload({ upload, onDelete }: Props) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive">Delete</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you delete sure?</DialogTitle>
          <DialogDescription>{upload?.path}</DialogDescription>
        </DialogHeader>

        <DialogClose asChild>
          <div>
            <Button
              type="button"
              variant="destructive"
              className="mr-2"
              onClick={() => onDelete(upload._id)}
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

export default DialogDeleteUpload

