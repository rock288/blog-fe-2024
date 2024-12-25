import { FaRegCopy } from "react-icons/fa"
import { Button } from "@/components/ui/button"
import { BaseProps } from "@/types/common"
import { PiCheck, PiClipboard } from "react-icons/pi"
import copy from "copy-to-clipboard"
import { useCallback, useState } from "react"

type Props = BaseProps & {
  text: string
}

export function ButtonCopy(props: Props) {
  const [showsCheck, setShowsCheck] = useState(false)

  const copyMessage = useCallback((message: string) => {
    copy(message)
    setShowsCheck(true)

    setTimeout(() => {
      setShowsCheck(false)
    }, 3000)
  }, [])

  return (
    <Button
      onClick={() => {
        copyMessage(props.text)
      }}
    >
      {showsCheck ? <PiCheck /> : <PiClipboard />}
    </Button>
  )
}
