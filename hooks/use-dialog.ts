import { useState } from "react"

function UseDialog() {
  const [open, setOpen] = useState(false)

  const showDialog = () => {
    setOpen(true)
  }

  const closeDialog = () => {
    setOpen(false)
  }

  return {
    open,
    setOpen,
    showDialog,
    closeDialog,
  }
}

export default UseDialog
